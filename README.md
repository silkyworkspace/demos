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

## Select Box スタイリング デモ
- ネイティブ select + CSS装飾（`appearance: none` + SVGアイコン・optgroup）
- カスタムドロップダウン（div + JS で再実装・hidden input でフォーム送信対応）
- size属性で常に展開（`size="N"` によるリスト表示・`option:checked` のスタイリング）
- タグ型マルチ選択（チップUIで追加・削除・hidden input でフォーム送信対応）

https://silkyworkspace.github.io/demos/select-custom


## セクション間 波型区切り デモ
- CSSの`mask`は使わず、Figmaで作成した波形SVG（色を含む）を疑似要素`::after`の`background-image`として配置する方式
- 色はSVG側に焼き込まれているため、CSS側での色指定が不要
- 波は「次に来る色で、自分のセクションの下端（`bottom: 0`）に配置する」というルールに統一。次セクション側を負の`top`でせり上げる実装だと数値のズレが隙間になり、SP/TBで崩れていたため、bottom基準にして波をセクション内部で完結させた
- SVGに`preserveAspectRatio="none"`を明示。これがないと`background-size: 100% 100%`で指定しても一部ブラウザでアスペクト比補正が働き、要素の縦横比がSVGの比率から離れるSP/TB幅で下端にごく薄い透過（隙間）が生じていた

https://silkyworkspace.github.io/demos/section-wave01

## CSS mask 波形グラデーション区切り デモ
- 背景専用レイヤー`.wave-section__bg`に`mask-image`で波形SVG（形のみ、白黒）を適用し、`background`にグラデーションを指定
- マスクは形だけを担当し、色はCSS側の`linear-gradient`で自由に変更できるため、セクションごとに配色違いのバリエーションを作りやすい
- セクション自体を波の高さ分だけ前セクションに`margin-top`でめり込ませることで、波の凹み部分に前セクションの背景が回り込み、隙間なく連結される

https://silkyworkspace.github.io/demos/section-wave02
