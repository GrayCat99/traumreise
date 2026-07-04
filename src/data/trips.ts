import type { Archetype, Criterion, Trip } from '../types'

export const ARCHETYPES: Archetype[] = [
  {
    id: 'bucket-list-culture',
    icon: '🏛️',
    suggestedWeights: { weather: 10, stress: 10, scenicBeauty: 15, culture: 35, coolness: 10, food: 10, cost: 10 },
    i18n: {
      de: {
        label: 'Bucket-List-Kulturjäger',
        prompt: 'Mich interessieren besonders ikonische Sehenswürdigkeiten, Weltgeschichte und große Monumente.',
      },
      en: {
        label: 'Bucket-list culture hunter',
        prompt: "I'm especially interested in iconic sights, world history and great monuments.",
      },
      es: {
        label: 'Cazador cultural de la lista de deseos',
        prompt: 'Me interesan especialmente los lugares icónicos, la historia mundial y los grandes monumentos.',
      },
    },
  },
  {
    id: 'stylish-foodie',
    icon: '🥂',
    suggestedWeights: { weather: 15, stress: 15, scenicBeauty: 15, culture: 15, coolness: 15, food: 20, cost: 5 },
    i18n: {
      de: {
        label: 'Stilvoller Genussreisender',
        prompt: 'Mich interessieren besonders gutes Essen, schöne Hotels, Atmosphäre und eine elegante Reise.',
      },
      en: {
        label: 'Stylish foodie traveller',
        prompt: "I'm especially interested in great food, beautiful hotels, atmosphere and an elegant trip.",
      },
      es: {
        label: 'Viajero gourmet con estilo',
        prompt: 'Me interesan especialmente la buena comida, los hoteles bonitos, el ambiente y un viaje elegante.',
      },
    },
  },
  {
    id: 'relaxed-explorer',
    icon: '🌴',
    suggestedWeights: { weather: 20, stress: 25, scenicBeauty: 20, culture: 15, coolness: 10, food: 5, cost: 5 },
    i18n: {
      de: {
        label: 'Entspannter Erlebnisreisender',
        prompt: 'Mich interessiert besonders eine schöne Reise, die spannend ist, sich aber noch nach Urlaub anfühlt.',
      },
      en: {
        label: 'Relaxed experience traveller',
        prompt: "I'm especially interested in a beautiful trip that's exciting but still feels like a holiday.",
      },
      es: {
        label: 'Viajero relajado de experiencias',
        prompt: 'Me interesa especialmente un viaje bonito que sea emocionante, pero que aún se sienta como vacaciones.',
      },
    },
  },
  {
    id: 'adventure-coolness',
    icon: '🎸',
    suggestedWeights: { weather: 10, stress: 10, scenicBeauty: 15, culture: 15, coolness: 30, food: 15, cost: 5 },
    i18n: {
      de: {
        label: 'Abenteuer & Coolness',
        prompt:
          'Mich interessieren besonders ungewöhnliche Routen, City-Vibe, Musik, Nightlife und persönliche Geschichten.',
      },
      en: {
        label: 'Adventure & coolness',
        prompt: "I'm especially interested in unusual routes, city vibe, music, nightlife and personal stories.",
      },
      es: {
        label: 'Aventura y factor "cool"',
        prompt:
          'Me interesan especialmente las rutas inusuales, el ambiente urbano, la música, la vida nocturna y las historias personales.',
      },
    },
  },
  {
    id: 'value-seeker',
    icon: '💰',
    suggestedWeights: { weather: 15, stress: 10, scenicBeauty: 10, culture: 15, coolness: 5, food: 10, cost: 35 },
    i18n: {
      de: {
        label: 'Preis-Leistungs-Sucher',
        prompt: 'Mich interessiert besonders die Reise mit dem besten Gegenwert fürs Geld.',
      },
      en: {
        label: 'Value seeker',
        prompt: "I'm especially interested in the trip with the best value for money.",
      },
      es: {
        label: 'Buscador de la mejor relación calidad-precio',
        prompt: 'Me interesa especialmente el viaje con la mejor relación calidad-precio.',
      },
    },
  },
]

