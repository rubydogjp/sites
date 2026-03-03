# Rubydog Sites

Firebase Hosting マルチサイトで複数サイトを管理するリポジトリ。

## サイト一覧

| URL | 内容 | ソース | ブランチ |
|---|---|---|---|
| `rubydog.jp` | トップページ | `apex/` | `apex` |
| `rubydog.jp/notes` | Flutter 教材アプリ | GitHub `rbdog/flutter_note` | `apex` |
| `rubydog.jp/hunny` | 共同開発教材 | `hunny/` (`hunny` ブランチ) | `apex` |
| `rubydog.jp/packages` | Flutter パッケージデモ | `packages/` (`packages` ブランチ) | `apex`, `packages` |
| `hunny.rubydog.jp` | 共同開発教材 (独立) | `hunny/` | `hunny` |
| `flutter-note.rubydog.jp` | Flutter 教材アプリ (独立) | GitHub `rbdog/flutter_note` | `notes` |

## ブランチとデプロイ

| ブランチ | push 時の動作 |
|---|---|
| `apex` | `rubydog.jp` 全体をデプロイ (`/`, `/notes`, `/hunny`, `/packages`) |
| `hunny` | `hunny.rubydog.jp` をデプロイ |
| `notes` | `flutter-note.rubydog.jp` をデプロイ |
| `packages` | `rubydog.jp` 全体をデプロイ (`/packages` の更新) |

## Firebase Hosting ターゲット

| ターゲット | サイト ID | ドメイン |
|---|---|---|
| `apex` | `rubydog-sites` | `rubydog.jp` |
| `hunny` | `rubydogjp-hunny` | `hunny.rubydog.jp` |
| `flutter-note` | `rubydogjp-flutter-note` | `flutter-note.rubydog.jp` |

## apex デプロイの構成

`deploy-apex.yml` は以下を組み立てて `apex/dist/` にまとめてデプロイする:

```
apex/dist/
  index.html          ... apex サイト (Node ビルド)
  notes/              ... flutter_note (GitHub clone → Flutter web ビルド)
  hunny/              ... Docusaurus (hunny ブランチ checkout)
    viewer/           ... Flutter viewer
  packages/           ... Flutter パッケージデモ (packages ブランチ checkout)
```

## ソース参照方式

| サイト | 方式 |
|---|---|
| apex | リポジトリ内 `apex/` |
| hunny | リポジトリ内 `hunny/` (hunny ブランチから checkout) |
| notes | 外部リポジトリ `rbdog/flutter_note` を CI で clone |
| packages | リポジトリ内 `packages/` (packages ブランチから checkout) |
