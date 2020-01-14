  //tune generator function

function beba() {
  var yolo = "";
  //inputs the HTML's Select Tune Style
  let tuneSelect = document.getElementById("dropTunes").value; 
	
  switch (tuneSelect) {
    case "choon": yolo = choon;
    break;
    case "any": yolo = allTunes[Math.floor(Math.random() * allTunes.length)];
    break;
    case "6/8": yolo = six8[Math.floor(Math.random() * six8.length)];
    break;
    case "9/8": yolo = nine8[Math.floor(Math.random() * nine8.length)]; 
    break;
    case "2/4": yolo = two4[Math.floor(Math.random() * two4.length)]; 
    break;
    case "3/4": yolo = three4[Math.floor(Math.random() * three4.length)]; 
    break;
    case "4/4": yolo = four4[Math.floor(Math.random() * four4.length)];
    break;
    case "exercises": yolo = exercises[Math.floor(Math.random() * exercises.length)]; 
    break;
    case "funeral": yolo = funeral[Math.floor(Math.random() * funeral.length)]; 
    break;
    case "grade5Comp": yolo = grade5Comp[Math.floor(Math.random() * grade5Comp.length)];
    break;
    case "grade4Comp": yolo = grade4Comp[Math.floor(Math.random() * grade4Comp.length)]; 
    break;
	case "grade3Comp": yolo = grade3Comp[Math.floor(Math.random() * grade3Comp.length)]; 
    break;
	case "grade2SoloCris": yolo = grade2SoloCris[Math.floor(Math.random() * grade2SoloCris.length)]; 
    break;
    case "hornpipe": yolo = hornpipe[Math.floor(Math.random() * hornpipe.length)]; 
    break;
    case "jig": yolo = jig[Math.floor(Math.random() * jig.length)]; 
    break;
    case "peripheal": yolo = peripheal[Math.floor(Math.random() * peripheal.length)]; 
    break;
    case "piobaireachd": yolo = piob[Math.floor(Math.random() * piob.length)];
    break;
    case "reel": yolo = reel[Math.floor(Math.random() * reel.length)]; 
    break;
    case "strathspey": yolo = strathspey[Math.floor(Math.random() * strathspey.length)]; 
    break;
    case "slowAir": yolo = slowAir[Math.floor(Math.random() * slowAir.length)]; 
    break;
    case "sR": yolo = sR; 
    break;  
  }
    //outputs the tune generator JS into HTML
  document.getElementById("tune").innerHTML = yolo;  
}

    //tunes array list var environment

const choon = "I said.... pick ah choon style..."

const six8 = ["Jean Mauchline", "Trees of North Uist", "Frank Thompson", "Brian Boru's March",
"Garryowen", "The Steam Boat", "Bonnie Dundee", "The Glendaruel Highlanders"];

const nine8 = ["Danish Knifegrinder"];

const two4 = ["The Black Bear", 
"Siege of Delhi", "Arthur Bignould",
"John MacDonald's Welcome to South Uist",
"Pipe Major Willie Grey's Farewell to Glasgow Police Pipeband",
"Mrs. Donald McLean", "Fr. John MacMillan of Barra", "Donald MacLellan of Rothesay", "Prince Charles Welcome to Lochaber", "Duncan MacInnes", "The Haughs of Cromdale", "Muir of Ord", "The Black Bear", "Nil Se'n La", "The Hills of Kintail", "Jimmy Young", "Highland Wedding", "Greenwoodside", "Brown Haired Maiden", "Piper's Cove", "High Road to Gareloch", "Lady Lever Park"];

const three4 = ["When the Battle's Over", "Lochanside", "Green Hills of Tyrol", "Red Hackle Pipe Band", "Mary Grant of Lochgelly"];

const four4 = ["Minstel Boy", "Wearing of the Green", "Molly Darlin'", "Sean South of Garryowen", "Scotland the Brave", "42nd Highlanders", "Rowan Tree", "Yankee Doodle Dandy", "Grand Old Flag", "Marine Corp Hymn", "America the Beautiful", "Dawning of the Day", "Kelly the Boy from Killane", "Boys of Cork", "Boys of Wexford", "Let Erin Remember", "Nation Once Again", "Cabar Feidh", "The Cork Pipe Band of New York City", "Battle of Waterloo", "Galloway Hills", "Mo Ghile Mear"];

