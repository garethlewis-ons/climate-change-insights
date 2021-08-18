<script>

    const endpointChart4 = 'https://staging.gss-data.org.uk/sparql';
    
    //sparql header
    function sparql(query) {
        return fetch(endpointChart4, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json'
            },
            body: query
        }).then((response) => response.json())
    }
    
    function getChart4(dataset) {
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
        
        
        
        select ?sectortype  (SUM(?emission)/1000000 AS ?value) 
        
        WHERE
        
        {graph <http://gss-data.org.uk/graph/gss_data/climate-change/beis-2019-uk-greenhouse-gas-emissions-final-figures-dataset-of-emissions-by-source>
        
        {
        ?obs <http://gss-data.org.uk/def/climate-change/property/dimension/national-communication-sub-sector> ?sector ;
            
                <http://gss-data.org.uk/data/gss_data/climate-change/beis-2019-uk-greenhouse-gas-emissions-final-figures-dataset-of-emissions-by-source#dimension/year> <http://reference.data.gov.uk/id/year/2019>;
        
                <http://gss-data.org.uk/def/measure/gas-emissions> ?emission ;	
        
        }
        
        ?sector rdfs:label ?sectortype
        } 
        
        GROUP BY ?sectortype 
        
        Order by ?sectortype 
    
                    
        
        `)
                .then(response => ({
                    'Chart4rawdata': response.results.bindings,
                }));         
    }


    fetch('./charts/chart4dataset.json')
        .then(response => response.json())
        .then(info => {
            getChart4(info.dataset)
                .then(datasetInfo => {

                    
                    var allCategories = [""];
                    var eachEmission = [];
                    var parcedEmission = [];
                    var sumofEmissions = [];
                    var sumofEmissions4;
                    var datachart4;

                    datasetInfo.Chart4rawdata.forEach(function(element) {


                    if (
                            element.sectortype.value == 'Aviation' ||
                            element.sectortype.value == 'Cropland' ||
                            element.sectortype.value == 'Enteric Fermentation' ||
                            element.sectortype.value == 'Other Agriculture' ||
                            element.sectortype.value == 'Other Mobile' ||
                            element.sectortype.value == 'Railways' ||
                            element.sectortype.value == 'Road' ||
                            element.sectortype.value == 'Settlements' ||
                            element.sectortype.value == 'Wastes' ||
                            element.sectortype.value == 'Wetlands'
                            ) 
                            {

                            allCategories.push(element.sectortype.value);
                            eachEmission.push(element.value.value);   
                            }
                    });

                    eachEmission.forEach(function(element) { 
                            
                            var text = element;
                            var pointNum = parseFloat(text)*1000000;
                            //console.log(pointNum); 
                            parcedEmission = pointNum;
                            
                            sumofEmissions.push(pointNum);
  
  
                    });

                    sumofEmissions = sumofEmissions. map(function(each_element){
                                return Number(each_element. toFixed(2));
                    });

                    sumofEmissions4 = sumofEmissions.reduce(function(a, b){
                                return a + b;
                    }, 0);


                    sumofEmissions.unshift(sumofEmissions4);

                    var layout2 = {
                                title: 'Gas emissions by sectors, UK 2019' + '<br>' + '<br>' + 'All sectors emissions: ' + sumofEmissions[0] + ' Metric Tonnes of CO2 Equivalent',
                                paper_bgcolor: '#f8f8f8',
                                plot_bgcolor: '#f8f8f8'
                    };

                    datachart4 = [{
                                type: "treemap",
                                     
                                 labels: allCategories,
                                     
                                 parents: ["", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors", "Sectors" ],
                                 
                                 values: sumofEmissions,
                                 
                    }]

                    Plotly.newPlot('Chart4', datachart4, layout2,  {displaylogo: false});        
                            
                     });

        }).catch((err) => {

        console.log("error Chart4")
    });
    
   
   </script>
    
<style>
    main {
        display: flex;
        flex-direction: column;
        }
    
    
    .chartcontainer{
    
        min-height: 500px;
        padding: 1em;
    }
    
</style>
    
<main>
    <div id="Chart4" class="chartcontainer"></div>
</main>