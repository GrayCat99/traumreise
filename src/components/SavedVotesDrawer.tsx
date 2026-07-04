import { ARCHETYPES } from '../data/trips'
import type { SavedVote } from '../types'
import { exportVotesAsCSV, exportVotesAsJSON } from '../utils/export'

interface SavedVotesDrawerProps {
  votes: SavedVote[]
  onClose: () => void
  onDelete: (id: string) => void
  onClearAll: () => void
}

function archetypeLabel(id: string): string {
  return ARCHETYPES.find((a) => a.id === id)?.title ?? id
}

export function SavedVotesDrawer({ votes, onClose, onDelete, onClearAll }: SavedVotesDrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink-900/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-sand-50 w-full sm:max-w-2xl h-full overflow-y-auto shadow-xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-ink-900">Gespeicherte Stimmen</h2>
            <button
              onClick={onClose}
              aria-label="Schließen"
              className="w-9 h-9 rounded-full bg-terracotta-100 text-terracotta-700 font-bold hover:bg-terracotta-200 transition"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => exportVotesAsJSON(votes)}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 transition disabled:opacity-40"
            >
              Als JSON exportieren
            </button>
            <button
              onClick={() => exportVotesAsCSV(votes)}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-teal-300 text-teal-700 bg-white hover:bg-teal-50 transition disabled:opacity-40"
            >
              Als CSV exportieren
            </button>
            <button
              onClick={onClearAll}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-terracotta-300 text-terracotta-700 bg-white hover:bg-terracotta-50 transition disabled:opacity-40 ml-auto"
            >
              Alle löschen
            </button>
          </div>

          {votes.length === 0 ? (
            <p className="text-ink-700/70 text-center py-12">Noch keine gespeicherten Stimmen.</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-terracotta-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-terracotta-50 text-left">
                    <th className="px-3 py-2 font-semibold text-ink-900">Name</th>
                    <th className="px-3 py-2 font-semibold text-ink-900">Zeitpunkt</th>
                    <th className="px-3 py-2 font-semibold text-ink-900">Reisetypen</th>
                    <th className="px-3 py-2 font-semibold text-ink-900">Top-Ergebnis</th>
                    <th className="px-3 py-2 font-semibold text-ink-900"></th>
                  </tr>
                </thead>
                <tbody>
                  {votes.map((vote) => (
                    <tr key={vote.id} className="border-t border-terracotta-100 align-top">
                      <td className="px-3 py-2 text-ink-900 font-medium">{vote.participantName}</td>
                      <td className="px-3 py-2 text-ink-700/70 whitespace-nowrap">
                        {new Date(vote.timestamp).toLocaleString('de-DE')}
                      </td>
                      <td className="px-3 py-2 text-ink-700">
                        {vote.archetypes.map(archetypeLabel).join(', ') || '—'}
                      </td>
                      <td className="px-3 py-2 text-ink-700">
                        {vote.ranking[0] ? `${vote.ranking[0].tripName} (${vote.ranking[0].score.toFixed(1)})` : '—'}
                      </td>
                      <td className="px-3 py-2">
                        <button
                          onClick={() => onDelete(vote.id)}
                          aria-label={`Stimme von ${vote.participantName} löschen`}
                          className="text-terracotta-600 hover:text-terracotta-800 font-medium"
                        >
                          Löschen
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
