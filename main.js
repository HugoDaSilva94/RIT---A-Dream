"use strict";

let canvas;
let ctx;


window.onload = () => {
    init();
}

function init() {
    // Rudimentary canvas initialization
    canvas = document.getElementById('content');
    if (canvas.getContext) ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Get 7 locations

    // Get contents (related items) of locations

    // Draw all location content, but set them all to hidden, except for the title
}

