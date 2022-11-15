function d3Draw(dataset){


Width=1500;
Height=2000;
var svg= d3.select("body").append("svg")
   .attr("width",Width)
   .attr("Height",Height);

var circles=svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle");

circles.attr("cx", function(d){
    return d.x;
} )
.attr("cy",function(d){
    return d.y;
} )
.attr("r", function(d){
    return d.r;
} );

}

function loadData(){
   d3.json("http://35.241.142.116/Circles/Circles/50",function(error,data){
   if (error){
      console.log(error)
   }else{
      d3Draw(data);
      }
}
);
}


window.onload= loadData;
