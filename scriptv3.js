console.log('hello')


let choropleth_width = 960;
let choropleth_height = 500;

let choropleth_lowColor = '#f9f9f9'
let choropleth_highColor = '#bc2a66'

let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    , width = window.innerWidth - margin.left - margin.right // Use the window's width 
    , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height



// d3.csv("http://118.138.62.59:9000/dataloc/accidenttest.csv")
//     .then(function (data) {
//         let n = data.length

//         let xScale = d3.scaleLinear()
//             .domain([0, n - 1]) // input
//             .range([0, width]); // output

//         let yScale = d3.scaleLinear()
//             .domain([0, 7]) // input 
//             .range([height, 0]); // output 

//         let line = d3.line()
//             .x(function (d, i) { return xScale(i); }) // set the x values for the line generator
//             .y(function (d) { return yScale(d.Day_of_Week); }) // set the y values for the line generator 
//             .curve(d3.curveMonotoneX) // apply smoothing to the line

//         // let dataset = d3.range(n).map(function (d) { return { "y": d3.randomUniform(1)() } })
//         let svg = d3.select("body").append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//         svg.append("g")
//             .attr("class", "x axis")
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom


//         svg.append("g")
//             .attr("class", "y axis")
//             .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

//         // 9. Append the path, bind the data, and call the line generator 
//         svg.append("path")
//             .datum(data) // 10. Binds data to the line 
//             .attr("class", "line") // Assign a class for styling 
//             .attr("d", line); // 11. Calls the line generator 

//         // svg.selectAll(".dot")
//         //     .data(data)
//         //     .enter().append("circle") // Uses the enter().append() method
//         //     .attr("class", "dot") // Assign a class for styling
//         //     .attr("cx", function (d, i) { return xScale(i) })
//         //     .attr("cy", function (d) { return yScale(d.y) })
//         //     .attr("r", 5)
//         //     .on("mouseover", function (a, b, c) {
//         //         console.log(a)
//         //         this.attr('class', 'focus')
//         //     })
//         //     .on("mouseout", function () { })
//         //       .on("mousemove", mousemove);


//         console.log('gotdata')
//         console.log(data)
//     }).catch(function (error) {
//         console.log(error)
//     });



//----------------------------------pie chart-----------------------------------------------------



// var svg = d3.select("#drawing_area_pie_chart")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// let data1 = null;

// d3.csv("http://118.138.62.59:9000/dataloc/frequencyofmonth.csv")
//     .then(function (data) {
//         let pie_width = 450
//         let pie_height = 450
//         let pie_margin = 40
//         var pie_radius = Math.min(pie_width, pie_height) / 2 - pie_margin
//         data1 = data;
//         piedata = []
//         data1.forEach(element => {
//             piedata[element.month] = element.n
//         });

//         var color = d3.scaleOrdinal()
//             .domain(piedata)
//             .range(["#CD5C5C", "#FFC0CB", "#FFA07A", "#FFD700", "#E6E6FA", "#ADFF2F", "#00FFFF", "#FFF8DC", "#FAEBD7", "	#DCDCDC", "	#BDB76B"])


//         var pie = d3.pie()
//             .value(function (d) {
//                 return d.value;
//             })
//         var data_ready = pie(d3.entries(piedata))

//         svg
//             .selectAll('slices')
//             .data(data_ready)
//             .enter()
//             .append('path')
//             .attr('d', d3.arc()
//                 .innerRadius(0)
//                 .outerRadius(pie_radius)
//             )
//             .attr('fill', function (d) { return (color(d.data.key)) })
//             .attr("stroke", "black")
//             .style("stroke-width", "2px")
//             .style("opacity", 0.7)
//             // .append('text')
//             // .text(function (d) { return "grp " + d.data.key })
//             // .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
//             // .style("text-anchor", "middle")
//             // .style("font-size", 17)


//         svg
//             .selectAll('slices')
//             .data(data_ready)
//             .enter()
//             .append('text')
//             .text(function (d) { return "grp " + d.data.key })
//             .attr("transform", function (d) { 
//                 return "translate(" + arcGenerator.centroid(d) +100+ ")"; 
//             })
//             .style("text-anchor", "middle")
//             .style("font-size", 17)
//     }).catch((error) => {
//         console.log(error)
//     });



