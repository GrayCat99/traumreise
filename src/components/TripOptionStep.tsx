import { TRIPS } from '../data/trips'
import type { TripId } from '../types'
import { StepShell } from './StepShell'

interface TripOptionStepProps {
  selected: TripId[]
  onToggle: (id: TripId) => void
  onBack: () => void
  onNext: () => void
}

export function TripOptionStep({ selected, onToggle, onBack, onNext }: TripOptionStepProps) {
  return (
    <StepShell
      headline="Welche Reisen kommen für dich überhaupt in Frage?"
      subheadline="Wähle alle Optionen aus, die du dir grundsätzlich vorstellen kannst."
      onBack={onBack}
      onNext={onNext}
      nextDisabled={selected.length === 0}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TRIPS.map((trip) => {
          const isSelected = selected.includes(trip.id)
          return (
            <button
              key={trip.id}
              onClick={() => onToggle(trip.id)}
              aria-pressed={isSelected}
              className={`text-left rounded-2xl border-2 p-5 transition-all shadow-sm hover:shadow-md ${
                isSelected
                  ? 'border-teal-500 bg-teal-50/60'
                  : 'border-transparent bg-white/70 hover:border-teal-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shrink-0 ${
                    isSelected ? 'bg-teal-500 text-white' : 'bg-terracotta-100 text-terracotta-600'
                  }`}
                >
                  {trip.letter}
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900 mb-1">{trip.name}</h3>
                  <p className="text-sm text-ink-700/70">{trip.route}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </StepShell>
  )
}
