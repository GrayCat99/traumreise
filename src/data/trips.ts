import type { Archetype, Criterion, Trip } from '../types'

export const ARCHETYPES: Archetype[] = [
  {
    id: 'kulturjaeger',
    title: 'Bucket-List-Kulturjäger',
    description: 'Ikonische Sehenswürdigkeiten, Weltgeschichte, große Monumente',
    icon: '🏛️',
  },
  {
    id: 'genussreisender',
    title: 'Stilvoller Genussreisender',
    description: 'Essen, Hotels, Atmosphäre, Schönheit, eleganter Reisefluss',
    icon: '🥂',
  },
  {
    id: 'erlebnisreisender',
    title: 'Entspannter Erlebnisreisender',
    description: 'Erlebnis, Urlaubsgefühl, nicht zu hektisch',
    icon: '🌴',
  },
  {
    id: 'abenteuer',
    title: 'Abenteuer & Coolness',
    description: 'Ausgefallene Routen, urbaner Vibe, Musik, Nightlife, persönliche Geschichten',
    icon: '🎸',
  },
  {
    id: 'preisleistung',
    title: 'Preis-Leistungs-Sucher',
    description: 'Bestes Gesamtpaket, nicht billig, aber jeden Euro wert',
    icon: '💰',
  },
]

export const CRITERIA: Criterion[] = [
  { id: 'weather', label: 'Wetter / Klima', defaultWeight: 20, description: 'Eignung der Reisezeit für das Klima vor Ort' },
  { id: 'stress', label: 'Stress / Hektik-Faktor', defaultWeight: 15, description: 'Wie entspannt oder anstrengend die Reise ist (hoher Score = wenig Stress)' },
  { id: 'scenery', label: 'Landschaftliche Schönheit', defaultWeight: 15, description: 'Optische Schönheit der Landschaften und Orte' },
  { id: 'culture', label: 'Kulturelle Highlights', defaultWeight: 20, description: 'Bedeutung und Dichte kultureller Sehenswürdigkeiten' },
  { id: 'coolness', label: 'Coolness-Faktor', defaultWeight: 10, description: 'Ausgefallenheit, urbaner Vibe, besondere Geschichten' },
  { id: 'food', label: 'Essen', defaultWeight: 10, description: 'Qualität und Vielfalt der lokalen Küche' },
  { id: 'cost', label: 'Kosten / Preis-Leistung', defaultWeight: 10, description: 'Verhältnis von Kosten zu Erlebnis' },
]

