import { ARCHETYPES } from '../data/trips'
import type { ArchetypeId } from '../types'
import { StepShell } from './StepShell'

interface ArchetypeStepProps {
  selected: ArchetypeId[]
  onToggle: (id: ArchetypeId) => void
  onBack: () => void
  onNext: () => void
}

export function ArchetypeStep({ selected, onToggle, onBack, onNext }: ArchetypeStepProps) {
  return (
    <StepShell
      headline="Mich interessiert besonders …"
      subheadline="Wähle einen oder mehrere Reisetypen aus, die zu dir passen."
      onBack={onBack}
      onNext={onNext}
      nextDisabled={selected.length === 0}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ARCHETYPES.map((archetype) => {
          const isSelected = selected.includes(archetype.id)
          return (
            <button
              key={archetype.id}
              onClick={() => onToggle(archetype.id)}
              aria-pressed={isSelected}
              className={`text-left rounded-2xl border-2 p-5 transition-all shadow-sm hover:shadow-md ${
                isSelected
                  ? 'border-sky-400 bg-sky-400/10'
                  : 'border-transparent bg-white/5 hover:border-sky-400/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {archetype.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-mist-50 mb-1">{archetype.label}</h3>
                  <p className="text-sm text-mist-300">{archetype.prompt}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </StepShell>
  )
}
