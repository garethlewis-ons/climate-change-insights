<script>

    import {onMount} from "svelte";
    const endpointChart1 = 'https://staging.gss-data.org.uk/sparql';
    var counter = 0;
    
    var xcats = [];
    let emiCO2 = [];
    var emiCH4 = [];
    var emiN2O = [];
    var emiHFC = [];
    var emiSF6 = [];
    var emiPFC = [];
    var emiNF3 = [];
    var emiFGF = [];
    
    

    var emiCO2b = [2890.6907662799313, 2929.9391217363864, 2846.1120033248817, 2771.9875202393896, 2749.3044146073516, 2708.727308535119, 2807.0477470427286, 2674.3447217105586, 2699.0210294863246, 2667.2451193133693, 2700.953700161819, 2742.2683715223684, 2655.987510604493, 2712.282268133871, 2713.9802479295176, 2696.2044621203095, 2682.1449184364174, 2637.1437276310753, 2567.4511906392872, 2320.1988995792344, 2409.423261246877, 2200.265242907917, 2291.3252513459884, 2242.2363157910627, 2046.8139385888935, 1965.3626696524989, 1847.0244149363134, 1786.7706435951404, 1761.5933520700783, 1700.8335640688674];
    var emiCH4b = [12.908, 5.948, 81.05, 11.248, 89.89, 11.816, 18.274, 18.111];
    var emiN2Ob = [11.744, 17.722, 16.005, 19.771, 201.85, 24.377, 32.147, 39.387];
    var emiHFCb = [null, null, 7.988, 12.169, 15.112, 22.452, 34.400, 34.227];
    var emiSF6b = [12.908, 59.48, 8.105, 11.248, 8.989, 11.816, 18.274, 18.111];
    var emiPFCb = [12.908, 5.948, 81.05, 11.248, 89.89, 11.816, 18.274, 18.111];
    var emiNF3b = [12.908, 5.948, 81.05, 11.248, 89.89, 11.816, 18.274, 18.111];
    var emiFGFb = [12.908, 5.948, 81.05, 11.248, 89.89, 11.816, 18.274, 18.111];

    var testmef = ["2345.454", "3446.345", "2345.55"];

    
    
function createcharts() {




    function sparql(query) {
    return fetch(endpointChart1, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/sparql-query',
            'Accept': 'application/sparql-results+json'
        },
        body: query
    }).then((response) => response.json())
}

function getChart1(dataset) {
    return sparql(`
                        PREFIX dcat: <http://www.w3.org/ns/dcat#>
                        PREFIX dcterms: <http://purl.org/dc/terms/>
                        PREFIX owl: <http://www.w3.org/2002/07/owl#>
                        PREFIX qb: <http://purl.org/linked-data/cube#>
                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                        PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
                        PREFIX void: <http://rdfs.org/ns/void#>
                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                        
                        select ?gastype ?date (SUM(?emission) AS ?totalemis) ?measuretype
                        WHERE
                        
                        {graph <http://gss-data.org.uk/graph/gss_data/energy/beis-final-uk-greenhouse-gas-emissions-national-statistics-1990-to-2019> 
                        
                        {
                        
                        ?obs <http://gss-data.org.uk/data/gss_data/energy/beis-final-uk-greenhouse-gas-emissions-national-statistics-1990-to-2019#dimension/gas> ?allgases ;
                        
                                <http://gss-data.org.uk/data/gss_data/energy/beis-final-uk-greenhouse-gas-emissions-national-statistics-1990-to-2019#dimension/breakdown> ?redux;
                        
                        
                                <http://purl.org/linked-data/sdmx/2009/attribute#unitMeasure> ?measure;
                        
                                <http://gss-data.org.uk/data/gss_data/energy/beis-final-uk-greenhouse-gas-emissions-national-statistics-1990-to-2019#dimension/period> ?year_uri ;
                        
                            <http://gss-data.org.uk/def/measure/gas-emissions> ?emission .
                        
                        BIND(SUBSTR(str(?year_uri),38,4) AS ?date)
                        }
                        
                        ?allgases rdfs:label ?gastype.
                        
                        ?measure rdfs:label ?measuretype.
                        
                        } 
                        
                        GROUP BY ?gastype ?date ?measuretype 
                        
                        ORDER BY ?gastype ?date
    
    
    `)
            .then(response => ({
                'chat1rawdata': response.results.bindings,
            }));         
}

