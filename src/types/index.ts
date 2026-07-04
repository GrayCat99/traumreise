export type ArchetypeId =
  | 'kulturjaeger'
  | 'genussreisender'
  | 'erlebnisreisender'
  | 'abenteuer'
  | 'preisleistung'

export interface Archetype {
  id: ArchetypeId
  title: string
  description: string
  icon: string
}

export type TripId = 'egypt' | 'india' | 'indiaHyderabad' | 'vietnam' | 'vietnamTaipei' | 'usaSouth'

export type CriterionId =
  | 'weather'
  | 'stress'
  | 'scenery'
  | 'culture'
  | 'coolness'
  | 'food'
  | 'cost'

export interface Criterion {
  id: CriterionId
  label: string
  defaultWeight: number
  description: string
}

export type Scores = Record<CriterionId, number>

export interface Trip {
  id: TripId
  letter: string
  name: string
  route: string
  scores: Scores
  great: string[]
  awareOf: string[]
  bestFor: string[]
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
