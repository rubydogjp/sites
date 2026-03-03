# Rubydog Sites

Firebase Hosting マルチサイトで複数サイトを管理するリポジトリ。

## 開発とデプロイ

**`main` ブランチで開発**し、デプロイ時に対応するブランチへ push する。

```
main (開発) ──push──→ apex     → rubydog.jp 全体をデプロイ
                   → hunny    → hunny.rubydog.jp をデプロイ
                   → notes    → flutter-note.rubydog.jp をデプロイ
                   → packages → rubydogjp-packages.web.app をデプロイ
```

各ブランチは同じファイルを持つ。ブランチはデプロイのトリガーとして分けているだけ。

## サイト一覧

| URL | 内容 | ソース |
|---|---|---|
| `rubydog.jp` | トップページ | `apex/` |
| `rubydog.jp/notes` | Flutter 教材アプリ | GitHub [`rbdog/flutter_note`](https://github.com/rbdog/flutter_note) (CI で clone) |
| `rubydog.jp/hunny` | 共同開発教材 | `hunny/` |
| `rubydog.jp/packages` | Flutter パッケージデモ | `packages/` |
| `hunny.rubydog.jp` | 共同開発教材 (独立ドメイン) | `hunny/` |
| `flutter-note.rubydog.jp` | Flutter 教材アプリ (独立ドメイン) | GitHub [`rbdog/flutter_note`](https://github.com/rbdog/flutter_note) (CI で clone) |
| `rubydogjp-packages.web.app` | Flutter パッケージデモ (独立ドメイン) | `packages/` |

## デプロイトリガー

| ブランチ | CI ワークフロー | デプロイ先 |
|---|---|---|
| `apex` | `deploy-apex.yml` | `rubydog.jp` (`/`, `/notes`, `/hunny`, `/packages`) |
| `hunny` | `deploy-hunny.yml` | `hunny.rubydog.jp` |
| `notes` | `deploy-notes.yml` | `flutter-note.rubydog.jp` |
| `packages` | `deploy-packages.yml` | `rubydogjp-packages.web.app` |

`apex` は rubydog.jp 全体を組み立ててデプロイする。個別ブランチは対応する独立ドメインのみをデプロイし、rubydog.jp には影響しない。

## ディレクトリ構成

```
sites/
  apex/             Apex トップページ (Node.js)
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

## apex デプロイの構成

`deploy-apex.yml` は以下を組み立てて `apex/dist/` にまとめてデプロイする:

```
apex/dist/
  index.html        ... apex サイト (Node ビルド)
  notes/            ... flutter_note (GitHub clone → Flutter web ビルド)
  hunny/            ... Docusaurus + Flutter viewer
    viewer/
  packages/         ... Flutter パッケージデモ
```
