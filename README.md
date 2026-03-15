# chart-pie-plotly

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript library for creating pie charts using Plotly.js.

## Demo
https://code4fukui.github.io/chart-pie-plotly/

## Features
- Create pie charts from CSV or JSON data
- Customizable options for chart appearance
- Ability to summarize data and limit the number of slices

## Requirements
- [Plotly.js](https://plotly.com/)

## Usage
To use the `<chart-pie>` custom HTML element, include the `chart-pie.js` file and the Plotly.js library:

```html
<script type="module" src="./chart-pie.js"></script>
<chart-pie src="./data.csv"></chart-pie>
```

You can also pass the data directly to the element:

```html
<chart-pie>
name,value
A,30
B,20
C,70
</chart-pie>
```

Refer to the project's documentation for more advanced usage and customization options.

## License
This project is licensed under the MIT License.