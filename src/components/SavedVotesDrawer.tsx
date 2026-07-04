import { ARCHETYPES } from '../data/trips'
import { useI18n } from '../i18n/I18nContext'
import type { ArchetypeId, Lang, SavedVote } from '../types'
import { exportVotesAsCSV, exportVotesAsJSON } from '../utils/export'

interface SavedVotesDrawerProps {
  votes: SavedVote[]
  onClose: () => void
  onDelete: (id: string) => void
  onClearAll: () => void
}

function archetypeLabel(id: ArchetypeId, lang: Lang): string {
  return ARCHETYPES.find((a) => a.id === id)?.i18n[lang].label ?? id
}

export function SavedVotesDrawer({ votes, onClose, onDelete, onClearAll }: SavedVotesDrawerProps) {
  const { s, lang } = useI18n()

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy-950/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="bg-navy-800 border-l border-white/10 w-full sm:max-w-2xl h-full overflow-y-auto shadow-xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-mist-50">{s.savedVotes.heading}</h2>
            <button
              onClick={onClose}
              aria-label={s.savedVotes.closeAria}
              className="w-9 h-9 rounded-full bg-white/10 text-mist-100 font-bold hover:bg-white/20 transition"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => exportVotesAsJSON(votes)}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-sky-400/40 text-sky-300 bg-white/5 hover:bg-sky-400/10 transition disabled:opacity-40"
            >
              {s.savedVotes.exportJson}
            </button>
            <button
              onClick={() => exportVotesAsCSV(votes)}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-sky-400/40 text-sky-300 bg-white/5 hover:bg-sky-400/10 transition disabled:opacity-40"
            >
              {s.savedVotes.exportCsv}
            </button>
            <button
              onClick={onClearAll}
              disabled={votes.length === 0}
              className="rounded-xl px-4 py-2 text-sm font-medium border border-amber-400/40 text-amber-300 bg-white/5 hover:bg-amber-400/10 transition disabled:opacity-40 ml-auto"
            >
              {s.savedVotes.clearAll}
            </button>
          </div>

          {votes.length === 0 ? (
            <p className="text-mist-300 text-center py-12">{s.savedVotes.emptyState}</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th className="px-3 py-2 font-semibold text-mist-50">{s.savedVotes.colName}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50">{s.savedVotes.colTimestamp}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50">{s.savedVotes.colArchetypes}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50">{s.savedVotes.colTopResult}</th>
                    <th className="px-3 py-2 font-semibold text-mist-50"></th>
                  </tr>
                </thead>
                <tbody>
                  {votes.map((vote) => (
                    <tr key={vote.id} className="border-t border-white/10 align-top">
                      <td className="px-3 py-2 text-mist-50 font-medium">{vote.participantName}</td>
                      <td className="px-3 py-2 text-mist-300 whitespace-nowrap">
                        {new Date(vote.timestamp).toLocaleString(lang)}
                      </td>
                      <td className="px-3 py-2 text-mist-200">
                        {vote.archetypes.map((id) => archetypeLabel(id, lang)).join(', ') || '—'}
                      </td>
                      <td className="px-3 py-2 text-mist-200">
                        {vote.ranking[0] ? `${vote.ranking[0].tripName} (${vote.ranking[0].score.toFixed(1)})` : '—'}
                      </td>
                      <td className="px-3 py-2">
                        <button
                          onClick={() => onDelete(vote.id)}
                          aria-label={s.savedVotes.deleteAria(vote.participantName)}
                          className="text-amber-300 hover:text-amber-200 font-medium"
                        >
                          {s.savedVotes.deleteAction}
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
