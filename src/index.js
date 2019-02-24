import * as d3 from 'd3';
import $ from 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'webpack-icons-installer/bootstrap';
import './css/style.css';


$(window).on("load", () => {



  // D3 sample code to draw circles 
 var svgContainer = d3.select("body").append("svg")
    .attr("width", 1000)
    .attr("height", 1000);
  

  console.log("hello");

  var data = [32, 57, 293, 900];

  d3.select("svg").selectAll("circle")
      .data(data)
    .enter().append("circle")
    .attr("cy", 90)
    .attr("cx", String)
    .attr("r", Math.sqrt);



});