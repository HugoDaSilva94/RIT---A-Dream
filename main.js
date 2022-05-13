"use strict";

import { RandomGeneration } from "./generation.js";

var Om_data;
var places;
var relations = [];
var storyMedia = [];

window.onload = () => {
    // console.log(pages);
    // places.then((d)=>console.log(d));
    init();
}

function init() {
    d3.json("A-Dream-Whole.json").then((data) => {
        Om_data = data;
        places = getSevenRandomPlaces();
        getRelationsFromPlaces();
        getStoryMedia();
    });

    // Hide all content except title

    // Get contents (related items) of locations

    // Draw all location content, but set them all to hidden, except for the title
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

function getRelationsFromPlaces() {
    if(places) {
        places.forEach(p => {
            // We are only concerned with agents for the purposes
            // of our story
            if(p.values[0]['genstory:hasActant']) {
                relations.push(p.values[0]['genstory:hasActant']);
            }
        });
    }
}

function getStoryMedia() {
    relations.forEach(r => {
        r.forEach( item => {
            // Index 0 = largest thumbnail option; may choose to randomize
            // thumbnail sizes later
            if(item.thumbnail_display_urls.large) {
                storyMedia.push(item.thumbnail_display_urls.large);
            }
        });
    });
}

