import type { SavedVote } from '../types'

const STORAGE_KEY = 'traumreise.votes'

export function loadVotes(): SavedVote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as SavedVote[]
  } catch {
    return []
  }
}

export function saveVote(vote: SavedVote): SavedVote[] {
  const votes = loadVotes()
  const updated = [vote, ...votes]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function deleteVote(id: string): SavedVote[] {
  const updated = loadVotes().filter((v) => v.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function clearVotes(): SavedVote[] {
  localStorage.removeItem(STORAGE_KEY)
  return []
}
