import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import type { Lang } from '../types'

interface LandingProps {
  participantName: string
  onNameChange: (name: string) => void
  onStart: () => void
}

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
]

export function Landing({ participantName, onNameChange, onStart }: LandingProps) {
  const [touched, setTouched] = useState(false)
  const { s, lang, setLang } = useI18n()
  const canStart = participantName.trim().length > 0

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-12 animate-fade-in-up">
      <div className="absolute top-0 right-4 flex gap-1.5">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-label={l.label}
            aria-pressed={lang === l.code}
            className={`text-xl w-9 h-9 rounded-full flex items-center justify-center transition ${
              lang === l.code ? 'bg-sky-400/20 ring-2 ring-sky-400' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {l.flag}
          </button>
        ))}
      </div>

      <div className="text-5xl mb-4">🧭</div>
      <h1 className="text-4xl sm:text-5xl font-bold text-mist-50 mb-3 tracking-tight">
        Meli&apos;s 30&apos; Family-Traumreise
      </h1>
      <p className="text-lg text-mist-300 mb-8 max-w-lg">{s.landing.subtitle}</p>

      <div className="bg-white/5 backdrop-blur rounded-2xl shadow-sm border border-white/10 px-6 py-5 mb-10 max-w-md w-full text-left">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-400 mb-3">
          {s.landing.constraintsHeading}
        </h2>
        <ul className="space-y-2 text-mist-200">
          <li className="flex items-center gap-2">
            <span aria-hidden>📅</span>
            <span>
              <strong className="text-mist-50">{s.landing.timingLabel}</strong> {s.travelConstraints.timing}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>⏳</span>
            <span>
              <strong className="text-mist-50">{s.landing.durationLabel}</strong> {s.travelConstraints.duration}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>✈️</span>
            <span>
              <strong className="text-mist-50">{s.landing.departureLabel}</strong> {s.travelConstraints.departure}
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm">
        <label htmlFor="participant-name" className="block text-left text-sm font-medium text-mist-200 mb-2">
          {s.landing.nameLabel}
        </label>
        <input
          id="participant-name"
          type="text"
          value={participantName}
          onChange={(e) => onNameChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={s.landing.namePlaceholder}
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-mist-50 placeholder:text-mist-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent mb-2"
        />
        {touched && !canStart && <p className="text-sm text-amber-300 mb-2 text-left">{s.landing.nameRequired}</p>}

        <button
          onClick={onStart}
          disabled={!canStart}
          className="w-full mt-3 rounded-xl bg-sky-400 px-6 py-3 text-navy-950 font-semibold shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:bg-sky-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-sky-400"
        >
          {s.landing.startButton}
        </button>
      </div>
    </div>
  )
}
