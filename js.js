  //tune generator function
 "use strict";
function beba() {
  var yolo = "";
  //inputs the HTML's Select Tune Style
  let tuneSelect = document.getElementById("dropTunes").value; 
	
  switch (tuneSelect) {
    case "choon": yolo = choon;
    break;
    case "any": let getLuckyArrayNoDuplicatesri = Math.floor(Math.random() * getLuckyArrayNoDuplicates.length); yolo = getLuckyArrayNoDuplicates[getLuckyArrayNoDuplicatesri]; getLuckyArrayNoDuplicates.splice(getLuckyArrayNoDuplicatesri, 1); if (getLuckyArrayNoDuplicates.length === 0) {window.location.reload();}
    break;
    case "6/8": let sixri = Math.floor(Math.random() * six8.length); yolo = six8[sixri]; six8.splice(sixri, 1); if (six8.length === 0) {window.location.reload();}
    break;
    case "9/8": let nineri = Math.floor(Math.random() * nine8.length); yolo = nine8[nineri]; six8.splice(sixri, 1); if (nine8.length === 0) {window.location.reload();}
    break;
    case "2/4": let twori = Math.floor(Math.random() * two4.length); yolo = two4[twori]; two4.splice(twori, 1); if (two4.length === 0) {window.location.reload();}
    break;
    case "3/4": let threeri = Math.floor(Math.random() * three4.length); yolo = three4[threeri]; three4.splice(threeri, 1); if (three4.length === 0) {window.location.reload();}
    break;
    case "4/4": let fourri = Math.floor(Math.random() * four4.length); yolo = four4[fourri]; four4.splice(fourri, 1); if (four4.length === 0) {window.location.reload();}
    break;
    case "exercises": let exri = Math.floor(Math.random() * exercises.length); yolo = exercises[exri]; exercises.splice(exri, 1);  if (exercises.length === 0) {window.location.reload();}
    break;
    case "funeral": let funri = Math.floor(Math.random() * funeral.length); yolo = funeral[funri]; funeral.splice(funri, 1); if (funeral.length === 0) {window.location.reload();}
    break;
    case "grade5Comp": let grade5Compri = Math.floor(Math.random() * grade5Comp.length); yolo = grade5Comp;[grade5Compri]; grade5Comp.splice(grade5Compri, 1); if (grade5Comp.length === 0) {window.location.reload();}
    break;
    case "grade4Comp": let grade4Compri = Math.floor(Math.random() * grade4Comp.length); yolo = grade4Comp[grade4Compri]; grade4Comp.splice(grade4Compri, 1); if (grade4Comp.length === 0) {window.location.reload();}
    break;
	case "grade3Comp": let grade3Compri = Math.floor(Math.random() * grade3Comp.length); yolo = grade3Comp[grade3Compri]; grade3Comp.splice(grade3Compri, 1); if (grade3Comp.length === 0) {window.location.reload();}
    break;
	case "grade2SoloCris": let grade2SoloCrisri = Math.floor(Math.random() * grade2SoloCris.length); yolo = grade2SoloCris[grade2SoloCrisri]; grade2SoloCris.splice(grade2SoloCrisri, 1); if (grade2SoloCris.length === 0) {window.location.reload();}
    break;
    case "hornpipe": let hornpiperi = Math.floor(Math.random() * hornpipe.length); yolo = hornpipe[hornpiperi]; hornpipe.splice(hornpiperi, 1); if (hornpipe.length === 0) {window.location.reload();}
    break;
    case "jig": let jigri = Math.floor(Math.random() * jig.length); yolo = jig[jigri]; jig.splice(jigri, 1); if (jig.length === 0) {window.location.reload();}
    break;
    case "peripheal": let periphealri = Math.floor(Math.random() * peripheal.length); yolo = peripheal[periphealri]; peripheal.splice(periphealri, 1); if (peripheal.length === 0) {window.location.reload();}
    break;
    case "piobaireachd": let piobri = Math.floor(Math.random() * piob.length); yolo = piob[piobri]; piob.splice(piobri, 1); if (piob.length === 0) {window.location.reload();}
    break;
    case "reel": let reelri = Math.floor(Math.random() * reel.length); yolo = reel[reelri]; reel.splice(reelri, 1); if (reel.length === 0) {window.location.reload();}
    break;
    case "strathspey": let strathspeyri = Math.floor(Math.random() * strathspey.length); yolo = strathspey[strathspeyri]; strathspey.splice(strathspeyri, 1); if (strathspey.length === 0) {window.location.reload();}
    break;
    case "slowAir": let slowAirri = Math.floor(Math.random() * slowAir.length); yolo = slowAir[slowAirri]; slowAir.splice(slowAirri, 1); if (slowAir.length === 0) {window.location.reload();}
    break; 
    case "sR": let sRri = Math.floor(Math.random() * sR.length); yolo = sR[sRri]; sR.splice(sRri, 1); if (sR.length === 0) {window.location.reload();}
    break;
  }
    //outputs the tune generator JS into HTML
  document.getElementById("tune").innerHTML = yolo;  
}

    //tunes array list var environment

const choon = "I said.... pick ah choon style...";

const six8 = ["Jean Mauchline", "Trees of North Uist", "Frank Thompson", "Brian Boru's March",
"Garryowen", "Steam Boat", "Bonnie Dundee", "Glendaruel Highlanders"];

const nine8 = ["Danish Knifegrinder"];

