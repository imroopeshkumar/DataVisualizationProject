console.log('hello')




let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    , width = window.innerWidth - margin.left - margin.right // Use the window's width 
    , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height




//--------------------------------------------------------------nice pie chart month------------------------------------------------

freqdata = null;
daypiesvg = null;
monthpiesvg = null;
let div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

let selectedyear = null;


let piewidth = 960,
    pieheight = 450,
    radius = Math.min(piewidth, pieheight) / 2;

let pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

let outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

let arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);
let key = function (d) {
    return d.data.label;
};

let color = d3.scale.ordinal()
    .domain(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", '#dd44a3', '#7c0621', '#d8cf4b', '#e01818', '#62c44a']);

let years = []
let yearsdata = [];


// d3.csv("http://118.138.62.59:9000/allyearsdata/freq_of_date_accident_data.csv"
d3.csv("data/freq_of_date_accident_data.csv"
    , function (data) {
        freqdata = data;
        // console.log(data)
        let piesvg = d3.select("#drawing_area_pie_chart_month")
            .append("svg").attr('width', screen.width/2).attr('height', screen.height > 900? screen.height/2: screen.height/1.5)
            // .attr('width', 1000).attr('height', 1000)
            .append("g")

        data.forEach(element => {


            // let years = []
            // let months = []
            // let days = [];
            // if()

            let months = []
            let monthsdata = []


            if (years.includes(element.year)) {
                yearsdata.forEach(x => {
                    if (x.year == element.year) {
                        if (x.months.includes(element.month)) {
                            x.monthdata.forEach(y => {
                                if (y.label == element.month) {
                                    y.value += parseInt(element.n)
                                }
                            })
                        }
                        else {
                            x.months.push(element.month)
                            x.monthdata.push({ 'label': element.month, 'value': parseInt(element.n) })
                        }
                    }
                })

            }
            else {
                years.push(element.year)
                yearsdata.push({ 'year': element.year, 'months': [], 'monthdata': [] })
                yearsdata.forEach(d => {
                    if (d.year == element.year) {
                        if (d.months.includes(element.month)) {
                            d.monthdata.forEach(a => {
                                if (a.label == element.month) {
                                    a.value += parseInt(element.n)
                                }
                            })
                        }
                        else {
                            d.months.push(element.month)

                            d.monthdata.push({
                                'label': element.month, 'value': parseInt(element.n)
                            })

                        }
                    }
                })
            }
        });

        console.log(yearsdata)

        // barchartdata = { 't2014': four, 't2015': five, 't2016': six, 't2017': seven }
        barchartdata = []

        yearsdata.forEach(t => {
            count = 0;
            t.monthdata.forEach(x => {
                count += parseInt(x.value)
            })
            barchartdata.push({ 'year': t.year, 'value': count })
        })

        console.log(barchartdata)

        buildbarchart(barchartdata)

        piesvg.append("g")
            .attr("class", "slices");
        piesvg.append("g")
            .attr("class", "labels");
        piesvg.append("g")
            .attr("class", "lines");


        piesvg.attr("transform", "translate(" + screen.width / 4 + "," + screen.height / 2.5 + ")");
        monthpiesvg = piesvg
        d3.select('#month_pie_chart').html('2005')
        yearsdata.forEach(t => {
            if (t.year == 2005) {
                change(piesvg, t.monthdata);
            }
        })
        selectedyear = 2005;

        drawdayspie(selectedyear, 'Jan')
    })


//#####################################################################################################################################################################

//---------------draww days pie chart---------------------------------------
function drawdayspie(year, month) {
    selectedyear = year;
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
                piedataJan.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Feb') {
                piedataFeb.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Mar') {
                piedataMar.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Apr') {
                piedataApr.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'May') {
                piedataMay.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Jun') {
                piedataJun.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Jul') {
                piedataJul.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Aug') {
                piedataAug.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Sep') {
                piedataSep.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Oct') {
                piedataOct.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Nov') {
                piedataNov.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
            else if (element.month == 'Dec') {
                piedataDec.push({ 'label': element['Day_of_Week'], 'value': element.n })
            }
        }
    })
    if (d3.select('#drawing_area_pie_chart_day').select('#daypiesvg').node()) {
        change(daypiesvg, this[selecteddata]);
    }
    else {
        d3.select("#drawing_area_pie_chart_day").selectAll('svg').remove()
        let piesvg = d3.select("#drawing_area_pie_chart_day")
            .append("svg").attr('id', 'daypiesvg')
            .attr('width', screen.width/2).attr('height',  screen.height > 900? screen.height/2: screen.height/1.5)
            .append("g").attr('id', 'daypie')




        piesvg.append("g")
            .attr("class", "slices");
        piesvg.append("g")
            .attr("class", "labels");
        piesvg.append("g")
            .attr("class", "lines");


        piesvg.attr("transform", "translate(" + screen.width / 4 + "," + screen.height / 2.7 + ")");
        // console.log(piedatajan)
        change(piesvg, this[selecteddata]);

        daypiesvg = piesvg

    }

    d3.select('#day_pie_chart').html(month)


}





