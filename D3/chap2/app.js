d3.json("./tweets.json", (error, data) => {

	if(error) {
		console.log(error);
	}
	else {
		dataViz(data.tweets);
	}
});


// function dataViz(incomingData) {

// 	var maxPopulation = d3.max(incomingData, d => parseInt(d.population));
// 	var yScale = d3.scaleLinear().domain([0,maxPopulation]).range([0,460]);

// 	d3.select("svg").attr("style", "height: 480px; width: 600px;");

// 	d3.select("svg")
// 		.selectAll("rect")
// 		.data(incomingData)
// 		.enter()
// 		.append("rect")
// 			.attr("width", 50)
// 			.attr("height", d => yScale(parseInt(d.population)))
// 			.attr("x", (d,i) => i*60)
// 			.attr("y", d => 480 - yScale(parseInt(d.population)))
// 			.style("fill", "#E9922")
// 			.style("stroke", "#9A8B7A")
// 			.style("stroke-width", "1px")
// }

function dataViz(incomingData){

	incomingData.forEach(d => {
		d.impact = d.favorites.length + d.retweets.length;
		d.tweetTime = new Date(d.timestamp);
	})

	console.log(incomingData);

	var maxImpact = d3.max(incomingData, d => d.impact);
	var startEnd = d3.extent(incomingData, d => d.tweetTime);
	var timeRamp = d3.scaleTime().domain(startEnd).range([20,480]);
	var yScale = d3.scaleLinear().domain([0,maxImpact]).range([0,460]);

	var radiusScale = d3.scaleLinear().domain([0,maxImpact]).range([1,20]);
	var colorScale = d3.scaleLinear().domain([0,maxImpact]).range("white", "#75739F");


	d3.select("svg").attr("style", "height: 480px; width: 600px;");

	d3.select("svg")
		.selectAll("circle")
		.data(incomingData)
		.enter()
		.append("circle")
			.attr("r", d => radiusScale(d.impact))
			.attr("cx", d => timeRamp(d.tweetTime))
			.attr("cy", d => 480 - yScale(d.impact))
				.style("fill", d => colorScale(d.impact))
				.style("stroke", "black")
				.style("stroke-width", "1px");




}