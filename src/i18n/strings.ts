import type { Lang } from '../types'

export interface Strings {
  progress: {
    stepOf: (current: number, total: number) => string
  }
  landing: {
    subtitle: string
    constraintsHeading: string
    timingLabel: string
    durationLabel: string
    departureLabel: string
    nameLabel: string
    namePlaceholder: string
    nameRequired: string
    startButton: string
  }
  travelConstraints: {
    timing: string
    duration: string
    departure: string
  }
  archetypeStep: {
    headline: string
    subheadline: string
  }
  tripOptionStep: {
    headline: string
    subheadline: string
  }
  weightStep: {
    headline: string
    subheadline: string
    warning: string
    suggestionIntro: string
    suggestionFallback: string
    suggestionApply: string
    total: string
    resetDefaults: string
    normalize: string
  }
  stepShell: {
    back: string
    next: string
  }
  resultsStep: {
    headline: string
    subheadline: string
    verdictBest: (name: string) => string
    verdictBadge: (badge: string) => string
    verdictSolid: string
    clickHint: string
    savedConfirmation: string
    savedVotesButton: string
    saveButton: string
  }
  tripDetail: {
    rankLabel: string
    outOf10: string
    includedHighlights: string
    weatherHeading: string
    greatHeading: string
    awareHeading: string
    bestForHeading: string
    notIdealHeading: string
    verdictHeading: string
    breakdownHeading: string
    tableCriterion: string
    tableScore: string
    tableWeight: string
    tableContribution: string
    videosHeading: string
  }
  savedVotes: {
    heading: string
    closeAria: string
    exportJson: string
    exportCsv: string
    clearAll: string
    emptyState: string
    colName: string
    colTimestamp: string
    colArchetypes: string
    colTopResult: string
    deleteAction: string
    deleteAria: (name: string) => string
  }
  stepLabels: {
    landing: string
    archetypes: string
    trips: string
    weights: string
    results: string
  }
  badges: {
    bestCulture: string
    bestFood: string
    lowestStress: string
    bestScenery: string
    bestValue: string
    mostCool: string
  }
}

