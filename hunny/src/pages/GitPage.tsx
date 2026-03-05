import DocsLayout from "../components/DocsLayout";
import { gitPages } from "../content/git";

export default function GitPage() {
  return <DocsLayout basePath="/git" pages={gitPages} />;
}
