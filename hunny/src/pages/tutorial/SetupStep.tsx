import { ImageFrame, CodeBlock, OsTabs, Section, CollapsibleSection, LinkButton, PageNav } from "../../components/docs";

export default function SetupStep() {
  return (
    <>
      {/* Hero */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-300/30">
          1
        </div>
        <div>
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wide">STEP 1</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            準備
          </h1>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        パソコンに必要な道具を揃えていきます。
      </p>

      {/* What you need */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <div className="rounded-2xl border border-amber-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Git</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">バージョン管理ツール</p>
        </div>
        <div className="rounded-2xl border border-amber-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">GitHub</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">コード共有サービス</p>
        </div>
      </div>

      <ImageFrame src="/tutorial/git-github.png" alt="GitとGitHub" />

      {/* ─── Git ─── */}
      <Section title="Git のインストール" icon="💻">
        <OsTabs
          mac={
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                Macでは最初からGitが用意されているので<strong className="text-emerald-600 dark:text-emerald-400">準備は不要</strong>です。
              </p>
              <p>
                ただし、まれに他のソフトの影響でエラーになることがあります。
              </p>
              <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-3 text-red-800 dark:text-red-300 text-xs font-mono">
                xcrun: error: invalid active developer
              </div>
              <p>このエラーが出たときは以下のコマンドで解決してください。</p>
              <CodeBlock>{"$ xcode-select --install"}</CodeBlock>
              <p className="text-gray-500 dark:text-gray-400">質問に同意したあと、完了までしばらく時間がかかります。</p>
            </div>
          }
          windows={
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>事前にインストールをお願いします。</p>
              <ImageFrame src="/tutorial/git-install-win.png" alt="Windows版Gitインストール" />
              <LinkButton href="https://gitforwindows.org/">Windows版Gitをインストール</LinkButton>
            </div>
          }
        />
      </Section>

      {/* Verify */}
      <Section title="Git が使えるか確認" icon="✅">
        <OsTabs
          mac={
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>ターミナル</strong> を開いて以下を入力してください。
            </p>
          }
          windows={
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Powershell</strong> を開いて以下を入力してください。
            </p>
          }
        />

        <CodeBlock language="sh">{"$ git --version"}</CodeBlock>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-sm space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            💡 <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">$</code> は「コマンドの先頭」を表す記号です。入力する必要はありません。
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">2.39.2</code> のようにバージョンが表示されれば OK
          </p>
          <p className="text-red-600 dark:text-red-400">
            <code className="bg-amber-100 dark:bg-gray-700 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">1.7.10</code> 以下の場合は新しい Git をインストールしてください
          </p>
        </div>
      </Section>

      {/* Initial config */}
      <Section title="Git の初回設定" icon="⚙️">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          名前・メールアドレス・改行コード設定をまとめて行います。
        </p>

        <CodeBlock>{`$ git config --global user.name "ここはなんでも好きな名前"
$ git config --global user.email "開発に使うメールアドレス"
$ git config --global core.autocrlf false`}</CodeBlock>

        <CollapsibleSection title="入力の例を見る">
          <CodeBlock>{`$ git config --global user.name "ルビードッグ"
$ git config --global user.email "rubydog@example.com"
$ git config --global core.autocrlf false`}</CodeBlock>
        </CollapsibleSection>
      </Section>

      {/* ─── GitHub ─── */}
      <Section title="GitHub アカウント" icon="🐙">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          まだ使ったことがない方は以下から <strong>登録(サインアップ)</strong> をお願いします。
        </p>
        <LinkButton href="https://github.co.jp/">GitHub にサインアップ</LinkButton>
      </Section>

      {/* User ID */}
      <Section title="ユーザー ID をメモ" icon="📝">
        <ImageFrame src="/tutorial/github_id.png" alt="GitHubユーザーID" />

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 flex items-start gap-3">
          <span className="text-xl">📌</span>
          <div className="text-sm">
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">この ユーザー ID をメモしておいてください</p>
            <p className="text-gray-600 dark:text-gray-400">
              例: <code className="bg-amber-100 dark:bg-gray-800 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded text-xs">rbdog</code>
            </p>
          </div>
        </div>
      </Section>

      {/* Access token */}
      <Section title="アクセストークンを作成" icon="🔑">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          アクセストークンはこれからの作業で使う<strong>秘密のパスワード</strong>のようなものです。
        </p>

        <ImageFrame src="/tutorial/access-token.gif" alt="アクセストークンの作成方法" />
        <ImageFrame src="/tutorial/access-token-digest.png" alt="アクセストークンの設定画面" />

        <LinkButton href="https://github.com/settings/tokens">アクセストークン作成</LinkButton>

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 flex items-start gap-3 mt-4">
          <span className="text-xl">📌</span>
          <div className="text-sm space-y-2">
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              作った アクセストークン をメモしておいてください
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              一度画面を離れると、もう確認することができません。
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              忘れた / バレたときは、古い方を削除して作り直せば OK
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              例: <code className="bg-amber-100 dark:bg-gray-800 text-amber-900 dark:text-amber-300 px-1 py-0.5 rounded text-xs break-all">ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc</code>
            </p>
          </div>
        </div>
      </Section>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "intro", title: "はじめに" }}
        next={{ slug: "fork", title: "手順2. フォークとクローン" }}
      />
    </>
  );
}