export const CRITERIA: Criterion[] = [
  {
    id: 'weather',
    defaultWeight: 20,
    icon: '☀️',
    i18n: {
      de: { label: 'Wetter / Klima', description: 'Eignung der Reisezeit für das Klima vor Ort' },
      en: { label: 'Weather / Climate', description: 'Suitability of the travel time for the local climate' },
      es: { label: 'Clima', description: 'Idoneidad de la fecha del viaje para el clima local' },
    },
  },
  {
    id: 'stress',
    defaultWeight: 15,
    icon: '🧘',
    i18n: {
      de: {
        label: 'Stress / Hektik-Faktor',
        description: 'Wie entspannt oder anstrengend die Reise ist (hoher Score = wenig Stress)',
      },
      en: {
        label: 'Stress / Pace factor',
        description: 'How relaxed or demanding the trip is (higher score = less stress)',
      },
      es: {
        label: 'Estrés / Ritmo',
        description: 'Qué tan relajado o exigente es el viaje (puntuación alta = menos estrés)',
      },
    },
  },
  {
    id: 'scenicBeauty',
    defaultWeight: 15,
    icon: '🏞️',
    i18n: {
      de: { label: 'Landschaftliche Schönheit', description: 'Optische Schönheit der Landschaften und Orte' },
      en: { label: 'Scenic beauty', description: 'Visual beauty of the landscapes and places' },
      es: { label: 'Belleza paisajística', description: 'Belleza visual de los paisajes y lugares' },
    },
  },
  {
    id: 'culture',
    defaultWeight: 20,
    icon: '🏛️',
    i18n: {
      de: { label: 'Kulturelle Highlights', description: 'Bedeutung und Dichte kultureller Sehenswürdigkeiten' },
      en: { label: 'Cultural highlights', description: 'Significance and density of cultural sights' },
      es: { label: 'Highlights culturales', description: 'Importancia y densidad de los lugares culturales' },
    },
  },
  {
    id: 'coolness',
    defaultWeight: 10,
    icon: '😎',
    i18n: {
      de: { label: 'Coolness-Faktor', description: 'Ausgefallenheit, urbaner Vibe, besondere Geschichten' },
      en: { label: 'Coolness factor', description: 'Uniqueness, urban vibe, memorable stories' },
      es: { label: 'Factor "cool"', description: 'Originalidad, ambiente urbano, historias memorables' },
    },
  },
  {
    id: 'food',
    defaultWeight: 10,
    icon: '🍜',
    i18n: {
      de: { label: 'Essen', description: 'Qualität und Vielfalt der lokalen Küche' },
      en: { label: 'Food', description: 'Quality and variety of the local cuisine' },
      es: { label: 'Comida', description: 'Calidad y variedad de la cocina local' },
    },
  },
  {
    id: 'cost',
    defaultWeight: 10,
    icon: '💶',
    i18n: {
      de: { label: 'Kosten / Preis-Leistung', description: 'Verhältnis von Kosten zu Erlebnis' },
      en: { label: 'Cost / value', description: 'Ratio of cost to experience' },
      es: { label: 'Coste / relación calidad-precio', description: 'Relación entre coste y experiencia' },
    },
  },
]

