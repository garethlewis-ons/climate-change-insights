<script>

    const endpointDtsInfo = 'https://staging.gss-data.org.uk/sparql';


    var dstTitle = "";
    var dstFamily = "";
    var dstDescription = "";
    var dstDateIssued;
    var dstDateModified;
    let dstKeywords = [];
    let dstDistributions =[];




    //sparql header
    function sparql(query) {
        return fetch(endpointDtsInfo, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/sparql-query',
                'Accept': 'application/sparql-results+json'
            },
            body: query
        }).then((response) => response.json())
    };
    
    function getDtsInfo(dataset) {
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

        SELECT distinct *

        WHERE { 

            <http://gss-data.org.uk/data/gss_data/climate-change/beis-2019-uk-greenhouse-gas-emissions-final-figures-dataset-of-emissions-by-source-catalog-entry> ?infotypeuri ?infodescrip.
            
            ?infotypeuri rdfs:label ?infotype.
        }

        ORDER BY ?infotype
            
        
        `)
                .then(response => ({
                    'DtsInforawdata': response.results.bindings,
                }));         
    };


    fetch('./charts/DtsInfodataset.json')
        .then(response => response.json())
        .then(info => {
            getDtsInfo(info.dataset)
                .then(datasetInfo => {


                    datasetInfo.DtsInforawdata.forEach(function(element) {

                        if (element.infotype.value == 'Title') {
                            dstTitle = element.infodescrip.value
                        }
                        if (element.infotype.value == 'Markdown Description') {
                            dstDescription = element.infodescrip.value
                        }
                        if (element.infotype.value == 'Family') {
                            dstFamily = element.infodescrip.value
                        }
                        if (element.infotype.value == 'Date Issued') {
                            dstDateIssued = element.infodescrip.value
                        }
                        if (element.infotype.value == 'Date Modified') {
                            dstDateModified = element.infodescrip.value
                        }







                        //not working ones

                        if (element.infotype.value == 'keyword') {
                            dstKeywords.push(element.infodescrip.value)
                        }

                        if (element.infotype.value == 'distribution') {                                      

                            if (dstDistributions.includes(element.infodescrip.value)){
                                //console.log("included");
                            }
                            else {
                                dstDistributions.push(element.infodescrip); 
                                //console.log("not included");
                            };

                        }


                    });

                    console.log(dstKeywords);
                    console.log(dstDistributions);     
                     });

        }).catch((err) => {

        console.log("error DtsInfo")
    });
    
   
</script>
    
<style>
    main {
        display: flex;
        flex-direction: column;
        text-align: left;
        }

    .chartcontainer{
    
        min-height: 500px;
        padding: 1em;
    }

    
</style>
    
<main>
    <div class="chartcontainer">
        <h2>Dataset details</h2>
        <p><b>Title :</b> {dstTitle}</p>
        <p><b>Description :</b> {dstDescription}</p>
        <p><b>Contents Issued :</b> {dstDateIssued}</p>
        <p><b>Contents Modified :</b> {dstDateModified}</p>
        <p><b>Keywords :</b> {dstKeywords}</p>
        {#each dstKeywords as item}
         <p>{item}</p>
        {/each}
        <p><b>Distributions :</b></p>
        {#each dstDistributions as item}
         <p>{item}</p>
        {/each}
        

    </div>
</main>