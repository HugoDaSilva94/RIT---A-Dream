"use strict";

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

//-------------------------------------------------------------------------------------
//Our image to generate
//const para = document.getElementById("ourImage");
//The list of actual medias that are on screen
const collage = []
//FUNCTION TO RANDOMLY GENERATE IMAGES AND DELETE THE OLD ONE
function RandomGeneration(){
    // Create an image element in HTML using first image
    // in storyMedia array
    let imgElement = document.createElement('img');
    imgElement.src = storyMedia.shift();

    // //CREATE A CLONE OF THE EXEMPLE IMAGE
    // const clone = para.cloneNode(true);

    //DEFINE RANDOM POSITIONS AND APPLY THEM
    let randomX = Math.floor(Math.random() * (window.innerWidth-400));
    let randomY = Math.floor(Math.random() * (window.innerHeight-400));
    imgElement.style.top = (randomY+100)+"px";
    imgElement.style.left = (randomX+100)+"px";

    //DEFINE THE SIZE OF THE MEDIA
    let size = (Math.floor(Math.random()*300));
    imgElement.style.width = size+200+"px";

    //RANDOMIZE OPACITY
    imgElement.style.opacity = Math.random();

    //GENERATE THE IMAGE IN THE PAGE THEN ADD IT TO OUR LIST 
    document.body.appendChild(imgElement);
    collage.push(imgElement);
    //collage.classList.add("fade-in");
    
    console.log(collage);

    //IF THE LIST IS FULL, DELETE THE OLDEST IMAGE
    if(collage.length > 10){
        collage[0].remove();
        collage.shift()
    }

}

