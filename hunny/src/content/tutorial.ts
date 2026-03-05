import type { DocPage } from "../components/DocsLayout";

export const tutorialPages: DocPage[] = [
  {
    slug: "intro",
    title: "はじめに",
    content: `# はじめに

![gif](/tutorial/welcome.gif)

ハニー は **OSS開発** への参加を支援するために作られた日本のプロジェクトです。

<br />

### OSSコントリビューターを目指そう！

OSS (オープン ソース ソフトウェア) とは、基本的に無料で誰でも自由に使えるソフトウェアのことです。
世界中の開発者たちが協力し合いながら多くのプロジェクトが進んでおり、
OSSコントリビューター **(貢献者)** は開発者にとって目指すべき目標のひとつです。
チュートリアルの後は、是非あなたの **推しOSS** へ参加してみませんか？

<br />

これから共同開発のチュートリアルを始めていきます。

<div class="admonition admonition-tip">
<strong>画面サイズ</strong><br/>
ここから先はパソコンで見ることをオススメします
</div>`,
  },
  {
    slug: "setup",
    title: "手順1. 準備",
    content: `# 1. 準備

![image](/tutorial/stepper-1.png)

まずはパソコンに必要な道具を揃えていきます。
今回のチュートリアルで必要なものは **Git(ギット)**, **GitHub(ギットハブ)** の 2 つです。

![image](/tutorial/git-github.png)

<br />

<br />

# Git

<details>
<summary>Macの方</summary>
<div>
Macでは最初からGitが用意されているので準備は不要です。<br />
ただし、まれに他のソフトの影響でエラーになることがあります。 エラー内容 <code>xcrun: error: invalid active developer</code><br />
このエラーが出たときは以下のコマンドで解決してください。
</div>

\`\`\`
$ xcode-select --install
\`\`\`

<div>
質問に同意したあと、完了までしばらく時間がかかりますのでお待ちください。
</div>
</details>

<details>
<summary>Windowsの方</summary>
<div>
事前に準備をお願いします

![image](/tutorial/git-install-win.png)

<a href="https://gitforwindows.org/" class="linkbutton">Windows版Gitをインストール</a>
</div>
</details>

<br />

### 確認する

\`\`\`sh
$ git --version
\`\`\`

Mac では **ターミナル** 、 Windows では **Powershell** を開いて上記のコマンドを入力します。
ちなみに \`$ \` は 1 回分のコマンドを表すただの記号ですので 入力する必要はありません。
\`2.39.2\` のように何か **バージョンが表示されれば Git が使えます** 。
\`1.7.10\` より小さいバージョンだと **古すぎるので新しい Git をインストールし直してください**

<br />

### 初回設定

Git に自分の名前と、メールアドレスの設定をします。
ついでに \`core.autocrlf false\` も設定しておくことをオススメします。

\`\`\`
$ git config --global user.name "ここはなんでも好きな名前"
$ git config --global user.email "開発に使うメールアドレス"
$ git config --global core.autocrlf false
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ git config --global user.name "ルビードッグ"
$ git config --global user.email "rubydog@example.com"
$ git config --global core.autocrlf false
\`\`\`

</details>

<br />

<br />

<br />

# GitHub

まだ使ったことがない方は以下から **登録(サインアップ)** をお願いします。

<a href="https://github.co.jp/" class="linkbutton">GitHub にサインアップ 🐙</a>

<br />

### ユーザー ID

![image](/tutorial/github_id.png)

この **ユーザー ID** をメモしておいてください。
例: \`rbdog\`

<br />

### アクセストークン

アクセストークンはこれからの作業で使う秘密のパスワードのようなものです。

![gif](/tutorial/access-token.gif)
![gif](/tutorial/access-token-digest.png)

<a href="https://github.com/settings/tokens" class="linkbutton">アクセストークン作成</a>

<br />

作った **アクセストークン** をメモしておいてください。
一度画面を離れると、もう確認することができません。
万が一忘れてしまったときや、他人にバレてしまったときは 古いほうを消してもう一度作り直せば大丈夫です。

例: \`ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc\``,
  },
  {
    slug: "fork",
    title: "手順2. フォークとクローン",
    content: `# 2. フォークとクローン

![image](/tutorial/stepper-2.png)

プロジェクトのデータを準備します。
最初は **fork(フォーク)** から始めましょう。

![gif](/tutorial/eye-fork.gif)

<br />

## fork

GitHub の画面からハニープロジェクトをフォークします。
この操作はプロジェクトに参加する はじめの一度だけで充分です。
\`Owner\` が自分のアカウントになっていることを確認してください。

![image](/tutorial/fork.png)

<a href="https://github.com/rubydogjp/hunny/fork" class="linkbutton">フォークの画面 (GitHub) へ</a>

<br />

<br />

## Clone

フォークが完了したら、自分のパソコンまでデータを持ってくるために **clone(クローン)** をしましょう。
この操作はパソコンの中身を捨てない限り、はじめの一度だけで充分です。

\`\`\`
$ git clone https://<アクセストークン>@github.com/<ユーザーID>/hunny.git
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ git clone https://ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc@github.com/rbdog/hunny.git
\`\`\`

</details>

<br />

<br />

## upstream を設定

ハニープロジェクト本体の URL を\`upstream\` として Git に登録しておきます

\`\`\`
$ cd hunny
$ git remote add upstream https://github.com/rubydogjp/hunny.git
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ cd hunny
$ git remote add upstream https://github.com/rubydogjp/hunny.git
\`\`\`

</details>

<br />

## 準備 OK

これで活動の準備ができました。`,
  },
  {
    slug: "issue",
    title: "手順3. イシュー",
    content: `# 3. イシュー

![image](/tutorial/stepper-3.png)

プロジェクトに対して何かを行動を起したいときは **issue(イシュー)** を発行しましょう。

![gif](/tutorial/eye-issue.gif)

<br />

## issue を発行

今回は練習ですので 以下のような issue を作ります。

- タイトル: \`[FR] <ユーザーID> が参加\`
- 説明: \`アプリ内に新しく <ユーザーID> のデータを追加します\`

例

- タイトル: \`[FR] rbdog が参加\`
- 説明: \`アプリ内に新しく rbdog のデータを追加します\`

![gif](/tutorial/issue.gif)

<a href="https://github.com/rubydogjp/hunny/issues" class="linkbutton">こちらのページから issue を発行</a>

<br />

## issue 番号

![image](/tutorial/issue-number.png)

発行された issue 番号を覚えておきましょう。
例: \`2\`

<br />

## assign を待つ

発行された issue に誰が対応するか決めることを **assign(アサイン)** と言います。
当プロジェクトでは issue を作ったあなた自身がアサインされますので 0~2 日ほどお待ちください。
**今回は練習ですのでアサインを待たずに作業を進めてしまって構いません。**
アサインされると GitHub の中に通知が届きます。`,
  },
  {
    slug: "branch",
    title: "手順4. ブランチ",
    content: `# 4. ブランチ

![image](/tutorial/stepper-4.png)

issue が自分にアサインされたら、いよいよ作業を始めていきます。
まずは自分の作業専用の \`branch(ブランチ)\` を作りましょう。

![gif](/tutorial/eye-branch.gif)

<br />

\`\`\`
$ git checkout -b feat/new_cell_<ユーザーID>_<issue番号>
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ git checkout -b feat/new_cell_rbdog_2
\`\`\`

</details>`,
  },
  {
    slug: "work",
    title: "手順5. 本作業",
    content: `# 5. 本作業

![image](/tutorial/stepper-5.png)

さて、**実際のプロジェクト** では、ここで新しいコードを書いたり、バグを直したりします。
今回は練習なのでハチの巣のうち 1 つに **好きな文字** を入れてみましょう。

![image](/tutorial/app.png)

<br />

手順はとても簡単です。
パソコンの中に作られた \`hunny\` > \`data\` > \`cells.json\` を開きます

![gif](/tutorial/folder.gif)

<div class="admonition admonition-tip">
<strong>豆知識</strong><br/>
フォルダを開くには以下のコマンドが便利です。<br/><br/>
Mac (<strong>ターミナル</strong>)
<pre><code>$ open .</code></pre>
Windows (<strong>Powershell</strong>)
<pre><code>$ start .</code></pre>
</div>

<br />

<br />

次にデータの中から好きなものを選んで編集してください
\`カンマ(,)\` の位置に注意が必要です。画像を参考にしてください。

![image](/tutorial/cells-json.png)

| データ名 | 説明 | 例 | 補足 |
| --- | --- | --- | --- |
| **address** | **変更しないでください** | | |
| **github_id** | 自分の GitHub ユーザー ID | \`"rbdog"\` | まだ誰も使っていない \`null\` のデータを上書きする |
| **color** | 好きな色 (HEX 形式) | \`"#C70067"\` | このサイトがわかりやすい → [colordic.org](https://www.colordic.org/) |
| **text** | 好きな文字 (10 文字以内) | \`"ルビードッグ"\` | この文字が一般に公開されます。名前でなくとも構いません。 |

<br />

<br />

以下のページから、あらかじめ場所を確認できます。

<a href="/honeycomb" class="linkbutton">ハチの巣をみる</a>`,
  },
  {
    slug: "commit",
    title: "手順6. コミット",
    content: `# 6. コミット

![image](/tutorial/stepper-6.png)

作業が終わったらファイルを保存したあと、**commit(コミット)** をします。

![gif](/tutorial/eye-commit.gif)

<br />

## Commit

\`\`\`
$ git add data/cells.json
$ git commit -m "feat: new cell <ユーザーID> #<issue番号>"
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ git add data/cells.json
$ git commit -m "feat: new cell rbdog #2"
\`\`\`

</details>

<br />

<br />

## Pull

コミットが完了したら、最新のハニープロジェクトからデータを取り込んでおきましょう。

\`\`\`
$ git pull --rebase upstream main
\`\`\`

<div class="admonition admonition-danger">
<strong>Conflict について</strong><br/>
このとき、運悪く他の作業者が自分と同じデータを <strong>先に</strong> 編集していたときは <strong>conflict(競合)</strong> が発生します。
競合を起こしてしまうことは悪いことではないので安心してください。
そんなときはもう一度 <code>hunny</code> > <code>data</code> > <code>cells.json</code> を開いて
相手の変更が残るように直してあげてください。譲り合いの精神が大切です。
ファイルを保存したら、
<pre><code>$ git add data/cells.json
$ git rebase --continue</code></pre>
で解決します。
自分が作った変更は消えてしまうので、もう一度前の手順 <code>5.本作業</code> へ戻ってやり直してください。
</div>

<br />

<br />

特に問題なくここまで来れたら、ゴールはあと少しです！`,
  },
  {
    slug: "pull-req",
    title: "手順7. プルリクエスト",
    content: `# 7. プルリクエスト

![image](/tutorial/stepper-7.png)

作業が完了したことを **ハニープロジェクト** へ知らせるため、 **Pull Request(プルリクエスト)** を作成します。

![gif](/tutorial/eye-pull-req.gif)

<br />

## Push

ひとまず作業が完了したデータを GitHub へ送信しておきます

\`\`\`
$ git push origin feat/new_cell_<ユーザーID>_<issue番号>
\`\`\`

<details>
<summary>例</summary>

\`\`\`
$ git push origin feat/new_cell_rbdog_2
\`\`\`

</details>

<div class="admonition admonition-danger">
<strong>ここでエラーが起こったとき</strong><br/>
エラーメッセージ: <code>remote: permission to ...</code><br/><br/>
同様の報告を複数回いただいておりますが、原因を 1 つに絞れておりません。
お手数ですが 該当の issue 内のコメントにてエラーメッセージと一緒に教えてください
</div>

<br />

<br />

## Pull Request を作成

いよいよ最後の工程です。以下のようなプルリクエストを作成しましょう。

- タイトル: \`[PR] feat: new cell <ユーザーID> #<issue番号>\`

例

- タイトル: \`[PR] feat: new cell rbdog #2\`

<br />

![gif](/tutorial/pull-req.gif)

<a href="https://github.com/rubydogjp/hunny/pulls" class="linkbutton">プルリクエストを作成</a>

<br />

## 承認を待つ

あとはコーヒーを飲みながらプルリクエストが承認されるのを待つだけです。
責任者がレビュー確認をしますので、0~2 日お待ちください。
何か依頼された場合は対応をお願いします。`,
  },
  {
    slug: "complete",
    title: "完了",
    content: `![gif](/tutorial/eye-complete.gif)

無事に承認されましたか? おめでとうございます 全ての手順が完了しました。これであなたも一人前の OSS コントリビューター

以下のサイトを確認してみてください。あなたのデータが入っていますね！

<a href="/honeycomb" class="linkbutton">ハチの巣をみる</a>

(反映まで数時間かかることがあります。)

<br />
<br />

GitHub にはたくさんの OSS プロジェクトがあります。
例え少しの作業であったとしても、あなたの力を必要としている OSS がありますので積極的に参加してみてください。
それではお疲れ様でした

<br />
<br />
<br />

## メッセージ

チュートリアルを体験していただきありがとうございます。
一度体験したことは理解が早いものです。
今回はよく分からないコマンドをそのままコピペした方も、次回は 1 つ 1 つのコマンドの意味を勉強しながらやってみましょう。
もう一度何かしたいときは... **手順 3.イシュー** を作るところから始めてください。
2 回目の issue は自由に作っていただいて構いません。\`色を変更したい\` , \`文字を変更したい\` 等

今後も定期的に内容をアップデートしていく予定ですので、何か意見や知りたいことがあれば是非教えてください
この次のページでオススメの OSS プロジェクトを紹介しますので、よろしければそちらもご覧くださいね。`,
  },
  {
    slug: "oss-recommend",
    title: "おまけ. OSSの紹介",
    content: `# OSSプロジェクトのご紹介

GitHubでは、たくさんのOSSプロジェクトが進められています。
ここでは筆者のお気に入りプロジェクトをいくつか紹介していきます。
興味が湧いたら GitHub のページで **issue** を見てみましょう。
何か自分に手伝えそうな話題があったら アサイン してもらえるかどうかコメントで聞いてみてください

## AppFlowy

https://github.com/AppFlowy-IO/AppFlowy

仕事に必要なツールを全て集めたワークスペースとして有名な「Notion」の
オープンソース版として開発されている。
Notionの代替アプリは数多く存在するが、コストをかけずに導入できるOSSの中では最も注目されているプロダクトの一つ。
見た目を作るUIの部分には \`Flutter\` , 裏側の処理を支える部分は \`Rust言語\` を採用。

## Bevy

https://github.com/bevyengine/bevy

\`Rust言語\` で作られている **ゲームエンジン** 。
最近話題になったゲームエンジンのUnity等と比較すると、専用の画面 (エディタ) がないため
まだまだ使いこなすのは難しいが、 \`Rust言語\` 自体に将来性があるので今後の発展に期待。

## Mojo (まだOSS化の準備段階)

https://github.com/modularml/mojo

AI開発のために 2023年に公開されたばかりの新しいプログラミング言語。
プログラミング言語自体がまだ開発中なので、これから勉強を始めても置いていかれる心配はないだろう。
ただし、\`Python\` をベースに資産を引き継いでいるため \`Python\` が苦手な人はやめておいた方がいいかも。

<br />

<div class="admonition admonition-info">
<strong>編集中</strong><br/>
今後のアップデートで追記していきます。
</div>

<br />

## 他にもまだまだ！

- 以下のページでは **プログラミング言語** や **技術キーワードごと** にプロジェクトを検索できます。
- 公開されているからと言ってOSSとは限らないので、ライセンスなどの説明をよく読んでください。

<a href="https://github.com/topics" class="linkbutton">GitHub トピック</a>

<br />

- 以下のページでは **今熱いプロジェクト** が **毎日更新** されています。
- IT系ニュースよりも最新の情報を知りたいならここからどうぞ！

<a href="https://github.com/trending" class="linkbutton">GitHub トレンド</a>`,
  },
  {
    slug: "q-oss",
    title: "Q. OSSとは?",
    content: `# Q. OSS とは?

<div class="admonition admonition-danger">
<strong>注意</strong><br/>
このページは作成途中です。もうしばらくお待ちください。
</div>

参加者が多いほど信頼性は高くなり、長く使い続けられる傾向があります。

![image](/tutorial/oss.png)

しかしコミュニティには上級者が集まるイメージや、海外メンバーの多さから、はじめての参加には少しばかり勇気が必要でしょう。
そこで
に沿って体験していただき、OSS活動をより身近なものとして感じられるように進んでいきます。
使う側ではなく作る側へ..!`,
  },
  {
    slug: "q-suspend-restart",
    title: "Q. チュートリアルの中断/再開",
    content: `# 中断方法

特に何も気にせず中断することができます。

<br />

# 再開方法

### 手順 1~3

特に何も気にせず再開することができます。

### 手順 4~7

ターミナルやパワーシェルのアプリを閉じたときは
再開するときに 以下を入力しなおしてください。

\`\`\`
$ cd hunny
\`\`\`

<br />

- Mac の場合 \`xxx/hunny $\`
- Windows \`¥xxx/hunny>\`

のように \`/hunny\` と表示されていれば OK です。`,
  },
  {
    slug: "q-dispose",
    title: "Q. 終わったファイルは消していいの？",
    content: `# 終わったファイルは消していいの？

はい、消してしまっても問題ありません。

- PC の中に作られた \`hunny\` フォルダごと消すことができます。
- 再び参加したい時は **手順 2 のクローン** からやり直してください。

<br />

また GitHub に不要なリポジトリが残るのを邪魔だと感じる人もいると思います。
そのまま残しておいても邪魔に感じる以外のデメリットは特にありませんが
気になれば以下の URL のページの一番下から削除することが可能です。

\`\`\`
https://github.com/<ユーザーID>/hunny/settings
\`\`\`

リポジトリを削除した後にもう一度参加したい場合は **手順 2 のフォーク** からやり直してください。

<br />

全てそのまま削除せず残す方は、次回は **手順 3** から参加することができます。`,
  },
];
