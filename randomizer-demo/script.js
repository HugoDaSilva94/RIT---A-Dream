const collection = document.getElementsByClassName("place");
const positions = [0,0,0,0];
var filter = document.getElementById("filter"), placeLayers;
var props = ['genstory:hasAffect','genstory:hasActant','genstory:hasEvenement','genstory:hasLieu','genstory:hasObject'];
var positionX = 200;


function getOmkTimelinerDatabase(jsonFile){
	d3.json(jsonFile).then((data) => {
		placeLayers = data.layers.filter(l=>l.class["o:label"]=="Lieu");
		console.log(placeLayers);
		SetRandomTimelineOmk();
	});  
}

function SetRandomTimelineOmk(){
	//get random layer
	let idRA = d3.randomInt(placeLayers.length-1)();	
	let rndLayer = placeLayers[idRA];
	//get relations of the layer to story element
	let layerRelations = [rndLayer.source];
	rndLayer.values.forEach(v => {
		props.forEach(p=>{
			if(v[p]){
				v[p].forEach(r=>layerRelations.push(r));
			}
		});
	});
	//remove element
	//create html element directly from data
	let timeline = d3.select('#timelineOmk')
	.selectAll("div")
	.data(layerRelations)
	.join(
	  enter => enter.append("div")
		  .attr("class",(d,i) => {
			let c =  "place"+i+' place';
			return c
		  })
		  .style('top',(d,i)=> (50*i)+"px")
		  .style('left',(d,i)=> (positionX*i)+"px")
		  .text(d=>d['o:title']),
	  update => update.text(d=>d['o:title']),
	  exit => exit.remove()
	)

	//get relations with this place
	console.log(rndLayer);
}


function SetRandomTimeline(){

	const order = [0,1,2,3];
	order.sort(function(a, b){return 0.5 - Math.random()});
	//console.log(order);

	for (let i = 0; i < collection.length; i++) {
  		//console.log(collection[i]);

  		if(collection[i].className == "place1 place"){
  			collection[i].style.top = "50px";
  			collection[i].style.left = (positionX*(order[0])).toString()+"px";
  			positions[0] = positionX*(order[0]);
  		}
  		if(collection[i].className == "place2 place"){
  			collection[i].style.top = "100px";
  			collection[i].style.left = (positionX*(order[1])).toString()+"px";
  			positions[1] = positionX*(order[1]);
  		}
  		if(collection[i].className == "place3 place"){
  			collection[i].style.top = "150px";
  			collection[i].style.left = (positionX*(order[2])).toString()+"px";
  			positions[2] = positionX*(order[2]);
  		}
  		if(collection[i].className == "place4 place"){
  			collection[i].style.top = "200px";
  			collection[i].style.left = (positionX*(order[3])).toString()+"px";
  			positions[3] = positionX*(order[3]);
  		}
	}
}
var gradient;
var id = null;
var ActualPlace = 0;
function PlayTimeline() {

	//console.log(positions);
  	var cursor = document.getElementById("cursor");   
  	var pos = 0;
  	clearInterval(id);
  	id = setInterval(frame, 10);
  	function frame() {
  		SetFilterColor(pos);
    	if (pos >= 800) {
      		clearInterval(id);
    	} else {
      		pos++;
      		cursor.style.left = pos + 'px';
    	}
  	}
}

function SetFilterColor(pos){
	//console.log(pos);
	if(pos == positions[0]){
		filter.style.backgroundColor = "#E9D5DA";
		//console.log(ActualPlace);
	}
	if(pos == positions[1]){
		filter.style.backgroundColor = "#827397";
		//console.log(ActualPlace);
	}
	if(pos == positions[2]){
		filter.style.backgroundColor = "#4D4C7D";
		//console.log(ActualPlace);
	}
	if(pos == positions[3]){
		filter.style.backgroundColor = "#363062";
		//console.log(ActualPlace);
	}
}