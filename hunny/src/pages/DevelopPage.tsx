import DocsLayout from "../components/DocsLayout";
import { developPages } from "../content/develop";

export default function DevelopPage() {
  return <DocsLayout basePath="/develop" pages={developPages} />;
}
