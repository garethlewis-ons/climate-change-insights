<script>

    const endpointChart1 = 'https://staging.gss-data.org.uk/sparql';
    
    //sparql header
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
    
    function getChart2(dataset) {
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
                    'chart2rawdata': response.results.bindings,
                }));         
    }
    
    fetch('./charts/chart2dataset.json')
        .then(response => response.json())
        .then(info => {
            getChart2(info.dataset)
                .then(datasetInfo => {
                            var counter = 0;
                            var xcats = [];
                            var emiCO2 = [];
                            var emiCH4 = [];
                            var emiN2O = [];
                            var emiHFC = [];
                            var emiSF6 = [];
                            var emiPFC = [];
                            var emiNF3 = [];
                            var emiFGF = [];

                            datasetInfo.chart2rawdata.forEach(function(element) {

                                if(element.date.value >= '2010') {

                                    if (element.gastype.value == 'Carbon Dioxide - CO2') {
                                        emiCO2.push(element.totalemis.value);
                                        xcats.push(element.date.value);
                                        }
                                    else if (element.gastype.value == 'Methane - CH4') {
                                        emiCH4.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Nitrous Oxide - N2O') {
                                        emiN2O.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Hydrofluorocarbons - HFC') {
                                        emiHFC.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Sulphur Hexafluoride - SF6') {
                                        emiSF6.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Perfluorocarbons - PFC') {
                                        emiPFC.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Nitrogen Trifluoride - NF3') {
                                        emiNF3.push(element.totalemis.value);
                                    }
                                    else if (element.gastype.value == 'Fluorinated Gases - F Gases') {
                                        emiFGF.push(element.totalemis.value);
                                    }

                                };

                            });
    
    
                            var trace1 = {
                                name: 'Net CO2 emissions',
                                x: xcats,
                                y: emiCO2,
                                fill: '#F4A02B',
                                fillcolor: '#F4A02B',
                                type: 'scatter'
                            };
                              
                            var trace2 = {
                                name: 'Methane (CH4)',
                                x: xcats,
                                y: emiCH4,
                                fill: '#5C51E2',
                                fillcolor: '#5C51E2',
                                type: 'scatter'
                            };

                            var trace3 = {
                                name: 'Nitrous oxide (N2O)',
                                x: xcats,
                                y: emiN2O,
                                fill: '#16B5D2',
                                fillcolor:'#16B5D2',
                                type: 'scatter'
                            };

                            var trace4 = {
                                name: 'Hydrofluorocarbons (HFC)',
                                x: xcats,
                                y: emiHFC,
                                fill: '#F34662',
                                fillcolor: '#F34662',
                                type: 'scatter'
                            };

                            var trace5 = {
                                name: 'Sulphur hexafluoride (SF6)',
                                x: xcats,
                                y: emiSF6,
                                fill: '#5F27CD',
                                fillcolor: '#5F27CD',
                                type: 'scatter'
                            };

                            var trace6 = {
                                name: 'Perfluorocarbons (PFC)',
                                x: xcats,
                                y: emiPFC,
                                fill: '#1DD1A1',
                                fillcolor: '#1DD1A1',
                                type: 'scatter'
                            };

                            var trace7 = {
                                name: 'Nitrogen Trifluoride - NF3',
                                x: xcats,
                                y: emiNF3,
                                fill: '#1DD133',
                                fillcolor: '#1DD133',
                                type: 'scatter'
                            };

                            var layout = {
                                title: 'Recent territorial greenhouse gas emissions by gas, UK 2010 - 2019',
                                paper_bgcolor: '#FFF',
                                plot_bgcolor: '#FFF',
                                legend: {"orientation": "h"}
                            };
                            var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
                            Plotly.newPlot('Chart2', data, layout,  {displaylogo: false});                        
                        });

        }).catch((err) => {

        console.log("error chart3")
    });
    
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
    <div id="Chart2" class="chartcontainer"></div>
</main>