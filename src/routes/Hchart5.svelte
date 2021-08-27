<script>
    
    import {onMount} from "svelte";
    const endpointChart5 = 'https://staging.gss-data.org.uk/sparql';

    function createcharts() {

        function sparql(query) {
                return fetch(endpointChart5, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/sparql-query',
                        'Accept': 'application/sparql-results+json'
                    },
                    body: query
                }).then((response) => response.json())
        }  

        function getChart5(dataset) {
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

                        select ?localname  ?date ?rainfall ?measuretype  ?alllocations

                        WHERE
                                                
                        {graph <http://gss-data.org.uk/graph/gss_data/climate-change/met-office-modelling-rainfall> 
                                                
                            {
                                                
                                ?obs <http://gss-data.org.uk/data/gss_data/climate-change/met-office-modelling-rainfall#dimension/geography> ?alllocations ;
                                                            
                                    <http://purl.org/linked-data/sdmx/2009/attribute#unitMeasure> ?measuretyperaw;
                                                
                                    <http://gss-data.org.uk/data/gss_data/climate-change/met-office-modelling-rainfall#dimension/month> ?dateraw;
                                                
                                    <http://gss-data.org.uk/def/climate-change/measure/rainfall> ?rainfall .
                                                
                                
                            }

                            ?alllocations rdfs:label ?localname.
                            ?measuretyperaw rdfs:label ?measuretype.
                            ?dateraw rdfs:label ?date.
                                                                    
                        } 
                                                
                        GROUP BY  ?localname ?date ?rainfall ?measuretype ?alllocations
                                                
                        ORDER BY  ?localname ?date
                    
                                    
                        
                        `)
                                .then(response => ({
                                    'Chart5rawdata': response.results.bindings,
                                }));         
        }


        fetch('./charts/dataset5.json')
                .then(response => response.json())
                .then(info => {
                    getChart5(info.dataset)
                        .then(datasetInfo => {

                            //console.log(datasetInfo);

                            var counter = 0;
                            var xcats = [];
                            var Wales = [];
                            var EastScot = [];
                            var NorthScot = [];
                            var WestScot = [];
                            var NorthenIreland = [];
                            var EastMidlads = [];
                            var WestMidlads = [];
                            var EastEngland = [];
                            var London = [];
                            var NorthEastEngland = [];
                            var NorthWestEngland = [];
                            var SouthEastEngland = [];
                            var SouthWestEngland = [];
                            var YorkshireHumber = [];

            

                            datasetInfo.Chart5rawdata.forEach(function(element) { 

                                
                                if (element.localname.value == 'Wales') {
                                    Wales.push(element.rainfall.value);
                                    xcats.push(element.date.value);
                                }
                                else if (element.localname.value == 'East Scotland') {
                                    EastScot.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'North Scotland') {
                                    NorthScot.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'West Scotland') {
                                    WestScot.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'Northen Ireland') {
                                    NorthenIreland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'East Midlands') {
                                    EastMidlads.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'West Midlands') {
                                    WestMidlads.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'East England') {
                                    EastEngland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'London') {
                                    London.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'North East England') {
                                    NorthEastEngland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'North West England') {
                                    NorthWestEngland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'South East England') {
                                    SouthEastEngland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'South West England') {
                                    SouthWestEngland.push(Number(element.rainfall.value));
                                }
                                else if (element.localname.value == 'Yorkshire and Humber') {
                                    YorkshireHumber.push(Number(element.rainfall.value));
                                }




                            });




                                //highcharts here
                                Highcharts.chart('chart5', {

                                                        chart: {
                                                            zoomType: 'x'
                                                        },

                                                        title: {
                                                            text: 'Rainfall in the UK'
                                                        },

                                                        subtitle: {
                                                            text: 'Values in millilitres - draw a square to zoom'
                                                        },

                                                        tooltip: {
                                                            valueDecimals: 2
                                                        },

                                                        xAxis: {
                                                            
                                                            categories: xcats,
                                                        },

                                                        series: [{
                                                                        data: Wales,
                                                                        lineWidth: 0.5,
                                                                        name: 'Wales'
                                                                    },
                                                                    {
                                                                        data: EastScot,
                                                                        lineWidth: 0.5,
                                                                        name: 'East Scotland'
                                                                    },
                                                                    {
                                                                        data: NorthScot,
                                                                        lineWidth: 0.5,
                                                                        name: 'NorthScot'
                                                                    },
                                                                    {
                                                                        data: WestScot,
                                                                        lineWidth: 0.5,
                                                                        name: 'West Scotland'
                                                                    },
                                                                    {
                                                                        data: NorthenIreland,
                                                                        lineWidth: 0.5,
                                                                        name: 'Northen Ireland'
                                                                    },
                                                                    {
                                                                        data: EastMidlads,
                                                                        lineWidth: 0.5,
                                                                        name: 'East Midlands'
                                                                    },
                                                                    {
                                                                        data: WestMidlads,
                                                                        lineWidth: 0.5,
                                                                        name: 'West Midlands'
                                                                    },
                                                                    {
                                                                        data: EastEngland,
                                                                        lineWidth: 0.5,
                                                                        name: 'East England'
                                                                    },
                                                                    {
                                                                        data: London,
                                                                        lineWidth: 0.5,
                                                                        name: 'London'
                                                                    },
                                                                    {
                                                                        data: NorthWestEngland,
                                                                        lineWidth: 0.5,
                                                                        name: 'North West England'
                                                                    },
                                                                    {
                                                                        data: NorthEastEngland,
                                                                        lineWidth: 0.5,
                                                                        name: 'North East England'
                                                                    },
                                                                    {
                                                                        data: SouthEastEngland,
                                                                        lineWidth: 0.5,
                                                                        name: 'South East England'
                                                                    },
                                                                    {
                                                                        data: SouthWestEngland,
                                                                        lineWidth: 0.5,
                                                                        name: 'South West England'
                                                                    },
                                                                    {
                                                                        data: YorkshireHumber,
                                                                        lineWidth: 0.5,
                                                                        name: 'Yorkshire and Humber'
                                                                    }
                                                                 ]

                                            });
                                    
                            });

                }).catch((err) => {

                console.log("error Chart5")
        });

        
        //end function
    };

    onMount(createcharts);

    
    
    //sparql header

    




    
   
   </script>
    
<style>
    main {
        display: flex;
        flex-direction: column;
        }
    
        .chartcontainer{
        min-height: 500px;
        margin-left: -50px;
        margin-bottom: 20px;
    }
    
</style>
    
<main>
    <div id="chart5" class="chartcontainer"></div>
</main>

