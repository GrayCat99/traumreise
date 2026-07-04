import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
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

export function ResultsStep({
  ranking,
  weights,
  onBack,
  onSave,
  savedConfirmation,
  onOpenSavedVotes,
}: ResultsStepProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { s, lang } = useI18n()

  function verdictFor(rank: number, ranked: RankedTrip): string {
    if (rank === 0) return s.resultsStep.verdictBest(ranked.trip.i18n[lang].name)
    if (ranked.badges.length > 0) return s.resultsStep.verdictBadge(s.badges[ranked.badges[0]])
    return s.resultsStep.verdictSolid
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 text-center mb-2">{s.resultsStep.headline}</h2>
      <p className="text-center text-mist-300 mb-8">{s.resultsStep.subheadline}</p>

      <ul className="space-y-4 mb-8">
        {ranking.map((ranked, index) => {
          const text = ranked.trip.i18n[lang]
          return (
            <li key={ranked.trip.id}>
              <button
                onClick={() => setOpenIndex(index)}
                className="w-full text-left bg-white/5 rounded-2xl border border-white/10 shadow-sm hover:shadow-md hover:border-sky-400/30 transition p-5 flex items-center gap-4"
              >
                <div className="text-2xl w-10 text-center shrink-0" aria-hidden>
                  {RANK_MEDAL[index] ?? `#${index + 1}`}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-mist-50">
                    <span className="mr-1.5" aria-hidden>
                      {ranked.trip.icon}
                    </span>
                    {text.name}
                  </h3>
                  <p className="text-sm text-mist-300 mb-2">{verdictFor(index, ranked)}</p>
                  {ranked.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {ranked.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30"
                        >
                          {s.badges[badge]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-sky-400">{ranked.weightedScore.toFixed(1)}</div>
                  <div className="text-xs text-mist-400">/ 10</div>
                  <div className="text-[11px] text-mist-400 mt-1 flex items-center gap-0.5 justify-end">
                    {s.resultsStep.clickHint}
                    <span aria-hidden>→</span>
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

      {savedConfirmation && (
        <p className="text-center text-sm font-medium text-sky-300 mb-4" role="status">
          {s.resultsStep.savedConfirmation}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="rounded-xl px-5 py-3 font-semibold text-mist-100 border border-white/15 bg-white/5 hover:bg-white/10 transition"
        >
          {s.stepShell.back}
        </button>
        <div className="flex gap-3">
          <button
            onClick={onOpenSavedVotes}
            className="rounded-xl px-5 py-3 font-semibold text-mist-100 border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            {s.resultsStep.savedVotesButton}
          </button>
          <button
            onClick={onSave}
            className="rounded-xl px-6 py-3 font-semibold text-navy-950 bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:bg-sky-300 transition"
          >
            {s.resultsStep.saveButton}
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
