import DocsLayout from "../components/DocsLayout";
import { tutorialPages } from "../content/tutorial";

export default function TutorialPage() {
  return <DocsLayout basePath="/tutorial" pages={tutorialPages} />;
}
