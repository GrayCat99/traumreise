interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  label: string
}

export function ProgressBar({ currentStep, totalSteps, label }: ProgressBarProps) {
  const percent = (currentStep / totalSteps) * 100
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-2 text-sm font-medium text-ink-700/70">
        <span>
          Schritt {currentStep} von {totalSteps}
        </span>
        <span>{label}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-terracotta-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-terracotta-500 to-teal-500 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