//----------------update methods for piechart--------------------
function change(piesvg, data) {

    /* ------- PIE SLICES -------*/
    let slice = piesvg.select(".slices").selectAll("path.slice")
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
            let interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })

    slice.exit()
        .remove();

    /* ------- TEXT LABELS -------*/

    let text = piesvg.select(".labels").selectAll("text")
        .data(pie(data), key);

    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return d.data.label + ':' + d.data.value;
        });

    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text.transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            let interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                let d2 = interpolate(t);
                let pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            let interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                let d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        });

    text.exit()
        .remove();

    /* ------- SLICE TO TEXT POLYLINES -------*/

    let polyline = piesvg.select(".lines").selectAll("polyline")
        .data(pie(data), key);

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            let interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                let d2 = interpolate(t);
                let pos = outerArc.centroid(d2);
                pos[0] = radius *.95 * (midAngle(d2) < Math.PI ? 1 : -1);
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

        div.html(d.data.label + '\n'+ d.data.value)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");



        current = this;
        let others = piesvg.selectAll(".slice").filter(function (el) {
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

//----------------------------wordcloud------------------------------------
d3.csv("data/frequencyofmake.csv"
    , function (data) {
        // console.log(data)

        let word_count = {};
        data.forEach(function (word) {
            // let word = word.toLowerCase();
            // if (word != "" &&  word.length>1){
            //   if (word_count[word]){
            //     word_count[word]++;
            //   } else {
            //     word_count[word] = 1;
            //   }
            // }

            word_count[word.make] = word.n
        })

        let svg_location = "#drawing_area_word_cloud";
        width = 540
        height = 960
        let fill = d3.scale.category20();
        let word_entries = d3.entries(word_count);

        let xScale = d3.scale.linear()
            .domain([0, d3.max(word_entries, function (d) {
                return d.value;
            })
            ])
            .range([10, 100]);

        d3.layout.cloud().size([screen.width, screen.height/2])
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
                .attr("width", screen.width)
                .attr("height", screen.height/1.2)
                .append("g").attr('id', 'wordcloudsvg')
                .attr("transform", "translate(" + [screen.width >> 1, screen.height >> 1] + ")")
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

    let margin = { top: 20, right: 20, bottom: 20, left: 60 },
        width = 960 - margin.left - margin.right,
        // width =
        height = 500 - margin.top - margin.bottom;
    let barsvg = d3.select("#drawing_area_bar_chart").append("svg")
        .attr("width",screen.width)
        .attr("height", screen.height> 900 ?screen.height/2 :screen.height/1.25 )
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let y = d3.scale.linear()
        .domain([0, 120000])
        .range([height, 0]);

    let x = d3.scale.ordinal()
        .domain([2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017])
        .rangeBands([0, width]);

    let xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    let yAxis = d3.svg.axis()
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
            return x(d.year);
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
            yearsdata.forEach(x => {
                if (x.year == d.year) {
                    change(monthpiesvg, x.monthdata);

                }
            })
            drawdayspie(d.year, 'Jan')

        })




}



// function buildlinechart() {
//     let	margin = {top: 30, right: 20, bottom: 30, left: 50},
// 	width = 600 - margin.left - margin.right,
//     height = 270 - margin.top - margin.bottom;


// }

//---------------line graph-----------------


d3.csv("data/freqdate.csv"
    , function (data) {
        let parseDate = d3.time.format("%Y-%m-%d").parse;

        data.forEach(function (d) {
            d.date = parseDate(d['Date']);
            d.close = +d.n;
        });
        let margin = { top: 30, right: 20, bottom: 30, left: 50 },
            width = 5000 - margin.left - margin.right,
            height = 1000 - margin.top - margin.bottom;

        let x = d3.time.scale().range([0, width]);
        let y = d3.scale.linear().range([height, 0]);
        let xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(100);
        let yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);
        let valueline = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.n); });
        let svg = d3.select("#drawing_area_line_chart")
            .append("svg")
            .attr("viewBox", "2000,100,1000,1000")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(d3.extent(data, function (d) { return d.date; }));
        y.domain([0, d3.max(data, function (d) { return d.close; })]);

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



    })

