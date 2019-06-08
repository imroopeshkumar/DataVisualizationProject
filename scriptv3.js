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

freqdata = null;
daypiesvg = null;
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

let selectedyear = null;


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

d3.csv("http://118.138.62.59:9000/dataloc/freqdaymonthyear.csv"
    , function (data) {
        freqdata = data;
        // console.log(data)
        var piesvg = d3.select("#drawing_area_pie_chart_month")
            .append("svg")
            // .attr('width', 1000).attr('height', 1000)
            .append("g")



        piedata2014 = []
        piedata2015 = []
        piedata2016 = []
        piedata2017 = []
        // piedata2017 = []






        data.forEach(element => {
            if (element.year == 2014) {
                count =0


                let found = piedata2014.some(item => item.label == element.month);
                if(found){
                    // console.log(found)
                    piedata2014.forEach(e=> {
                        if(e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2014.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
                count+=1

            }
            else if (element.year == 2015) {


                let found = piedata2015.some(item => item.label == element.month);
                if(found){
                    piedata2015.forEach(e=> {
                        if(e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2015.push({ 'label': element.month, 'value': parseInt(element.n) })
                }

            }
            else if (element.year == 2016) {

                let found = piedata2016.some(item => item.label == element.month);
                if(found){
                    piedata2016.forEach(e=> {
                        if(e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2016.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
            }
            else if (element.year == 2017) {

                let found = piedata2017.some(item => item.label == element.month);
                if(found){
                    piedata2016.forEach(e=> {
                        if(e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2017.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
            }


        });

        piesvg.append("g")
            .attr("class", "slices");
        piesvg.append("g")
            .attr("class", "labels");
        piesvg.append("g")
            .attr("class", "lines");


        piesvg.attr("transform", "translate(" + width / 3 + "," + height / 4 + ")");

        change(piesvg, piedata2014);
        selectedyear = 2014;
        
        drawdayspie(selectedyear, 'Jan')

        d3.select("#piechartbutton2014")
            .on("click", function () {
                change(piesvg, piedata2014);
                selectedyear = 2014;
                drawdayspie(selectedyear,'Jan')

            });


        d3.select("#piechartbutton2015")
            .on("click", function () {
                change(piesvg, piedata2015);
                drawdayspie(selectedyear,'Jan')
                selectedyear = 2015
            });

        d3.select("#piechartbutton2016")
            .on("click", function () {
                change(piesvg, piedata2016);
                drawdayspie(selectedyear,'Jan')

                selectedyear = 2016
            });

            d3.select("#piechartbutton2017")
            .on("click", function () {
                change(piesvg, piedata2017);
                drawdayspie(selectedyear,'Jan')

                selectedyear = 2017
            });



        var arcOver = d3.svg.arc()
            .innerRadius(0)
            .outerRadius(150 + 10);

    })


function drawdayspie(year, month) {
    selecteddata = 'piedata' + month;

    piedataJan = []
    piedataFeb = []

    piedataMar = []

    piedataApr = []
    piedataMay = []
    piedataJun = []
    piedataJul = []
    piedataAug = []
    piedataSep = []
    piedataOct = []
    piedataNov = []
    piedataDec = []
    freqdata.forEach(element => {
        if (element.year == year) {

            if (element.month == 'Jan') {
                piedataJan.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Feb') {
                piedataFeb.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Mar') {
                piedataMar.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Apr') {
                piedataApr.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'May') {
                piedataMay.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Jun') {
                piedataJun.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Jul') {
                piedataJul.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Aug') {
                piedataAug.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Sep') {
                piedataSep.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Oct') {
                piedataOct.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Nov') {
                piedataNov.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
            else if (element.month == 'Dec') {
                piedataDec.push({ 'label': element['Day_of_Week.x'], 'value': element.n })
            }
        }
    })
    if(d3.select('#drawing_area_pie_chart_day').select('#daypiesvg').node()){
        change(daypiesvg, this[selecteddata]);
    }
    else {
    d3.select("#drawing_area_pie_chart_day").selectAll('svg').remove()
        var piesvg = d3.select("#drawing_area_pie_chart_day")
        .append("svg").attr('id', 'daypiesvg')
        .attr('width', 960).attr('height', 540)
        .append("g").attr('id', 'daypie')


    

    piesvg.append("g")
        .attr("class", "slices");
    piesvg.append("g")
        .attr("class", "labels");
    piesvg.append("g")
        .attr("class", "lines");


    piesvg.attr("transform", "translate(" + width / 3 + "," + height / 4 + ")");
    // console.log(piedatajan)
    change(piesvg, this[selecteddata]);

    daypiesvg = piesvg
    }

}





//----------------methods for piechart--------------------
function change(piesvg, data) {

    /* ------- PIE SLICES -------*/
    var slice = piesvg.select(".slices").selectAll("path.slice")
        .data(pie(data), key);

    // console.log

    slice.enter()
        .insert("path")
        .style("fill", function (d) {
            return color(d.data.label);
        })
        // .style('opacity', 0.4)
        .attr("class", "slice")
        .attr('id', (d) => {
            return d.value
        });

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

    
    let current = null;

    slice.on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", .9);

        div.html(d.data.value)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");



            current = this;  
            var others = piesvg.selectAll(".slice").filter(function(el) {
              return this != current
            });

            d3.select(this).style('opacity', 0.3);
    })
        .on("mouseout", function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
                d3.select(current).style('opacity', 1);
        })
        .on('click', function(d) {
            if(d.data.label.substring(d.data.label.length-3, d.data.label.length)== 'day') {
                console.log('do nothing')
            } else {
                drawdayspie(selectedyear, d.data.label)
            }
        })
};

d3.csv("http://118.138.62.59:9000/dataloc/frequencyofmake.csv"
    , function (data) {
        console.log(data)

        var word_count = {};
        data.forEach(function(word){
            // var word = word.toLowerCase();
            // if (word != "" &&  word.length>1){
            //   if (word_count[word]){
            //     word_count[word]++;
            //   } else {
            //     word_count[word] = 1;
            //   }
            // }

            word_count[word.make] = word.n
          })

          var svg_location = "#drawing_area_word_cloud";
          width = 540
          height = 960
          var fill = d3.scale.category20();
          var word_entries = d3.entries(word_count);

          var xScale = d3.scale.linear()
           .domain([0, d3.max(word_entries, function(d) {
              return d.value;
            })
           ])
           .range([10,100]);

           d3.layout.cloud().size([width, height])
          .timeInterval(20)
          .words(word_entries)
          .fontSize(function(d) { return xScale(+d.value); })
          .text(function(d) { return d.key; })
          .rotate(function() { return ~~(Math.random() * 2) *90; })
          .font("Impact")
          .on("end", draw)
          .start();

          function draw(words) {
            d3.select(svg_location).append("svg")
                .attr("width", width)
                .attr("height", height)
              .append("g").attr('id', 'wordcloudsvg')
                .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
              .selectAll("text")
                .data(words)
              .enter().append("text")
                .style("font-size", function(d) { return xScale(d.value) + "px"; })
                .style("font-family", "Impact")
                .style("fill", function(d, i) { return fill(i); })
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.key; });
          }
          d3.layout.cloud().stop();


    });