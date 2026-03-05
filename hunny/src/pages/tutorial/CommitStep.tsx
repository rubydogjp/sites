import { ImageFrame, CodeBlock, Callout, Section, CollapsibleSection, PageNav } from "../../components/docs";

export default function CommitStep() {
  return (
    <>
      {/* Hero */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-300/30">
          6
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">STEP 6</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            コミット
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        編集したファイルを保存して、変更を記録します。
      </p>

      <ImageFrame src="/tutorial/eye-commit.gif" alt="コミットの流れ" />

      {/* Commit */}
      <Section title="変更をコミットする" icon="💾">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          ファイルを保存したあと、以下のコマンドで変更を記録します。
        </p>

        <CodeBlock>{`$ git add data/cells.json
$ git commit -m "feat: new cell <ユーザーID> #<issue番号>"`}</CodeBlock>

        <CollapsibleSection title="入力の例を見る">
          <CodeBlock>{`$ git add data/cells.json
$ git commit -m "feat: new cell rbdog #2"`}</CodeBlock>
        </CollapsibleSection>
      </Section>

      {/* Pull */}
      <Section title="最新データを取り込む" icon="🔄">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          コミットが完了したら、ハニープロジェクト本体から最新のデータを取り込みます。
        </p>

        <CodeBlock>{"$ git pull --rebase upstream main"}</CodeBlock>
      </Section>

      {/* Conflict warning */}
      <Callout variant="danger" title="Conflict(競合) が起きたとき">
        <div className="space-y-3">
          <p>
            他の作業者が先に同じデータを編集していた場合、<strong>conflict(競合)</strong> が発生することがあります。
          </p>
          <p className="font-medium">
            競合を起こしてしまうことは悪いことではないので安心してください。
          </p>
          <div className="bg-white/50 dark:bg-gray-900/30 rounded-xl p-4 space-y-2 text-sm">
            <p className="font-semibold">解決手順:</p>
            <ol className="list-decimal list-inside space-y-1 ml-1">
              <li>もう一度 <code className="text-xs bg-red-100 dark:bg-red-900/20 px-1 rounded">cells.json</code> を開く</li>
              <li>相手の変更が残るように修正する (譲り合い)</li>
              <li>ファイルを保存する</li>
            </ol>
            <CodeBlock>{`$ git add data/cells.json
$ git rebase --continue`}</CodeBlock>
            <p className="text-red-700/70 dark:text-red-300/70">
              自分の変更は消えるので、<strong>手順5. 本作業</strong> に戻ってやり直してください。
            </p>
          </div>
        </div>
      </Callout>

      {/* Almost done */}
      <div className="my-10 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-800/40 p-6 text-center">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
          🏁 ゴールはあと少し！
        </p>
      </div>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "work", title: "手順5. 本作業" }}
        next={{ slug: "pull-req", title: "手順7. プルリクエスト" }}
      />
    </>
  );
}