export const STRINGS: Record<Lang, Strings> = {
  de: {
    progress: {
      stepOf: (current, total) => `Schritt ${current} von ${total}`,
    },
    landing: {
      subtitle: 'Der Familien-Reise-Entscheidungshelfer: gemeinsam die nächste große Reise finden.',
      constraintsHeading: 'Rahmenbedingungen',
      timingLabel: 'Reisezeit:',
      durationLabel: 'Dauer:',
      departureLabel: 'Abflug:',
      nameLabel: 'Dein Name',
      namePlaceholder: 'z. B. Meli',
      nameRequired: 'Bitte gib deinen Namen ein.',
      startButton: 'Start',
    },
    travelConstraints: {
      timing: 'Mitte/Ende September',
      duration: 'ca. 12–14 Tage',
      departure: 'London',
    },
    archetypeStep: {
      headline: 'Mich interessiert besonders …',
      subheadline: 'Wähle einen oder mehrere Reisetypen aus, die zu dir passen.',
    },
    tripOptionStep: {
      headline: 'Welche Reisen kommen für dich überhaupt in Frage?',
      subheadline: 'Wähle alle Optionen aus, die du dir grundsätzlich vorstellen kannst.',
    },
    weightStep: {
      headline: 'Wie wichtig sind dir die Kriterien?',
      subheadline: 'Verteile 100%. Nutze Plus/Minus, um die Gewichtung in 1%-Schritten anzupassen.',
      warning: 'Die Gewichtung muss genau 100% ergeben.',
      suggestionIntro: 'Basierend auf deinen Archetypen könnten diese Kriterien besonders wichtig sein:',
      suggestionFallback: 'eine ausgewogene Mischung',
      suggestionApply: 'Vorgeschlagene Gewichtung übernehmen',
      total: 'Gesamt',
      resetDefaults: 'Standard zurücksetzen',
      normalize: 'Auf 100% normalisieren',
    },
    stepShell: {
      back: 'Zurück',
      next: 'Weiter',
    },
    resultsStep: {
      headline: 'Deine persönliche Rangliste',
      subheadline: 'Basierend auf deinen ausgewählten Reisen und deiner Gewichtung.',
      verdictBest: (name) => `${name} passt am besten zu deinen Kriterien und Präferenzen.`,
      verdictBadge: (badge) => `Starke Wahl, besonders ${badge.toLowerCase()}.`,
      verdictSolid: 'Eine solide Option, aber andere passen besser zu deinen Prioritäten.',
      clickHint: 'Tippen für Details',
      savedConfirmation: 'Gespeichert! Du findest deine Stimme unter "Gespeicherte Stimmen".',
      savedVotesButton: 'Gespeicherte Stimmen',
      saveButton: 'Meine Stimme speichern',
    },
    tripDetail: {
      rankLabel: 'Platz',
      outOf10: 'von 10',
      includedHighlights: 'Enthaltene Highlights',
      weatherHeading: 'Wetter im September',
      greatHeading: 'Das ist großartig',
      awareHeading: 'Darauf solltest du achten',
      bestForHeading: 'Am besten geeignet für',
      notIdealHeading: 'Weniger geeignet für',
      verdictHeading: 'Fazit',
      breakdownHeading: 'Punkte-Aufschlüsselung',
      tableCriterion: 'Kriterium',
      tableScore: 'Score /10',
      tableWeight: 'Gewichtung',
      tableContribution: 'Beitrag',
      videosHeading: 'Video-Empfehlungen',
    },
    savedVotes: {
      heading: 'Gespeicherte Stimmen',
      closeAria: 'Schließen',
      exportJson: 'Als JSON exportieren',
      exportCsv: 'Als CSV exportieren',
      clearAll: 'Alle löschen',
      emptyState: 'Noch keine gespeicherten Stimmen.',
      colName: 'Name',
      colTimestamp: 'Zeitpunkt',
      colArchetypes: 'Reisetypen',
      colTopResult: 'Top-Ergebnis',
      deleteAction: 'Löschen',
      deleteAria: (name) => `Stimme von ${name} löschen`,
    },
    stepLabels: {
      landing: 'Start',
      archetypes: 'Reisetypen',
      trips: 'Reiseoptionen',
      weights: 'Gewichtung',
      results: 'Ergebnis',
    },
    badges: {
      bestCulture: 'Beste Kultur',
      bestFood: 'Bestes Essen',
      lowestStress: 'Wenigster Stress',
      bestScenery: 'Schönste Landschaft',
      bestValue: 'Bestes Preis-Leistungs-Verhältnis',
      mostCool: 'Am coolsten',
    },
  },
  en: {
    progress: {
      stepOf: (current, total) => `Step ${current} of ${total}`,
    },
    landing: {
      subtitle: 'The family trip decision helper: find your next big adventure together.',
      constraintsHeading: 'Trip constraints',
      timingLabel: 'Travel time:',
      durationLabel: 'Duration:',
      departureLabel: 'Departure:',
      nameLabel: 'Your name',
      namePlaceholder: 'e.g. Meli',
      nameRequired: 'Please enter your name.',
      startButton: 'Start',
    },
    travelConstraints: {
      timing: 'Mid/late September',
      duration: 'approx. 12–14 days',
      departure: 'London',
    },
    archetypeStep: {
      headline: "I'm especially interested in …",
      subheadline: 'Choose one or more travel types that suit you.',
    },
    tripOptionStep: {
      headline: 'Which trips are even an option for you?',
      subheadline: 'Select all options you could generally imagine.',
    },
    weightStep: {
      headline: 'How important are the criteria to you?',
      subheadline: 'Distribute 100%. Use plus/minus to adjust the weighting in 1% steps.',
      warning: 'The weighting must add up to exactly 100%.',
      suggestionIntro: 'Based on your archetypes, these criteria might be especially important:',
      suggestionFallback: 'a balanced mix',
      suggestionApply: 'Apply suggested weighting',
      total: 'Total',
      resetDefaults: 'Reset to defaults',
      normalize: 'Normalize to 100%',
    },
    stepShell: {
      back: 'Back',
      next: 'Next',
    },
    resultsStep: {
      headline: 'Your personal ranking',
      subheadline: 'Based on your selected trips and your weighting.',
      verdictBest: (name) => `${name} best matches your criteria and preferences.`,
      verdictBadge: (badge) => `Strong choice, especially ${badge.toLowerCase()}.`,
      verdictSolid: 'A solid option, but others match your priorities better.',
      clickHint: 'Tap for details',
      savedConfirmation: 'Saved! You can find your vote under "Saved votes".',
      savedVotesButton: 'Saved votes',
      saveButton: 'Save my vote',
    },
    tripDetail: {
      rankLabel: 'Rank',
      outOf10: 'out of 10',
      includedHighlights: 'Included highlights',
      weatherHeading: 'Weather in September',
      greatHeading: "What's great",
      awareHeading: 'What to be aware of',
      bestForHeading: 'Best suited for',
      notIdealHeading: 'Less suited for',
      verdictHeading: 'Verdict',
      breakdownHeading: 'Score breakdown',
      tableCriterion: 'Criterion',
      tableScore: 'Score /10',
      tableWeight: 'Weight',
      tableContribution: 'Contribution',
      videosHeading: 'Recommended videos',
    },
    savedVotes: {
      heading: 'Saved votes',
      closeAria: 'Close',
      exportJson: 'Export as JSON',
      exportCsv: 'Export as CSV',
      clearAll: 'Clear all',
      emptyState: 'No saved votes yet.',
      colName: 'Name',
      colTimestamp: 'Timestamp',
      colArchetypes: 'Travel types',
      colTopResult: 'Top result',
      deleteAction: 'Delete',
      deleteAria: (name) => `Delete vote from ${name}`,
    },
    stepLabels: {
      landing: 'Start',
      archetypes: 'Travel types',
      trips: 'Trip options',
      weights: 'Weighting',
      results: 'Result',
    },
    badges: {
      bestCulture: 'Best culture',
      bestFood: 'Best food',
      lowestStress: 'Lowest stress',
      bestScenery: 'Best scenery',
      bestValue: 'Best value for money',
      mostCool: 'Coolest',
    },
  },
  es: {
    progress: {
      stepOf: (current, total) => `Paso ${current} de ${total}`,
    },
    landing: {
      subtitle: 'El ayudante familiar para decidir el próximo viaje: encuentra juntos la próxima gran aventura.',
      constraintsHeading: 'Condiciones del viaje',
      timingLabel: 'Fecha del viaje:',
      durationLabel: 'Duración:',
      departureLabel: 'Salida:',
      nameLabel: 'Tu nombre',
      namePlaceholder: 'p. ej. Meli',
      nameRequired: 'Por favor, introduce tu nombre.',
      startButton: 'Empezar',
    },
    travelConstraints: {
      timing: 'Mediados/finales de septiembre',
      duration: 'aprox. 12–14 días',
      departure: 'Londres',
    },
    archetypeStep: {
      headline: 'Me interesa especialmente …',
      subheadline: 'Elige uno o varios tipos de viaje que te representen.',
    },
    tripOptionStep: {
      headline: '¿Qué viajes son realmente una opción para ti?',
      subheadline: 'Selecciona todas las opciones que te puedas imaginar.',
    },
    weightStep: {
      headline: '¿Qué importancia tienen los criterios para ti?',
      subheadline: 'Reparte el 100%. Usa más/menos para ajustar la ponderación en pasos del 1%.',
      warning: 'La ponderación debe sumar exactamente 100%.',
      suggestionIntro: 'Según tus arquetipos, estos criterios podrían ser especialmente importantes:',
      suggestionFallback: 'una mezcla equilibrada',
      suggestionApply: 'Aplicar ponderación sugerida',
      total: 'Total',
      resetDefaults: 'Restablecer valores predeterminados',
      normalize: 'Normalizar al 100%',
    },
    stepShell: {
      back: 'Atrás',
      next: 'Siguiente',
    },
    resultsStep: {
      headline: 'Tu ranking personal',
      subheadline: 'Basado en los viajes seleccionados y tu ponderación.',
      verdictBest: (name) => `${name} encaja mejor con tus criterios y preferencias.`,
      verdictBadge: (badge) => `Una gran elección, sobre todo por ${badge.toLowerCase()}.`,
      verdictSolid: 'Una opción sólida, pero otras encajan mejor con tus prioridades.',
      clickHint: 'Toca para ver detalles',
      savedConfirmation: 'Guardado! Encontrarás tu voto en "Votos guardados".',
      savedVotesButton: 'Votos guardados',
      saveButton: 'Guardar mi voto',
    },
    tripDetail: {
      rankLabel: 'Puesto',
      outOf10: 'de 10',
      includedHighlights: 'Highlights incluidos',
      weatherHeading: 'Clima en septiembre',
      greatHeading: 'Lo que es genial',
      awareHeading: 'Lo que hay que tener en cuenta',
      bestForHeading: 'Ideal para',
      notIdealHeading: 'Menos ideal para',
      verdictHeading: 'Veredicto',
      breakdownHeading: 'Desglose de puntuación',
      tableCriterion: 'Criterio',
      tableScore: 'Puntuación /10',
      tableWeight: 'Ponderación',
      tableContribution: 'Contribución',
      videosHeading: 'Vídeos recomendados',
    },
    savedVotes: {
      heading: 'Votos guardados',
      closeAria: 'Cerrar',
      exportJson: 'Exportar como JSON',
      exportCsv: 'Exportar como CSV',
      clearAll: 'Borrar todo',
      emptyState: 'Todavía no hay votos guardados.',
      colName: 'Nombre',
      colTimestamp: 'Fecha y hora',
      colArchetypes: 'Tipos de viaje',
      colTopResult: 'Mejor resultado',
      deleteAction: 'Eliminar',
      deleteAria: (name) => `Eliminar voto de ${name}`,
    },
    stepLabels: {
      landing: 'Inicio',
      archetypes: 'Tipos de viaje',
      trips: 'Opciones de viaje',
      weights: 'Ponderación',
      results: 'Resultado',
    },
    badges: {
      bestCulture: 'Mejor cultura',
      bestFood: 'Mejor comida',
      lowestStress: 'Menos estrés',
      bestScenery: 'Mejor paisaje',
      bestValue: 'Mejor relación calidad-precio',
      mostCool: 'Más cool',
    },
  },
}
