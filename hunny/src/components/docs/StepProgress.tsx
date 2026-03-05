import { Link } from "react-router-dom";
import { useState } from "react";

export interface StepMeta {
  slug: string;
  title: string;
  stepNum: number | null;
}

interface Props {
  steps: StepMeta[];
  currentSlug: string;
  basePath: string;
  onOpenFaq: () => void;
  onOpenSuspend: () => void;
}

export default function StepProgress({ steps, currentSlug, basePath, onOpenFaq, onOpenSuspend }: Props) {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const numberedSteps = steps.filter((s) => s.stepNum !== null);
  const currentStep = steps.find((s) => s.slug === currentSlug);
  const currentStepNum = currentStep?.stepNum ?? 0;

  return (
    <div className="sticky top-14 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-amber-200/50 dark:border-gray-800 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Step indicators */}
        <div className="flex items-center gap-0.5 flex-1 min-w-0">
          {numberedSteps.map((step, i) => {
            const isActive = step.slug === currentSlug;
            const isDone = step.stepNum !== null && currentStepNum !== null && step.stepNum < currentStepNum;

            return (
              <div key={step.slug} className="relative flex items-center">
                <Link
                  to={`${basePath}/${step.slug}`}
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors
                    ${isActive
                      ? "bg-amber-500 text-white ring-[3px] ring-amber-300/50 dark:ring-amber-600/40"
                      : isDone
                        ? "bg-amber-200 dark:bg-amber-800/50 text-amber-700 dark:text-amber-300"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:bg-amber-100 dark:hover:bg-gray-700"
                    }`}
                  onMouseEnter={() => setHoveredStep(step.slug)}
                  onMouseLeave={() => setHoveredStep(null)}
                  aria-label={step.title}
                >
                  {isDone ? (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.stepNum
                  )}
                </Link>
                {hoveredStep === step.slug && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2.5 rounded-lg pointer-events-none z-40 shadow-lg">
                    {step.title}
                  </div>
                )}
                {i < numberedSteps.length - 1 && (
                  <div className={`w-3 md:w-6 h-0.5 mx-0.5 rounded-full ${
                    isDone ? "bg-amber-300 dark:bg-amber-700" : "bg-gray-200 dark:bg-gray-700"
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Right-side quick actions */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Suspend/Resume */}
          <button
            onClick={onOpenSuspend}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-amber-100 dark:hover:bg-gray-700 hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-xs font-medium cursor-pointer"
            aria-label="中断・再開"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
            <span className="hidden sm:inline">中断・再開</span>
          </button>
          {/* FAQ */}
          <button
            onClick={onOpenFaq}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-amber-100 dark:hover:bg-gray-700 hover:text-amber-700 dark:hover:text-amber-300 transition-colors text-xs font-medium cursor-pointer"
            aria-label="よくある質問"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01" />
            </svg>
            <span className="hidden sm:inline">Q&A</span>
          </button>
        </div>
      </div>
    </div>
  );
}
