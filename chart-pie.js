import "https://cdn.plot.ly/plotly-2.15.1.min.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
//import { summarise } from "./summarise.js";

// https://github.com/code4fukui/fukui-kanko-stat/issues/18
const colors0 = [
  "#A4BBBD",
  "#98ADBF",
  "#EAB9AF",
  "#DD725A",
  "#EEB259",
  "#EEE358",
];
const colors = [...colors0];
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < colors0.length; j++) {
    colors.push(colors0[j]);
  }
}

class ChartPie extends HTMLElement {
  constructor(data) {
    super();
    if (data !== undefined) {
      this.setData(data);
    } else {
      const src = this.getAttribute("src");
      if (src) {
        this.init(src);
      } else {
        const txt = this.textContent.trim();
        const csv = CSV.toJSON(CSV.decode(txt));
        this.setCSV(csv);
      }
    }
  }

  setCSV(csv) {
    const data = {};
    for (const d of csv) {
      data[d.name] = d.value || d.count;
    }
    this.setData(data);
  }
  
  setData(data0) {
    const data1 = data0; // summarise(data0, 20);
    // データを降順にソートして、チャートの色もソート順に色付けするようにする
    const labels = Object.keys(data1).sort((d1, d2) => {
      if (data1[d1] > data1[d2]) {
        return -1;
      }
      if (data1[d1] < data1[d2]) {
        return 1;
      }
      return 0;
    });
    const values = labels.map((l) => {
      return data1[l];
    });
    
    const data = [{
      type: "pie",
      values,
      labels,
      textinfo: "label+percent",
      //textposition: "outside", // ラベルが線を引いて円グラフの外
      textposition: "inside", // ラベルが円グラフの中
      insidetextorientation: "radial",
      
      //showlegend: false,
      showlegend: true,
      direction: 'clockwise',
      
      marker: { colors },
    }];
    
    Plotly.newPlot(this, data);
  }
  async init(src) {
    const csv = CSV.toJSON(await CSV.fetch(src));
    this.setCSV(csv);
  }
}

customElements.define("chart-pie", ChartPie);

export { ChartPie };
