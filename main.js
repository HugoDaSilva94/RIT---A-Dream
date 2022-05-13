"use strict";

let canvas;
let ctx;
let pages = document.getElementsByClassName("page");


window.onload = () => {
    init();
}

function init() {
    // Get 7 locations

    // Hide all content except title

    // Get contents (related items) of locations

    // Draw all location content, but set them all to hidden, except for the title
}

function getSevenRandomPlaces(jsonFile) {
    d3.json(jsonFile).then((data) => {
        // Get place data from Omeka
		let placeLayers = data.layers.filter(layers=>layers.class["o:label"]=="Lieu");
        // Shuffle data
        let shuffled = placeLayers.sort(()=> 0.5 - Math.random());
        let selected = shuffled.slice(0,7);
        console.log(selected);
	});
}

