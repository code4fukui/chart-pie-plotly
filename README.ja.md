# chart-pie-plotly

Plotly.jsを使用してレスポンシブな円グラフを描画するためのカスタムHTML要素 `<chart-pie>` です。

このプロジェクトは [code4fukui/chart-pie](https://github.com/code4fukui/chart-pie) のフォークです。

## デモ

https://code4fukui.github.io/chart-pie-plotly/

## 機能

- **宣言的な使用:** `<chart-pie>` タグを使用して、HTML内に直接チャートを作成できます。
- **データ駆動:** 外部CSVファイル（`src` 属性）またはインラインのCSVデータからチャートを描画します。
- **プログラマティックAPI:** JavaScriptを使用してインスタンス化し、制御することができます。
- **自動ソート:** スライスは値の降順に自動的にソートされます。
- **カスタマイズ可能:** チャートのサイズ、凡例の表示/非表示、ラベルの内容を制御できます。

## 要件

- [Plotly.js](https://plotly.com/) （コンポーネントによって自動的に読み込まれます）
- [CSV.js](https://js.sabae.cc/CSV.js) （コンポーネントによって自動的に読み込まれます）

## 使い方

### 1. スクリプトの読み込み

HTMLファイルに `chart-pie.js` スクリプトをモジュールとして追加します。

```html
<script type="module" src="./chart-pie.js"></script>
```

### 2. カスタム要素の使用

#### 外部CSVファイルからの読み込み

`src` 属性を使用してデータファイルを指定します。CSVには `name` と `value` （または `count`）という列が必要です。

```html
<chart-pie src="./data.csv" style="width:100%; height:400px;"></chart-pie>
```

#### インラインCSVデータの使用

CSVデータを直接 `<chart-pie>` 要素内に配置します。

```html
<chart-pie style="height:400px; width:95vw;">
name,count
農林水産業,96777
行財政,47496
司法・安全・環境,44875
企業・家計・経済,28641
教育・文化・スポーツ・生活,28012
情報通信・科学技術,20507
</chart-pie>
```

#### JavaScriptによるプログラマティックな使用

JavaScriptを使用してチャートを作成および設定することもできます。これは動的なデータを扱う際に便利です。

```html
<div id="chart-container"></div>

<script type="module">
  import { ChartPie } from "./chart-pie.js";

  const data = {
    "A": 30,
    "B": 20,
    "C": 70,
  };

  const options = {
    width: 500,
    showlegend: false,
    textinfo: "percent" // 例: "label", "value", "label+percent"
  };

  const chart = new ChartPie(data, options);
  document.getElementById("chart-container").appendChild(chart);
</script>
```

## カスタマイズ

### データ形式

- **CSV:** ラベルと値の列を持つヘッダー行が含まれている必要があります。コンポーネントは `name` と `value`、または `name` と `count` という列を探します。
- **JavaScriptオブジェクト:** キーがラベル、値が対応するチャートの値となるシンプルなKey-Valueオブジェクトです。

### JavaScriptオプション

JavaScriptでチャートを作成する際、`ChartPie` コンストラクタにオプションオブジェクトを渡すことができます。

- `width` (Number): チャートの幅（ピクセル単位）を設定します。
- `showlegend` (Boolean): チャートの凡例の表示/非表示を切り替えます。デフォルトは `true` です。
- `textinfo` (String): 円グラフのスライスに表示されるテキストを定義します。Plotly.jsの `textinfo` プロパティに対応します（例: `"label+percent"`, `"value"`, `"none"`）。デフォルトは `"label+percent"` です。

### スタイリング

`style` 属性または外部スタイルシートを使用し、`<chart-pie>` 要素に対して標準のCSSプロパティ（`width`, `height`）を指定することで、チャートのサイズを設定します。

```css
chart-pie {
  width: 100%;
  max-width: 800px;
  height: 50vh;
}
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
