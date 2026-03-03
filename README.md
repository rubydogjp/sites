# Rubydog Sites

Firebase Hosting マルチサイトで複数サイトを管理するリポジトリ。

## 開発とデプロイ

**`main` ブランチで開発**し、デプロイ時に対応するブランチへ push する。

```
main (開発) ──push──→ apex     → rubydog.jp をデプロイ
                   → hunny    → hunny.rubydog.jp をデプロイ
                   → notes    → flutter-note.rubydog.jp をデプロイ
                   → packages → rubydogjp-packages.web.app をデプロイ
```

各ブランチは同じファイルを持つ。ブランチはデプロイのトリガーとして分けているだけ。

## サイト一覧

| URL | 内容 | ソース |
|---|---|---|
| `rubydog.jp` | トップページ | `apex/` |
| `hunny.rubydog.jp` | 共同開発教材 | `hunny/` |
| `flutter-note.rubydog.jp` | Flutter 教材アプリ | GitHub [`rbdog/flutter_note`](https://github.com/rbdog/flutter_note) (CI で clone) |
| `rubydogjp-packages.web.app` | Flutter パッケージデモ | `packages/` |

`rubydog.jp/hunny`、`/notes`、`/packages` はそれぞれの独立ドメインへの紹介ページ。

## デプロイトリガー

| ブランチ | CI ワークフロー | デプロイ先 |
|---|---|---|
| `apex` | `deploy-apex.yml` | `rubydog.jp` |
| `hunny` | `deploy-hunny.yml` | `hunny.rubydog.jp` |
| `notes` | `deploy-notes.yml` | `flutter-note.rubydog.jp` |
| `packages` | `deploy-packages.yml` | `rubydogjp-packages.web.app` |

各ブランチは独立した CI を持ち、対応するサイトのみをデプロイする。

## ディレクトリ構成

```
sites/
  apex/             トップページ (Astro)
  hunny/            共同開発教材 (Docusaurus + Flutter viewer)
  notes/            説明のみ (ソースは CI で外部 clone)
  packages/         Flutter パッケージデモ (virtual_phone を GitHub git 依存)
```

## Firebase Hosting ターゲット

| ターゲット | サイト ID | ドメイン |
|---|---|---|
| `apex` | `rubydog-sites` | `rubydog.jp` |
| `hunny` | `rubydogjp-hunny` | `hunny.rubydog.jp` |
| `flutter-note` | `rubydogjp-flutter-note` | `flutter-note.rubydog.jp` |
| `packages` | `rubydogjp-packages` | (カスタムドメイン未設定) |
