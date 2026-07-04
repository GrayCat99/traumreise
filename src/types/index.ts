export type Lang = 'de' | 'en' | 'es'

export type Translatable<T> = Record<Lang, T>

export type ArchetypeId =
  | 'bucket-list-culture'
  | 'stylish-foodie'
  | 'relaxed-explorer'
  | 'adventure-coolness'
  | 'value-seeker'

export interface ArchetypeText {
  label: string
  prompt: string
}

export interface Archetype {
  id: ArchetypeId
  icon: string
  suggestedWeights: Weights
  i18n: Translatable<ArchetypeText>
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

export interface CriterionText {
  label: string
  description: string
}

export interface Criterion {
  id: CriterionId
  defaultWeight: number
  icon: string
  i18n: Translatable<CriterionText>
}

export type Scores = Record<CriterionId, number>

export interface TripText {
  name: string
  shortName: string
  route: string
  duration: string
  shortDescription: string
  includedHighlights: string[]
  weatherSummary: string
  whatIsGreat: string[]
  whatToBeAwareOf: string[]
  notIdealFor: string[]
  verdict: string
  tags: string[]
  estimatedCost: string
}

export type BadgeKey = 'bestCulture' | 'bestFood' | 'lowestStress' | 'bestScenery' | 'bestValue' | 'mostCool'

export interface TripVideo {
  title: string
  url: string
}

export interface Trip {
  id: TripId
  letter: string
  icon: string
  scores: Scores
  bestFor: ArchetypeId[]
  videos: TripVideo[]
  i18n: Translatable<TripText>
}

export type Weights = Record<CriterionId, number>

export interface RankedTrip {
  trip: Trip
  weightedScore: number
  contributions: Record<CriterionId, number>
  badges: BadgeKey[]
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
