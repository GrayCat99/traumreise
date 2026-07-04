import { useState } from 'react'
import { TRAVEL_CONSTRAINTS } from '../data/trips'

interface LandingProps {
  participantName: string
  onNameChange: (name: string) => void
  onStart: () => void
}

export function Landing({ participantName, onNameChange, onStart }: LandingProps) {
  const [touched, setTouched] = useState(false)
  const canStart = participantName.trim().length > 0

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12 animate-fade-in-up">
      <div className="text-5xl mb-4">🧭</div>
      <h1 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-3 tracking-tight">
        Meli&apos;s 30&apos; Family-Traumreise
      </h1>
      <p className="text-lg text-ink-700/80 mb-8 max-w-lg">
        Der Familien-Reise-Entscheidungshelfer: gemeinsam die nächste große Reise finden.
      </p>

      <div className="bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-terracotta-100 px-6 py-5 mb-10 max-w-md w-full text-left">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-terracotta-600 mb-3">
          Rahmenbedingungen
        </h2>
        <ul className="space-y-2 text-ink-700">
          <li className="flex items-center gap-2">
            <span aria-hidden>📅</span>
            <span>
              <strong className="text-ink-900">Reisezeit:</strong> {TRAVEL_CONSTRAINTS.timing}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>⏳</span>
            <span>
              <strong className="text-ink-900">Dauer:</strong> {TRAVEL_CONSTRAINTS.duration}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>✈️</span>
            <span>
              <strong className="text-ink-900">Abflug:</strong> {TRAVEL_CONSTRAINTS.departure}
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm">
        <label htmlFor="participant-name" className="block text-left text-sm font-medium text-ink-700 mb-2">
          Dein Name
        </label>
        <input
          id="participant-name"
          type="text"
          value={participantName}
          onChange={(e) => onNameChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="z. B. Meli"
          className="w-full rounded-xl border border-terracotta-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-700/40 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent mb-2"
        />
        {touched && !canStart && (
          <p className="text-sm text-terracotta-600 mb-2 text-left">Bitte gib deinen Namen ein.</p>
        )}

        <button
          onClick={onStart}
          disabled={!canStart}
          className="w-full mt-3 rounded-xl bg-terracotta-500 px-6 py-3 text-white font-semibold shadow-sm transition hover:bg-terracotta-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-terracotta-500"
        >
          Start
        </button>
      </div>
    </div>
  )
}
