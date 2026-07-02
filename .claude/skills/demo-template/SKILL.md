---
name: demo-template
description: このリポジトリ（各フォルダ1デモの構成）に新しいデモ用フォルダを追加する。header/section/footerの共通骨組みとdestyle.css・共通CSSだけを持つ最小限のテンプレートを新規フォルダにコピーし、具体的なコンテンツ（レイアウト・画像・テキスト・JS）はデモごとにユーザーの要望を聞きながら実装する。新しいデモを追加したいときに使う。
---

# demo-template

このリポジトリは `/Users/sawa/demos/<デモ名>/` という形で、デモごとに独立したフォルダを作って実装している（例: `hover-text-js`, `header-frosted-glass01`, `mask-wave-faq01`）。
このSkillは、その「毎回同じ土台」の部分だけをテンプレートとして提供し、デモ固有の実装（グリッドか、カードか、モーダルか等）は含めない。

## テンプレートに含まれるもの / 含まれないもの

含まれる（`template/` 配下）:
- `index.html` — `<header><h1>` / `<main><section class="section"><h2>` / `<footer>` だけのシンプルな骨組み
- `css/reset.css` — destyle.css（全デモ共通、変更しない）
- `css/style.css` — body/img/見出し/header/.section/footerの最低限の共通スタイルのみ。グリッドやカードなど個別レイアウトのCSSは含めない

含まれない（都度実装する）:
- `<section>` の中身（グリッド、カード、フォームなど、デモごとに異なる具体的なマークアップ）
- 各デモ固有のCSS（`css/style.css` に追記していく）
- JS（必要なデモの場合のみ `js/script.js` を新規作成し、`index.html` の `<head>` に `<script type="module" src="js/script.js"></script>` を追記する）
- 画像（`images/` フォルダは必要になった時点で作成する）

## 手順

1. ユーザーに新しいデモのフォルダ名を確認する（例: `card-flip01`）。`/Users/sawa/demos/<フォルダ名>/` が既に存在する場合は上書きしないよう確認する。

2. `.claude/skills/demo-template/template/` 配下（`index.html`, `css/reset.css`, `css/style.css`）を `/Users/sawa/demos/<フォルダ名>/` にコピーする。

3. コピーした `index.html` の `{{PAGE_TITLE}}` / `{{PAGE_HEADING}}` / `{{SECTION_HEADING}}` をデモの内容に合わせて書き換える。

4. ユーザーが伝えたデモの内容（レイアウト、参考画像、必要な機能など）に応じて、`<section>` の中身・`css/style.css` への追記・必要なら `js/script.js` を実装する。既存デモ（`hover-text-js` など）の実装パターンを参考にしてよいが、コピー元テンプレートには含めない。

5. 画像が必要な場合、既存デモの画像（例: `hover-text-js/images/`）を流用してよいかユーザーに確認する。よければコピーし、新規画像が必要な場合は `images/` フォルダへの配置をユーザーに依頼する（画像ファイル自体は生成しない）。

6. 完成後、`README.md` に他のデモと同じ形式（見出し・特徴の箇条書き・GitHub Pagesリンク）でセクションを追記する。
