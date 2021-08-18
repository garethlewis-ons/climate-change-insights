<script>

    const endpointChart5 = 'https://staging.gss-data.org.uk/sparql';
    
    //sparql header
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


    fetch('./charts/chart5dataset.json')
        .then(response => response.json())
        .then(info => {
            getChart5(info.dataset)
                .then(datasetInfo => {

                    console.log(datasetInfo);

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
                            EastScot.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'North Scotland') {
                            NorthScot.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'West Scotland') {
                            WestScot.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'Northen Ireland') {
                            NorthenIreland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'East Midlands') {
                            EastMidlads.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'West Midlands') {
                            WestMidlads.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'East England') {
                            EastEngland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'London') {
                            London.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'North East England') {
                            NorthEastEngland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'North West England') {
                            NorthWestEngland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'South East England') {
                            SouthEastEngland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'South West England') {
                            SouthWestEngland.push(element.rainfall.value);
                        }
                        else if (element.localname.value == 'Yorkshire and Humber') {
                            YorkshireHumber.push(element.rainfall.value);
                        }




                    });




                        var trace1 = {
                                name: 'Wales',
                                x: xcats,
                                y: Wales,
                                fill: '#F4A02B',
                                fillcolor: '#F4A02B',
                                type: 'scatter'
                            };

                        var trace2 = {
                            name: 'East Scotland',
                            x: xcats,
                            y: EastScot,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        };  

                        var trace3 = {
                            name: 'North Scotland',
                            x: xcats,
                            y: NorthScot,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 

                        var trace4 = {
                            name: 'West Scotland',
                            x: xcats,
                            y: WestScot,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 

                        var trace5 = {
                            name: 'Northen Ireland',
                            x: xcats,
                            y: NorthenIreland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 

                        var trace6 = {
                            name: 'East Midlands',
                            x: xcats,
                            y: EastMidlads,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 

                        var trace7 = {
                            name: 'West Midlands',
                            x: xcats,
                            y: WestMidlads,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace8 = {
                            name: 'East England',
                            x: xcats,
                            y: EastEngland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace9 = {
                            name: 'London',
                            x: xcats,
                            y: London,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace10 = {
                            name: 'North East England',
                            x: xcats,
                            y: NorthEastEngland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace11 = {
                            name: 'North West England',
                            x: xcats,
                            y: NorthWestEngland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace12 = {
                            name: 'South East England',
                            x: xcats,
                            y: SouthEastEngland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace13 = {
                            name: 'South West England',
                            x: xcats,
                            y: SouthWestEngland,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 


                        var trace14 = {
                            name: 'Yorkshire and Humber',
                            x: xcats,
                            y: YorkshireHumber,
                            fill: '#F4A02B',
                            fillcolor: '#F4A02B',
                            type: 'scatter'
                        }; 




                        var layout = {
                                title: 'Recent territorial greenhouse gas emissions by gas, UK 2010 - 2019',
                                paper_bgcolor: '#f8f8f8',
                                plot_bgcolor: '#f8f8f8',
                                legend: {"orientation": "h"}
                            };
                        
                        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace6, trace8, trace9, trace10, trace11, trace12, trace13, trace14];
                        
                        Plotly.newPlot('Chart5', data, layout,  {displaylogo: false});  





                            
                     });

        }).catch((err) => {

        console.log("error Chart5")
    });
    
   
   </script>
    
<style>
    main {
        display: flex;
        flex-direction: column;
        }
    
    .chartcontainer {
    
        min-height: 500px;
        padding: 1em;
    }
    
</style>
    
<main>
    <h2>Here we are</h2>
    <div id="Chart5" class="chartcontainer"></div>
</main>