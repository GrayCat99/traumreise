import { CRITERIA } from '../data/trips'
import type { RankedTrip, Weights } from '../types'

interface TripDetailModalProps {
  ranked: RankedTrip
  rank: number
  weights: Weights
  onClose: () => void
}

export function TripDetailModal({ ranked, rank, weights, onClose }: TripDetailModalProps) {
  const { trip, weightedScore, contributions, badges } = ranked

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-ink-900/50 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-sand-50 rounded-2xl shadow-xl max-w-2xl w-full my-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-sm font-semibold text-terracotta-600">Platz {rank}</span>
              <h2 className="text-2xl font-bold text-ink-900">{trip.name}</h2>
              <p className="text-ink-700/70">{trip.route}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl font-bold text-teal-600">{weightedScore.toFixed(1)}</div>
              <div className="text-xs text-ink-700/60">von 10</div>
            </div>
          </div>

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-terracotta-100 text-terracotta-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-ink-900 mb-2">✅ Das ist großartig</h3>
              <ul className="space-y-1.5 text-sm text-ink-700">
                {trip.great.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink-900 mb-2">⚠️ Darauf solltet ihr achten</h3>
              <ul className="space-y-1.5 text-sm text-ink-700">
                {trip.awareOf.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-ink-900 mb-2">👥 Am besten geeignet für</h3>
            <div className="flex flex-wrap gap-2">
              {trip.bestFor.map((type) => (
                <span key={type} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-100 text-teal-700">
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-ink-900 mb-3">📊 Punkte-Aufschlüsselung</h3>
            <div className="overflow-x-auto rounded-xl border border-terracotta-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-terracotta-50 text-left">
                    <th className="px-3 py-2 font-semibold text-ink-900">Kriterium</th>
                    <th className="px-3 py-2 font-semibold text-ink-900 text-right">Score /10</th>
                    <th className="px-3 py-2 font-semibold text-ink-900 text-right">Gewichtung</th>
                    <th className="px-3 py-2 font-semibold text-ink-900 text-right">Beitrag</th>
                  </tr>
                </thead>
                <tbody>
                  {CRITERIA.map((c) => (
                    <tr key={c.id} className="border-t border-terracotta-100">
                      <td className="px-3 py-2 text-ink-700">{c.label}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{trip.scores[c.id].toFixed(1)}</td>
                      <td className="px-3 py-2 text-right tabular-nums">{weights[c.id]}%</td>
                      <td className="px-3 py-2 text-right tabular-nums font-medium">
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
            className="mt-6 w-full rounded-xl px-6 py-3 font-semibold text-white bg-terracotta-500 hover:bg-terracotta-600 transition"
          >
            Zurück
          </button>
        </div>
      </div>
    </div>
  )
}
