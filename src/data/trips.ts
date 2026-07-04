import type { Archetype, Criterion, Trip } from '../types'

export const ARCHETYPES: Archetype[] = [
  {
    id: 'bucket-list-culture',
    label: 'Bucket-List-Kulturjäger',
    prompt: 'Mich interessieren besonders ikonische Sehenswürdigkeiten, Weltgeschichte und große Monumente.',
    icon: '🏛️',
    suggestedWeights: { weather: 10, stress: 10, scenicBeauty: 15, culture: 35, coolness: 10, food: 10, cost: 10 },
  },
  {
    id: 'stylish-foodie',
    label: 'Stilvoller Genussreisender',
    prompt: 'Mich interessieren besonders gutes Essen, schöne Hotels, Atmosphäre und eine elegante Reise.',
    icon: '🥂',
    suggestedWeights: { weather: 15, stress: 15, scenicBeauty: 15, culture: 15, coolness: 15, food: 20, cost: 5 },
  },
  {
    id: 'relaxed-explorer',
    label: 'Entspannter Erlebnisreisender',
    prompt: 'Mich interessiert besonders eine schöne Reise, die spannend ist, sich aber noch nach Urlaub anfühlt.',
    icon: '🌴',
    suggestedWeights: { weather: 20, stress: 25, scenicBeauty: 20, culture: 15, coolness: 10, food: 5, cost: 5 },
  },
  {
    id: 'adventure-coolness',
    label: 'Abenteuer & Coolness',
    prompt: 'Mich interessieren besonders ungewöhnliche Routen, City-Vibe, Musik, Nightlife und persönliche Geschichten.',
    icon: '🎸',
    suggestedWeights: { weather: 10, stress: 10, scenicBeauty: 15, culture: 15, coolness: 30, food: 15, cost: 5 },
  },
  {
    id: 'value-seeker',
    label: 'Preis-Leistungs-Sucher',
    prompt: 'Mich interessiert besonders die Reise mit dem besten Gegenwert fürs Geld.',
    icon: '💰',
    suggestedWeights: { weather: 15, stress: 10, scenicBeauty: 10, culture: 15, coolness: 5, food: 10, cost: 35 },
  },
]

export const CRITERIA: Criterion[] = [
  { id: 'weather', label: 'Wetter / Klima', defaultWeight: 20, description: 'Eignung der Reisezeit für das Klima vor Ort', icon: '☀️' },
  { id: 'stress', label: 'Stress / Hektik-Faktor', defaultWeight: 15, description: 'Wie entspannt oder anstrengend die Reise ist (hoher Score = wenig Stress)', icon: '🧘' },
  { id: 'scenicBeauty', label: 'Landschaftliche Schönheit', defaultWeight: 15, description: 'Optische Schönheit der Landschaften und Orte', icon: '🏞️' },
  { id: 'culture', label: 'Kulturelle Highlights', defaultWeight: 20, description: 'Bedeutung und Dichte kultureller Sehenswürdigkeiten', icon: '🏛️' },
  { id: 'coolness', label: 'Coolness-Faktor', defaultWeight: 10, description: 'Ausgefallenheit, urbaner Vibe, besondere Geschichten', icon: '😎' },
  { id: 'food', label: 'Essen', defaultWeight: 10, description: 'Qualität und Vielfalt der lokalen Küche', icon: '🍜' },
  { id: 'cost', label: 'Kosten / Preis-Leistung', defaultWeight: 10, description: 'Verhältnis von Kosten zu Erlebnis', icon: '💶' },
]

