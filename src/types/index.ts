export type ArchetypeId =
  | 'bucket-list-culture'
  | 'stylish-foodie'
  | 'relaxed-explorer'
  | 'adventure-coolness'
  | 'value-seeker'

export interface Archetype {
  id: ArchetypeId
  label: string
  prompt: string
  icon: string
  suggestedWeights: Weights
}

export type TripId =
  | 'egypt'
  | 'india'
  | 'indiaHyderabad'
  | 'vietnam'
  | 'vietnamTaipei'
  | 'usaSouth'
  | 'japanOkinawa'

export type CriterionId =
  | 'weather'
  | 'stress'
  | 'scenicBeauty'
  | 'culture'
  | 'coolness'
  | 'food'
  | 'cost'

export interface Criterion {
  id: CriterionId
  label: string
  defaultWeight: number
  description: string
  icon: string
}

export type Scores = Record<CriterionId, number>

export interface Trip {
  id: TripId
  letter: string
  icon: string
  name: string
  shortName: string
  route: string
  duration: string
  shortDescription: string
  scores: Scores
  includedHighlights: string[]
  weatherSummary: string
  whatIsGreat: string[]
  whatToBeAwareOf: string[]
  bestFor: string[]
  notIdealFor: string[]
  verdict: string
  tags: string[]
  estimatedCost: string
}

export type Weights = Record<CriterionId, number>

export interface RankedTrip {
  trip: Trip
  weightedScore: number
  contributions: Record<CriterionId, number>
  badges: string[]
}

export interface SavedVote {
  id: string
  timestamp: string
  participantName: string
  archetypes: ArchetypeId[]
  travelOptions: TripId[]
  weights: Weights
  ranking: { tripId: TripId; tripName: string; score: number }[]
}

export type Step = 'landing' | 'archetypes' | 'trips' | 'weights' | 'results'
