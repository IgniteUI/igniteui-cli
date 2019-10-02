//Update the time
self.setInterval('setDateTime()', 1000);

var selectedPatient = RIZZOJohn;

$(function () {
    $('#dashboard').igTileManager({
        height: "900px",
        width: "99%",
        marginLeft: 10,
        marginTop: 10,
        dataSource: dataTM,
        items: [{ colSpan: 2, rowSpan: 2, colIndex: 0, rowIndex: 0 },
                { colSpan: 2, rowSpan: 2, colIndex: 0, rowIndex: 2 },
                { colSpan: 2, rowSpan: 2, colIndex: 0, rowIndex: 4 },
                { colSpan: 8, rowSpan: 6, colIndex: 2, rowIndex: 0 }],
        animationDuration: 150,
        maximizedTileIndex: 3,
        minimizedState: $("#minimized-state").html(),
        maximizedState: $("#maximized-state").html(),
        tileMaximized: function(evt, ui) {
            switch (ui.tile.index()){
                case 0:
                    createChart("Temperature", true);
                    break;
                case 1:
                    createTileManager();
                    break;
                case 2:
                    createOrdersGrid();
                    break;
                case 3:
                    createGrid();
                    break;
                default:
                    createGrid();
            }
        }		
    });
});

function createGrid() {
    $("#grid1").igGrid({
        width: "100%",
        height: "780px",
        dataSource: dataPatients,
        dataSourceType: 'json',
        autoGenerateColumns: false,
        autoGenerateLayouts: false,
        renderCheckboxes: true,
        responseDataKey: "Results",
        primaryKey: "PatientID",
        autoCommit: true,
        columns: [{
            key: "PatientID",
            dataType: "number",
            width:"0%"
        }, {
            key: "Name",
            dataType: "string",
            headerText: "Name",
            width: "15%"
        },{
            key: "Visited",
            dataType: "bool",
            headerText: "Visited",
            width: "10%"
        }, {
            key: "Severity",
            dataType: "string",
            headerText: "Severity",
            template: "<span class=\'${Severity}\' />",
            width: "15%"
        }, {
            key: "Diagnosis",
            dataType: "string",
            headerText: "Diagnosis",
            width: "30%"
        }, {
            key: "Disposition",
            dataType: "string",
            headerText: "Disposition",
            width: "25%"
        }],
        features: [{
            name: "Sorting",
            type: "local",
            sortUrlKey: "sort",
            sortUrlKeyAscValue: "asc",
            sortUrlKeyDescValue: "desc",
            columnSettings: [{
                    columnIndex: -1,
                    allowSorting: true,
                    columnKey: "Name"
                }, {
                    columnIndex: -1,
                    allowSorting: true,
                    columnKey: "Visited"
                }, {
                    columnIndex: -1,
                    allowSorting: true,
                    columnKey: "Severity"
                }, {
                    columnIndex: -1,
                    allowSorting: false,
                    columnKey: "Diagnosis"
                }, {
                    columnIndex: -1,
                    allowSorting: false,
                    columnKey: "Disposition"
            }] 
        },
        {
            name: "Selection",
            mode: "row",
            multipleSelection: false,
            rowSelectionChanged: function (evt, ui) {                        
                $("#labelPatient").html(ui.row.element["0"].cells[1].innerHTML);
                selectedPatient = eval(ui.row.element["0"].cells[1].innerHTML.replace(' ', ''));

                //Maximize "Vital Signs" tile
                var tileToMaximize = $(".ui-igtile:first");
                $("#dashboard").igTileManager("maximize", tileToMaximize, 300, evt);
            }
        },
        {
            name: "Resizing",
            deferredResizing: true,
            allowDoubleClickToResize: true,
            columnSettings: [
                { columnKey: "Name" },
                { columnKey: "Severity" },
                { columnKey: "Diagnosis" },
                { columnKey: "Disposition" },
                { columnKey: "Visited" }
            ]
        }]
    })
}

function createOrdersGrid() {
    var newName = $("#labelPatient").text().replace(/\s/g, '') + "Orders";
    $("#grid2").igGrid({
        width: "100%",
        height: "780px",
        dataSource: eval(newName),
        dataSourceType: 'json',
        autoGenerateColumns: false,
        columns: [
            { headerText: "Medicine", key: "MedName", dataType: "string", width: "25%"  },
            { headerText: "Dosage", key: "Dosage", dataType: "number", width: "25%"  },
            { headerText: "Unit", key: "Unit", dataType: "string", width: "25%"  },
            { headerText: "Frequency", key: "Frequency", dataType: "string", width: "25%"  }
        ],
            features: [
                {
                    name: "Sorting",
                    type: "local"
                }
            ]
    })
}

function createTileManager() {
    $("#tileManager1").igTileManager({
        width: "100%",
        height: "800px",
        animationDuration: 150,
        dataSource: selectedPatient,
        minimizedState:  '<div class="maximized-container"><img style="width:100%;height: 80%" src="${Picture}" /></div>',
        maximizedState: '<div class="item-container"><div class="maximized-container"><img style="width:100%;height: 80%" src="${Picture}" /></div></div>',
        tileMinimized: function (evt, ui) {
                ui.owner.element.children(".ui-igtilemanager-left").css("height", "100%");
            }
    })
}

