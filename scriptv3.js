console.log('hello')




let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    , width = window.innerWidth - margin.left - margin.right // Use the window's width 
    , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height




//--------------------------------------------------------------nice pie chart month------------------------------------------------

freqdata = null;
daypiesvg = null;
monthpiesvg = null;
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
        let four = 0
        let five = 0
        let six = 0
        let seven = 0
        // piedata2017 = []






        data.forEach(element => {
            if (element.year == 2014) {
                four += parseInt(element.n)
                count = 0


                let found = piedata2014.some(item => item.label == element.month);
                if (found) {
                    // console.log(found)
                    piedata2014.forEach(e => {
                        if (e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2014.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
                count += 1

            }
            else if (element.year == 2015) {

                five += parseInt(element.n)
                let found = piedata2015.some(item => item.label == element.month);
                if (found) {
                    piedata2015.forEach(e => {
                        if (e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2015.push({ 'label': element.month, 'value': parseInt(element.n) })
                }

            }
            else if (element.year == 2016) {
                six += parseInt(element.n)
                let found = piedata2016.some(item => item.label == element.month);
                if (found) {
                    piedata2016.forEach(e => {
                        if (e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2016.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
            }
            else if (element.year == 2017) {
                seven += parseInt(element.n)
                let found = piedata2017.some(item => item.label == element.month);
                if (found) {
                    piedata2016.forEach(e => {
                        if (e.label == element.month) {
                            e.value += parseInt(element.n)
                        }
                    })
                }

                else {
                    piedata2017.push({ 'label': element.month, 'value': parseInt(element.n) })
                }
            }


        });
        // barchartdata = { 't2014': four, 't2015': five, 't2016': six, 't2017': seven }
        barchartdata = []
        barchartdata.push({ 'year': 2014, 'value': four })
        barchartdata.push({ 'year': 2015, 'value': five })

        barchartdata.push({ 'year': 2016, 'value': six })
        barchartdata.push({ 'year': 2017, 'value': seven })

        buildbarchart(barchartdata)

        piesvg.append("g")
            .attr("class", "slices");
        piesvg.append("g")
            .attr("class", "labels");
        piesvg.append("g")
            .attr("class", "lines");


        piesvg.attr("transform", "translate(" + width / 3 + "," + height / 4 + ")");
        monthpiesvg = piesvg
        d3.select('#month_pie_chart').html('2014')

        change(piesvg, piedata2014);
        selectedyear = 2014;

        drawdayspie(selectedyear, 'Jan')





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
    if (d3.select('#drawing_area_pie_chart_day').select('#daypiesvg').node()) {
        change(daypiesvg, this[selecteddata]);
    }
    else {
        d3.select("#drawing_area_pie_chart_day").selectAll('svg').remove()
        var piesvg = d3.select("#drawing_area_pie_chart_day")
            .append("svg").attr('id', 'daypiesvg')
            .attr('width', 960).attr('height', 280)
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

    d3.select('#day_pie_chart').html(month)


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
        var others = piesvg.selectAll(".slice").filter(function (el) {
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
        .on('click', function (d) {
            if (d.data.label.substring(d.data.label.length - 3, d.data.label.length) == 'day') {
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
        data.forEach(function (word) {
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
            .domain([0, d3.max(word_entries, function (d) {
                return d.value;
            })
            ])
            .range([10, 100]);

        d3.layout.cloud().size([width, height])
            .timeInterval(20)
            .words(word_entries)
            .fontSize(function (d) { return xScale(+d.value); })
            .text(function (d) { return d.key; })
            .rotate(function (s) { return ~~(s.value * 2); })
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
                .style("font-size", function (d) { return xScale(d.value) + "px"; })
                .style("font-family", "Impact")
                .style("fill", function (d, i) { return fill(i); })
                .attr("text-anchor", "middle")
                .attr("transform", function (d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                }).attr('class', 'wordcloud')
                .text(function (d) { return d.key; });
        }
        d3.layout.cloud().stop();

        d3.selectAll('.wordcloud').on('mouseover', (d) => {
            div.transition()
                .duration(200)
                .style("opacity", .9);

            div.html(d.value)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })


    });

//------------------------bar chart----------------------------

function buildbarchart(barchartdata) {


    let data = barchartdata
    let count = 0

    var margin = { top: 80, right: 180, bottom: 80, left: 180 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    var barsvg = d3.select("#drawing_area_bar_chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var y = d3.scale.linear()
        .domain([0, 100000])
        .range([height, 0]);

    var x = d3.scale.ordinal()
        .domain([2014, 2015, 2016, 2017])
        .rangeBands([0, width]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    barsvg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("font-size", "8px")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)");

    barsvg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    barsvg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "rectangle")
        .attr('id', (d) => {
            return 'y' + d.year
        })
        .attr("width", 40)


        //   .style("fill", "steelblue")
        .attr("x", function (d) {
            return x(d.year) + 53;
        })
        //   .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.value);
        })
        .attr("height", function (d) {
            return height - y(d.value);
        });

    d3.select('#drawing_area_bar_chart').selectAll('rect').on('mouseover', (d) => {
        div.transition()
            .duration(200)
            .style("opacity", .9);

        div.html(d.value)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })

        .on('mouseout', (d) => {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on('click', (d) => {
            let method = 'piedata';
            method + d.year;
            d3.select('#drawing_area_bar_chart').selectAll('rect').attr('class', 'rectangle')
            d3.select('#y' + d.year).attr('class', 'selectedrect')
            d3.select('#month_pie_chart').html(d.year)

            change(monthpiesvg, this[method + d.year]);
            drawdayspie(d.year, 'Jan')

        })



    
}



// function buildlinechart() {
//     var	margin = {top: 30, right: 20, bottom: 30, left: 50},
// 	width = 600 - margin.left - margin.right,
//     height = 270 - margin.top - margin.bottom;
    

// }

d3.csv("http://118.138.62.59:9000/dataloc/freqdate.csv"
    , function (data) {
        var	parseDate = d3.time.format("%Y-%m-%d").parse;

        data.forEach(function (d) {
            d.date = parseDate(d['Date.x']);
            d.close = +d.n;
        });
        var margin = { top: 30, right: 20, bottom: 30, left: 50 },
            width = 900 - margin.left - margin.right,
            height = 570 - margin.top - margin.bottom;

        var parseDate = d3.time.format("%Y-%m-%Y").parse;
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);
        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);
        var valueline = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.n); });
        var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(data, function(d) { return d.date; }));
	y.domain([0, d3.max(data, function(d) { return d.close; })]);
 
	// Add the valueline path.
	svg.append("path")	
		.attr("class", "line")
		.attr("d", valueline(data));
 
	// Add the X Axis
	svg.append("g")		
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
 
	// Add the Y Axis
	svg.append("g")		
		.attr("class", "y axis")
        .call(yAxis);
        
    d3.select('path.line').on('mouseover', (d)=> {
        div.transition()
            .duration(200)
            .style("opacity", .9);

        div.html(d.close)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    })


    })
