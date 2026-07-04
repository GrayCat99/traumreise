import { ARCHETYPES, CRITERIA } from '../data/trips'
import type { ArchetypeId, Weights } from '../types'
import { combineArchetypeWeights } from '../utils/archetypeWeights'
import { defaultWeights, normalizeWeights, totalWeight } from '../utils/scoring'
import { StepShell } from './StepShell'

interface WeightStepProps {
  weights: Weights
  onWeightsChange: (weights: Weights) => void
  selectedArchetypes: ArchetypeId[]
  onBack: () => void
  onNext: () => void
}

export function WeightStep({ weights, onWeightsChange, selectedArchetypes, onBack, onNext }: WeightStepProps) {
  const total = totalWeight(weights)
  const isValid = total === 100

  const selectedArchetypeObjects = ARCHETYPES.filter((a) => selectedArchetypes.includes(a.id))
  const suggestedWeights = combineArchetypeWeights(selectedArchetypeObjects)

  function adjust(id: keyof Weights, delta: number) {
    const next = { ...weights, [id]: Math.max(0, weights[id] + delta) }
    onWeightsChange(next)
  }

  return (
    <StepShell
      headline="Wie wichtig sind dir die Kriterien?"
      subheadline="Verteile 100%. Nutze Plus/Minus, um die Gewichtung in 1%-Schritten anzupassen."
      onBack={onBack}
      onNext={onNext}
      nextDisabled={!isValid}
      warning={!isValid ? 'Die Gewichtung muss genau 100% ergeben.' : null}
    >
      {suggestedWeights && (
        <div className="mb-6 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-sm text-mist-100 mb-3">
            <span className="mr-1" aria-hidden>
              💡
            </span>
            Basierend auf deinen Archetypen könnten diese Kriterien besonders wichtig sein:{' '}
            <span className="font-medium text-mist-50">
              {CRITERIA.filter((c) => suggestedWeights[c.id] >= 20)
                .map((c) => c.label)
                .join(', ') || 'eine ausgewogene Mischung'}
            </span>
            .
          </p>
          <button
            onClick={() => onWeightsChange(suggestedWeights)}
            className="rounded-xl px-4 py-2 text-sm font-semibold text-navy-950 bg-sky-400 hover:bg-sky-300 transition"
          >
            Vorgeschlagene Gewichtung übernehmen
          </button>
        </div>
      )}

      <div className="bg-white/5 rounded-2xl border border-white/10 shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <span className="font-semibold text-mist-50">Gesamt</span>
          <span className={`text-xl font-bold ${isValid ? 'text-sky-400' : 'text-amber-300'}`} aria-live="polite">
            {total}%
          </span>
        </div>

        <ul className="space-y-4">
          {CRITERIA.map((criterion) => (
            <li key={criterion.id} className="flex items-center gap-3">
              <span className="text-xl shrink-0" aria-hidden>
                {criterion.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-mist-50 truncate">{criterion.label}</p>
                <p className="text-xs text-mist-400 truncate">{criterion.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => adjust(criterion.id, -1)}
                  aria-label={`${criterion.label} verringern`}
                  className="w-8 h-8 rounded-full bg-white/10 text-mist-100 font-bold hover:bg-white/20 transition"
                >
                  −
                </button>
                <span className="w-12 text-center font-semibold tabular-nums text-mist-50">
                  {weights[criterion.id]}%
                </span>
                <button
                  onClick={() => adjust(criterion.id, 1)}
                  aria-label={`${criterion.label} erhöhen`}
                  className="w-8 h-8 rounded-full bg-white/10 text-mist-100 font-bold hover:bg-white/20 transition"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-white/10">
          <button
            onClick={() => onWeightsChange(defaultWeights())}
            className="rounded-xl px-4 py-2 text-sm font-medium border border-white/15 text-mist-100 bg-white/5 hover:bg-white/10 transition"
          >
            Standard zurücksetzen
          </button>
          <button
            onClick={() => onWeightsChange(normalizeWeights(weights))}
            disabled={total === 0}
            className="rounded-xl px-4 py-2 text-sm font-medium border border-sky-400/40 text-sky-300 bg-white/5 hover:bg-sky-400/10 transition disabled:opacity-40"
          >
            Auf 100% normalisieren
          </button>
        </div>
      </div>
    </StepShell>
  )
}
