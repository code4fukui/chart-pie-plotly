# chart-pie-plotly

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element `<chart-pie>` for rendering responsive pie charts using Plotly.js.

This project is a fork of [code4fukui/chart-pie](https://github.com/code4fukui/chart-pie).

## Demo

https://code4fukui.github.io/chart-pie-plotly/

## Features

-   **Declarative Usage:** Create charts directly in your HTML using the `<chart-pie>` tag.
-   **Data-driven:** Renders charts from an external CSV file (`src` attribute) or inline CSV data.
-   **Programmatic API:** Can be instantiated and controlled with JavaScript.
-   **Automatic Sorting:** Slices are automatically sorted in descending order by value.
-   **Customizable:** Control chart dimensions, legend visibility, and label content.

## Requirements

-   [Plotly.js](https://plotly.com/) (loaded automatically by the component)
-   [CSV.js](https://js.sabae.cc/CSV.js) (loaded automatically by the component)

## Usage

### 1. Include the script

Add the `chart-pie.js` script to your HTML file as a module.

```html
<script type="module" src="./chart-pie.js"></script>
```

### 2. Use the Custom Element

#### From an external CSV file

Use the `src` attribute to point to your data file. The CSV must have columns named `name` and `value` (or `count`).

```html
<chart-pie src="./data.csv" style="width:100%; height:400px;"></chart-pie>
```

#### From inline CSV data

Place your CSV data directly inside the `<chart-pie>` element.

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

#### Programmatically with JavaScript

You can also create and configure a chart using JavaScript. This is useful for dynamic data.

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
    textinfo: "percent" // e.g., "label", "value", "label+percent"
  };

  const chart = new ChartPie(data, options);
  document.getElementById("chart-container").appendChild(chart);
</script>
```

## Customization

### Data Format

-   **CSV:** Must contain a header row with columns for labels and values. The component looks for `name` and `value` or `name` and `count`.
-   **JavaScript Object:** A simple key-value object where keys are labels and values are the corresponding chart values.

### JavaScript Options

When creating a chart programmatically, you can pass an options object to the `ChartPie` constructor:

-   `width` (Number): Sets the width of the chart in pixels.
-   `showlegend` (Boolean): Toggles the chart legend. Defaults to `true`.
-   `textinfo` (String): Defines the text shown on the pie slices. Corresponds to the Plotly.js `textinfo` property (e.g., `"label+percent"`, `"value"`, `"none"`). Defaults to `"label+percent"`.

### Styling

Set the size of the chart using standard CSS properties (`width`, `height`) on the `<chart-pie>` element, either with a `style` attribute or an external stylesheet.

```css
chart-pie {
  width: 100%;
  max-width: 800px;
  height: 50vh;
}
```

## License

MIT License — see [LICENSE](LICENSE).