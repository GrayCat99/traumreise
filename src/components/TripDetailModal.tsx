import { ARCHETYPES, CRITERIA } from '../data/trips'
import { useI18n } from '../i18n/I18nContext'
import type { RankedTrip, Weights } from '../types'

interface TripDetailModalProps {
  ranked: RankedTrip
  rank: number
  weights: Weights
  onClose: () => void
}

export function TripDetailModal({ ranked, rank, weights, onClose }: TripDetailModalProps) {
  const { trip, weightedScore, contributions, badges } = ranked
  const { s, lang } = useI18n()
  const text = trip.i18n[lang]
  const bestForLabels = trip.bestFor.map((id) => ARCHETYPES.find((a) => a.id === id)?.i18n[lang].label ?? id)

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-navy-950/70 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-navy-800 border border-white/10 rounded-2xl shadow-xl max-w-2xl w-full my-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-1">
            <div>
              <span className="text-sm font-semibold text-sky-400">
                {s.tripDetail.rankLabel} {rank}
              </span>
              <h2 className="text-2xl font-bold text-mist-50">
                <span className="mr-1.5" aria-hidden>
                  {trip.icon}
                </span>
                {text.name}
              </h2>
              <p className="text-mist-300">{text.route}</p>
              <p className="text-xs text-mist-400 mt-1">
                {text.duration} · {text.estimatedCost}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl font-bold text-sky-400">{weightedScore.toFixed(1)}</div>
              <div className="text-xs text-mist-400">{s.tripDetail.outOf10}</div>
            </div>
          </div>

          <p className="text-sm text-mist-200 mt-3 mb-4">{text.shortDescription}</p>

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30"
                >
                  {s.badges[badge]}
                </span>
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-semibold text-mist-50 mb-2">🗺️ {s.tripDetail.includedHighlights}</h3>
            <ul className="space-y-1.5 text-sm text-mist-200">
              {text.includedHighlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-mist-50 mb-2">🌤️ {s.tripDetail.weatherHeading}</h3>
            <p className="text-sm text-mist-200">{text.weatherSummary}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-mist-50 mb-2">✅ {s.tripDetail.greatHeading}</h3>
              <ul className="space-y-1.5 text-sm text-mist-200">
                {text.whatIsGreat.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-mist-50 mb-2">⚠️ {s.tripDetail.awareHeading}</h3>
              <ul className="space-y-1.5 text-sm text-mist-200">
                {text.whatToBeAwareOf.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-mist-50 mb-2">👥 {s.tripDetail.bestForHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {bestForLabels.map((label) => (
                  <span
                    key={label}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-400/15 text-sky-300 border border-sky-400/30"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-mist-50 mb-2">🙅 {s.tripDetail.notIdealHeading}</h3>
              <div className="flex flex-wrap gap-2">
                {text.notIdealFor.map((type) => (
                  <span key={type} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-mist-300 border border-white/10">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 px-4 py-4">
            <h3 className="font-semibold text-mist-50 mb-1">📝 {s.tripDetail.verdictHeading}</h3>
            <p className="text-sm text-mist-200">{text.verdict}</p>
          </div>

          <div>
            <h3 className="font-semibold text-mist-50 mb-3">📊 {s.tripDetail.breakdownHeading}</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 font-semibold text-mist-50">{s.tripDetail.tableCriterion}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50 text-right">{s.tripDetail.tableScore}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50 text-right">{s.tripDetail.tableWeight}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50 text-right">{s.tripDetail.tableContribution}</th>
                  </tr>
                </thead>
                <tbody>
                  {CRITERIA.map((c) => (
                    <tr key={c.id} className="border-t border-white/10">
                      <td className="px-3 py-2 text-mist-200">
                        <span className="mr-1" aria-hidden>
                          {c.icon}
                        </span>
                        {c.i18n[lang].label}
                      </td>
                      <td className="px-3 py-2 text-right tabular-nums text-mist-200">{trip.scores[c.id].toFixed(1)}</td>
                      <td className="px-3 py-2 text-right tabular-nums text-mist-200">{weights[c.id]}%</td>
                      <td className="px-3 py-2 text-right tabular-nums font-medium text-mist-50">
                        {contributions[c.id].toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl px-6 py-3 font-semibold text-navy-950 bg-sky-400 hover:bg-sky-300 transition"
          >
            {s.stepShell.back}
          </button>
        </div>
      </div>
    </div>
  )
}