const exercises = ["Double Cut Tachum", "Bruce Gandy Tachums", "Tachums (C/B, B/A, A/G)", "Double Cut Trachums", "Taorluath, Crunluath, A Mach", "Master Cross Noise", "Master 'G' Gracenote, Master Doublings", "Strathspey Triplets", "D Throw: Open Vs. Closed", "'A' Half Doubling", "E/F Doublings", "Birl"];

const funeral = ["Scotland the Brave", "Rowan Tree", "Dawning of the Day", "Let Erin Remember", "The Dark Island", "Irish Soldier Boy", "Mo Ghile Mear",
"Valley of Knockanuer", "Spancil Hill", "Lady of Knock", "Lord Lovat's Lament", "God Bless America", "Green Hills of Tyrol", "When the Battles Over", "Taps", "Lament for the Old Sword", "Amazing Grace", "Danny Boy", "Going Home"];

const hornpipe = ["The Clumsy Lover",
"The Mason's Apron", "PM Calum Campbell's Caprice", "PM George Allan", "Beverly's Wedding"];

const jig = ["Merrily Danced the Quaker's Wife", "Trippin' Up the Stairs", "Walking the Floor", "Dunrovin Farm", "Rocking the Baby", "Connaught Man's Rambles", "Cork Hill", "Ferryside Lassies", "Molly's Jig", "Biddy the Bowl Wife"];

const peripheal = ["The Irish Set", "The Scottish Set", "American Set", "The 3/4 Set", "The 6/8 Set", 'The "Big" 6/8 Set', "Gardens of Skye Set", "Cutting Bracken Set"];

const piob = ["Lament for the Old Sword", "Marquis of Argyll's Salute"];
//const piob2 = piob;

const reel = ["Willie Davie", "Brown Haired Maid", "Jock Wilson\'s Ball", "Lexy McAskill", "John Keith Liang", "Malts on the Optics", "Lachlan McPhail of Tiree", "Cockerel in the Creel", "Charlie's Welcome", "The High Road to Linton", "Sound of Sleet (reel)", "In and Out the Harbor"];

const slowAir = ["Danish Knifegrinder", "The Eastern Townships", "The Dark Island", "Irish Soldier Boy", "Mo Ghile Mear", "Valley of Knockanuer", "Spancil Hill", "Lord Lovat's Lament", "Taps", "Amazing Grace", "Danny Boy", "Going Home"];

const strathspey = ["Annie Grant", "The Caledonian Society of London", "Aspen Bank", "The Shepherd's Crook", "Maggie Cameron", "The Ewe with the Crooked Horn", "Dora MacLeod", "Molly Connell", "Ghillie Callum", "Sound of Sleat", "Maids of the Black Glen"];

  //Sub-Array 1 lists strathspey; Sub-Array 2 for reel;
const sRArrays = [["Maggie Cameron", "The Shepherd's Crook"], ["Lachlan McPhail of Tiree", "The Cockerel in the Creel"]];

  //adds random strathspey with a random reel 
const sR = sRArrays[0][Math.floor(Math.random() * sRArrays[0].length)] + " \n & \n " + sRArrays[1][Math.floor(Math.random() * sRArrays[1].length)];

  // add all arrays/tunes into one array
const allTunesArray = [...nine8, ...six8, ...nine8, ...two4, ...three4, ...four4, ...hornpipe, ...jig, ...piob, ...reel, ...strathspey, ...slowAir];
  //removes any duplicates
const allTunes = [...new Set(allTunesArray)];


const grade5Comp=[];

const grade4Comp=["Danish Knifegrinder", "Fr. John MacMillan of Barra", "Greenwoodside", "Biddy the Bowl Wife", "Aspen Bank", "Molly Connell", "Maids of the Black Glen", "The High Road to Linton"];

const grade3Comp=["Donald MacLellan of Rothesay", "Dora MacLeod", "Brown Haired Maid"];

const grade2SoloCris = [sR, "Arthur Bignould", "Lady Lever Park", "Trees of North Uist", "PM George Allan & Dunrovin Farm"];

const grade5SoloEnter = [];
const grade4SoloEnter = [];
const grade3SoloEnter = [];
const grade2SoloEnter = [];