const two4 = ["Black Bear", 
"Siege of Delhi", "Arthur Bignould",
"John MacDonald's Welcome to South Uist",
"Pipe Major Willie Grey's Farewell to Glasgow Police Pipeband",
"Mrs. Donald McLean", "Fr. John MacMillan of Barra", "Donald MacLellan of Rothesay", "Prince Charles Welcome to Lochaber", "Duncan MacInnes", "Haughs of Cromdale", "Muir of Ord", "Nil Se'n La", "Hills of Kintail", "Jimmy Young", "Highland Wedding", "Greenwoodside", "Brown Haired Maiden (2/4 March)", "Piper's Cove", "High Road to Gareloch", "Lady Lever Park"];

const three4 = ["When the Battle's Over", "Lochanside", "Green Hills of Tyrol", "Red Hackle Pipe Band", "Mary Grant of Lochgelly"];

const four4 = ["Minstel Boy", "Wearing of the Green", "Molly Darlin'", "Sean South of Garryowen", "Scotland the Brave", "42nd Highlanders", "Rowan Tree", "Yankee Doodle Dandy", "Grand Old Flag", "Marine Corp Hymn", "America the Beautiful", "Dawning of the Day", "Kelly the Boy from Killane", "Boys of Cork", "Boys of Wexford", "Let Erin Remember", "Nation Once Again", "Cabar Feidh (March)", "Cork Pipe Band of New York City", "Battle of Waterloo", "Galloway Hills", "Mo Ghile Mear (March Version)", "God Bless America"];

const exercises = ["Double Cut Tachum", "Bruce Gandy Tachums", "Tachums (C/B, B/A, A/G)", "Double Cut Trachums", "Taorluath, Crunluath, A Mach", "Master Cross Noise", "Master 'G' Gracenote, Master Doublings", "Strathspey Triplets", "D Throw: Open Vs. Closed", "'A' Half Doubling", "E/F Doublings", "Birl"];

const funeral = ["Scotland the Brave", "Rowan Tree", "Dawning of the Day", "Let Erin Remember", "Dark Island", "Irish Soldier Boy", "Mo Ghile Mear (Slow Air Version)",
"Valley of Knockanuer", "Spancil Hill", "Lady of Knock", "Lord Lovat's Lament", "God Bless America", "Green Hills of Tyrol", "When the Battle's Over", "Taps", "Lament for the Old Sword", "Amazing Grace", "Danny Boy", "Going Home"];

const hornpipe = ["Clumsy Lover",
"Mason's Apron", "PM Calum Campbell's Caprice", "PM George Allan", "Beverly's Wedding"];

const jig = ["Merrily Danced the Quaker's Wife", "Trippin' Up the Stairs", "Walking the Floor", "Dunrovin Farm", "Rocking the Baby", "Connaught Man's Rambles", "Cork Hill", "Ferryside Lassies", "Molly's Jig", "Biddy the Bowl Wife"];

const peripheal = ["Irish Set", "Scottish Set", "American Set", "3/4 Set", "6/8 Set", '"Big" 6/8 Set', "Gardens of Skye Set", "Cutting Bracken Set"];

const piob = ["Lament for the Old Sword", "Marquis of Argyll's Salute"];
//const piob2 = piob;

const reel = ["Willie Davie", "Brown Haired Maid (Reel)", "Jock Wilson\'s Ball", "Lexy McAskill", "John Keith Liang", "Malts on the Optics", "Lachlan McPhail of Tiree", "Cockerel in the Creel", "Charlie's Welcome", "High Road to Linton", "Sound of Sleet (reel)", "In and Out the Harbor"];

const slowAir = ["Danish Knifegrinder", "Eastern Townships", "Dark Island", "Irish Soldier Boy", "Mo Ghile Mear (Slow Air Version)", "Valley of Knockanuer", "Spancil Hill", "Lord Lovat's Lament", "Taps", "Amazing Grace", "Danny Boy", "Going Home", "Lady of Knock"];

const strathspey = ["Annie Grant", "Caledonian Society of London", "Aspen Bank", "Shepherd's Crook", "Maggie Cameron", "Ewe with the Crooked Horn", "Dora MacLeod", "Molly Connell", "Ghillie Callum", "Sound of Sleat", "Maids of the Black Glen"];

  //Sub-Array 1 lists strathspey array; Sub-Array 2 is for reel array;
const sR = [["Maggie Cameron", "Lachlan McPhail of Tiree"], ["Shepherd's Crook", "Cockerel in the Creel"]]; 

  // add all arrays/tunes into one array
const getLuckyArray = [...two4, ...three4, ...four4, ...six8, ...hornpipe, ...jig, ...piob, ...reel, ...slowAir, ...strathspey];
  //removes any duplicates
const getLuckyArrayNoDuplicates = [...new Set(getLuckyArray)];

const grade5Comp=["TBD"];

const grade4Comp=["Danish Knifegrinder", "Fr. John MacMillan of Barra", "Greenwoodside", "Biddy the Bowl Wife", "Aspen Bank", "Molly Connell", "Maids of the Black Glen", "High Road to Linton"];

const grade3Comp=["Donald MacLellan of Rothesay", "Dora MacLeod", "Brown Haired Maid"];

const grade2SoloCris = [sR, "Arthur Bignould", "Lady Lever Park", "Trees of North Uist", "PM George Allan & Dunrovin Farm"];

const grade5SoloEnter = [];
const grade4SoloEnter = [];
const grade3SoloEnter = [];
const grade2SoloEnter = [];

function download() {
}

//an array of the entries from all of the above arrays.
const allTunes = [...two4, ...three4, ...four4, ...six8, ...exercises, ...funeral, ...hornpipe, ...jig, ...piob, ...reel, ...slowAir, ...strathspey];

//alphabetizes and removes duplicates from allTunes
var all = [...new Set(allTunes.sort())];

