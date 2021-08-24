<script>

    import {onMount} from "svelte";
    const endpointChart4 = 'https://staging.gss-data.org.uk/sparql';



    function createcharts() {

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
                            ?obs <http://gss-data.org.uk/def/climate-change/property/dimension/national-communication-sector> ?sector ;
                                
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
   
                fetch('./charts/dataset4.json')
                        .then(response => response.json())
                        .then(info => {
                            getChart4(info.dataset)
                                .then(datasetInfo => {

                                    
                                    var allCategories = [];
                                    var eachEmission = [];
                                    var parcedEmission = [];
                                    var sumofEmissions = [];
                                    var sumofEmissions4;
                                    var datachart4;

                                    datasetInfo.Chart4rawdata.forEach(function(element) {


                                    if (
                                            element.sectortype.value == 'Agriculture' ||
                                            element.sectortype.value == 'Business' ||
                                            element.sectortype.value == 'Energy Supply' ||
                                            element.sectortype.value == 'Industrial Processes' ||
                                            element.sectortype.value == 'Land Use and Land Use Change and Forestry' ||
                                            element.sectortype.value == 'Public' ||
                                            element.sectortype.value == 'Residential' ||
                                            element.sectortype.value == 'Transport' ||
                                            element.sectortype.value == 'Waste Management'
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
                                    
                                    //highcharts here

                                    console.log("sumofEmissions");
                                    console.log(sumofEmissions);
                                    console.log("allCategories");
                                    console.log(allCategories)



                                    Highcharts.chart('chart4', {
                                                    series: [{
                                                        type: "treemap",
                                                        layoutAlgorithm: 'stripes',
                                                        alternateStartingDirection: true,
                                                        levels: [{
                                                            level: 1,
                                                            layoutAlgorithm: 'sliceAndDice',
                                                            dataLabels: {
                                                                enabled: true,
                                                                align: 'left',
                                                                verticalAlign: 'top',
                                                                style: {
                                                                    fontSize: '15px',
                                                                    fontWeight: 'bold'
                                                                }
                                                            }
                                                        }],
                                                        data: [{
                                                            name: allCategories[0],
                                                            parent: allCategories[0],
                                                            value: sumofEmissions[0],
                                                            color: '#F4A02B'
                                                        }, {
                                                            name: allCategories[1],
                                                            parent: allCategories[1],
                                                            value: sumofEmissions[1],
                                                            color: '#17B5D2'
                                                        }, {
                                                            name: allCategories[2],
                                                            parent: allCategories[2],
                                                            value: sumofEmissions[2],
                                                            color: '#F34662'
                                                        }, {
                                                            name: allCategories[3],
                                                            parent: allCategories[3],
                                                            value: sumofEmissions[3],
                                                            color: '#5F27CD'
                                                        }, {
                                                            name: allCategories[4],
                                                            parent: allCategories[4],
                                                            value: sumofEmissions[4],
                                                            color: '#FF0066'
                                                        }, {
                                                            name: allCategories[5],
                                                            parent: allCategories[5],
                                                            value: sumofEmissions[5],
                                                            color: '#5F27CD'
                                                        }, {
                                                            name: allCategories[6],
                                                            parent: allCategories[6],
                                                            value: sumofEmissions[6],
                                                            color: '#1DD1A1'
                                                        }, {
                                                            name: allCategories[7],
                                                            parent: allCategories[7],
                                                            value: sumofEmissions[7],
                                                            color: '#7D38A1'
                                                        }, {
                                                            name: allCategories[8],
                                                            parent: allCategories[8],
                                                            value: sumofEmissions[8],
                                                            color: '#0000FF'
                                                        }, ]
                                                    }],
                                                    title: {
                                                        text: 'Total emissions by sector 2019 (MT GWP CO2)'
                                                    }
                                                });



                                            
                                });

                        }).catch((err) => {

                            console.log("error Chart4")
                });
   

   
        //close createcharts
    };


    onMount(createcharts);

   
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
    <div id="chart4" class="chartcontainer"></div>
</main>

