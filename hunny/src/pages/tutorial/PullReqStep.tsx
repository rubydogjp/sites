import { ImageFrame, CodeBlock, Callout, Section, CollapsibleSection, LinkButton, PageNav } from "../../components/docs";

export default function PullReqStep() {
  return (
    <>
      {/* Hero */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-300/30">
          7
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">STEP 7</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            プルリクエスト
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        最後のステップ。完成した作業をプロジェクトに送信します。
      </p>

      <ImageFrame src="/tutorial/eye-pull-req.gif" alt="プルリクエストの流れ" />

      {/* Push */}
      <Section title="GitHub へ送信 (Push)" icon="🚀">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          まず作業結果をあなたの GitHub リポジトリへ送信します。
        </p>

        <CodeBlock>{"$ git push origin feat/new_cell_<ユーザーID>_<issue番号>"}</CodeBlock>

        <CollapsibleSection title="入力の例を見る">
          <CodeBlock>{"$ git push origin feat/new_cell_rbdog_2"}</CodeBlock>
        </CollapsibleSection>
      </Section>

      <Callout variant="danger" title="Push でエラーが起こったとき">
        <div className="space-y-2">
          <p>
            エラーメッセージ: <code className="text-xs bg-red-100 dark:bg-red-900/20 px-1.5 py-0.5 rounded">remote: permission to ...</code>
          </p>
          <p>
            複数の原因が考えられます。<br />
            お手数ですが該当の issue 内のコメントにてエラーメッセージと一緒に教えてください。
          </p>
        </div>
      </Callout>

      {/* Pull Request */}
      <Section title="Pull Request を作成する" icon="📬">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-medium">
          いよいよ最後の工程です！
        </p>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 space-y-3 mb-4">
          <div className="flex gap-3 items-start text-sm">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 w-16 flex-shrink-0 pt-0.5">タイトル</span>
            <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-2 py-1 rounded text-xs">
              [PR] feat: new cell &lt;ユーザーID&gt; #&lt;issue番号&gt;
            </code>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/20 p-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <p className="font-medium text-gray-600 dark:text-gray-300 mb-1">例</p>
          <p>タイトル: <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">[PR] feat: new cell rbdog #2</code></p>
        </div>

        <ImageFrame src="/tutorial/pull-req.gif" alt="プルリクエスト作成画面" />
        <LinkButton href="https://github.com/rubydogjp/hunny/pulls">プルリクエストを作成</LinkButton>
      </Section>

      {/* Wait for approval */}
      <Section title="承認を待つ" icon="☕">
        <div className="text-center py-4">
          <span className="text-4xl mb-3 block">☕</span>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            あとはコーヒーを飲みながらプルリクエストが承認されるのを待つだけです。
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            責任者がレビュー確認をしますので、0~2 日お待ちください。<br />
            何か依頼された場合は対応をお願いします。
          </p>
        </div>
      </Section>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "commit", title: "手順6. コミット" }}
        next={{ slug: "complete", title: "完了" }}
      />
    </>
  );
}
