console.log('hello')


let choropleth_width = 960;
let choropleth_height = 500;

let choropleth_lowColor = '#f9f9f9'
let choropleth_highColor = '#bc2a66'

let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    , width = window.innerWidth - margin.left - margin.right // Use the window's width 
    , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height



d3.csv("http://localhost:9000/dataloc/accidenttest.csv")
    .then(function (data) {
        let n = data.length

        let xScale = d3.scaleLinear()
            .domain([0, n - 1]) // input
            .range([0, width]); // output

        let yScale = d3.scaleLinear()
            .domain([0, 7]) // input 
            .range([height, 0]); // output 

        let line = d3.line()
            .x(function (d, i) { return xScale(i); }) // set the x values for the line generator
            .y(function (d) { return yScale(d.Day_of_Week); }) // set the y values for the line generator 
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        // let dataset = d3.range(n).map(function (d) { return { "y": d3.randomUniform(1)() } })
        let svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom


        svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

        // 9. Append the path, bind the data, and call the line generator 
        svg.append("path")
            .datum(data) // 10. Binds data to the line 
            .attr("class", "line") // Assign a class for styling 
            .attr("d", line); // 11. Calls the line generator 

        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle") // Uses the enter().append() method
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", function (d, i) { return xScale(i) })
            .attr("cy", function (d) { return yScale(d.y) })
            .attr("r", 5)
            .on("mouseover", function (a, b, c) {
                console.log(a)
                this.attr('class', 'focus')
            })
            .on("mouseout", function () { })
//       .on("mousemove", mousemove);


        console.log('gotdata')
        console.log(data)
    }).catch(function (error) {
        console.log(error)
    });