export const TRIPS: Trip[] = [
  {
    id: 'egypt',
    letter: 'A',
    icon: '🐫',
    name: 'Ägypten',
    shortName: 'Ägypten',
    route: 'Kairo + Nil + Abu Simbel + Rotes Meer',
    duration: '12–13 Nächte',
    shortDescription: 'Weltklasse-Monumente entlang des Nils, gekrönt von einem entspannten Ausklang am Roten Meer.',
    scores: { weather: 4.5, stress: 6.0, scenicBeauty: 7.0, culture: 10.0, coolness: 8.5, food: 6.5, cost: 8.0 },
    includedHighlights: [
      'Kairo: Pyramiden von Gizeh, Sphinx, Ägyptisches Museum',
      'Nilkreuzfahrt zwischen Luxor und Assuan',
      'Abu Simbel: monumentale Tempel Ramses II.',
      'Rotes Meer: Badeurlaub, Schnorcheln, Erholung',
    ],
    weatherSummary:
      'Mitte/Ende September ist es in Kairo und Oberägypten noch sehr heiß (oft über 35°C), am Roten Meer dagegen angenehm zum Baden. Für Tempelbesichtigungen empfehlen sich früher Morgen oder späterer Nachmittag.',
    whatIsGreat: [
      'Weltklasse-Monumente: Pyramiden von Gizeh, Abu Simbel, Tal der Könige',
      'Entspannte Nilkreuzfahrt zwischen den Etappen',
      'Rotes Meer zum Abschluss zum Auftanken',
    ],
    whatToBeAwareOf: [
      'Im September noch sehr heiß, v.a. in Oberägypten',
      'Viel Trubel an den großen Sehenswürdigkeiten',
      'Sicherheitslage vorab prüfen',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Preis-Leistungs-Sucher'],
    notIdealFor: ['Reisende, die Hitze schlecht vertragen', 'Reisende, die touristischen Trubel meiden wollen'],
    verdict:
      'Ägypten liefert die dichteste Konzentration an Weltklasse-Monumenten im ganzen Feld, bei gutem Preis-Leistungs-Verhältnis. Größter Kompromiss ist die Spätsommer-Hitze abseits der Küste.',
    tags: ['Beste Kultur', 'Bestes Preis-Leistungs-Verhältnis', 'Hohe Hitze'],
    estimatedCost: 'ca. £1.800–£2.800 p.P. bei guten Mittelklasse-Hotels; Nilkreuzfahrt und Rotes-Meer-Resort inklusive',
  },
  {
    id: 'india',
    letter: 'B',
    icon: '🕌',
    name: 'Indien (ohne Hyderabad)',
    shortName: 'Indien',
    route: 'Delhi + Agra + Jaipur + Udaipur + Kerala',
    duration: '13–14 Nächte',
    shortDescription: 'Goldenes Dreieck und Rajasthan-Paläste, abgerundet von einem ruhigen Kerala-Ausklang.',
    scores: { weather: 6.5, stress: 6.0, scenicBeauty: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 7.0 },
    includedHighlights: [
      'Delhi: Altstadt, Basare, koloniale Architektur',
      'Agra: Taj Mahal bei Sonnenaufgang',
      'Jaipur & Udaipur: Paläste, Forts, Seen',
      'Kerala: Backwaters-Hausboot, Tee-Hügel, Strand',
    ],
    weatherSummary:
      'September ist das Ende der Monsunzeit. Im Norden (Delhi, Agra, Rajasthan) meist trocken und warm, in Kerala noch feucht mit gelegentlichen Schauern.',
    whatIsGreat: [
      'Goldenes Dreieck plus Rajasthan: Taj Mahal, Paläste, Basare',
      'Udaipur als eleganter Höhepunkt am See',
      'Kerala zum entspannten Ausklang mit Backwaters',
    ],
    whatToBeAwareOf: [
      'Sehr dichtes Programm mit vielen Ortswechseln',
      'September = Ende Monsun, in Kerala noch feucht',
      'Reizüberflutung durch Verkehr und Menschenmengen möglich',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Stilvoller Genussreisender'],
    notIdealFor: ['Reisende, die wenig Ortswechsel wollen', 'Reisende, die Reizüberflutung vermeiden möchten'],
    verdict:
      'Das Goldene Dreieck plus Rajasthan und Kerala ist eine der kulturell reichsten Reisen im Feld – anspruchsvoll im Tempo, aber mit sehr hoher Erlebnisdichte.',
    tags: ['Bestes Essen', 'Schönste Landschaft', 'Dichtes Programm'],
    estimatedCost: 'ca. £2.000–£3.000 p.P. bei guten Mittelklasse- bis gehobenen Hotels',
  },
  {
    id: 'indiaHyderabad',
    letter: 'C',
    icon: '🕌',
    name: 'Indien (mit Hyderabad)',
    shortName: 'Indien + Hyderabad',
    route: 'Delhi + Agra + Jaipur + Udaipur + Kerala + Hyderabad (Team-Stop)',
    duration: '14–15 Nächte',
    shortDescription: 'Wie Indien pur, ergänzt um einen persönlichen Stopp im modernen Hyderabad.',
    scores: { weather: 6.5, stress: 5.5, scenicBeauty: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 6.5 },
    includedHighlights: [
      'Delhi: Altstadt, Basare, koloniale Architektur',
      'Agra: Taj Mahal bei Sonnenaufgang',
      'Jaipur & Udaipur: Paläste, Forts, Seen',
      'Kerala: Backwaters-Hausboot, Tee-Hügel, Strand',
      'Hyderabad: Charminar, Golconda Fort, moderne IT-Stadt',
    ],
    weatherSummary:
      'September ist das Ende der Monsunzeit. Im Norden meist trocken und warm, in Kerala noch feucht; Hyderabad ist warm und meist trocken.',
    whatIsGreat: [
      'Wie Indien ohne Hyderabad, plus persönlicher Team-/Business-Stopp',
      'Hyderabad zeigt modernes, urbanes Indien als Kontrast',
      'Gute Mischung aus Geschichte und Gegenwart',
    ],
    whatToBeAwareOf: [
      'Zusätzlicher Stopp verlängert eine ohnehin dichte Reise',
      'Etwas teurer und etwas mehr Reisestress durch einen Ort mehr',
    ],
    bestFor: ['Bucket-List-Kulturjäger', 'Abenteuer & Coolness'],
    notIdealFor: ['Reisende mit knappem Zeitbudget', 'Reisende, die Kosten niedrig halten wollen'],
    verdict:
      'Der zusätzliche Hyderabad-Stopp lohnt sich für den persönlichen Bezug, kostet aber etwas Tempo und Budget gegenüber der reinen Indien-Route.',
    tags: ['Beste Kultur', 'Persönlicher Stopp', 'Längste Reise'],
    estimatedCost: 'ca. £2.200–£3.300 p.P. bei guten Mittelklasse- bis gehobenen Hotels',
  },
  {
    id: 'vietnam',
    letter: 'D',
    icon: '🛕',
    name: 'Vietnam/Kambodscha (ohne Taipeh)',
    shortName: 'Vietnam + Kambodscha',
    route: 'Hanoi + Ninh Binh/Halong + Hoi An + Siem Reap',
    duration: '12–13 Nächte',
    shortDescription: 'Spektakuläre Karstlandschaften, bezauberndes Hoi An und der kulturelle Höhepunkt Angkor Wat.',
    scores: { weather: 7.5, stress: 7.5, scenicBeauty: 8.5, culture: 8.5, coolness: 9.0, food: 9.5, cost: 7.0 },
    includedHighlights: [
      'Hanoi: Altstadt, Streetfood, French Quarter',
      'Halong-Bucht & Ninh Binh: Kreuzfahrt, Karstfelsen, Höhlen',
      'Hoi An: Lampen-Altstadt, Schneider, Strand',
      'Siem Reap: Angkor Wat bei Sonnenaufgang',
    ],
    weatherSummary:
      'September ist Regenzeit in Nordvietnam mit Taifun-Risiko, dafür aber auch satte, grüne Landschaften. Siem Reap ist warm-feucht mit gelegentlichem Starkregen.',
    whatIsGreat: [
      'Halong-Bucht und Ninh Binh: spektakuläre Landschaften',
      'Hoi An: bezauberndes Lampen-Städtchen mit toller Küche',
      'Angkor Wat in Siem Reap als kultureller Höhepunkt',
    ],
    whatToBeAwareOf: [
      'September ist Regenzeit in Nordvietnam, Taifun-Risiko',
      'Lange Wege zwischen den Etappen',
    ],
    bestFor: ['Entspannter Erlebnisreisender', 'Abenteuer & Coolness'],
    notIdealFor: ['Reisende, die Regenzeit-Risiko meiden wollen'],
    verdict:
      'Vietnam/Kambodscha kombiniert spektakuläre Landschaften mit Top-Küche und Angkor Wat als Höhepunkt – der Preis dafür ist ein gewisses Wetterrisiko im September.',
    tags: ['Bestes Essen', 'Hohe Coolness', 'Regenrisiko'],
    estimatedCost: 'ca. £1.700–£2.600 p.P.',
  },
  {
    id: 'vietnamTaipei',
    letter: 'E',
    icon: '🛕',
    name: 'Vietnam/Kambodscha (mit Taipeh)',
    shortName: 'Vietnam + Taipeh',
    route: 'Taipeh + Nord-/Zentralvietnam + Angkor',
    duration: '13–14 Nächte',
    shortDescription: 'Taipehs urbaner Food-Trip als Auftakt, gefolgt von Vietnams Highlights und Angkor Wat.',
    scores: { weather: 7.5, stress: 6.8, scenicBeauty: 8.5, culture: 8.5, coolness: 9.5, food: 9.8, cost: 6.5 },
    includedHighlights: [
      'Taipeh: Nachtmärkte, Streetfood, Taipei 101',
      'Nordvietnam: Hanoi, Halong-Bucht/Ninh Binh',
      'Zentralvietnam: Hoi An',
      'Siem Reap: Angkor Wat',
    ],
    weatherSummary:
      'Taiwan und Nordvietnam liegen im September in der Taifun-Saison. Die Reise ist grundsätzlich machbar, erfordert aber Flexibilität bei Flügen.',
    whatIsGreat: [
      'Taipeh als urbaner, kulinarischer Auftakt mit eigenem Charakter',
      'Gleiche Highlights wie ohne Taipeh, plus zusätzliche Destination',
      'Beste Food-Wertung der ganzen Auswahl',
    ],
    whatToBeAwareOf: [
      'Ein Land mehr bedeutet mehr Logistik und höhere Kosten',
      'September ist auch in Taiwan Taifun-Saison',
    ],
    bestFor: ['Abenteuer & Coolness', 'Stilvoller Genussreisender'],
    notIdealFor: ['Reisende mit striktem Zeitplan ohne Wetterpuffer'],
    verdict:
      'Mit Taipeh als zusätzlichem Stopp wird die Reise noch vielseitiger und kulinarisch noch stärker, kostet aber mehr Zeit, Geld und Wetter-Flexibilität.',
    tags: ['Bestes Essen', 'Meiste Städte', 'Taifun-Risiko'],
    estimatedCost: 'ca. £2.100–£3.200 p.P.',
  },
  {
    id: 'usaSouth',
    letter: 'F',
    icon: '🎷',
    name: 'USA Süden',
    shortName: 'USA Süden',
    route: 'Houston + Cajun Country + New Orleans + Miami',
    duration: '12–13 Nächte',
    shortDescription: 'Roadtrip durch Musik, Sumpf und Südstaaten-Flair, mit glamourösem Miami-Finale.',
    scores: { weather: 5.0, stress: 7.5, scenicBeauty: 6.0, culture: 6.5, coolness: 8.5, food: 8.5, cost: 6.0 },
    includedHighlights: [
      'Houston: Auftakt, Space Center',
      'Cajun Country: Swamp Tours, Zydeco-Musik',
      'New Orleans: French Quarter, Jazz, kreolische Küche',
      'Miami: South Beach, Art Deco, Nightlife',
    ],
    weatherSummary:
      'September ist Hurrikan-Saison an der Golfküste. Heiß und schwül, mit Risiko für Wetterumbrüche und Flugverspätungen.',
    whatIsGreat: [
      'New Orleans: einzigartige Musik-, Food- und Partykultur',
      'Cajun Country als authentisches, ungewöhnliches Roadtrip-Erlebnis',
      'Miami als glamouröser, entspannter Abschluss',
    ],
    whatToBeAwareOf: [
      'September ist Hurrikan-Saison an der Golfküste',
      'Weniger klassische kulturelle Highlights als andere Optionen',
      'Lange Fahrstrecken mit dem Auto',
    ],
    bestFor: ['Abenteuer & Coolness', 'Stilvoller Genussreisender'],
    notIdealFor: ['Reisende, die Wetterrisiko minimieren wollen', 'Kulturjäger, die auf große Monumente aus sind'],
    verdict:
      'USA Süden ist die ungewöhnlichste und musikalischste Option im Feld, mit dem größten Wetterrisiko und den wenigsten klassischen Kultur-Highlights.',
    tags: ['Einzigartigster Trip', 'Hurrikan-Risiko', 'Roadtrip'],
    estimatedCost: 'ca. £2.300–£3.400 p.P. inkl. Mietwagen und Inlandsflug',
  },
  {
    id: 'japanOkinawa',
    letter: 'G',
    icon: '🗻',
    name: 'Japan inkl. Okinawa',
    shortName: 'Japan + Okinawa',
    route: 'Tokyo – Hakone/Fuji – Kyoto – Osaka – Okinawa',
    duration: '13–14 Nächte',
    shortDescription:
      'Japans perfekte Mischung aus Megacity, Tempeln, Onsen, Food und subtropischem Beach-Finale.',
    scores: { weather: 6.0, stress: 8.0, scenicBeauty: 8.0, culture: 8.5, coolness: 9.5, food: 9.5, cost: 6.5 },
    includedHighlights: [
      'Tokyo: Shibuya, Shinjuku, Asakusa, Food, Design, Rooftops',
      'Hakone/Fuji: Onsen, Ryokan, Fuji-Blick',
      'Kyoto: Tempel, Gärten, Gion, Fushimi Inari, Arashiyama',
      'Osaka: Dotonbori, Streetfood, lockerer City-Vibe',
      'Okinawa: Strand, Meer, Schnorcheln, Resort-Erholung',
    ],
    weatherSummary:
      'Tokyo, Kyoto und Osaka sind im September meist warm-feucht, grob 25–30°C. Okinawa ist heiß und badetauglich, aber September ist typhoon-anfällig. Die Reise ist machbar, braucht aber Flexibilität bei Okinawa-Flügen und Beach-Plänen.',
    whatIsGreat: [
      'Sehr elegante und komfortable Reise',
      'Extrem stark bei Essen, Design, City-Vibe und Kultur',
      'Sehr gute Infrastruktur und relativ wenig Reisestress',
      'Tokyo + Kyoto + Okinawa bieten eine starke Mischung aus City, Tradition und Erholung',
      'Hoher Coolness-Faktor ohne künstlich hip zu wirken',
    ],
    whatToBeAwareOf: [
      'Okinawa im September hat ein echtes Taifun-Risiko',
      'Japan ist eher teuer im Vergleich zu Vietnam/Kambodscha oder Ägypten',
      'In 14 Tagen muss die Route fokussiert bleiben',
      'Okinawa lohnt sich nur mit mindestens 3–4 Nächten',
      'Kein Platz für zusätzliche große Japan-Bausteine wie Hiroshima, Kanazawa oder Hokkaido',
    ],
    bestFor: ['Stilvoller Genussreisender', 'Entspannter Erlebnisreisender', 'Abenteuer & Coolness'],
    notIdealFor: [
      'Preis-Leistungs-Sucher mit engem Budget',
      'Reisende, die absolute Wettersicherheit wollen',
      'Reisende, die möglichst viele Länder oder Monumente abhaken wollen',
    ],
    verdict:
      'Japan + Okinawa gehört in die Spitzengruppe. Wahrscheinlich die eleganteste Reise im Feld, mit Top-Werten bei Essen, Coolness und Komfort. Größter Haken ist Okinawa im September wegen Taifun-Risiko.',
    tags: ['Bestes Essen', 'Hohe Coolness', 'Wenig Stress', 'Elegante Reise', 'Taifun-Risiko'],
    estimatedCost: 'ca. £3.500–£5.500 p.P. bei guten Hotels; höher bei Ryokan, 5*-Hotels oder besseren Okinawa-Resorts',
  },
]

export const TRAVEL_CONSTRAINTS = {
  timing: 'Mitte/Ende September',
  duration: 'ca. 12–14 Tage',
  departure: 'London',
}
