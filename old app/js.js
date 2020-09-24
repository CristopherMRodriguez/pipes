  //tune generator function
 "use strict";
function beba() {
// these are the variables interfacing the directories of the random generated tune objects
  let tuneName = "";
  let audio = "";
  let random = "";
  let pdfPath = "";
  let zip = "";
	
  //inputs the HTML's Select Tune Style
  let tuneSelect = document.getElementById("dropTunes").value; 
	
	
  // switches the objects based on the user's selection of style of music.
	
	switch (tuneSelect) {
			
  // first case is the default reminder to pick a tune if they didn't select;
		  
    case "choon": random = choonObj;
    break;
		  
  // below case is for ALL tunes, exercises, sets.  EVERYTHING!
		  
	case "any": let tuneObjArrayri = Math.floor(Math.random() * 			                   			tuneObjArray.length); 
		random = tuneObjArray[tuneObjArrayri];
		tuneObjArray.splice(tuneObjArrayri, 1); 
		if (tuneObjArray.length === 0) {window.location.reload();}
		break;
		  
  //all styles are listed below. the random variable equals a random index for the specified style. 
		  
    case "6/8": 
		let sixri = Math.floor(Math.random() * six8.length); 
		random = six8[sixri]; 
		six8.splice(sixri, 1); 
		if (six8.length === 0) {window.location.reload();}
		break;
		  
    case "2/4": 
		let twori = Math.floor(Math.random() * two4.length); 
		random = two4[twori]; 
		two4.splice(twori, 1); 
		if (two4.length === 0) {window.location.reload();}
		break;
		  
    case "3/4": 
		let threeri = Math.floor(Math.random() * three4.length); 
		random = three4[threeri]; 
		three4.splice(threeri, 1); 
		if (three4.length === 0) {window.location.reload();}
		break;
		  
    case "4/4": 
		let four4ri = Math.floor(Math.random() * four4.length); 
		random = four4[four4ri]; 
		four4.splice(four4ri, 1); 
		if (four4.length === 0) {window.location.reload();}
		break;
		  
    case "exercises": 
		let exri = Math.floor(Math.random() * exercises.length); 
		random = exercises[exri]; 
		exercises.splice(exri, 1);  
		if (exercises.length === 0) {window.location.reload();}
		break;
		  
    case "funeral": 
		let funri = Math.floor(Math.random() * funeralArray.length); 
		random = funeralArray[funri];
		funeralArray.splice(funri, 1);  
		if (funeralArray.length === 0) {window.location.reload();}
		break;
		  
    case "grade5Comp": 
		let grade5Compri = Math.floor(Math.random() * grade5Comp.length); 
		random = grade5Comp;[grade5Compri]; 
		grade5Comp.splice(grade5Compri, 1); 
		if (grade5Comp.length === 0) {window.location.reload();}
		break;
		  
    case "grade4Comp":
		let grade4Compri = Math.floor(Math.random() * grade4Comp.length); 
		random = grade4Comp[grade4Compri]; 
		grade4Comp.splice(grade4Compri, 1); 
		if (grade4Comp.length === 0) {window.location.reload();}
		break;
		  
	case "grade3Comp": 
		let grade3Compri = Math.floor(Math.random() * grade3Comp.length); 
		random = grade3Comp[grade3Compri]; 
		grade3Comp.splice(grade3Compri, 1); 
		if (grade3Comp.length === 0) {window.location.reload();}
		break;
		  
	case "grade2SoloCris": 
		let grade2SoloCrisri = Math.floor(Math.random() * grade2SoloCris.length); 
		random = grade2SoloCris[grade2SoloCrisri];
	    grade2SoloCris.splice(grade2SoloCrisri, 1); 
		if (grade2SoloCris.length === 0) {window.location.reload();}
		break;
		  
    case "hornpipe": 
		let hornpiperi = Math.floor(Math.random() * hornpipe.length); 
		random = hornpipe[hornpiperi]; 
		hornpipe.splice(hornpiperi, 1); 
		if (hornpipe.length === 0) {window.location.reload();}
		break;
		  
    case "jig": 
		let jigri = Math.floor(Math.random() * jig.length); 
		random = jig[jigri];
		jig.splice(jigri, 1); 
		if (jig.length === 0) {window.location.reload();}
		break;
		  
    case "peripheal": 
		let periphealri = Math.floor(Math.random() * peripheal.length); 
		random = peripheal[periphealri];
		peripheal.splice(periphealri, 1); 
		if (peripheal.length === 0) {window.location.reload();}
		break;
		  
    case "piobaireachd": 
		let piobri = Math.floor(Math.random() * piob.length); 
		random = piob[piobri]; 
		piob.splice(piobri, 1); 
		if (piob.length === 0) {window.location.reload();}
		break;
		  
    case "reel": 
		let reelri = Math.floor(Math.random() * reel.length); 
		random = reel[reelri]; 
	    reel.splice(reelri, 1); 
		if (reel.length === 0) {window.location.reload();}
		break;
		  
	case "slowAir": 
		let slowAirri = Math.floor(Math.random() * slowAir.length); 
		random = slowAir[slowAirri]; 
		slowAir.splice(slowAirri, 1); 
		if (slowAir.length === 0) {window.location.reload();}
		break; 
		  
    case "strathspey": 
		let strathspeyri = Math.floor(Math.random() * strathspey.length); 
		random = strathspey[strathspeyri]; 
		strathspey.splice(strathspeyri, 1); 
		if (strathspey.length === 0) {window.location.reload();}
		break;
		  
    case "sR": 
		let sRri = Math.floor(Math.random() * sR.length); 
		random = sR[sRri]; 
		sR.splice(sRri, 1); 
		if (sR.length === 0) {window.location.reload();}
    	break;
			
	case "waltz": 
		let waltzri = Math.floor(Math.random() * waltz.length); 
		random = waltz[waltzri]; 
		waltz.splice(waltzri, 1); 
		if (waltz.length === 0) {window.location.reload();}
    	break;
			
	case "wedding": 
		let weddingri = Math.floor(Math.random() * wedding.length); 
		random = wedding[weddingri]; 
		wedding.splice(weddingri, 1); 
		if (wedding.length === 0) {window.location.reload();}
    	break;
  }
	
//receives ALL of the random generated properties and assigns them so they can be outputted below to html
	
  tuneName = random.name;
  audio = random.mp3;
  zip = random.zip;
  pdfPath = random.pdf;
	
// audioSection is the id of audio div.
	
  let audioSection = document.getElementById("audioSection");
	
  while (audioSection.hasChildNodes()) {
	   audioSection.removeChild(audioSection.firstChild)
  }

	
// var sound can become the child of audioSection HTML div and is the audio element. attributes are added.
	
  var sound = document.createElement("audio");
  sound.id = "mp3";
  sound.controls = "controls";
  sound.src = audio;

	
//if an audio directory exists, an audio control player is generated by appending sound (from above)
	
  if (audio !== ""){
	  audioSection.appendChild(sound);
	  }
	
	
	
//outputs the tune generator JS name, audio/pdf location into HTML page.

  document.getElementById("tune").innerHTML = tuneName;  
  document.getElementById("zip").href = zip;
  document.getElementById("pdfdislplay").href = pdfPath;
	  


}

