import { CRITERIA } from '../data/trips'
import type { Archetype, CriterionId, Weights } from '../types'

export function combineArchetypeWeights(selectedArchetypes: Archetype[]): Weights | null {
  if (selectedArchetypes.length === 0) return null

  const combined = CRITERIA.reduce((acc, c) => {
    acc[c.id] = 0
    return acc
  }, {} as Weights)

  selectedArchetypes.forEach((archetype) => {
    ;(Object.keys(combined) as CriterionId[]).forEach((criterion) => {
      combined[criterion] += archetype.suggestedWeights[criterion]
    })
  })
  ;(Object.keys(combined) as CriterionId[]).forEach((criterion) => {
    combined[criterion] = Math.round(combined[criterion] / selectedArchetypes.length / 5) * 5
  })

  const total = Object.values(combined).reduce((sum, value) => sum + value, 0)

  if (total !== 100) {
    const difference = 100 - total
    const largestCriterion = (Object.keys(combined) as CriterionId[]).reduce((a, b) =>
      combined[a] > combined[b] ? a : b,
    )
    combined[largestCriterion] += difference
  }

  return combined
}
