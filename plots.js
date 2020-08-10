// Define the x and y arrays in separate variables:
var xArray = [1, 2, 3];
var yArray = [10, 20, 30];

// Use the x and y array variables as the values in a plotObject variable:
var plotObject = { x: xArray, y: yArray };

// Store the plotObject inside a plotArray:
var plotArray = [plotObject];

// Use the plotArray as the second argument of the Plotly.newPlot() function:
Plotly.newPlot("plotArea", plotArray);

//This is exactly the same as the original code:

//Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);
