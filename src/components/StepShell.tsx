import type { ReactNode } from 'react'

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
  nextLabel = 'Weiter',
  warning,
}: StepShellProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-center mb-2">{headline}</h2>
      {subheadline && <p className="text-center text-ink-700/70 mb-6">{subheadline}</p>}
      <div className="mb-8">{children}</div>

      {warning && (
        <p className="text-center text-sm font-medium text-terracotta-600 mb-4" role="alert">
          {warning}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        {onBack ? (
          <button
            onClick={onBack}
            className="rounded-xl px-5 py-3 font-semibold text-ink-700 border border-terracotta-200 bg-white/70 hover:bg-white transition"
          >
            Zurück
          </button>
        ) : (
          <span />
        )}
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="rounded-xl px-6 py-3 font-semibold text-white bg-terracotta-500 shadow-sm hover:bg-terracotta-600 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-terracotta-500"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  )
}
