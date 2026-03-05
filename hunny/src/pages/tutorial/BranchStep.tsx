import { ImageFrame, CodeBlock, Section, CollapsibleSection, PageNav } from "../../components/docs";

export default function BranchStep() {
  return (
    <>
      {/* Hero */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-300/30">
          4
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">STEP 4</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            ブランチ
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        自分だけの作業スペースを作ります。
      </p>

      <ImageFrame src="/tutorial/eye-branch.gif" alt="ブランチの流れ" />

      <Section title="ブランチを作成する" icon="🌿">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          issue がアサインされたら、いよいよ作業開始です。<br />
          まずは自分の作業専用の <strong>branch(ブランチ)</strong> を作りましょう。
        </p>

        <CodeBlock>{"$ git checkout -b feat/new_cell_<ユーザーID>_<issue番号>"}</CodeBlock>

        <CollapsibleSection title="入力の例を見る">
          <CodeBlock>{"$ git checkout -b feat/new_cell_rbdog_2"}</CodeBlock>
        </CollapsibleSection>
      </Section>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "issue", title: "手順3. イシュー" }}
        next={{ slug: "work", title: "手順5. 本作業" }}
      />
    </>
  );
}
