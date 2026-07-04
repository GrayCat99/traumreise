import { useI18n } from '../i18n/I18nContext'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  label: string
}

export function ProgressBar({ currentStep, totalSteps, label }: ProgressBarProps) {
  const { s } = useI18n()
  const percent = (currentStep / totalSteps) * 100
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="flex items-center justify-between mb-2 text-sm font-medium text-mist-300">
        <span>{s.progress.stepOf(currentStep, totalSteps)}</span>
        <span>{label}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-600 to-sky-300 shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
