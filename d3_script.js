let margin = { top: 20, right: 20, bottom: 70, left: 70},
    width = window.innerWidth - margin.left - margin.right,
    height =  window.innerHeight - margin.top - margin.bottom;

let svg = d3.select("#myChart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", 
      "translate(" + margin.left + "," + margin.top + ")");
  

d3.csv("apples_data.csv").then(apples => {

  let x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
  let y = d3.scaleLinear()
            .range([height, 0]);
  x.domain(apples.map(apple => apple.name));
  y.domain([0, d3.max(apples, apple => +apple.grams)]);
  
  
  svg.selectAll()
    .data(apples)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr('fill', d=> d.col)
    .attr("x", d => x(d.name))
    .attr("width", x.bandwidth())
    .attr("y", d => y(d.grams))
    .attr("height", d => height - y(d.grams))
    .on('mouseenter', function (d, i) {
      d3.select(this).attr('opacity', .5)
    })
    .on('mouseleave', function (d, i) {
        d3.select(this).attr('opacity', 1)
    })
    

  
  // add the x Axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
  
  // add the y Axis
  svg.append("g")
    .call(d3.axisLeft(y));
})
