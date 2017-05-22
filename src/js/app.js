require("../stylesheets/style.scss");

var d3 = require("d3");
console.log(d3 == undefined);


var sampleSVG = d3.select("#viz")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);    

sampleSVG.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");});