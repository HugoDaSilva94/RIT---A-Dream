"use strict";

var pages = document.getElementsByClassName("page");
var Om_data;
var places;
var relatedAgents = [];
// Place layers from omeka database
// var Om_placeLayers = d3.json("A-Dream-Whole.json").then((data) => {
//     return data.layers.filter(layers=>layers.class["o:label"]=="Lieu");
// });
// // Seven randomly selected places
// var places = Om_placeLayers.then((om_data) => {
//     return om_data.sort(()=> 0.5 - Math.random()).slice(0,7);
// });
// var agents = places.then((p)=>{
//     let result;
//     for(let i = 0; i < p.length; i++) {
        
//     }
// });

window.onload = () => {
    // console.log(pages);
    // places.then((d)=>console.log(d));
    init();
}

function init() {
    d3.json("A-Dream-Whole.json").then((data) => {
        Om_data = data;
        places = getSevenRandomPlaces();
        relatedAgents = getRelatedAgentsFromPlaces();
    });

    // Hide all content except title

    // Get contents (related items) of locations

    // Draw all location content, but set them all to hidden, except for the title
}

function getRelatedAgentsFromPlaces() {
    console.log(places);
    if(places) {
        places.forEach(p => {
            // We are only concerned with agents for the purposes
            // of our story
            if(p.values[0]['genstory:hasActant']) {
                relatedAgents.push(p.values[0]['genstory:hasActant']);
            }
        });
    }
}

function getSevenRandomPlaces() {
    if (Om_data) {
        let Om_places = Om_data.layers.filter(layers=>layers.class["o:label"]=="Lieu");
        return Om_places.sort(()=> 0.5 - Math.random()).slice(0,7);
    }
    else {
        console.log("Om_data is null");
    }
}

