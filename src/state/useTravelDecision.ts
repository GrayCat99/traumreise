import { useMemo, useState } from 'react'
import { TRIPS } from '../data/trips'
import { useI18n } from '../i18n/I18nContext'
import { defaultWeights, rankTrips } from '../utils/scoring'
import { saveVote } from '../utils/storage'
import type { ArchetypeId, RankedTrip, Step, TripId, Weights } from '../types'

export function useTravelDecision() {
  const { lang } = useI18n()
  const [step, setStep] = useState<Step>('landing')
  const [participantName, setParticipantName] = useState('')
  const [archetypes, setArchetypes] = useState<ArchetypeId[]>([])
  const [travelOptions, setTravelOptions] = useState<TripId[]>([])
  const [weights, setWeights] = useState<Weights>(defaultWeights())
  const [selectedResultId, setSelectedResultId] = useState<TripId | null>(null)
  const [savedConfirmation, setSavedConfirmation] = useState(false)

  const selectedTrips = useMemo(() => TRIPS.filter((t) => travelOptions.includes(t.id)), [travelOptions])

  const ranking: RankedTrip[] = useMemo(() => rankTrips(selectedTrips, weights), [selectedTrips, weights])

  function toggleArchetype(id: ArchetypeId) {
    setArchetypes((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  function toggleTravelOption(id: TripId) {
    setTravelOptions((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  function goTo(nextStep: Step) {
    setStep(nextStep)
    setSavedConfirmation(false)
  }

  function persistVote() {
    saveVote({
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      participantName,
      archetypes,
      travelOptions,
      weights,
      ranking: ranking.map((r) => ({ tripId: r.trip.id, tripName: r.trip.i18n[lang].name, score: r.weightedScore })),
    })
    setSavedConfirmation(true)
  }

  return {
    step,
    goTo,
    participantName,
    setParticipantName,
    archetypes,
    toggleArchetype,
    travelOptions,
    toggleTravelOption,
    weights,
    setWeights,
    selectedTrips,
    ranking,
    selectedResultId,
    setSelectedResultId,
    persistVote,
    savedConfirmation,
  }
}

export type TravelDecisionState = ReturnType<typeof useTravelDecision>
