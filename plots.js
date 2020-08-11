var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);

var numbers = [0, 2, 4, 6, 8];
var x = numbers.map(function (element) {
  return element + 5;
});
console.log(x);

var numbers = [1, 2, 3, 4, 5];

var larger = numbers.filter(function (num) {
  return num > 1;
});

console.log(larger);

/*
var xyTrace = { x: [1, 2, 3], y: [10, 20, 30] };
var traceArray = [xyTrace];
Plotly.newPlot("plotArea", traceArray);
*/

/*
var trace = {
  labels: [
    "nonalcoholic beer",
    "nonalcoholic wine",
    "nonalcoholic martini",
    "nonalcoholic margarita",
    "ice tea",
    "nonalcoholic rum & coke",
    "nonalcoholic mai tai",
    "nonalcoholic gin & tonic",
  ],
  values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "pie",
};
var data = [trace];
var layout = {
  title: "'Bar' Chart",
};
Plotly.newPlot("plotArea", data, layout);
*/

/*
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  type: "scatter",
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
  type: "scatter",
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
  type: "scatter",
};

var data = [trace1, trace2, trace3];

Plotly.newPlot("plotArea", data);
*/
