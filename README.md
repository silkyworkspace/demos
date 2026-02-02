# demos

## カードレイアウトサンプル01
アトラクションの説明
- カード3枚をフレックスで横並び
- dlにグリッドを設定し、dtが複数行になってもddの位置を揃える

https://silkyworkspace.github.io/demos/card-layout01

## ドロワーメニュー01
ドロワーメニュー
- PCはナビゲーションが横並び
- TB/SPはドロワーメニュー
- 3本線の色を開閉時に変更する
- PCではヘッダーを固定
- モバイルファーストで作成

https://silkyworkspace.github.io/demos/drawer-menu01

## ログイン01
- ログイン画面のバリデーション
- input・blur・submitの組み合わせ
- パスワードの表示・非表示

https://silkyworkspace.github.io/demos/login-validation01

## vertical-align
- vertical-alignの値の違いを確認
- 画像の場合
- テーブルの場合

https://silkyworkspace.github.io/demos/vertical-align

## すりガラス風ヘッダー
-  `backdrop-filter: blur(**px);`の利用
-  `background-color`は不透明度を0.5などに調整

https://silkyworkspace.github.io/demos/header-frosted-glass01

## 画像上にテキストを表示(HTMLとCSSのみ)
- デフォルト（hover非対応：スマホ/タブレット想定）説明文は画像の「下」に常時表示
- `@media (hover: hover)` hover対応デバイスだけ上書き 説明文は画像の上に重ね、hover時のみ表示

https://silkyworkspace.github.io/demos/hover-text-css

## 画像上にテキストを表示(HTMLとCSSとJS)
- positionで画像とテキストを重ねる
- jsで`.is-active`クラスを付与と削除
- jsでタッチデバイスかどうかの判定
- タッチデバイスの場合は、クリックイベント。PCの場合はマウスの出入りを検知

https://silkyworkspace.github.io/demos/hover-text-js


## ログイン画面
- 二重送信防止
- 入力値のバリデーション
- 擬似ログインAPI(関数で作成)を利用
- 正規表現

https://silkyworkspace.github.io/demos/login

## モーダル
- ボタンをクリックすると、クラスの追加・削除によってモーダルが表示/非表示
- 以下のいずれかの方法で閉じることができます
    - ×ボタンをクリック
    - 背景（オーバーレイ）をクリック
    - ESCキーを押す
    - 「閉じる」ボタンをクリック

https://silkyworkspace.github.io/demos/modal
