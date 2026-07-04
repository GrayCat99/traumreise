import { useState } from 'react'
import { ArchetypeStep } from './components/ArchetypeStep'
import { Landing } from './components/Landing'
import { ProgressBar } from './components/ProgressBar'
import { ResultsStep } from './components/ResultsStep'
import { SavedVotesDrawer } from './components/SavedVotesDrawer'
import { TripOptionStep } from './components/TripOptionStep'
import { WeightStep } from './components/WeightStep'
import { useTravelDecision } from './state/useTravelDecision'
import { clearVotes, deleteVote, loadVotes } from './utils/storage'
import type { SavedVote } from './types'

const STEP_ORDER = ['landing', 'archetypes', 'trips', 'weights', 'results'] as const
const STEP_LABELS: Record<(typeof STEP_ORDER)[number], string> = {
  landing: 'Start',
  archetypes: 'Reisetypen',
  trips: 'Reiseoptionen',
  weights: 'Gewichtung',
  results: 'Ergebnis',
}

function App() {
  const decision = useTravelDecision()
  const [showSavedVotes, setShowSavedVotes] = useState(false)
  const [savedVotes, setSavedVotes] = useState<SavedVote[]>(() => loadVotes())

  const stepIndex = STEP_ORDER.indexOf(decision.step)

  function openSavedVotes() {
    setSavedVotes(loadVotes())
    setShowSavedVotes(true)
  }

  function handleSave() {
    decision.persistVote()
    setSavedVotes(loadVotes())
  }

  function handleDeleteVote(id: string) {
    setSavedVotes(deleteVote(id))
  }

  function handleClearAll() {
    setSavedVotes(clearVotes())
  }

  return (
    <div className="min-h-screen">
      <main className="pt-8 pb-16">
        {decision.step !== 'landing' && (
          <ProgressBar currentStep={stepIndex} totalSteps={STEP_ORDER.length - 1} label={STEP_LABELS[decision.step]} />
        )}

        {decision.step === 'landing' && (
          <Landing
            participantName={decision.participantName}
            onNameChange={decision.setParticipantName}
            onStart={() => decision.goTo('archetypes')}
          />
        )}

        {decision.step === 'archetypes' && (
          <ArchetypeStep
            selected={decision.archetypes}
            onToggle={decision.toggleArchetype}
            onBack={() => decision.goTo('landing')}
            onNext={() => decision.goTo('trips')}
          />
        )}

        {decision.step === 'trips' && (
          <TripOptionStep
            selected={decision.travelOptions}
            onToggle={decision.toggleTravelOption}
            onBack={() => decision.goTo('archetypes')}
            onNext={() => decision.goTo('weights')}
          />
        )}

        {decision.step === 'weights' && (
          <WeightStep
            weights={decision.weights}
            onWeightsChange={decision.setWeights}
            selectedArchetypes={decision.archetypes}
            onBack={() => decision.goTo('trips')}
            onNext={() => decision.goTo('results')}
          />
        )}

        {decision.step === 'results' && (
          <ResultsStep
            ranking={decision.ranking}
            weights={decision.weights}
            onBack={() => decision.goTo('weights')}
            onSave={handleSave}
            savedConfirmation={decision.savedConfirmation}
            onOpenSavedVotes={openSavedVotes}
          />
        )}
      </main>

      {showSavedVotes && (
        <SavedVotesDrawer
          votes={savedVotes}
          onClose={() => setShowSavedVotes(false)}
          onDelete={handleDeleteVote}
          onClearAll={handleClearAll}
        />
      )}
    </div>
  )
}

export default App
