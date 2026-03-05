import { ImageFrame, CodeBlock, InlineCode, Section, CollapsibleSection, PageNav, StepHero } from "../../components/docs";

export default function BranchStep() {
  return (
    <>
      <StepHero stepNum={4} title="ブランチ" subtitle="自分だけの作業スペースを作ります。" />

      <ImageFrame src="/tutorial/eye-branch.gif" alt="ブランチの流れ" />

      {/* What is a branch? */}
      <div className="my-8 rounded-2xl border border-amber-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">ブランチとは?</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          Git では複数の作業を同時に進めるために、<strong>枝分かれ</strong>の仕組みがあります。
          自分の作業を <InlineCode>main</InlineCode> ブランチから分岐させることで、他の人の作業に影響を与えずに開発できます。
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          作業が終わったら、あとで <InlineCode>main</InlineCode> に合流させます（プルリクエスト）。
        </p>
      </div>

      <Section title="ブランチを作成する" icon="🌿">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          issue がアサインされたら、いよいよ作業開始です。<br />
          まずは自分の作業専用の <strong>branch(ブランチ)</strong> を作りましょう。
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300 mb-4">
          <p className="font-semibold mb-2">ブランチ名のルール:</p>
          <p className="mb-1"><InlineCode>作業の種類/短い説明_issue番号</InlineCode></p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-2">
            <li>新しい機能: <InlineCode>feat/...</InlineCode></li>
            <li>バグ修正: <InlineCode>fix/...</InlineCode></li>
          </ul>
        </div>

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
