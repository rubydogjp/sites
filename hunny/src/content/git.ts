import type { DocPage } from "../components/DocsLayout";

export const gitPages: DocPage[] = [
  {
    slug: "index",
    title: "目次",
    content: `# Git知識 - 目次

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

ここには Git に関する知識がまとめられています`,
  },
  {
    slug: "git",
    title: "Git",
    content: `# Git とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

開発中のソフトのバージョンを管理できる無料のツールです。
[(もっと詳しく)](https://git-scm.com/)`,
  },
  {
    slug: "github",
    title: "GitHub",
    content: `# GitHub とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

Git とは別ものです。
開発中のソフトを置いておくことができる、オンラインのサービスです。
たくさんの有名企業が公開拠点として利用しています。`,
  },
  {
    slug: "fork",
    title: "fork",
    content: `# fork とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

3 つのリポジトリ

- \`upstream\`: Rubydog が管理する中央リポジトリ
- \`origin\`: 今作られたばかりの自分専用リポジトリ
- \`local\`: 自分のパソコンの中のリポジトリ`,
  },
  {
    slug: "branch",
    title: "branch",
    content: `# branch とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

<br />

Git ではそれぞれの開発を同時に進めるために作業の枝分かれを行います。
まずは自分の作業のために、専用の枝である \`ブランチ\` を作りましょう。

- \`作業の種類/短い説明_issue番号\`

のように名前を決めます。 **作業の種類** は以下の通りです。

- バグを修正する: \`fix\`
- 新しい機能を作る: \`feat\`

\`\`\`
# 新しいブランチを作る
$ git checkout -b feat/new_data_<ユーザーID>_<issue番号>
# originへ反映
$ git push origin feat/new_data_<ユーザーID>_<issue番号>
\`\`\``,
  },
  {
    slug: "commit",
    title: "commit",
    content: `# commit とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

### コミットメッセージ

- \`feat: new data <ユーザーID> (#<issue番号>)\`

のようなメッセージにします。

- バグの修正: \`fix\`
- 機能の開発: \`feat\`

のように種類名を先頭につけます。

\`\`\`
$ git add path/to/file.txt
$ git commit -m "feat: new data <ユーザーID> (#<issue番号>)"
\`\`\`

コミットが完了したら、リポジトリを最新にしておきましょう。

\`\`\`
$ git pull --rebase upstream main
\`\`\`

このとき稀に \`conflict(競合)\` が発生することがあります。
もし競合が起こっても悪いことではないので安心してください。
他の人と同時に作業をしていくと、同じところを編集してしまうケースがあるためです。

競合が起こった時はもう一度 \`file.txt\` を開いて
相手の変更が残るように直してあげてください。譲り合いの精神が大切です。
ファイルを保存したら、

\`\`\`
$ git add path/to/file.txt
$ git rebase --continue
\`\`\`

で解決します。
自分が作った変更は消えてしまうので、もう一度前の手順 \`5.作業\` へ戻ってやり直してください。

ここまでできたら origin も最新にしておきます

\`\`\`
$ git push origin feat/new_data_<ユーザーID>_<issue番号>
\`\`\``,
  },
  {
    slug: "pull-req",
    title: "Pull Request",
    content: `# Pull Request とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>`,
  },
  {
    slug: "clone",
    title: "clone",
    content: `# clone とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>`,
  },
];
