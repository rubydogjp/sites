import { ImageFrame, CodeBlock, OsTabs, Section, DataTable, LinkButton, PageNav, StepHero } from "../../components/docs";

export default function WorkStep() {
  return (
    <>
      <StepHero stepNum={5} title="本作業" subtitle="ハチの巣に好きな文字を入れてみましょう。" />

      <div className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed space-y-2">
        <p>
          <strong className="text-gray-800 dark:text-gray-200">実際のプロジェクト</strong>では、ここで新しいコードを書いたり、バグを直したりします。
        </p>
        <p>
          今回は練習なので、ハチの巣のうち 1 つに<strong className="text-amber-600 dark:text-amber-400">好きな文字</strong>を入れてみましょう。
        </p>
      </div>

      <ImageFrame src="/tutorial/app.png" alt="ハチの巣アプリ" />

      {/* Open file */}
      <Section title="ファイルを開く" icon="📂">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          パソコンの中に作られた以下のファイルを開きます。
        </p>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 mb-4 flex items-center gap-2 text-sm font-mono text-gray-700 dark:text-gray-300">
          <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          hunny &gt; data &gt; <strong>cells.json</strong>
        </div>

        <ImageFrame src="/tutorial/folder.gif" alt="フォルダを開く" />

        <OsTabs
          mac={
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p className="font-medium">ターミナルからフォルダを開く:</p>
              <CodeBlock>{"$ open ."}</CodeBlock>
            </div>
          }
          windows={
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p className="font-medium">Powershell からフォルダを開く:</p>
              <CodeBlock>{"$ start ."}</CodeBlock>
            </div>
          }
        />
      </Section>

      {/* Edit file */}
      <Section title="データを編集する" icon="✏️">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
          データの中から<strong>まだ誰も使っていない null の項目</strong>を選んで編集してください。
        </p>
        <p className="text-sm text-red-600 dark:text-red-400 mb-4 font-medium">
          ⚠ カンマ(,)の位置に注意！ 画像を参考にしてください。
        </p>

        <ImageFrame src="/tutorial/cells-json.png" alt="cells.jsonの編集" />

        <DataTable
          headers={["データ名", "説明", "例", "補足"]}
          rows={[
            ["address", "変更しないでください", "", ""],
            ["github_id", "自分の GitHub ID", '"rbdog"', "null を上書き"],
            ["color", "好きな色 (HEX)", '"#C70067"', "colordic.org が便利"],
            ["text", "好きな文字 (10字)", '"ルビードッグ"', "一般に公開されます"],
          ]}
        />
      </Section>

      {/* Preview */}
      <div className="my-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          あらかじめ場所を確認できます
        </p>
        <LinkButton href="/honeycomb">ハチの巣をみる</LinkButton>
      </div>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "branch", title: "手順4. ブランチ" }}
        next={{ slug: "commit", title: "手順6. コミット" }}
      />
    </>
  );
}