//--------------------------------------------------------------nice pie chart month------------------------------------------------




var piewidth = 960,
    pieheight = 450,
    radius = Math.min(piewidth, pieheight) / 2;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);
var key = function (d) {
    return d.data.label;
};

var color = d3.scale.ordinal()
    .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

d3.csv("http://118.138.62.59:9000/dataloc/frequencyofmonth.csv"
    , function (data) {
        console.log(data)
        var piesvg = d3.select("#drawing_area_pie_chart_month")
            .append("svg")
            // .attr('width', 1000).attr('height', 1000)
            .append("g")


        piedata2014 = []
        piedata2015 = []
        piedata2016 = []

        data.forEach(element => {
            if (element.year == 2014) {
                piedata2014.push({ 'label': element.month, 'value': element.n })
            }
            else if (element.year == 2015) {
                piedata2015.push({ 'label': element.month, 'value': element.n })
            }
            else if (element.year == 2016) {
                piedata2016.push({ 'label': element.month, 'value': element.n })
            }
        });

        piesvg.append("g")
            .attr("class", "slices");
        piesvg.append("g")
            .attr("class", "labels");
        piesvg.append("g")
            .attr("class", "lines");


        piesvg.attr("transform", "translate(" + width / 4 + "," + height / 4 + ")");

        change(piesvg, piedata2014);

        d3.select("#piechartbutton2014")
            .on("click", function () {
                change(piesvg, piedata2014);
            });


        d3.select("#piechartbutton2015")
            .on("click", function () {
                change(piesvg, piedata2015);
            });

        d3.select("#piechartbutton2016")
            .on("click", function () {
                change(piesvg, piedata2016);
            });



        var arcOver = d3.svg.arc()
            .innerRadius(0)
            .outerRadius(150 + 10);

            piesvg.on('mousemove', (d) => {
                d3.select(d.firstChild).transition()
              .attr("d", arcOver);
            })
    })



d3.csv("http://118.138.62.59:9000/dataloc/frequencyofday.csv", function (data) {

    var piesvg = d3.select("#drawing_area_pie_chart_month")
        .append("svg")
        // .attr('width', 1000).attr('height', 1000)
        .append("g")

    piedatajan = []
    piedatafeb = []

    piedatamar = []

    piedataapr = []
    piedatamay = []
    piedatajun = []
    piedatajul = []
    piedataaug = []
    piedatasep = []
    piedataoct = []
    piedatanov = []
    piedatadec = []

    data.forEach(element => {
        if (element.month == 'Jan') {
            piedatajan.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Feb') {
            piedatafeb.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Mar') {
            piedatamar.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Apr') {
            piedataapr.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'May') {
            piedatamay.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Jun') {
            piedatajun.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Jul') {
            piedatajul.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Aug') {
            piedataaug.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Sep') {
            piedatasep.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Oct') {
            piedataoct.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Nov') {
            piedatanov.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
        else if (element.month == 'Dec') {
            piedatadec.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
        }
    });

    piesvg.append("g")
        .attr("class", "slices");
    piesvg.append("g")
        .attr("class", "labels");
    piesvg.append("g")
        .attr("class", "lines");


    piesvg.attr("transform", "translate(" + width / 4 + "," + height / 4 + ")");

    change(piesvg, piedatajan);

    // d3.select("#jan")
    //         .on("click", function () {
    //             change(piesvg,piedatajan);
    //         });
    d3.select("#Feb")
        .on("click", function () {
            change(piesvg, piedatafeb);
        });

    



});




//----------------methods for piechart--------------------
function change(piesvg, data) {

    /* ------- PIE SLICES -------*/
    var slice = piesvg.select(".slices").selectAll("path.slice")
        .data(pie(data), key);

    console.log

    slice.enter()
        .insert("path")
        .style("fill", function (d) {
            return color(d.data.label);
        })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })

    slice.exit()
        .remove();

    /* ------- TEXT LABELS -------*/

    var text = piesvg.select(".labels").selectAll("text")
        .data(pie(data), key);

    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return d.data.label;
        });

    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text.transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        });

    text.exit()
        .remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = piesvg.select(".lines").selectAll("polyline")
        .data(pie(data), key);

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();
};