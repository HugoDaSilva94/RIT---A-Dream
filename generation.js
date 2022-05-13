//Our image to generate
//const para = document.getElementById("ourImage");
//The list of actual medias that are on screen
const collage = []
//FUNCTION TO RANDOMLY GENERATE IMAGES AND DELETE THE OLD ONE
function RandomGeneration(id){

    const para = document.getElementById(id);
    if(!collage.length)collage.push(para);

    //CREATE A CLONE OF THE EXEMPLE IMAGE
    const clone = para.cloneNode(true);

    //DEFINE RANDOM POSITIONS AND APPLY THEM
    let randomX = Math.floor(Math.random() * (window.innerWidth-400));
    let randomY = Math.floor(Math.random() * (window.innerHeight-400));
    clone.style.top = (randomY+100)+"px";
    clone.style.left = (randomX+100)+"px";

    //DEFINE THE SIZE OF THE MEDIA
    let size = (Math.floor(Math.random()*300));
    clone.style.width = size+200+"px";

    //GENERATE THE IMAGE IN THE PAGE THEN ADD IT TO OUR LIST 
    document.body.appendChild(clone);
    collage.push(clone);
    //clone.classList.add("fade-in");
    
    //console.log(collage);

    //IF THE LIST IS FULL, DELETE THE OLDEST IMAGE
    if(collage.length > 10){
        collage[0].remove();
        collage.shift()
    }

}