function createChart(indicator, createButtons) {
    if (createButtons) {
        $("#vitalsCharts").append(
            `
            <div class='tileHeading'>
                <span id='selectedVital' class='tileTitle' style='display: block;'>Vital Signs</span>
                <span id='categoryButtons' class='rightAligned' style='display: block;'>
                    <a class='tileUIElement btnChartMode' data-chartseries='column' onclick='setColumnSeries()'>
                        <span class='headingChartIcon columnChartIcon'>&nbsp;</span>
                    </a>
                    <a class='tileUIElement btnChartMode' data-chartseries='line' onclick='setLineSeries()'>
                        <span class='headingChartIcon lineChartIcon'>&nbsp;</span>
                    </a>
                    <a class='tileUIElement btnChartMode' data-chartseries='spline' onclick='setSplineSeries()'>
                        <span class='headingChartIcon splineChartIcon'>&nbsp;</span>
                    </a>
                    <a class='tileUIElement' data-chartseries='area' onclick='setAreaSeries()'>
                        <span class='headingChartIcon areaChartIcon'>&nbsp;</span>
                    </a>
                    <div id='combo1'</div>
                </span>
            </div>
            `
        );
        createCombo();
    }

    $("#chart1").igDataChart({
        width: "98%",
        height: "400px",
        title: indicator,
        dataSource: selectedPatient,
        axes: [
            {
                name: "NameAxis",
                type: "categoryX",
                label: "Hour",
                dataSource: selectedPatient,
                title: "Hours"
            },
            {
                name: "IndicatorAxis",
                type: "numericY",
                minimumValue: 10,
                maximumValue: 120,
                title: indicator
            }
        ],
        series: [
            {
                name: "Indicators",
                type: "line",
                title: indicator,
                xAxis: "NameAxis",
                yAxis: "IndicatorAxis",
                valueMemberPath: indicator,
                isTransitionInEnabled: true,
                isHighlightingEnabled: true,
            }
        ]
    });
}

function createCombo() {
    var listItems = [
        { "Name": "Temperature" },
        { "Name": "Pulse" },
        { "Name": "RespiratoryRate" }
    ];

    $("#combo1").igCombo({
        width: "200px",
        textKey: "Name",
        dataSource: listItems,
        placeHolder: "Temperature",
        dropDownOrientation: "bottom",
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            var selectedIndicator = ui.items["0"].element["0"].innerText;
            $("#chart1").igDataChart("destroy");
            createChart(selectedIndicator, false);
        }
    });
}

function setColumnSeries() {

    //Get selected  indicator
    var indicator = $("#combo1").igCombo("value");

    //Remove the previous serie
    $("#chart1").igDataChart("option", "series", [{name: "Indicators",remove: true}]);

    //Create the column serie
    $("#chart1").igDataChart("option", "series", [{
        name: "Indicators",
        type: "column",
        title: indicator,
        xAxis: "NameAxis",
        yAxis: "IndicatorAxis",
        valueMemberPath: indicator,
        isTransitionInEnabled: true,
        isHighlightingEnabled: true,
    }]);
}

function setLineSeries() {

    //Get selected  indicator
    var indicator = $("#combo1").igCombo("value");

    //Remove the previous serie
    $("#chart1").igDataChart("option", "series", [{name: "Indicators",remove: true}]);

    //Create the column serie
    $("#chart1").igDataChart("option", "series", [{
        name: "Indicators",
        type: "line",
        title: indicator,
        xAxis: "NameAxis",
        yAxis: "IndicatorAxis",
        valueMemberPath: indicator,
        isTransitionInEnabled: true,
        isHighlightingEnabled: true,
    }]);
}

function setSplineSeries() {

    //Get selected  indicator
    var indicator = $("#combo1").igCombo("value");

    //Remove the previous serie
    $("#chart1").igDataChart("option", "series", [{name: "Indicators",remove: true}]);

    //Create the column serie
    $("#chart1").igDataChart("option", "series", [{
        name: "Indicators",
        type: "spline",
        title: indicator,
        xAxis: "NameAxis",
        yAxis: "IndicatorAxis",
        valueMemberPath: indicator,
        isTransitionInEnabled: true,
        isHighlightingEnabled: true,
    }]);
}

function setAreaSeries() {

    //Get selected  indicator
    var indicator = $("#combo1").igCombo("value");

    //Remove the previous serie
    $("#chart1").igDataChart("option", "series", [{name: "Indicators",remove: true}]);

    //Create the column serie
    $("#chart1").igDataChart("option", "series", [{
        name: "Indicators",
        type: "area",
        title: indicator,
        xAxis: "NameAxis",
        yAxis: "IndicatorAxis",
        valueMemberPath: indicator,
        isTransitionInEnabled: true,
        isHighlightingEnabled: true,
    }]);
}

function setDateTime() {
    var hours, minutes, seconds,
            today = new Date();
    $("#labelDay").html($.ig.formatter(today, "date", $.ig.regional.defaults.dateLongPattern));

    hours = today.getHours() <= 9 ? "0" + today.getHours().toString() : today.getHours();
        minutes = today.getMinutes() <= 9 ? "0" + today.getMinutes().toString() : today.getMinutes();
        seconds = today.getSeconds() <= 9 ? "0" + today.getSeconds().toString() : today.getSeconds();
        var d = hours + ":" + minutes + ":" + seconds;
        $("#labelTime").html(d);
}