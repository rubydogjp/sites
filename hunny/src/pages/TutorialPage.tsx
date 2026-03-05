import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { StepProgress } from "../components/docs";
import { tutorialSteps } from "../content/tutorial/steps";
import IntroStep from "./tutorial/IntroStep";
import SetupStep from "./tutorial/SetupStep";
import ForkStep from "./tutorial/ForkStep";
import IssueStep from "./tutorial/IssueStep";
import BranchStep from "./tutorial/BranchStep";
import WorkStep from "./tutorial/WorkStep";
import CommitStep from "./tutorial/CommitStep";
import PullReqStep from "./tutorial/PullReqStep";
import CompleteStep from "./tutorial/CompleteStep";
import OssRecommendStep from "./tutorial/OssRecommendStep";
import FaqSection from "./tutorial/FaqSection";
import SuspendResumeDrawer from "./tutorial/SuspendResumeDrawer";

const stepComponents: Record<string, React.ComponentType> = {
  intro: IntroStep,
  setup: SetupStep,
  fork: ForkStep,
  issue: IssueStep,
  branch: BranchStep,
  work: WorkStep,
  commit: CommitStep,
  "pull-req": PullReqStep,
  complete: CompleteStep,
  "oss-recommend": OssRecommendStep,
};

const faqSlugs = ["q-oss", "q-suspend-restart", "q-dispose"];

export default function TutorialPage() {
  const { slug } = useParams();
  const currentSlug = slug || "intro";
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqHighlight, setFaqHighlight] = useState<string | undefined>();
  const [suspendOpen, setSuspendOpen] = useState(false);

  useEffect(() => {
    if (currentSlug === "q-suspend-restart") {
      setSuspendOpen(true);
    } else if (faqSlugs.includes(currentSlug)) {
      setFaqOpen(true);
      setFaqHighlight(currentSlug);
    }
  }, [currentSlug]);

  if (faqSlugs.includes(currentSlug)) {
    return <Navigate to="/tutorial/intro" replace />;
  }

  const StepComponent = stepComponents[currentSlug];
  if (!StepComponent) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">ページが見つかりません</h1>
      </div>
    );
  }

  return (
    <>
      <StepProgress
        steps={tutorialSteps}
        currentSlug={currentSlug}
        basePath="/tutorial"
        onOpenFaq={() => {
          setFaqHighlight(undefined);
          setFaqOpen(true);
        }}
        onOpenSuspend={() => setSuspendOpen(true)}
      />

      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
        <StepComponent />
      </article>

      <FaqSection
        open={faqOpen}
        onClose={() => setFaqOpen(false)}
        highlightSlug={faqHighlight}
      />

      <SuspendResumeDrawer
        open={suspendOpen}
        onClose={() => setSuspendOpen(false)}
      />
    </>
  );
}