export const TRIPS: Trip[] = [
  {
    id: 'egypt',
    letter: 'A',
    name: 'Ägypten',
    route: 'Kairo + Nil + Abu Simbel + Rotes Meer',
    scores: { weather: 4.5, stress: 6.0, scenery: 7.0, culture: 10.0, coolness: 8.5, food: 6.5, cost: 8.0 },
    great: [
      'Weltklasse-Monumente: Pyramiden von Gizeh, Abu Simbel, Tal der Könige',
      'Entspannte Nilkreuzfahrt zwischen den Etappen',
      'Rotes Meer zum Abschluss zum Auftanken',
    ],
    awareOf: [
      'Im September noch sehr heiß, v.a. in Oberägypten',
      'Viel Trubel an den großen Sehenswürdigkeiten',
      'Sicherheitslage vorab prüfen',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Preis-Leistungs-Sucher'],
  },
  {
    id: 'india',
    letter: 'B',
    name: 'Indien (ohne Hyderabad)',
    route: 'Delhi + Agra + Jaipur + Udaipur + Kerala',
    scores: { weather: 6.5, stress: 6.0, scenery: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 7.0 },
    great: [
      'Goldenes Dreieck plus Rajasthan: Taj Mahal, Paläste, Basare',
      'Udaipur als eleganter Höhepunkt am See',
      'Kerala zum entspannten Ausklang mit Backwaters',
    ],
    awareOf: [
      'Sehr dichtes Programm mit vielen Ortswechseln',
      'September = Ende Monsun, in Kerala noch feucht',
      'Reizüberflutung durch Verkehr und Menschenmengen möglich',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Stilvoller Genussreisender'],
  },
  {
    id: 'indiaHyderabad',
    letter: 'C',
    name: 'Indien (mit Hyderabad)',
    route: 'Delhi + Agra + Jaipur + Udaipur + Kerala + Hyderabad (Team-Stop)',
    scores: { weather: 6.5, stress: 5.5, scenery: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 6.5 },
    great: [
      'Wie Indien ohne Hyderabad, plus persönlicher Team-/Business-Stopp',
      'Hyderabad zeigt modernes, urbanes Indien als Kontrast',
      'Gute Mischung aus Geschichte und Gegenwart',
    ],
    awareOf: [
      'Zusätzlicher Stopp verlängert eine ohnehin dichte Reise',
      'Etwas teurer und etwas mehr Reisestress durch einen Ort mehr',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Abenteuer & Coolness'],
  },
  {
    id: 'vietnam',
    letter: 'D',
    name: 'Vietnam/Kambodscha (ohne Taipeh)',
    route: 'Hanoi + Ninh Binh/Halong + Hoi An + Siem Reap',
    scores: { weather: 7.5, stress: 7.5, scenery: 8.5, culture: 8.5, coolness: 9.0, food: 9.5, cost: 7.0 },
    great: [
      'Halong-Bucht und Ninh Binh: spektakuläre Landschaften',
      'Hoi An: bezauberndes Lampen-Städtchen mit toller Küche',
      'Angkor Wat in Siem Reap als kultureller Höhepunkt',
    ],
    awareOf: [
      'September ist Regenzeit in Nordvietnam, Taifun-Risiko',
      'Lange Wege zwischen den Etappen',
    ],
    bestFor: ['Entspannter Erlebnisreisender', 'Abenteuer & Coolness'],
  },
  {
    id: 'vietnamTaipei',
    letter: 'E',
    name: 'Vietnam/Kambodscha (mit Taipeh)',
    route: 'Taipeh + Nord-/Zentralvietnam + Angkor',
    scores: { weather: 7.5, stress: 6.8, scenery: 8.5, culture: 8.5, coolness: 9.5, food: 9.8, cost: 6.5 },
    great: [
      'Taipeh als urbaner, kulinarischer Auftakt mit eigenem Charakter',
      'Gleiche Highlights wie ohne Taipeh, plus zusätzliche Destination',
      'Beste Food-Wertung der ganzen Auswahl',
    ],
    awareOf: [
      'Ein Land mehr bedeutet mehr Logistik und höhere Kosten',
      'September ist auch in Taiwan Taifun-Saison',
    ],
    bestFor: ['Abenteuer & Coolness', 'Stilvoller Genussreisender'],
  },
  {
    id: 'usaSouth',
    letter: 'F',
    name: 'USA Süden',
    route: 'Houston + Cajun Country + New Orleans + Miami',
    scores: { weather: 5.0, stress: 7.5, scenery: 6.0, culture: 6.5, coolness: 8.5, food: 8.5, cost: 6.0 },
    great: [
      'New Orleans: einzigartige Musik-, Food- und Partykultur',
      'Cajun Country als authentisches, ungewöhnliches Roadtrip-Erlebnis',
      'Miami als glamouröser, entspannter Abschluss',
    ],
    awareOf: [
      'September ist Hurrikan-Saison an der Golfküste',
      'Weniger klassische kulturelle Highlights als andere Optionen',
      'Lange Fahrstrecken mit dem Auto',
    ],
    bestFor: ['Abenteuer & Coolness', 'Stilvoller Genussreisender'],
  },
]

export const TRAVEL_CONSTRAINTS = {
  timing: 'Mitte/Ende September',
  duration: 'ca. 12–14 Tage',
  departure: 'London',
}
