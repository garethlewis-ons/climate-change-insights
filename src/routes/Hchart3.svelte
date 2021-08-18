<script>

    const endpointChart3 = 'https://staging.gss-data.org.uk/sparql';
    
    //sparql header
    function sparql(query) {
        return fetch(endpointChart3, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json'
            },
            body: query
        }).then((response) => response.json())
    }
    
    function getChart3(dataset) {
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
                        
                        select ?gastype ?date (SUM(?emission)/1000000 AS ?value) 
                        WHERE
                        
                        {graph <http://gss-data.org.uk/graph/gss_data/climate-change/beis-2019-uk-greenhouse-gas-emissions-final-figures-dataset-of-emissions-by-source> 
                        
                        {
                            ?obs <http://gss-data.org.uk/def/climate-change/property/dimension/national-communication-fuel-group> ?gastype ;
                                
                            <http://gss-data.org.uk/data/gss_data/climate-change/beis-2019-uk-greenhouse-gas-emissions-final-figures-dataset-of-emissions-by-source#dimension/year> ?year_uri ;
                                
                            <http://gss-data.org.uk/def/measure/gas-emissions> ?emission .
                        
                            BIND(SUBSTR(str(?year_uri),38,4) AS ?date)
                        }
                        
                        #?area rdfs:label ?gastype
                        } 
                        
                        GROUP BY ?gastype ?date
                        
                        Order by ?gastype ?date
                    
        
        `)
                .then(response => ({
                    'Chart3rawdata': response.results.bindings,
                }));         
    }


    fetch('./charts/chart3dataset.json')
        .then(response => response.json())
        .then(info => {
            getChart3(info.dataset)
                .then(datasetInfo => {

                        var xcats7 = [];
                        var emicoal = [];
                        var emipetro = [];
                        var emigasf = [];
                        var emiOsol = [];
                        var emiOSF = [];
                        var xcats = xcats7; 

                        datasetInfo.Chart3rawdata.forEach(function(element) {

                                if(element.date.value >= '1990') {
  
                                      if (element.gastype.value == 'http://gss-data.org.uk/def/climate-change/concept/national-communication-fuel/coal') {
                                         emicoal.push(element.value.value);
                                          xcats7.push(element.date.value);
                                          }
                                      else
                                      if (element.gastype.value == 'http://gss-data.org.uk/def/climate-change/concept/national-communication-fuel/petroleum') {
                                        emipetro.push(element.value.value);
                                      }
                                      else
                                      if (element.gastype.value == 'http://gss-data.org.uk/def/climate-change/concept/national-communication-fuel/gaseous-fuels') {
                                        emigasf.push(element.value.value);
                                      }
                                      else
                                      if (element.gastype.value == 'http://gss-data.org.uk/def/climate-change/concept/national-communication-fuel/other-emissions') {
                                        emiOsol.push(element.value.value);
                                      }
                                      else
                                      if (element.gastype.value == 'http://gss-data.org.uk/def/climate-change/concept/national-communication-fuel/other-solid-fuels') {
                                        emiOSF.push(element.value.value);
                                      }
                                      
                                      
                                };

                        });
    
    
                        var trace1 = {
                                name: 'Coal',
                                x: xcats,
                                y: emicoal,
                                fill: '#F4A02B',
                                fillcolor: '#F4A02B',
                                type: 'scatter'
                              };
                              
                        var trace2 = {
                          name: 'Petroleum',
                          x: xcats,
                          y: emipetro,
                          fill: '#5C51E2',
                          fillcolor: '#5C51E2',
                          type: 'scatter'
                        };

                        var trace3 = {
                          name: 'Gasesous Fuels',
                          x: xcats,
                          y: emigasf,
                          fill: '#16B5D2',
                          fillcolor:'#16B5D2',
                          type: 'scatter'
                        };

                        var trace4 = {
                          name: 'Other-Emissions',
                          x: xcats,
                          y: emiOsol,
                          fill: '#F34662',
                          fillcolor: '#F34662',
                          type: 'scatter'
                        };

                        var trace5 = {
                          name: 'Other-Solid-Fuels',
                          x: xcats,
                          y: emiOSF,
                          fill: '#5F27CD',
                          fillcolor: '#5F27CD',
                          type: 'scatter'
                        };

                        var layout = {
                          title: 'Recent territorial greenhouse gas emissions by gas, UK 2010 - 2019',
                          paper_bgcolor: '#FFF',
                          plot_bgcolor: '#FFF',
                          legend: {"orientation": "h"}
                       };


                       var data = [trace1, trace2, trace3, trace4, trace5];
                           
                           
                            Plotly.newPlot('Chart3', data, layout,  {displaylogo: false}); 
                            
                            
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
    <div id="Chart3" class="chartcontainer"></div>
</main>