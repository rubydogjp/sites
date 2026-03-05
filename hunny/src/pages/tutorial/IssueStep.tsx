import { ImageFrame, Section, LinkButton, PageNav } from "../../components/docs";

export default function IssueStep() {
  return (
    <>
      {/* Hero */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-300/30">
          3
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">STEP 3</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            イシュー
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        プロジェクトに「何をしたいか」を宣言します。
      </p>

      <ImageFrame src="/tutorial/eye-issue.gif" alt="イシューの流れ" />

      {/* Create issue */}
      <Section title="issue を発行する" icon="📋">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          今回は練習ですので、以下の内容で issue を作ります。
        </p>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 space-y-3 mb-4">
          <div className="flex gap-3 items-start text-sm">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 w-16 flex-shrink-0 pt-0.5">タイトル</span>
            <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-2 py-1 rounded text-xs">
              [FR] &lt;ユーザーID&gt; が参加
            </code>
          </div>
          <div className="flex gap-3 items-start text-sm">
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 w-16 flex-shrink-0 pt-0.5">説明</span>
            <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-2 py-1 rounded text-xs">
              アプリ内に新しく &lt;ユーザーID&gt; のデータを追加します
            </code>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/20 p-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <p className="font-medium text-gray-600 dark:text-gray-300 mb-1">例</p>
          <p>タイトル: <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">[FR] rbdog が参加</code></p>
          <p>説明: <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">アプリ内に新しく rbdog のデータを追加します</code></p>
        </div>

        <ImageFrame src="/tutorial/issue.gif" alt="issue作成画面" />
        <LinkButton href="https://github.com/rubydogjp/hunny/issues">こちらのページから issue を発行</LinkButton>
      </Section>

      {/* Issue number */}
      <Section title="issue 番号をメモ" icon="📌">
        <ImageFrame src="/tutorial/issue-number.png" alt="issue番号" />

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 flex items-start gap-3">
          <span className="text-xl">📌</span>
          <div className="text-sm">
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              発行された issue 番号を覚えておきましょう
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              例: <code className="bg-amber-100 dark:bg-gray-800 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">2</code>
            </p>
          </div>
        </div>
      </Section>

      {/* Assign */}
      <Section title="assign を待つ" icon="⏳">
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            issue に誰が対応するか決めることを <strong>assign(アサイン)</strong> と言います。
          </p>
          <p>
            当プロジェクトでは issue を作ったあなた自身がアサインされます。0~2 日ほどお待ちください。
          </p>
        </div>

        <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl p-4 text-sm border border-emerald-200 dark:border-emerald-800/30">
          <p className="font-bold text-emerald-800 dark:text-emerald-300">
            💡 今回は練習ですのでアサインを待たずに次へ進んで構いません！
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          アサインされると GitHub の中に通知が届きます。
        </p>
      </Section>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "fork", title: "手順2. フォークとクローン" }}
        next={{ slug: "branch", title: "手順4. ブランチ" }}
      />
    </>
  );
}
