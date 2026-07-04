import type { ReactNode } from 'react'
import { useI18n } from '../i18n/I18nContext'

interface StepShellProps {
  headline: string
  subheadline?: string
  children: ReactNode
  onBack?: () => void
  onNext: () => void
  nextDisabled: boolean
  nextLabel?: string
  warning?: string | null
}

export function StepShell({
  headline,
  subheadline,
  children,
  onBack,
  onNext,
  nextDisabled,
  nextLabel,
  warning,
}: StepShellProps) {
  const { s } = useI18n()
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 text-center mb-2">{headline}</h2>
      {subheadline && <p className="text-center text-mist-300 mb-6">{subheadline}</p>}
      <div className="mb-8">{children}</div>

      {warning && (
        <p className="text-center text-sm font-medium text-amber-300 mb-4" role="alert">
          {warning}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        {onBack ? (
          <button
            onClick={onBack}
            className="rounded-xl px-5 py-3 font-semibold text-mist-100 border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            {s.stepShell.back}
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="rounded-xl px-6 py-3 font-semibold text-navy-950 bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:bg-sky-300 transition disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-sky-400"
        >
          {nextLabel ?? s.stepShell.next}
        </button>
      </div>
    </div>
  )
}
