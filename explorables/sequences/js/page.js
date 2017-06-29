var vizSelection = d3.select("#viz");

var svgSelection = vizSelection.append("svg")
 	.attr("width", 100)
 	.attr("height", 100);
 
var circleSelection = svgSelection.append("circle")
 	.attr("cx", 25)
 	.attr("cy", 25)
 	.attr("r", 25)
 	.style("fill", "purple");

console.log("processing stuff");