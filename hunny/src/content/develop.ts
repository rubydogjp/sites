import type { DocPage } from "../components/DocsLayout";

export const developPages: DocPage[] = [
  {
    slug: "index",
    title: "目次",
    content: `# 共同開発 - 目次

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

ここには 共同開発 に関する知識がまとめられています`,
  },
  {
    slug: "issue",
    title: "issue",
    content: `# issue

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

プロジェクトに対して何かを行動を起したいときはまず \`issue\` を発行しましょう。

- バグの報告
- 新しい機能のリクエスト
- 疑問点
- 今後の方針

など、さまざまな種類の issue が作られます

<br />

### タイトル

- \`[Bug] button is not working\` ボタンが反応しません
- \`[FR] customize theme color\` 色をカスタマイズする新機能

のようなタイトルを決めます。

- バグの報告: \`[Bug]\`
- 新しい機能のリクエスト: \`[FR]\`

のように種類名を先頭につけます。

<br />

### 詳細

以下のようなフォーマットがよく使用されます。

\`\`\`
[Bug]
**Describe**
  (バグの説明)
**To Reproduce**
  (再現手順)
**Expected behavior**
  (想定される挙動)
**Screenshots**
  (スクリーンショット)
**Device**
  (端末名, OS, バージョン, 使用ブラウザ)
**App Version**
  (アプリバージョン)
**Additional context**
  (その他の経緯)
\`\`\`

\`\`\`
[FR]
**Related Problem**
  (現状の問題)
**Solution**
  (解決案)
**Alternatives**
  (その他の解決案)
**Additional context**
  (その他の経緯)
\`\`\``,
  },
];