fetch('./charts/dataset1.json')
    .then(response => response.json())
    .then(info => {
        getChart1(info.dataset)
                    .then(datasetInfo => {


                        datasetInfo.chat1rawdata.forEach(function(element) {

                                //console.log(element.gastype.value, element.date.value, element.totalemis.value, element.measuretype.value, element.totalemis.value+5);

                              if(element.date.value >= '1990') {
                                    
                                if (element.gastype.value == 'Carbon Dioxide - CO2') {
                                    emiCO2.push(parseFloat(element.totalemis.value));
                                    xcats.push(element.date.value);
                                    }
                                else
                                if (element.gastype.value == 'Methane - CH4') {
                                    emiCH4.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Nitrous Oxide - N2O') {
                                    emiN2O.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Hydrofluorocarbons - HFC') {
                                    emiHFC.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Sulphur Hexafluoride - SF6') {
                                    emiSF6.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Perfluorocarbons - PFC') {
                                    emiPFC.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Nitrogen Trifluoride - NF3') {
                                    emiNF3.push(parseFloat(element.totalemis.value));
                                }
                                else
                                if (element.gastype.value == 'Fluorinated Gases - F Gases') {
                                    emiFGF.push(parseFloat(element.totalemis.value));
                                }

                              }

                    });


                    console.log("chart1")

                    Highcharts.chart('chart1', { 

                                title: {
                                    text: 'Gas emissions'
                                },

                                subtitle: {
                                    text: 'Source: Open Linked Data - PMD'
                                },

                                yAxis: {
                                    title: {
                                        text: 'Emissions MTCO2'
                                    }
                                },

                                xAxis: {
                                    accessibility: {
                                        rangeDescription: 'Range: 1990 to 2019'
                                    }
                                },

                                legend: {
                                    layout: 'vertical',
                                    align: 'right',
                                    verticalAlign: 'middle'
                                },

                                plotOptions: {
                                    series: {
                                        label: {
                                            connectorAllowed: true
                                        },
                                        pointStart: 1990
                                    }
                                },

                                series: [{
                                    name: 'CO2',
                                    data: emiCO2
                                }, {
                                    name: 'CH4',
                                    data: emiCH4
                                }, {
                                    name: 'N2O',
                                    data: emiN2O
                                }, {
                                    name: 'HFC',
                                    data: emiHFC
                                }, {
                                    name: 'SF6',
                                    data: emiSF6
                                }, {
                                    name: 'PFC',
                                    data: emiPFC
                                }, {
                                    name: 'NF3',
                                    data: emiNF3
                                }, {
                                    name: 'FGF',
                                    data: emiFGF
                                }
                            
                                ],

                                responsive: {
                                    rules: [{
                                        condition: {
                                            maxWidth: 500
                                        },
                                        chartOptions: {
                                            legend: {
                                                layout: 'horizontal',
                                                align: 'center',
                                                verticalAlign: 'bottom'
                                            }
                                        }
                                    }]
                                }


                    });

                              
             });
                
                        
                        

       
    }).catch((err) => {
    // Do something for an error here
    // console.log("error hero")
});





};


onMount(createcharts);
    
</script>
    
    
    <style>
    
    .highcharts-figure, .highcharts-data-table table {
        min-width: 360px; 
        max-width: 800px;
        margin: 1em auto;
    }
    
    .highcharts-data-table table {
        font-family: Verdana, sans-serif;
        border-collapse: collapse;
        border: 1px solid #EBEBEB;
        margin: 10px auto;
        text-align: center;
        width: 100%;
        max-width: 500px;
    }
    .highcharts-data-table caption {
        padding: 1em 0;
        font-size: 1.2em;
        color: #555;
    }
    .highcharts-data-table th {
        font-weight: 600;
        padding: 0.5em;
    }
    .highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
        padding: 0.5em;
    }
    .highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
        background: #f8f8f8;
    }
    .highcharts-data-table tr:hover {
        background: #f1f7ff;
    }
    
    
    
    </style>
    <main>
    
    <figure class="highcharts-figure">
        <div id="chart1"></div>
        <p class="highcharts-description">
        </p>
    </figure>
    
    
    </main>