import { CRITERIA } from '../data/trips'
import type { Weights } from '../types'
import { defaultWeights, normalizeWeights, totalWeight } from '../utils/scoring'
import { StepShell } from './StepShell'

interface WeightStepProps {
  weights: Weights
  onWeightsChange: (weights: Weights) => void
  onBack: () => void
  onNext: () => void
}

export function WeightStep({ weights, onWeightsChange, onBack, onNext }: WeightStepProps) {
  const total = totalWeight(weights)
  const isValid = total === 100

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
      <div className="bg-white/70 rounded-2xl border border-terracotta-100 shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-terracotta-100">
          <span className="font-semibold text-ink-900">Gesamt</span>
          <span
            className={`text-xl font-bold ${isValid ? 'text-teal-600' : 'text-terracotta-600'}`}
            aria-live="polite"
          >
            {total}%
          </span>
        </div>

        <ul className="space-y-4">
          {CRITERIA.map((criterion) => (
            <li key={criterion.id} className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-ink-900 truncate">{criterion.label}</p>
                <p className="text-xs text-ink-700/60 truncate">{criterion.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => adjust(criterion.id, -1)}
                  aria-label={`${criterion.label} verringern`}
                  className="w-8 h-8 rounded-full bg-terracotta-100 text-terracotta-700 font-bold hover:bg-terracotta-200 transition"
                >
                  −
                </button>
                <span className="w-12 text-center font-semibold tabular-nums">{weights[criterion.id]}%</span>
                <button
                  onClick={() => adjust(criterion.id, 1)}
                  aria-label={`${criterion.label} erhöhen`}
                  className="w-8 h-8 rounded-full bg-terracotta-100 text-terracotta-700 font-bold hover:bg-terracotta-200 transition"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-terracotta-100">
          <button
            onClick={() => onWeightsChange(defaultWeights())}
            className="rounded-xl px-4 py-2 text-sm font-medium border border-terracotta-200 text-ink-700 bg-white hover:bg-terracotta-50 transition"
          >
            Standard zurücksetzen
          </button>
          <button
            onClick={() => onWeightsChange(normalizeWeights(weights))}
            disabled={total === 0}
            className="rounded-xl px-4 py-2 text-sm font-medium border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 transition disabled:opacity-40"
          >
            Auf 100% normalisieren
          </button>
        </div>
      </div>
    </StepShell>
  )
}
