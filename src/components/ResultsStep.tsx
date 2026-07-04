import { useState } from 'react'
import type { RankedTrip, Weights } from '../types'
import { TripDetailModal } from './TripDetailModal'

interface ResultsStepProps {
  ranking: RankedTrip[]
  weights: Weights
  onBack: () => void
  onSave: () => void
  savedConfirmation: boolean
  onOpenSavedVotes: () => void
}

const RANK_MEDAL = ['🥇', '🥈', '🥉']

function verdictFor(rank: number, trip: RankedTrip): string {
  if (rank === 0) return `${trip.trip.name} passt am besten zu euren Kriterien und Präferenzen.`
  if (trip.badges.length > 0) return `Starke Wahl, besonders ${trip.badges[0].toLowerCase()}.`
  return 'Eine solide Option, aber andere passen besser zu euren Prioritäten.'
}

export function ResultsStep({
  ranking,
  weights,
  onBack,
  onSave,
  savedConfirmation,
  onOpenSavedVotes,
}: ResultsStepProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-center mb-2">Eure Rangliste</h2>
      <p className="text-center text-ink-700/70 mb-8">
        Basierend auf euren ausgewählten Reisen und eurer Gewichtung.
      </p>

      <ul className="space-y-4 mb-8">
        {ranking.map((ranked, index) => (
          <li key={ranked.trip.id}>
            <button
              onClick={() => setOpenIndex(index)}
              className="w-full text-left bg-white/80 rounded-2xl border border-terracotta-100 shadow-sm hover:shadow-md transition p-5 flex items-center gap-4"
            >
              <div className="text-2xl w-10 text-center shrink-0" aria-hidden>
                {RANK_MEDAL[index] ?? `#${index + 1}`}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-ink-900">{ranked.trip.name}</h3>
                <p className="text-sm text-ink-700/70 mb-2">{verdictFor(index, ranked)}</p>
                {ranked.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {ranked.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-semibold px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold text-teal-600">{ranked.weightedScore.toFixed(1)}</div>
                <div className="text-xs text-ink-700/60">/ 10</div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {savedConfirmation && (
        <p className="text-center text-sm font-medium text-teal-600 mb-4" role="status">
          Gespeichert! Du findest deine Stimme unter "Gespeicherte Stimmen".
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="rounded-xl px-5 py-3 font-semibold text-ink-700 border border-terracotta-200 bg-white/70 hover:bg-white transition"
        >
          Zurück
        </button>
        <div className="flex gap-3">
          <button
            onClick={onOpenSavedVotes}
            className="rounded-xl px-5 py-3 font-semibold text-ink-700 border border-teal-200 bg-white/70 hover:bg-teal-50 transition"
          >
            Gespeicherte Stimmen
          </button>
          <button
            onClick={onSave}
            className="rounded-xl px-6 py-3 font-semibold text-white bg-terracotta-500 shadow-sm hover:bg-terracotta-600 transition"
          >
            Meine Stimme speichern
          </button>
        </div>
      </div>

      {openIndex !== null && ranking[openIndex] && (
        <TripDetailModal
          ranked={ranking[openIndex]}
          rank={openIndex + 1}
          weights={weights}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  )
}