d3.csv("data/multi_variables.csv", function (data) {
    // console.log(data)

    let accident_severity_attributes = [];
    let accident_severity_data = [];
    let road_surface_conditions_attributes = [];
    let road_surface_conditions_data = []
    let road_type_attributes = []
    let road_type_data = []
    let weather_conditions_attributes = [];
    let weather_conditions_data = [];


    data.forEach(record => {
        if (accident_severity_attributes.includes(record.Accident_Severity)) {
            // console.log(exists)
            accident_severity_data.forEach(x => {
                if (x.label == record.Accident_Severity) {
                    x.value += parseInt(record.n)
                }
            })


        } else if (!accident_severity_attributes.includes(record.Accident_Severity)) {
            accident_severity_attributes.push(record.Accident_Severity)
            accident_severity_data.push({
                'label': record.Accident_Severity, 'value': parseInt(record.n)
            })
        }

        if (road_surface_conditions_attributes.includes(record.Road_Surface_Conditions)) {
            // console.log(exists)
            road_surface_conditions_data.forEach(x => {
                if (x.label == record.Road_Surface_Conditions) {
                    x.value += parseInt(record.n)
                }
            })


        } else if (!road_surface_conditions_attributes.includes(record.Road_Surface_Conditions)) {
            if (!(record.Road_Surface_Conditions == 'Data missing or out of range')) {
                road_surface_conditions_attributes.push(record.Road_Surface_Conditions)

                road_surface_conditions_data.push({
                    'label': record.Road_Surface_Conditions, 'value': parseInt(record.n)
                })

            }

        }



        if (road_type_attributes.includes(record.Road_Type)) {
            // console.log(exists)
            road_type_data.forEach(x => {
                if (x.label == record.Road_Type) {
                    x.value += parseInt(record.n)
                }
            })


        } else if (!road_type_attributes.includes(record.Road_Type)) {
            if (!(record.road_type_attributes == 'Data missing or out of range')) {
                road_type_attributes.push(record.Road_Type)

                road_type_data.push({
                    'label': record.Road_Type, 'value': parseInt(record.n)
                })

            }

        }




        if (weather_conditions_attributes.includes(record.Weather_Conditions)) {
            // console.log(exists)
            weather_conditions_data.forEach(x => {
                if (x.label == record.Weather_Conditions) {
                    x.value += parseInt(record.n)
                }
            })


        } else if (!weather_conditions_attributes.includes(record.Weather_Conditions)) {
            if (!(record.weather_conditions_attributes == 'Unknown')) {
                weather_conditions_attributes.push(record.Weather_Conditions)

                weather_conditions_data.push({
                    'label': record.Weather_Conditions, 'value': parseInt(record.n)
                })

            }

        }




    })








//------------------multi pie charts-----------------------------------------------


    let accident_severity_svg = d3.select("#accident_severity_div")
        .append("svg").attr('id', 'accident_severity')
        .attr('width', screen.width/2).attr('height',  screen.height > 900? screen.height/2: screen.height/1.5)
        .append("g")
    // .attr('id', 'daypie')




    accident_severity_svg.append("g")
        .attr("class", "slices");
    accident_severity_svg.append("g")
        .attr("class", "labels");
    accident_severity_svg.append("g")
        .attr("class", "lines");


    accident_severity_svg.attr("transform", "translate(" + screen.width / 4 + "," + screen.height / 2.7 + ")");
    // console.log(piedatajan)
    change(accident_severity_svg, accident_severity_data);





    let road_condition_svg = d3.select("#road_condition_div")
        .append("svg").attr('id', 'road_condition')
        .attr('width', screen.width/2).attr('height',  screen.height > 900? screen.height/2: screen.height/1.5)
        .append("g")
    // .attr('id', 'daypie')




    road_condition_svg.append("g")
        .attr("class", "slices");
    road_condition_svg.append("g")
        .attr("class", "labels");
    road_condition_svg.append("g")
        .attr("class", "lines");


    road_condition_svg.attr("transform", "translate(" + screen.width / 4+ "," +  screen.height /2.7+ ")");
    // console.log(piedatajan)
    change(road_condition_svg, road_surface_conditions_data);








    let road_type_svg = d3.select("#road_type_div")
        .append("svg").attr('id', 'road_type')
        .attr('width', screen.width/2).attr('height',  screen.height > 900? screen.height/2: screen.height/1.5)
        .append("g")
    // .attr('id', 'daypie')




    road_type_svg.append("g")
        .attr("class", "slices");
    road_type_svg.append("g")
        .attr("class", "labels");
    road_type_svg.append("g")
        .attr("class", "lines");


    road_type_svg.attr("transform", "translate(" + screen.width / 4 + "," + screen.height / 2.7 + ")");
    // console.log(piedatajan)
    change(road_type_svg, road_type_data);

    d3.select('#road_type_div').selectAll('.lines').remove()
        d3.select('#road_type_div').selectAll('.labels').remove()











    let weather_conditions_svg = d3.select("#weather_conditions_div")
        .append("svg").attr('id', 'weather_condition')
        .attr('width', screen.width/2).attr('height',  screen.height > 900? screen.height/2: screen.height/1.5)
        .append("g")
    // .attr('id', 'daypie')




    weather_conditions_svg.append("g")
        .attr("class", "slices");
        weather_conditions_svg.append("g")
        .attr("class", "labels");
        weather_conditions_svg.append("g")
        .attr("class", "lines");


        weather_conditions_svg.attr("transform", "translate(" + screen.width / 4 + "," + screen.height / 2.7 + ")");
    // console.log(piedatajan)
    change(weather_conditions_svg, weather_conditions_data);
    
    d3.select('#weather_conditions_div').selectAll('.lines').remove()
        d3.select('#weather_conditions_div').selectAll('.labels').remove()




});



