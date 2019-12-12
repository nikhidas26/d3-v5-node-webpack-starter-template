import * as d3 from 'd3';
import $ from 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'webpack-icons-installer/bootstrap';
import './css/style.css';


$(window).on("load", () => {

  let data = [
    {x: 10,	y: 10},
  {x: 10,	y: 20},
{x: 10,	y: 30},
{x: 10,	y: 40},
{x: 10,	y: 50},
{x: 10,	y: 80},
{x: 10,	y: 90},
{x: 10,	y: 100},
{x: 10,	y: 110},
{x: 20,	y: 30},
{x: 20,	y: 120},
{x: 30,	y: 10},
{x: 30,	y: 20},
{x: 30,	y: 30},
{x: 30,	y: 40},
{x: 30,	y: 50},
{x: 30,	y: 80},
{x: 30,	y: 90},
{x: 30,	y: 100},
{x: 30,	y: 110},
{x: 40,	y: 120},
{x: 50,	y: 10},
{x: 50,	y: 20},
{x: 50,	y: 30},
{x: 50,	y: 40},
{x: 50,	y: 50},
{x: 50,	y: 80},
{x: 50,	y: 90},
{x: 50,	y: 100},
{x: 50,	y: 110},
{x: 60,	y: 10},
{x: 60,	y: 30},
{x: 60,	y: 50},
{x: 70,	y: 10},
{x: 70,	y: 30},
{x: 70,	y: 50},
{x: 70,	y: 90},
{x: 70,	y: 100},
{x: 70,	y: 110},
{x: 80,	y: 80},
{x: 80,	y: 120},
{x: 90,	y: 10},
{x: 90,	y: 20},
{x: 90,	y: 30},
{x: 90,	y: 40},
{x: 90,	y: 50},
{x: 90,	y: 80},
{x: 90,	y: 120},
{x: 100,	y: 50},
{x: 100,	y: 90},
{x: 100,	y: 100},
{x: 100,	y: 110},
{x: 110,	y: 50},
{x: 120,	y: 80},
{x: 120,	y: 90},
{x: 120,	y: 100},
{x: 120,	y: 110},
{x: 120,	y: 120},
{x: 130,	y: 10},
{x: 130,	y: 20},
{x: 130,	y: 30},
{x: 130,	y: 40},
{x: 130,	y: 50},
{x: 130,	y: 80},
{x: 130,	y: 100},
{x: 140,	y: 50},
{x: 140,	y: 80},
{x: 140,	y: 100},
{x: 140,	y: 110},  
{x: 150,	y: 50},
{x: 150,	y: 90},
{x: 150,	y: 120},
{x: 170,	y: 20},
{x: 170,	y: 30},
{x: 170,	y: 40},
{x: 170,	y: 80},
{x: 170,	y: 90},  
{x: 170,	y: 100},
{x: 170,	y: 110},
{x: 170,	y: 120},
{x: 180,	y: 10},
{x: 180,	y: 50},
{x: 180,	y: 120},
{x: 190,	y: 10},
{x: 190,	y: 50},
{x: 190,	y: 120},
{x: 200,	y: 20},
{x: 200,	y: 30},  
{x: 200,	y: 40},
{x: 210,	y: 80},
{x: 210,	y: 90},
{x: 210,	y: 100},
{x: 210,	y: 110},  
{x: 210,	y: 120},
{x: 220,	y: 80},  
{x: 220,	y: 120},
{x: 230,	y: 80},  
{x: 230,	y: 120},
{x: 240,	y: 90},
{x: 240,	y: 100},  
{x: 240,	y: 110},
{x: 270,	y: 70},
{x: 270,	y: 80},
{x: 270,	y: 90},
{x: 270,	y: 100},  
{x: 270,	y: 120}
  ];


  let svg = d3.select("#canvas")
              .append("svg")
                .attr("width", 800)
                .attr("height", 600);

  svg.append("rect")
      .attr("width", 80)
      .attr("height", 100);
      
  let circles = svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 5)
      .style("fill", "blue");

      timer();

  function timer() {

        data = data.map(i => {
           i.x = i.x + 50;
           i.y = i.y + 40;
           return i;
         });
   
   
         circles
           .data(data)
           .transition()
           .duration(1000)
           .attr("cx", d => d.x)
           .attr("cy", d => d.y )
           .attr("r", 5)
           .style("fill", function() {
             return "hsl(" + Math.random() * 180 + ",100%,50%)";
           });
   
         setTimeout(timer, 1000);
       }
});

