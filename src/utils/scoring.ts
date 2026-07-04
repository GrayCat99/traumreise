import { CRITERIA } from '../data/trips'
import type { BadgeKey, CriterionId, RankedTrip, Trip, Weights } from '../types'

export function defaultWeights(): Weights {
  return CRITERIA.reduce((acc, c) => {
    acc[c.id] = c.defaultWeight
    return acc
  }, {} as Weights)
}

export function totalWeight(weights: Weights): number {
  return Object.values(weights).reduce((sum, w) => sum + w, 0)
}

export function normalizeWeights(weights: Weights): Weights {
  const total = totalWeight(weights)
  if (total === 0) return defaultWeights()
  const ids = Object.keys(weights) as CriterionId[]
  const normalized = {} as Weights
  let running = 0
  ids.forEach((id, i) => {
    if (i === ids.length - 1) {
      normalized[id] = 100 - running
    } else {
      const value = Math.round((weights[id] / total) * 100)
      normalized[id] = value
      running += value
    }
  })
  return normalized
}

export function rankTrips(trips: Trip[], weights: Weights): RankedTrip[] {
  const ranked = trips.map((trip) => {
    const contributions = {} as Record<CriterionId, number>
    let weightedScore = 0
    CRITERIA.forEach((c) => {
      const contribution = (trip.scores[c.id] * weights[c.id]) / 100
      contributions[c.id] = contribution
      weightedScore += contribution
    })
    return { trip, weightedScore, contributions, badges: [] as BadgeKey[] }
  })

  ranked.sort((a, b) => b.weightedScore - a.weightedScore)

  if (ranked.length > 0) {
    const bestCulture = [...ranked].sort((a, b) => b.trip.scores.culture - a.trip.scores.culture)[0]
    const bestFood = [...ranked].sort((a, b) => b.trip.scores.food - a.trip.scores.food)[0]
    const lowestStress = [...ranked].sort((a, b) => b.trip.scores.stress - a.trip.scores.stress)[0]
    const bestScenery = [...ranked].sort((a, b) => b.trip.scores.scenicBeauty - a.trip.scores.scenicBeauty)[0]
    const bestCost = [...ranked].sort((a, b) => b.trip.scores.cost - a.trip.scores.cost)[0]
    const bestCoolness = [...ranked].sort((a, b) => b.trip.scores.coolness - a.trip.scores.coolness)[0]

    bestCulture.badges.push('bestCulture')
    bestFood.badges.push('bestFood')
    lowestStress.badges.push('lowestStress')
    bestScenery.badges.push('bestScenery')
    bestCost.badges.push('bestValue')
    bestCoolness.badges.push('mostCool')
  }

  return ranked
}
