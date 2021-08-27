<script>

    const endpointDtsInfo = 'https://staging.gss-data.org.uk/sparql';


    var dstTitle = "";
    var dstTheme = "";
    var dstDescription = "";
    var dstDateIssued;
    var dstDateModified;
    var dstCreator;
    var dtsPrublisher;
    var dtsLicence;
    var dstLicenceDescription;
    var dstLandingPage;
    var dstKeywords = [];
    var dstDistributionsLink =[];
    var dstDistributions =[];


    var dstKeywordsP = ["babab", "babsb", "babsbds"];
    var dstDistributionsLinkP =["Link"];
    var dstDistributionsTitleP =["Title", "title2"];




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

					FILTER ( LANG (?infotype)='en').

                    
                    ?infotypeuri rdfs:label ?infotype.

                    OPTIONAL {?infodescrip rdfs:label ?desclabel}.

					OPTIONAL {?infodescrip <http://www.w3.org/ns/dcat#mediaType> ?type}.
					
					OPTIONAL {?infodescrip rdfs:comment ?comment}.
					
					OPTIONAL {?infodescrip <http://purl.org/dc/terms/title> ?title}.
					


                }

                ORDER BY ?infotype  
            
        
        `)
                .then(response => ({
                    'DtsInforawdata': response.results.bindings,
                }));         
    };


    fetch('./charts/datasetinfo1.json')
        .then(response => response.json())
        .then(info => {
            getDtsInfo(info.dataset)
                .then(datasetInfo => {

                    console.log("datasetInfo");
                    console.log(datasetInfo);

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
                        if (element.infotype.value == 'Publisher') {
                            dtsPrublisher = element.desclabel.value
                        }
                        if (element.infotype.value == 'Creator') {
                            dstCreator = element.desclabel.value
                        }
                        if (element.infotype.value == 'theme') {
                            dstTheme = element.desclabel.value
                        }
                        if (element.infotype.value == 'License') {
                            dtsLicence = element.desclabel.value
                        }
                        if (element.infotype.value == 'License') {
                            dstLicenceDescription = element.comment.value
                        }
                        if (element.infotype.value == 'landing page') {
                            dstLandingPage = element.infodescrip.value
                        }


                        if (element.infotype.value == 'keyword') {
                            dstKeywords.push(String(element.infodescrip.value))
                        }

                        if (element.infotype.value == 'distribution') {                                      

                            if (dstDistributions.includes(element.infodescrip.value)){
                                //console.log("included");
                            }
                            else {
                                dstDistributionsLink.push(String(element.infodescrip.value));
                                dstDistributions.push(String(element.title.value));  
                                //console.log("not included");
                            };

                        }



                    });

                    dstKeywordsP = dstKeywords;
                    dstDistributionsTitleP = dstDistributions;
                    dstDistributionsLinkP = dstDistributionsLink;
                   
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
        font: normal !important;
        }

    p {

        font: normal !important;
        }    


    .chartcontainer{
    
        min-height: 500px;
        padding: 1em;
    }

    table, td {
        border:none;
        padding: 7px;
        }

    table, tr{
        padding: 5px;
    }

    
</style>
    
<main>
    <div class="chartcontainer">
        <h2>Dataset details</h2>
        <p><b>Title :</b> {dstTitle}</p>
        <p><b>Description :</b> {dstDescription}</p>
        <p><b>Contents Issued :</b> {dstDateIssued}</p>
        <p><b>Contents Modified :</b> {dstDateModified}</p>
        <p><b>License :</b> {dtsLicence}</p>
        <p><b>License description:</b> {dstLicenceDescription}</p>
        <p><b>Publisher :</b> {dtsPrublisher}</p>
        <p><b>Creator :</b> {dstCreator}</p>
        <p><b>Theme :</b> {dstTheme}</p>
        <p><b>Landing Page :</b> <a href="{dstLandingPage}" target="_blank">{dstLandingPage}</a> </p>
        <p>
            <b>Keywords :</b> {#each dstKeywordsP as item}
            {item} &nbsp;
            {/each}
        </p>
       <h4>Distributions :</h4>
        <table>
            <tbody>
                {#each dstDistributionsTitleP  as dist}
                    <tr>
                        <td>{dist}</td>
                    </tr>
                {/each}
            </tbody>
        </table>

    </div>

    <hr>
</main>
