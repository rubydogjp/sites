# Rubydog Sites

rubydog.jp トップページを管理するリポジトリ。

## デプロイ

`main` ブランチで開発し、`apex` ブランチへ push するとデプロイされる。

```
main (開発) ──push──→ apex → rubydog.jp をデプロイ
```

## サブサイト

各サブサイトは独立したリポジトリで管理・デプロイされる。

| URL | リポジトリ |
|---|---|
| `hunny.rubydog.jp` | [rubydogjp/hunny](https://github.com/rubydogjp/hunny) |
| `flutter-note.rubydog.jp` | [rbdog/flutter_note](https://github.com/rbdog/flutter_note) |
| `rubydogjp-packages.web.app` | [rubydogjp/packages](https://github.com/rubydogjp/packages) |

## Firebase Hosting

| ターゲット | サイト ID | ドメイン |
|---|---|---|
| `apex` | `rubydog-sites` | `rubydog.jp` |
