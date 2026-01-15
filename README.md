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
- positionで画像とテキストを重ねる
- 通常時は、テキスト部分の`opacity: 0;`
- hover時は、テキスト部分の`opacity: 1;`にする
- メディアクエリで768px以下なら`position: static;`に戻し、テキストは常に表示
https://silkyworkspace.github.io/demos/hover-text-css

## 画像上にテキストを表示(HTMLとCSSとJS)
- positionで画像とテキストを重ねる
- jsで`.is-active`クラスを付与と削除
- jsでタッチデバイスかどうかの判定
- タッチデバイスの場合は、クリックイベント。PCの場合はマウスの出入りを検知
https://silkyworkspace.github.io/demos/hover-text-js