export const TRIPS: Trip[] = [
  {
    id: 'egypt',
    letter: 'A',
    icon: '🐫',
    scores: { weather: 4.5, stress: 6.0, scenicBeauty: 7.0, culture: 10.0, coolness: 8.5, food: 6.5, cost: 8.0 },
    bestFor: ['bucket-list-culture', 'value-seeker'],
    i18n: {
      de: {
        name: 'Ägypten',
        shortName: 'Ägypten',
        route: 'Kairo + Nil + Abu Simbel + Rotes Meer',
        duration: '12–13 Nächte',
        shortDescription: 'Weltklasse-Monumente entlang des Nils, gekrönt von einem entspannten Ausklang am Roten Meer.',
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
        notIdealFor: ['Reisende, die Hitze schlecht vertragen', 'Reisende, die touristischen Trubel meiden wollen'],
        verdict:
          'Ägypten liefert die dichteste Konzentration an Weltklasse-Monumenten im ganzen Feld, bei gutem Preis-Leistungs-Verhältnis. Größter Kompromiss ist die Spätsommer-Hitze abseits der Küste.',
        tags: ['Beste Kultur', 'Bestes Preis-Leistungs-Verhältnis', 'Hohe Hitze'],
        estimatedCost: 'ca. £1.800–£2.800 p.P. bei guten Mittelklasse-Hotels; Nilkreuzfahrt und Rotes-Meer-Resort inklusive',
      },
      en: {
        name: 'Egypt',
        shortName: 'Egypt',
        route: 'Cairo + Nile + Abu Simbel + Red Sea',
        duration: '12–13 nights',
        shortDescription: 'World-class monuments along the Nile, capped off with a relaxing finale on the Red Sea.',
        includedHighlights: [
          'Cairo: Pyramids of Giza, Sphinx, Egyptian Museum',
          'Nile cruise between Luxor and Aswan',
          'Abu Simbel: monumental temples of Ramses II',
          'Red Sea: beach holiday, snorkeling, relaxation',
        ],
        weatherSummary:
          'In mid/late September, Cairo and Upper Egypt are still very hot (often above 35°C), while the Red Sea is pleasant for swimming. Early morning or late afternoon are best for temple visits.',
        whatIsGreat: [
          'World-class monuments: Pyramids of Giza, Abu Simbel, Valley of the Kings',
          'Relaxing Nile cruise between the stops',
          'Red Sea finale to recharge',
        ],
        whatToBeAwareOf: [
          'Still very hot in September, especially in Upper Egypt',
          'Lots of crowds at the major sights',
          'Check the security situation in advance',
        ],
        notIdealFor: ['Travellers who struggle with heat', 'Travellers who want to avoid tourist crowds'],
        verdict:
          'Egypt delivers the densest concentration of world-class monuments in the whole field, at good value for money. The biggest trade-off is the late-summer heat away from the coast.',
        tags: ['Best culture', 'Best value', 'High heat'],
        estimatedCost: 'approx. £1,800–£2,800 p.p. at good mid-range hotels; Nile cruise and Red Sea resort included',
      },
      es: {
        name: 'Egipto',
        shortName: 'Egipto',
        route: 'El Cairo + Nilo + Abu Simbel + Mar Rojo',
        duration: '12–13 noches',
        shortDescription: 'Monumentos de primer nivel a lo largo del Nilo, coronados por un relajante final en el Mar Rojo.',
        includedHighlights: [
          'El Cairo: Pirámides de Guiza, la Esfinge, Museo Egipcio',
          'Crucero por el Nilo entre Luxor y Asuán',
          'Abu Simbel: templos monumentales de Ramsés II',
          'Mar Rojo: vacaciones de playa, snorkel, descanso',
        ],
        weatherSummary:
          'A mediados/finales de septiembre todavía hace mucho calor en El Cairo y el Alto Egipto (a menudo más de 35°C), mientras que el Mar Rojo es agradable para bañarse. Para visitar los templos, lo mejor es temprano por la mañana o al final de la tarde.',
        whatIsGreat: [
          'Monumentos de primer nivel: Pirámides de Guiza, Abu Simbel, Valle de los Reyes',
          'Crucero relajante por el Nilo entre las etapas',
          'Final en el Mar Rojo para recargar energías',
        ],
        whatToBeAwareOf: [
          'Todavía hace mucho calor en septiembre, sobre todo en el Alto Egipto',
          'Mucha afluencia en los grandes monumentos',
          'Conviene comprobar la situación de seguridad de antemano',
        ],
        notIdealFor: ['Viajeros que toleran mal el calor', 'Viajeros que quieren evitar el bullicio turístico'],
        verdict:
          'Egipto ofrece la mayor concentración de monumentos de primer nivel de todo el grupo, con una buena relación calidad-precio. El principal inconveniente es el calor de finales de verano lejos de la costa.',
        tags: ['Mejor cultura', 'Mejor relación calidad-precio', 'Mucho calor'],
        estimatedCost:
          'aprox. £1.800–£2.800 p.p. en buenos hoteles de gama media; crucero por el Nilo y resort en el Mar Rojo incluidos',
      },
    },
  },
  {
    id: 'india',
    letter: 'B',
    icon: '🕌',
    scores: { weather: 6.5, stress: 6.0, scenicBeauty: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 7.0 },
    bestFor: ['bucket-list-culture', 'stylish-foodie'],
    i18n: {
      de: {
        name: 'Indien (ohne Hyderabad)',
        shortName: 'Indien',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala',
        duration: '13–14 Nächte',
        shortDescription: 'Goldenes Dreieck und Rajasthan-Paläste, abgerundet von einem ruhigen Kerala-Ausklang.',
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
        notIdealFor: ['Reisende, die wenig Ortswechsel wollen', 'Reisende, die Reizüberflutung vermeiden möchten'],
        verdict:
          'Das Goldene Dreieck plus Rajasthan und Kerala ist eine der kulturell reichsten Reisen im Feld – anspruchsvoll im Tempo, aber mit sehr hoher Erlebnisdichte.',
        tags: ['Bestes Essen', 'Schönste Landschaft', 'Dichtes Programm'],
        estimatedCost: 'ca. £2.000–£3.000 p.P. bei guten Mittelklasse- bis gehobenen Hotels',
      },
      en: {
        name: 'India (without Hyderabad)',
        shortName: 'India',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala',
        duration: '13–14 nights',
        shortDescription: 'Golden Triangle and Rajasthan palaces, rounded off with a calm Kerala finale.',
        includedHighlights: [
          'Delhi: old town, bazaars, colonial architecture',
          'Agra: Taj Mahal at sunrise',
          'Jaipur & Udaipur: palaces, forts, lakes',
          'Kerala: backwaters houseboat, tea hills, beach',
        ],
        weatherSummary:
          'September marks the end of monsoon season. The north (Delhi, Agra, Rajasthan) is mostly dry and warm, while Kerala is still humid with occasional showers.',
        whatIsGreat: [
          'Golden Triangle plus Rajasthan: Taj Mahal, palaces, bazaars',
          'Udaipur as an elegant highlight on the lake',
          'Kerala as a relaxing finale with backwaters',
        ],
        whatToBeAwareOf: [
          'Very dense itinerary with many changes of location',
          'September = end of monsoon, still humid in Kerala',
          'Possible sensory overload from traffic and crowds',
        ],
        notIdealFor: [
          'Travellers who want few changes of location',
          'Travellers who want to avoid sensory overload',
        ],
        verdict:
          'The Golden Triangle plus Rajasthan and Kerala is one of the culturally richest trips in the field – demanding in pace, but with a very high density of experiences.',
        tags: ['Best food', 'Best scenery', 'Dense itinerary'],
        estimatedCost: 'approx. £2,000–£3,000 p.p. at good mid-range to upscale hotels',
      },
      es: {
        name: 'India (sin Hyderabad)',
        shortName: 'India',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala',
        duration: '13–14 noches',
        shortDescription: 'Triángulo de Oro y palacios de Rayastán, rematado con un tranquilo final en Kerala.',
        includedHighlights: [
          'Delhi: casco antiguo, bazares, arquitectura colonial',
          'Agra: el Taj Mahal al amanecer',
          'Jaipur y Udaipur: palacios, fuertes, lagos',
          'Kerala: casa flotante en los backwaters, colinas de té, playa',
        ],
        weatherSummary:
          'Septiembre marca el final de la temporada de monzones. El norte (Delhi, Agra, Rayastán) suele estar seco y cálido, mientras que Kerala sigue húmeda con lluvias ocasionales.',
        whatIsGreat: [
          'Triángulo de Oro más Rayastán: Taj Mahal, palacios, bazares',
          'Udaipur como elegante punto culminante junto al lago',
          'Kerala como final relajante con los backwaters',
        ],
        whatToBeAwareOf: [
          'Itinerario muy denso con muchos cambios de lugar',
          'Septiembre = fin del monzón, todavía húmedo en Kerala',
          'Posible sobrecarga sensorial por el tráfico y las multitudes',
        ],
        notIdealFor: [
          'Viajeros que prefieren pocos cambios de lugar',
          'Viajeros que quieren evitar la sobrecarga sensorial',
        ],
        verdict:
          'El Triángulo de Oro más Rayastán y Kerala es uno de los viajes culturalmente más ricos del grupo: exigente en ritmo, pero con una densidad de experiencias muy alta.',
        tags: ['Mejor comida', 'Mejor paisaje', 'Itinerario denso'],
        estimatedCost: 'aprox. £2.000–£3.000 p.p. en buenos hoteles de gama media-alta',
      },
    },
  },
  {
    id: 'indiaHyderabad',
    letter: 'C',
    icon: '🕌',
    scores: { weather: 6.5, stress: 5.5, scenicBeauty: 8.0, culture: 9.5, coolness: 8.5, food: 9.5, cost: 6.5 },
    bestFor: ['bucket-list-culture', 'adventure-coolness'],
    i18n: {
      de: {
        name: 'Indien (mit Hyderabad)',
        shortName: 'Indien + Hyderabad',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala + Hyderabad (Team-Stop)',
        duration: '14–15 Nächte',
        shortDescription: 'Wie Indien pur, ergänzt um einen persönlichen Stopp im modernen Hyderabad.',
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
        notIdealFor: ['Reisende mit knappem Zeitbudget', 'Reisende, die Kosten niedrig halten wollen'],
        verdict:
          'Der zusätzliche Hyderabad-Stopp lohnt sich für den persönlichen Bezug, kostet aber etwas Tempo und Budget gegenüber der reinen Indien-Route.',
        tags: ['Beste Kultur', 'Persönlicher Stopp', 'Längste Reise'],
        estimatedCost: 'ca. £2.200–£3.300 p.P. bei guten Mittelklasse- bis gehobenen Hotels',
      },
      en: {
        name: 'India (with Hyderabad)',
        shortName: 'India + Hyderabad',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala + Hyderabad (team stop)',
        duration: '14–15 nights',
        shortDescription: 'Same as India, plus a personal stop in modern Hyderabad.',
        includedHighlights: [
          'Delhi: old town, bazaars, colonial architecture',
          'Agra: Taj Mahal at sunrise',
          'Jaipur & Udaipur: palaces, forts, lakes',
          'Kerala: backwaters houseboat, tea hills, beach',
          'Hyderabad: Charminar, Golconda Fort, modern IT city',
        ],
        weatherSummary:
          'September marks the end of monsoon season. The north is mostly dry and warm, Kerala is still humid; Hyderabad is warm and mostly dry.',
        whatIsGreat: [
          'Same as India without Hyderabad, plus a personal team/business stop',
          'Hyderabad shows modern, urban India as a contrast',
          'Good mix of history and the present',
        ],
        whatToBeAwareOf: [
          'The extra stop extends an already dense trip',
          'Somewhat pricier and slightly more travel stress with one more place',
        ],
        notIdealFor: ['Travellers with a tight time budget', 'Travellers who want to keep costs low'],
        verdict:
          'The extra Hyderabad stop is worthwhile for the personal connection, but costs some pace and budget compared to the pure India route.',
        tags: ['Best culture', 'Personal stop', 'Longest trip'],
        estimatedCost: 'approx. £2,200–£3,300 p.p. at good mid-range to upscale hotels',
      },
      es: {
        name: 'India (con Hyderabad)',
        shortName: 'India + Hyderabad',
        route: 'Delhi + Agra + Jaipur + Udaipur + Kerala + Hyderabad (parada de equipo)',
        duration: '14–15 noches',
        shortDescription: 'Como India, más una parada personal en la moderna Hyderabad.',
        includedHighlights: [
          'Delhi: casco antiguo, bazares, arquitectura colonial',
          'Agra: el Taj Mahal al amanecer',
          'Jaipur y Udaipur: palacios, fuertes, lagos',
          'Kerala: casa flotante en los backwaters, colinas de té, playa',
          'Hyderabad: Charminar, fuerte de Golconda, ciudad moderna de TI',
        ],
        weatherSummary:
          'Septiembre marca el final del monzón. El norte suele estar seco y cálido, Kerala sigue húmeda; Hyderabad es cálida y mayormente seca.',
        whatIsGreat: [
          'Como India sin Hyderabad, más una parada personal de equipo/negocios',
          'Hyderabad muestra la India moderna y urbana como contraste',
          'Buena mezcla de historia y actualidad',
        ],
        whatToBeAwareOf: [
          'La parada adicional alarga un viaje ya de por sí denso',
          'Algo más caro y un poco más de estrés de viaje por un lugar más',
        ],
        notIdealFor: ['Viajeros con poco tiempo disponible', 'Viajeros que quieren mantener bajos los costes'],
        verdict:
          'La parada extra en Hyderabad merece la pena por la conexión personal, pero cuesta algo de ritmo y presupuesto frente a la ruta pura de India.',
        tags: ['Mejor cultura', 'Parada personal', 'Viaje más largo'],
        estimatedCost: 'aprox. £2.200–£3.300 p.p. en buenos hoteles de gama media-alta',
      },
    },
  },
  {
    id: 'vietnam',
    letter: 'D',
    icon: '🛕',
    scores: { weather: 7.5, stress: 7.5, scenicBeauty: 8.5, culture: 8.5, coolness: 9.0, food: 9.5, cost: 7.0 },
    bestFor: ['relaxed-explorer', 'adventure-coolness'],
    i18n: {
      de: {
        name: 'Vietnam/Kambodscha (ohne Taipeh)',
        shortName: 'Vietnam + Kambodscha',
        route: 'Hanoi + Ninh Binh/Halong + Hoi An + Siem Reap',
        duration: '12–13 Nächte',
        shortDescription: 'Spektakuläre Karstlandschaften, bezauberndes Hoi An und der kulturelle Höhepunkt Angkor Wat.',
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
        whatToBeAwareOf: ['September ist Regenzeit in Nordvietnam, Taifun-Risiko', 'Lange Wege zwischen den Etappen'],
        notIdealFor: ['Reisende, die Regenzeit-Risiko meiden wollen'],
        verdict:
          'Vietnam/Kambodscha kombiniert spektakuläre Landschaften mit Top-Küche und Angkor Wat als Höhepunkt – der Preis dafür ist ein gewisses Wetterrisiko im September.',
        tags: ['Bestes Essen', 'Hohe Coolness', 'Regenrisiko'],
        estimatedCost: 'ca. £1.700–£2.600 p.P.',
      },
      en: {
        name: 'Vietnam/Cambodia (without Taipei)',
        shortName: 'Vietnam + Cambodia',
        route: 'Hanoi + Ninh Binh/Halong + Hoi An + Siem Reap',
        duration: '12–13 nights',
        shortDescription: 'Spectacular karst landscapes, charming Hoi An, and the cultural highlight of Angkor Wat.',
        includedHighlights: [
          'Hanoi: old quarter, street food, French Quarter',
          'Halong Bay & Ninh Binh: cruise, karst cliffs, caves',
          'Hoi An: lantern old town, tailors, beach',
          'Siem Reap: Angkor Wat at sunrise',
        ],
        weatherSummary:
          'September is rainy season in northern Vietnam with typhoon risk, but also lush, green landscapes. Siem Reap is warm and humid with occasional heavy rain.',
        whatIsGreat: [
          'Halong Bay and Ninh Binh: spectacular landscapes',
          'Hoi An: charming lantern town with great food',
          'Angkor Wat in Siem Reap as the cultural highlight',
        ],
        whatToBeAwareOf: ['September is rainy season in northern Vietnam, typhoon risk', 'Long distances between stops'],
        notIdealFor: ['Travellers who want to avoid rainy-season risk'],
        verdict:
          'Vietnam/Cambodia combines spectacular landscapes with top-notch food and Angkor Wat as the highlight – the price for that is a certain weather risk in September.',
        tags: ['Best food', 'High coolness', 'Rain risk'],
        estimatedCost: 'approx. £1,700–£2,600 p.p.',
      },
      es: {
        name: 'Vietnam/Camboya (sin Taipéi)',
        shortName: 'Vietnam + Camboya',
        route: 'Hanói + Ninh Binh/Ha Long + Hoi An + Siem Reap',
        duration: '12–13 noches',
        shortDescription:
          'Paisajes kársticos espectaculares, el encantador Hoi An y el punto culminante cultural de Angkor Wat.',
        includedHighlights: [
          'Hanói: casco antiguo, comida callejera, Barrio Francés',
          'Bahía de Ha Long y Ninh Binh: crucero, formaciones kársticas, cuevas',
          'Hoi An: casco antiguo de los faroles, sastres, playa',
          'Siem Reap: Angkor Wat al amanecer',
        ],
        weatherSummary:
          'Septiembre es temporada de lluvias en el norte de Vietnam, con riesgo de tifones, pero también con paisajes exuberantes y verdes. Siem Reap es cálida y húmeda, con lluvias fuertes ocasionales.',
        whatIsGreat: [
          'Bahía de Ha Long y Ninh Binh: paisajes espectaculares',
          'Hoi An: encantador pueblo de los faroles con una comida excelente',
          'Angkor Wat en Siem Reap como punto culminante cultural',
        ],
        whatToBeAwareOf: [
          'Septiembre es temporada de lluvias en el norte de Vietnam, riesgo de tifones',
          'Largos trayectos entre las etapas',
        ],
        notIdealFor: ['Viajeros que quieren evitar el riesgo de la temporada de lluvias'],
        verdict:
          'Vietnam/Camboya combina paisajes espectaculares con una comida excelente y Angkor Wat como punto culminante; el precio es cierto riesgo climático en septiembre.',
        tags: ['Mejor comida', 'Alta originalidad', 'Riesgo de lluvia'],
        estimatedCost: 'aprox. £1.700–£2.600 p.p.',
      },
    },
  },
  {
    id: 'vietnamTaipei',
    letter: 'E',
    icon: '🛕',
    scores: { weather: 7.5, stress: 6.8, scenicBeauty: 8.5, culture: 8.5, coolness: 9.5, food: 9.8, cost: 6.5 },
    bestFor: ['adventure-coolness', 'stylish-foodie'],
    i18n: {
      de: {
        name: 'Vietnam/Kambodscha (mit Taipeh)',
        shortName: 'Vietnam + Taipeh',
        route: 'Taipeh + Nord-/Zentralvietnam + Angkor',
        duration: '13–14 Nächte',
        shortDescription: 'Taipehs urbaner Food-Trip als Auftakt, gefolgt von Vietnams Highlights und Angkor Wat.',
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
        notIdealFor: ['Reisende mit striktem Zeitplan ohne Wetterpuffer'],
        verdict:
          'Mit Taipeh als zusätzlichem Stopp wird die Reise noch vielseitiger und kulinarisch noch stärker, kostet aber mehr Zeit, Geld und Wetter-Flexibilität.',
        tags: ['Bestes Essen', 'Meiste Städte', 'Taifun-Risiko'],
        estimatedCost: 'ca. £2.100–£3.200 p.P.',
      },
      en: {
        name: 'Vietnam/Cambodia (with Taipei)',
        shortName: 'Vietnam + Taipei',
        route: 'Taipei + North/Central Vietnam + Angkor',
        duration: '13–14 nights',
        shortDescription: "Taipei's urban food trip as an opener, followed by Vietnam's highlights and Angkor Wat.",
        includedHighlights: [
          'Taipei: night markets, street food, Taipei 101',
          'North Vietnam: Hanoi, Halong Bay/Ninh Binh',
          'Central Vietnam: Hoi An',
          'Siem Reap: Angkor Wat',
        ],
        weatherSummary:
          'Taiwan and northern Vietnam are in typhoon season in September. The trip is generally feasible but requires flexibility with flights.',
        whatIsGreat: [
          'Taipei as an urban, culinary opener with its own character',
          'Same highlights as without Taipei, plus an extra destination',
          'Best food rating of the whole selection',
        ],
        whatToBeAwareOf: [
          'One more country means more logistics and higher costs',
          'September is also typhoon season in Taiwan',
        ],
        notIdealFor: ['Travellers with a strict schedule and no weather buffer'],
        verdict:
          'With Taipei as an extra stop, the trip becomes even more varied and culinary, but costs more time, money and weather flexibility.',
        tags: ['Best food', 'Most cities', 'Typhoon risk'],
        estimatedCost: 'approx. £2,100–£3,200 p.p.',
      },
      es: {
        name: 'Vietnam/Camboya (con Taipéi)',
        shortName: 'Vietnam + Taipéi',
        route: 'Taipéi + Vietnam Norte/Central + Angkor',
        duration: '13–14 noches',
        shortDescription: 'El viaje gastronómico y urbano de Taipéi como apertura, seguido de los highlights de Vietnam y Angkor Wat.',
        includedHighlights: [
          'Taipéi: mercados nocturnos, comida callejera, Taipei 101',
          'Norte de Vietnam: Hanói, bahía de Ha Long/Ninh Binh',
          'Centro de Vietnam: Hoi An',
          'Siem Reap: Angkor Wat',
        ],
        weatherSummary:
          'Taiwán y el norte de Vietnam están en temporada de tifones en septiembre. El viaje es factible en general, pero requiere flexibilidad con los vuelos.',
        whatIsGreat: [
          'Taipéi como apertura urbana y culinaria con carácter propio',
          'Los mismos highlights que sin Taipéi, más un destino adicional',
          'La mejor puntuación en comida de toda la selección',
        ],
        whatToBeAwareOf: [
          'Un país más significa más logística y mayores costes',
          'Septiembre también es temporada de tifones en Taiwán',
        ],
        notIdealFor: ['Viajeros con un calendario estricto sin margen para el clima'],
        verdict:
          'Con Taipéi como parada adicional, el viaje se vuelve aún más variado y gastronómico, pero cuesta más tiempo, dinero y flexibilidad climática.',
        tags: ['Mejor comida', 'Más ciudades', 'Riesgo de tifón'],
        estimatedCost: 'aprox. £2.100–£3.200 p.p.',
      },
    },
  },
  {
    id: 'usaSouth',
    letter: 'F',
    icon: '🎷',
    scores: { weather: 5.0, stress: 7.5, scenicBeauty: 6.0, culture: 6.5, coolness: 8.5, food: 8.5, cost: 6.0 },
    bestFor: ['adventure-coolness', 'stylish-foodie'],
    i18n: {
      de: {
        name: 'USA Süden',
        shortName: 'USA Süden',
        route: 'Houston + Cajun Country + New Orleans + Miami',
        duration: '12–13 Nächte',
        shortDescription: 'Roadtrip durch Musik, Sumpf und Südstaaten-Flair, mit glamourösem Miami-Finale.',
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
        notIdealFor: ['Reisende, die Wetterrisiko minimieren wollen', 'Kulturjäger, die auf große Monumente aus sind'],
        verdict:
          'USA Süden ist die ungewöhnlichste und musikalischste Option im Feld, mit dem größten Wetterrisiko und den wenigsten klassischen Kultur-Highlights.',
        tags: ['Einzigartigster Trip', 'Hurrikan-Risiko', 'Roadtrip'],
        estimatedCost: 'ca. £2.300–£3.400 p.P. inkl. Mietwagen und Inlandsflug',
      },
      en: {
        name: 'USA South',
        shortName: 'USA South',
        route: 'Houston + Cajun Country + New Orleans + Miami',
        duration: '12–13 nights',
        shortDescription: 'A road trip through music, swamps and Southern flair, with a glamorous Miami finale.',
        includedHighlights: [
          'Houston: kickoff, Space Center',
          'Cajun Country: swamp tours, zydeco music',
          'New Orleans: French Quarter, jazz, Creole cuisine',
          'Miami: South Beach, Art Deco, nightlife',
        ],
        weatherSummary:
          'September is hurricane season on the Gulf Coast. Hot and humid, with a risk of weather disruptions and flight delays.',
        whatIsGreat: [
          'New Orleans: unique music, food and party culture',
          'Cajun Country as an authentic, unusual road-trip experience',
          'Miami as a glamorous, relaxing finale',
        ],
        whatToBeAwareOf: [
          'September is hurricane season on the Gulf Coast',
          'Fewer classic cultural highlights than other options',
          'Long driving distances',
        ],
        notIdealFor: ['Travellers who want to minimize weather risk', 'Culture hunters after big monuments'],
        verdict:
          'USA South is the most unusual and musical option in the field, with the highest weather risk and the fewest classic cultural highlights.',
        tags: ['Most unique', 'Hurricane risk', 'Road trip'],
        estimatedCost: 'approx. £2,300–£3,400 p.p. incl. rental car and domestic flight',
      },
      es: {
        name: 'Sur de EE. UU.',
        shortName: 'Sur de EE. UU.',
        route: 'Houston + Cajun Country + Nueva Orleans + Miami',
        duration: '12–13 noches',
        shortDescription: 'Un road trip por la música, los pantanos y el ambiente sureño, con un final glamuroso en Miami.',
        includedHighlights: [
          'Houston: punto de partida, Space Center',
          'Cajun Country: tours por los pantanos, música zydeco',
          'Nueva Orleans: Barrio Francés, jazz, cocina criolla',
          'Miami: South Beach, Art Decó, vida nocturna',
        ],
        weatherSummary:
          'Septiembre es temporada de huracanes en la costa del Golfo. Cálido y húmedo, con riesgo de contratiempos climáticos y retrasos de vuelos.',
        whatIsGreat: [
          'Nueva Orleans: una cultura única de música, comida y fiesta',
          'Cajun Country como una experiencia auténtica e inusual de road trip',
          'Miami como final glamuroso y relajante',
        ],
        whatToBeAwareOf: [
          'Septiembre es temporada de huracanes en la costa del Golfo',
          'Menos highlights culturales clásicos que otras opciones',
          'Largos trayectos en coche',
        ],
        notIdealFor: [
          'Viajeros que quieren minimizar el riesgo climático',
          'Cazadores de cultura que buscan grandes monumentos',
        ],
        verdict:
          'El Sur de EE. UU. es la opción más inusual y musical del grupo, con el mayor riesgo climático y los menos highlights culturales clásicos.',
        tags: ['Más singular', 'Riesgo de huracán', 'Road trip'],
        estimatedCost: 'aprox. £2.300–£3.400 p.p. incl. coche de alquiler y vuelo doméstico',
      },
    },
  },
  {
    id: 'japanOkinawa',
    letter: 'G',
    icon: '🗻',
    scores: { weather: 6.0, stress: 8.0, scenicBeauty: 8.0, culture: 8.5, coolness: 9.5, food: 9.5, cost: 6.5 },
    bestFor: ['stylish-foodie', 'relaxed-explorer', 'adventure-coolness'],
    i18n: {
      de: {
        name: 'Japan inkl. Okinawa',
        shortName: 'Japan + Okinawa',
        route: 'Tokyo – Hakone/Fuji – Kyoto – Osaka – Okinawa',
        duration: '13–14 Nächte',
        shortDescription:
          'Japans perfekte Mischung aus Megacity, Tempeln, Onsen, Food und subtropischem Beach-Finale.',
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
        notIdealFor: [
          'Preis-Leistungs-Sucher mit engem Budget',
          'Reisende, die absolute Wettersicherheit wollen',
          'Reisende, die möglichst viele Länder oder Monumente abhaken wollen',
        ],
        verdict:
          'Japan + Okinawa gehört in die Spitzengruppe. Wahrscheinlich die eleganteste Reise im Feld, mit Top-Werten bei Essen, Coolness und Komfort. Größter Haken ist Okinawa im September wegen Taifun-Risiko.',
        tags: ['Bestes Essen', 'Hohe Coolness', 'Wenig Stress', 'Elegante Reise', 'Taifun-Risiko'],
        estimatedCost:
          'ca. £3.500–£5.500 p.P. bei guten Hotels; höher bei Ryokan, 5*-Hotels oder besseren Okinawa-Resorts',
      },
      en: {
        name: 'Japan incl. Okinawa',
        shortName: 'Japan + Okinawa',
        route: 'Tokyo – Hakone/Fuji – Kyoto – Osaka – Okinawa',
        duration: '13–14 nights',
        shortDescription: "Japan's perfect mix of megacity, temples, onsen, food and a subtropical beach finale.",
        includedHighlights: [
          'Tokyo: Shibuya, Shinjuku, Asakusa, food, design, rooftops',
          'Hakone/Fuji: onsen, ryokan, views of Mt Fuji',
          'Kyoto: temples, gardens, Gion, Fushimi Inari, Arashiyama',
          'Osaka: Dotonbori, street food, laid-back city vibe',
          'Okinawa: beach, sea, snorkeling, resort relaxation',
        ],
        weatherSummary:
          'Tokyo, Kyoto and Osaka are mostly warm and humid in September, roughly 25–30°C. Okinawa is hot and great for swimming, but September carries typhoon risk. The trip is doable, but needs flexibility around Okinawa flights and beach plans.',
        whatIsGreat: [
          'A very elegant and comfortable trip',
          'Extremely strong on food, design, city vibe and culture',
          'Very good infrastructure and relatively little travel stress',
          'Tokyo + Kyoto + Okinawa offer a strong mix of city, tradition and relaxation',
          'High coolness factor without feeling artificially hip',
        ],
        whatToBeAwareOf: [
          'Okinawa has a real typhoon risk in September',
          'Japan is on the pricier side compared to Vietnam/Cambodia or Egypt',
          'The route must stay focused within 14 days',
          'Okinawa is only worth it with at least 3–4 nights',
          'No room for extra big Japan add-ons like Hiroshima, Kanazawa or Hokkaido',
        ],
        notIdealFor: [
          'Value seekers on a tight budget',
          'Travellers who want absolute weather certainty',
          'Travellers who want to tick off as many countries or monuments as possible',
        ],
        verdict:
          'Japan + Okinawa is in the top tier. Probably the most elegant trip in the field, with top scores for food, coolness and comfort. The biggest catch is Okinawa in September due to typhoon risk.',
        tags: ['Best food', 'High coolness', 'Low stress', 'Elegant trip', 'Typhoon risk'],
        estimatedCost:
          'approx. £3,500–£5,500 p.p. at good hotels; higher for ryokan, 5-star hotels or better Okinawa resorts',
      },
      es: {
        name: 'Japón incl. Okinawa',
        shortName: 'Japón + Okinawa',
        route: 'Tokio – Hakone/Fuji – Kioto – Osaka – Okinawa',
        duration: '13–14 noches',
        shortDescription: 'La mezcla perfecta de Japón entre megaciudad, templos, onsen, comida y un final de playa subtropical.',
        includedHighlights: [
          'Tokio: Shibuya, Shinjuku, Asakusa, comida, diseño, azoteas',
          'Hakone/Fuji: onsen, ryokan, vistas del monte Fuji',
          'Kioto: templos, jardines, Gion, Fushimi Inari, Arashiyama',
          'Osaka: Dotonbori, comida callejera, ambiente urbano relajado',
          'Okinawa: playa, mar, snorkel, descanso en resort',
        ],
        weatherSummary:
          'Tokio, Kioto y Osaka suelen estar cálidas y húmedas en septiembre, entre 25 y 30°C. Okinawa es calurosa y perfecta para el baño, pero septiembre conlleva riesgo de tifones. El viaje es factible, pero requiere flexibilidad con los vuelos a Okinawa y los planes de playa.',
        whatIsGreat: [
          'Un viaje muy elegante y cómodo',
          'Extremadamente fuerte en comida, diseño, ambiente urbano y cultura',
          'Muy buena infraestructura y relativamente poco estrés de viaje',
          'Tokio + Kioto + Okinawa ofrecen una gran mezcla de ciudad, tradición y descanso',
          'Alto factor "cool" sin resultar artificialmente hip',
        ],
        whatToBeAwareOf: [
          'Okinawa tiene un riesgo real de tifones en septiembre',
          'Japón es más caro en comparación con Vietnam/Camboya o Egipto',
          'La ruta debe mantenerse enfocada en 14 días',
          'Okinawa solo merece la pena con al menos 3–4 noches',
          'No hay espacio para grandes añadidos de Japón como Hiroshima, Kanazawa u Hokkaido',
        ],
        notIdealFor: [
          'Buscadores de la mejor relación calidad-precio con presupuesto ajustado',
          'Viajeros que quieren seguridad climática absoluta',
          'Viajeros que quieren marcar tantos países o monumentos como sea posible',
        ],
        verdict:
          'Japón + Okinawa está en el grupo de cabeza. Probablemente el viaje más elegante del grupo, con las mejores puntuaciones en comida, factor "cool" y confort. El mayor inconveniente es Okinawa en septiembre por el riesgo de tifones.',
        tags: ['Mejor comida', 'Alto factor "cool"', 'Poco estrés', 'Viaje elegante', 'Riesgo de tifón'],
        estimatedCost:
          'aprox. £3.500–£5.500 p.p. en buenos hoteles; más caro en ryokan, hoteles de 5 estrellas o mejores resorts en Okinawa',
      },
    },
  },
]
