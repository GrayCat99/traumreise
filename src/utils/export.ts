import type { SavedVote } from '../types'

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function exportVotesAsJSON(votes: SavedVote[]) {
  downloadBlob(JSON.stringify(votes, null, 2), 'traumreise-votes.json', 'application/json')
}

export function exportVotesAsCSV(votes: SavedVote[]) {
  const headers = ['timestamp', 'participantName', 'archetypes', 'travelOptions', 'weights', 'ranking']
  const rows = votes.map((v) => [
    v.timestamp,
    v.participantName,
    v.archetypes.join('; '),
    v.travelOptions.join('; '),
    JSON.stringify(v.weights),
    v.ranking.map((r) => `${r.tripName} (${r.score.toFixed(2)})`).join('; '),
  ])

  const escapeCell = (cell: string) => `"${cell.replace(/"/g, '""')}"`
  const csv = [headers.map(escapeCell).join(','), ...rows.map((r) => r.map(String).map(escapeCell).join(','))].join(
    '\n',
  )
  downloadBlob(csv, 'traumreise-votes.csv', 'text/csv')
}
