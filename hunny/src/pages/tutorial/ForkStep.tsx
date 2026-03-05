import { ImageFrame, CodeBlock, InlineCode, Section, CollapsibleSection, LinkButton, PageNav, StepHero } from "../../components/docs";

export default function ForkStep() {
  return (
    <>
      <StepHero stepNum={2} title="フォークとクローン" subtitle="プロジェクトのデータをあなたの手元に準備します。" />

      <ImageFrame src="/tutorial/eye-fork.gif" alt="フォークの流れ" />

      {/* fork */}
      <Section title="fork — プロジェクトを自分のアカウントにコピー" icon="🍴">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          GitHub の画面からハニープロジェクトをフォークします。
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          この操作は<strong>プロジェクト参加時に一度だけ</strong>で OK です。
        </p>

        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 text-sm mb-4">
          <p className="text-gray-700 dark:text-gray-300">
            ⚠️ <InlineCode>Owner</InlineCode> が<strong>自分のアカウント</strong>になっていることを確認してください。
          </p>
        </div>

        <ImageFrame src="/tutorial/fork.png" alt="フォーク画面" />
        <LinkButton href="https://github.com/rubydogjp/hunny/fork">フォークの画面 (GitHub) へ</LinkButton>
      </Section>

      {/* Clone */}
      <Section title="clone — 自分のパソコンにデータを持ってくる" icon="📥">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          フォーク完了後、自分のパソコンまでデータをコピーします。<br />
          この操作も<strong>一度だけ</strong>で OK です。
        </p>

        <CodeBlock>{"$ git clone https://<アクセストークン>@github.com/<ユーザーID>/hunny.git"}</CodeBlock>

        <CollapsibleSection title="入力の例を見る">
          <CodeBlock>{"$ git clone https://ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc@github.com/rbdog/hunny.git"}</CodeBlock>
        </CollapsibleSection>
      </Section>

      {/* upstream */}
      <Section title="upstream — 本体との接続を設定" icon="🔗">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          ハニープロジェクト本体の URL を <InlineCode>upstream</InlineCode> として Git に登録しておきます。
        </p>

        <CodeBlock>{`$ cd hunny
$ git remote add upstream https://github.com/rubydogjp/hunny.git`}</CodeBlock>

      </Section>

      {/* Done */}
      <div className="my-10 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-200 dark:border-emerald-800/40 p-6 text-center">
        <span className="text-3xl mb-2 block">✅</span>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">準備 OK</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">これで活動の準備ができました。</p>
      </div>

      <PageNav
        basePath="/tutorial"
        prev={{ slug: "setup", title: "手順1. 準備" }}
        next={{ slug: "issue", title: "手順3. イシュー" }}
      />
    </>
  );
}
