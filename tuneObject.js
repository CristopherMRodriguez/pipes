"use strict";

const choonObj = {name: "I said.... pick ah choon style...", style: "choon", mp3: ""};


//all the tunes in objects array.

let tuneObjArray = [

{name: "AA Cameron", style: "strathspey", mp3: "audio/AACameron.m4a", pdf: "pdf/AACameron.pdf", zip: "pdf/AACameron.zip"},

{name: "A' Half Doubling Exercises", style: "exercises", mp3: "", pdf: "pdf/HighAHalfDbl.pdf", zip: "pdf/HighAHalfDbl.zip"}, 

{name: "42nd Highlander's March", style: "4/4", mp3: "", pdf: "pdf/MarchFortySecond.pdf", zip: "pdf/MarchFortySecond.zip"},

{name: "79th's Farewell to Gibraltar", style: "2/4", mp3: "", pdf: "pdf/farewellgibraltar.pdf", zip: "pdf/farewellgibraltar.zip"},

{name: "Amazing Grace", style: "slowAir", mp3: "", pdf: "pdf/AMAZINGGRACE.pdf", zip: "pdf/AMAZINGGRACE.zip", funeralTrue: true},

{name: "America the Beautiful", style: "4/4", mp3: "", pdf: "pdf/AmericaBeautiful.pdf", zip: "pdf/AmericaBeautiful.pdf.zip", funeralTrue: true},

{name: "Angler", style: "reel", mp3: "audio/MedleyReels.m4a", pdf: "pdf/angler.pdf", zip: "pdf/angler.zip", band: "3"},

{name: "Annie Grant", style: "strathspey", mp3: "", pdf: "pdf/AnnieGrant.pdf", zip: "pdf/AnnieGrant.zip"},

{name: "Arniston Castle", style: "strathspey", mp3: "audio/ArnistonCastle.mp3", pdf: "pdf/arnistoncastle.pdf", zip: "pdf/arnistoncastle.pdf.zip" },

{name: "Arthur Bignould", style: "2/4", mp3: "audio/ArthurBignould.m4a", pdf: "pdf/ArthurBignould.pdf", zip: "pdf/ArthurBignould.zip", solo: true},

{name: "Aspen Bank", style: "strathspey", mp3: "audio/aspen.mp3", pdf: "pdf/AspenBank.pdf", zip: "pdf/AspenBank.pdf.zip", band: "4"},

{name: "Auld Lang", style: "slowAir", mp3: "", pdf: "pdf/auldLang.pdf", zip: "pdf/auldLang.zip"},

{name: "The Badge of Scotland", style: "4/4", mp3: "", pdf: "pdf/magersfonteinBadgeOfScotland.pdf", zip: "pdf/magersfonteinBadgeOfScotland.zip", band: "5"},

{name: "Balmoral", style: "3/4", mp3: "", pdf: "pdf/balmoral.pdf", zip: "pdf/balmoral.zip"},

{name: "Battle of Waterloo", style: "2/4", mp3: "", pdf: "pdf/BattleWaterloo.pdf", zip: "pdf/BattleWaterloo.zip"},

{name: "Beverly's Wedding", style: "hornpipe", mp3: "audio/Beverlys.m4a", pdf: "pdf/BeverlysWedding.pdf", zip: "pdf/BeverlysWedding.pdf.zip", wedding: true},

{name: "Biddy the Bowl Wife", style: "jig", mp3: "audio/biddythebowlwife.mp3", pdf: "pdf/BiddytheBowlWifeStCREVISED.pdf", zip: "pdf/BiddytheBowlWifeStCREVISED.pdf.zip", band: "4"},

{name: "Birl Exercises", style: "exercises", mp3: "", pdf: "pdf/birls.pdf", zip: "pdf/birls.zip"},

{name: "Black Bear", style: "2/4", mp3: "", pdf: "pdf/BlackBear.pdf", zip: "pdf/BlackBear.zip"},

{name: "Bonnie Dundee", style: "6/8", mp3: "", pdf: "pdf/BonnieDundee.pdf", zip: "pdf/BonnieDundee.zip"},

{name: "Boys of Blue Hill", style: "hornpipe", mp3: "", pdf: "pdf/BoysBlueHill.pdf", zip: "pdf/BoysBlueHill.zip"},

{name: "Boys of Cork", style: "4/4", mp3: "", pdf: "pdf/BoysCork.pdf", zip: "pdf/BoysCork.zip"},

{name: "Boys of Wexford", style: "4/4", mp3: "", pdf: "pdf/BoysWexford.pdf", zip: "pdf/BoysWexford.zip"},

{name: "Brian Boru's March", style: "6/8", mp3: "", pdf: "pdf/BrianBoru.pdf", zip: "pdf/BrianBoru.zip"},

{name: "Brian Symington", style: "2/4", mp3: "", pdf: "pdf/BrianSymington.pdf", zip: "pdf/BrianSymington.zip"}, 

{name: "Brown Haired Maid (Reel)", style: "reel", mp3: "audio/BrownHairedMaid_72bpm.mp3", pdf: "pdf/BrownHairedMaid.pdf", zip: "pdf/BrownHairedMaid.pdf.zip", band: "3"},

{name: "Brown Haired Maiden (2/4 March)", style: "2/4", mp3: "", pdf: "pdf/BrownHairedMaidenMarch.pdf", zip: "pdf/BrownHairedMaidenMarch.zip"},

{name: "Bush Reel", style: "reel", mp3: "audio/MedleyReels.m4a", pdf: "pdf/bushReel.pdf", zip: "pdf/bushReel.zip", band: "3"},

{name: "Bruce Gandy Tachum Exercises", style: "exercises", mp3: "", pdf: "pdf/BTachums.pdf", zip: "pdf/BTachums.zip"},

{name: "Cabar Feidh (March)", style: "4/4", mp3: "", pdf: "pdf/CabarFeidh.pdf", zip: "pdf/CabarFeidh.zip"},

{name: "Cabar Feidh (Strathspey)", style: "strathspey", mp3: "", pdf: "pdf/CabarFeidhStrathspey.pdf", zip: "pdf/CabarFeidhStrathspey.zip"},

{name: "Cabar Feidh (Reel)", style: "reel", mp3: "", pdf: "pdf/CabarFeidhReel.pdf", zip: "pdf/CabarFeidhReel.zip"},

{name: "Caledonian Society of London", style: "strathspey", mp3: "audio/CaledonianSocietyLondon.m4a", pdf: "pdf/CaledonianSociety.pdf", zip: "pdf/CaledonianSociety.zip"},

{name: "CanongateKirk", style: "2/4", mp3: "", pdf: "pdf/CanongateKirk.pdf", zip: "pdf/CanongateKirk.zip"},

{name: "Captain Colin Campbell", style: "strathspey", mp3: "", pdf: "pdf/CaptColin.pdf", zip: "pdf/CaptColin.zip"},

{name: "Charlie's Welcome", style: "reel", mp3: "", pdf: "pdf/Charlie'sWelcome.pdf", zip: "pdf/Charlie'sWelcome.pdf.zip"},

{name: "Cliffs of Doneen", style: "slowAir", mp3: "", pdf: "pdf/CliffsDoneen.pdf", zip: "pdf/CliffsDoneen.zip"},

{name: "Clumsy Lover", style: "hornpipe", mp3: "", pdf: "pdf/ClumsyLover.pdf", zip: "pdf/ClumsyLover.zip"},

{name: "Cockerel in the Creel", style: "reel", mp3: "", pdf: "pdf/CockerelInTheCreel.pdf", zip: "pdf/CockerelInTheCreel.pdf.zip", soloReel: true},

{name: "Connaught Man's Rambles", style: "jig", mp3: "", pdf: "pdf/Connaught.pdf", zip: "pdf/Connaught.zip"},

{name: "Cork Hill", style: "jig", mp3: "", pdf: "pdf/CorkHill.pdf", zip: "pdf/corkhill.pdf.zip"},

{name: "Cork Pipe Band of New York City", style: "4/4", mp3: "", pdf: "pdf/CorkPipebandNY.pdf", zip: "pdf/CorkPipebandNY.zip"},

{name: "Cutting Bracken", style: "2/4", mp3: "", pdf: "pdf/CuttingBrackenTune.pdf", zip: "pdf/CuttingBrackenTune.pdf.zip"},

{name: "D Throw: Open Vs. Closed Exercises", style: "exercises", mp3: "", pdf: "pdf/.pdf", zip: "pdf/.zip"},

{name: "Danish Knifegrinder", style: "slowAir", mp3: "audio/danishknifegrindersspringsong.mp3", pdf: "pdf/DanishKnifegrinder_harmony3.pdf", zip: "pdf/DanishKnifegrinder_harmony3.pdf.zip", band: "4"},

{name: "Danny Boy", style: "slowAir", mp3: "", pdf: "pdf/DannyBoy.pdf", zip: "pdf/DannyBoy.zip", funeralTrue: true},

{name: "Dark Island", style: "slowAir", mp3: "", pdf: "pdf/DarkIsland.pdf", zip: "pdf/DarkIsland.zip", funeralTrue: true},

{name: "David Crosbie Miller", style: "4/4", mp3: "", pdf: "pdf/DavidCrosbieMiller.pdf", zip: "pdf/DavidCrosbieMiller.zip"},

{name: "Dawning of the Day", style: "4/4", mp3: "", pdf: "pdf/DawningDay.pdf", zip: "pdf/DawningDay.pdf.zip", funeralTrue: true},

{name: "Donald MacLellan of Rothesay", style: "2/4", mp3: "audio/DonaldMacLellan70bpm.m4a", pdf: "pdf/DonaldMacLellan.pdf", zip: "pdf/DonaldMacLellan.pdf.zip", band: "3"},

{name: "Dora MacLeod", style: "strathspey", mp3: "audio/DoraMacLeod.mp3", pdf: "pdf/DoraMacLeod.pdf", zip: "pdf/DoraMacLeod.pdf.zip", band: "3"},

{name: "Double Cut Tachum Exercises", style: "exercises", mp3: "", pdf: "pdf/.pdf", zip: "pdf/.zip"},

{name: "Double Cut Trachums Exercises", style: "exercises", mp3: "", pdf: "pdf/.pdf", zip: "pdf/.zip"},

{name: "Duncan MacInnes", style: "2/4", mp3: "", pdf: "pdf/DuncanMcInness.pdf", zip: "pdf/DuncanMcInness.pdf.zip"},

{name: "Dunrovin Farm", style: "jig", mp3: "", pdf: "pdf/DunrovinFarm.pdf", zip: "pdf/DunrovinFarm.zip", solo: true},

{name: "E/F Doublings Exercises", style: "exercises", mp3: "", pdf: "pdf/.pdf", zip: "pdf/.zip"},

{name: "Eastern Townships", style: "slowAir", mp3: "", pdf: "pdf/EasternTownships.pdf", zip: "pdf/EasternTownships.pdf.zip"},

{name: "Easter Week", style: "4/4", mp3: "", pdf: "pdf/EasterWeek.pdf", zip: "pdf/EasterWeek.zip"},

{name: "Embellishment Exercises", style: "exercises", mp3: "", pdf: "pdf/embellishments.pdf", zip: "pdf/embellishments.zip"},

{name: "Ewe with the Crooked Horn", style: "strathspey", mp3: "audio/EweCrookedHorn.m4a", pdf: "pdf/Ewe.pdf", zip: "pdf/Ewe.zip"},

{name: "Ferryside Lassies", style: "jig", mp3: "", pdf: "pdf/FerrysideLasses.pdf", zip: "pdf/FerrysideLasses.pdf.zip"},

{name: "Fiddler", style: "strathspey", mp3: "audio/Fiddler80bpm.mp3", pdf: "pdf/fiddler.pdf", zip: "pdf/fiddler.zip", band: "3"},

{name: "Flett from Flotta", style: "4/4", mp3: "", pdf: "pdf/FlettFromFlotta.pdf", zip: "pdf/FlettFromFlotta.pdf.zip"},

{name: "Fiddler", style: "4/4", mp3: "audio/Fiddler80bpm.mp3", pdf: "pdf/fieldsAthenry.pdf", zip: "pdf/fieldsAthenry.zip"},

{name: "Flower of Scotland", style: "slowAir", mp3: "", pdf: "pdf/flowerScotland.pdf", zip: "pdf/flowerScotland.zip", wedding: true},

{name: "Fr. John MacMillan of Barra", style: "2/4", mp3: "audio/FrJohnMacMillan_complete_60bpm.mp3", pdf: "pdf/FrJohnMacmillanBarra.pdf", zip: "pdf/FrJohnMacmillanBarra.pdf.zip", band: "4"},

{name: "Frank Thompson", style: "6/8", mp3: "audio/FrankThompson.m4a", pdf: "pdf/FrankThompson.pdf", zip: "pdf/FrankThompson.pdf.zip"},

{name: "Galloway Hills", style: "4/4", mp3: "", pdf: "pdf/GallowayHills.pdf", zip: "pdf/GallowayHills.zip"},

{name: "Gardens of Skye", style: "4/4", mp3: "", pdf: "pdf/GardensSkyeTune.pdf", zip: "pdf/GGardensSkyeTune.pdf.zip"},

{name:  "Garryowen", style: "6/8", mp3: "", pdf: "pdf/Garryowen.pdf", zip: "pdf/Garryowen.zip"},

{name: "Ghillie Callum", style: "strathspey", mp3: "", pdf: "pdf/GhillieCallum.pdf", zip: "pdf/GhillieCallum.zip"},

{name: "Glendaruel Highlanders", style: "6/8", mp3: "", pdf: "pdf/Glendareul.pdf", zip: "pdf/Glendareul.pdf.zip"},

{name: "God Bless America", style: "4/4", mp3: "", pdf: "pdf/GodBlessAmerica.pdf", zip: "pdf/GodBlessAmerica.zip"},

{name: "Gold Ring", style: "jig", mp3: "", pdf: "pdf/GoldRing", zip: "pdf/GoldRing.zip"},

{name: "Going Home", style: "slowAir", mp3: "", pdf: "pdf/going-home.pdf", zip: "pdf/going-home.zip", funeralTrue: true},

{name: "Grand Old Flag", style: "4/4", mp3: "", pdf: "pdf/GrandFlag.pdf", zip: "pdf/GrandFlag.pdf.zip"},

{name: "Green Hills of Tyrol", style: "3/4", mp3: "", pdf: "pdf/GreenHills.pdf", zip: "pdf/GreenHills.pdf.zip", funeralTrue: true},

{name: "Greenwoodside", style: "2/4", mp3: "audio/GreenwoodsideNEW.mp3", pdf: "pdf/1.Greenwoodside_plain.pdf", zip: "pdf/1.Greenwoodside_plain.pdf.zip", band: "4"},

{name: "Haughs of Cromdale", style: "4/4", mp3: "", pdf: "pdf/Haughs.pdf", zip: "pdf/Haughs.zip"},

{name: "High Road to Gareloch", style: "2/4", mp3: "", pdf: "pdf/HighRoadGaerloch.pdf", zip: "pdf/HighRoadGaerloch.zip"},

{name: "Horburgh Castle", style: "4/4", mp3: "", pdf: "pdf/HorburghCastle.pdf", zip: "pdf/HorburghCastle.zip"},

{name: "High Road to Linton", style: "reel", mp3: "audio/HighroadtoLinton.mp3", pdf: "pdf/HighRoadtoLinton_closerREVISED.pdf", zip: "pdf/.HighRoadtoLinton_closerREVISEDpdf.zip", band: "4"},

{name: "Highland Wedding", style: "2/4", mp3: "", pdf: "pdf/HighlandWedding.pdf", zip: "pdf/HighlandWedding.zip", wedding: true},

{name: "Highland Cathedral", style: "2/4", mp3: "", pdf: "pdf/HighlandCathedral.pdf", zip: "pdf/HighlandCathedral.zip", wedding: true},

{name: "Hills of Kintail", style: "2/4", mp3: "", pdf: "pdf/HillsOfKintail.pdf", zip: "pdf/HillsOfKintail.zip"},

{name: "In and Out the Harbor", style: "reel", mp3: "audio/InOut.m4a", pdf: "pdf/InOutHarbor.pdf", zip: "pdf/InOutHarbor.pdf.zip"},

{name: "When Irish Eyes are Smiling", style: "waltz", mp3: "", pdf: "pdf/IrishEyes.pdf", zip: "pdf/IrishEyes.pdf.zip"},

{name: "Irish Soldier Boy", style: "4/4", mp3: "", pdf: "pdf/IrishSoldier.pdf", zip: "pdf/IrishSoldier.zip", funeralTrue: true},

{name: "Itchy Fingers", style: "hornpipe", mp3: "", pdf: "pdf/itchyFingers.pdf", zip: "pdf/itchyFingers.zip"},

{name: "Jean Mauchline", style: "6/8", mp3: "", pdf: "pdf/Jean.pdf", zip: "pdf/Jean.zip"},

{name: "Jig Exercises", style: "exercises", mp3: "", pdf: "pdf/jig.pdf", zip: "pdf/jig.zip"},

{name: "Jimmy Young", style: "2/4", mp3: "", pdf: "pdf/JimmyYoung.pdf", zip: "pdf/JimmyYoung.zip"},

{name: "Jock Wilson's Ball", style: "reel", mp3: "audio/joch.mp3", pdf: "pdf/JockWilsonsBall.pdf", zip: "pdf/JockWilsonsBall.zip", band: "4"},

{name: "John Keith Liang", style: "reel", mp3: "", pdf: "pdf/JohnKeithLaing.pdf", zip: "pdf/JohnKeithLaing.zip"},

{name: "John MacDonald's Welcome to South Uist", style: "2/4", mp3: "audio/JohnMacdonaldsWelcome.m4a", pdf: "pdf/JohnMcDonaldSouthUist.pdf", zip: "pdf/JohnMcDonaldSouthUist.zip"},

{name: "Kelly the Boy from Killane", style: "4/4", mp3: "", pdf: "pdf/Kelly.pdf", zip: "pdf/Kelly.zip"},

{name: "Lachlan McPhail of Tiree", style: "reel", mp3: "audio/LachlanMcPhail.mp3", pdf: "pdf/LachlanMcPhail.pdf", zip: "pdf/LachlanMcPhail.zip", solo: true, soloReel: true},

{name: "Lady Lever Park", style: "2/4", mp3: "", pdf: "pdf/LadyLeverPark.pdf", zip: "pdf/LadyLeverPark.pdf.zip", solo: true},

{name: "Lady of Knock", style: "slowAir", mp3: "", pdf: "pdf/LadyKnock.pdf", zip: "pdf/LadyKnock.zip", funeralTrue: true},

{name: "Lament for the Old Sword", style: "piob", mp3: "", pdf: "pdf/LamentForOldSword.pdf", zip: "pdf/LamentForOldSword.pdf.zip", funeralTrue: true, piobTrue: true},

{name: "Let Erin Remember", style: "4/4", mp3: "", pdf: "pdf/ErinRemember.pdf", zip: "pdf/ErinRemember.zip", funeralTrue: true},

{name: "Lexy McAskill", style: "reel", mp3: "audio/Lexy.m4a", pdf: "pdf/LexyMcAskill.pdf", zip: "pdf/LexyMcAskill.pdf.zip", band: "4"},

{name: "Lochanside", style: "3/4", mp3: "", pdf: "pdf/Lochanside.pdf", zip: "pdf/Lochanside.pdf.zip"},

{name: "Lord Lovat's Lament", style: "slowAir", mp3: "", pdf: "pdf/LordLovat.pdf", zip: "pdf/LordLovat.zip", funeralTrue: true},

{name: "The Highland Brigade of Magersfontein", style: "3/4", mp3: "", pdf: "pdf/magersfonteinBadgeOfScotland.pdf", zip: "pdf/magersfonteinBadgeOfScotland.zip", band: "5"},

{name: "Maggie Cameron", style: "strathspey", mp3: "audio/Maggie.m4a", pdf: "pdf/MaggieCameron.pdf", zip: "pdf/MaggieCameron.zip", solo: true, soloStrath: true},

{name: "Maids of the Black Glen", style: "strathspey", mp3: "", pdf: "pdf/4.maidsofblackglen.pdf", zip: "pdf/4.maidsofblackglen.pdf.zip", band: "4"},

{name: "Malts on the Optics", style: "reel", mp3: "", pdf: "pdf/Malts.pdf", zip: "pdf/Malts.zip"},

{name: "March Building Exercises A", style: "exercises", mp3: "audio/MarchTechBuildingEx_A.mp3", pdf: "pdf/marchbuilding.pdf", zip: "pdf/marchbuilding.zip"},
	
{name: "March Building Exercises B", style: "exercises", mp3: "audio/MarchTechBuildingEx_B.mp3", pdf: "pdf/marchbuilding.pdf", zip: "pdf/marchbuilding.zip"},
	
{name: "March Building Exercises C", style: "exercises", mp3: "audio/MarchTechBuildingEx_C.mp3", pdf: "pdf/marchbuilding.pdf", zip: "pdf/marchbuilding.zip"},

{name: "Marine Corp Hymn", style: "4/4", mp3: "", pdf: "pdf/Marine.pdf", zip: "pdf/Marine.pdf.zip"},

{name: "Marquis of Argyll's Salute", style: "piob", mp3: "", pdf: "pdf/MarquisOfArgyle.pdf", zip: "pdf/MarquisOfArgyle.pdf.zip", piobTrue: true},

{name: "Mary Grant of Lochgelly", style: "4/4", mp3: "", pdf: "pdf/MaryGrantofLochgelly.pdf", zip: "pdf/MaryGrantofLochgelly.zip"},

{name: "Mason's Apron", style: "reel", mp3: "", pdf: "pdf/MasonsApron.pdf", zip: "pdf/MasonsApron.zip"},

{name: "Master 'G' Gracenote, Master Doublings Exercises", style: "exercises", mp3: "", pdf: "pdf/Master Grace-Note,Master Doubling.pdf", zip: "pdf/Master Grace-Note,Master Doubling.zip"},

{name: "Master Cross Noise Exercises", style: "exercises", mp3: "", pdf: "pdf/Master Cross.pdf", zip: "pdf/Master Cross.zip"},

{name: "Merrily Danced the Quaker's Wife", style: "jig", mp3: "", pdf: "pdf/MerrilyQuakersWife.pdf", zip: "pdf/MerrilyQuakersWife.zip"},

{name: "Mile of Edinburgh Town", style: "4/4", mp3: "", pdf: "pdf/MileEdinburgh.pdf", zip: "pdf/MileEdinburgh.zip"},

{name: "Minstel Boy", style: "4/4", mp3: "", pdf: "pdf/MinstrelBoy.pdf", zip: "pdf/MinstelBoy.pdf.zip"},

{name: "Mo Ghile Mear (March Version)", style: "4/4", mp3: "", pdf: "pdf/MoGhileMarch.pdf", zip: "pdf/MoGhileMarch.zip"},

{name: "Mo Ghile Mear (Slow Air Version)", style: "slowAir", mp3: "audio/MoGhileMearSlowAir.m4a", pdf: "pdf/MoGhileMarch.pdf", zip: "pdf/MoGhileMarch.zip", funeralTrue: true},

{name: "Molly Connell", style: "strathspey", mp3: "audio/MollyFINAL.m4a", pdf: "pdf/MollyConnell.pdf", zip: "pdf/MollyConnell.zip", band: "4"},

{name: "Molly Darlin'", style: "4/4", mp3: "", pdf: "pdf/MollyDarlin.pdf", zip: "pdf/MollyDarlin.zip"},

{name: "Molly's Jig", style: "jig", mp3: "audio/MollysJig.m4a", pdf: "pdf/MollyJig.pdf", zip: "pdf/MollyJig.pdf.zip"},

{name: "Mrs. Donald McLean", style: "2/4", mp3: "", pdf: "pdf/MrsDonMcClean.pdf", zip: "pdf/MrsDonMcClean.zip"},

{name: "Mucking of Geordie's Byre", style: "6/8", mp3: "", pdf: "pdf/Mucking.pdf", zip: "pdf/Mucking.zip"},

{name: "Muir of Ord", style: "4/4", mp3: "", pdf: "pdf/MuirOrd.pdf", zip: "pdf/MuirOrd.pdf.zip", band: "5"},

{name: "Nation Once Again", style: "4/4", mp3: "", pdf: "pdf/NationOnceAgain.pdf", zip: "pdf/NationOnceAgain.zip"},

{name: "Nil Se'n La", style: "2/4", mp3: "", pdf: "pdf/NilSenLa.pdf", zip: "pdf/NilSenLa.pdf.zip"},

{name: "O' Connell's March", style: "4/4", mp3: "", pdf: "pdf/OConnell.pdf", zip: "pdf/OConnell.zip"},

{name: "Paddy Be Easy", style: "jig", mp3: "", pdf: "pdf/paddyEasy.pdf", zip: "pdf/paddyEasy.zip"},

{name: "Paddy' s Leather Breeches", style: "jig", mp3: "", pdf: "pdf/PaddysLeather.pdf", zip: "pdf/PaddysLeather.zip"},

{name: "Peg Ryan's Polka", style: "2/4", mp3: "", pdf: "pdf/Pegs.pdf", zip: "pdf/Pegs.zip"},

{name: "Pigeon on the Gate", style: "reel", mp3: "audio/PigeonGate.m4a", pdf: "pdf/Pigeon.pdf", zip: "pdf/Pigeon.zip"},

{name: "PM Calum Campbell's Caprice", style: "hornpipe", mp3: "", pdf: "pdf/PMCalumCampbellsCaprice.pdf", zip: "pdf/PMCalumCampbellsCaprice.zip"},

{name: "PM George Allan", style: "hornpipe", mp3: "", pdf: "pdf/georgeAllan.pdf", zip: "pdf/georgeAllan.pdf.zip", solo: true},

{name: "Pipe Major Willie Grey's Farewell to Glasgow Police Pipeband", style: "2/4", mp3: "audio/PMWillieGray.m4a", pdf: "pdf/PMWillieGrey.pdf", zip: "pdf/PMWillieGrey.pdf.zip"},

{name: "Piper's Cave", style: "2/4", mp3: "", pdf: "pdf/PipersCave.pdf", zip: "pdf/PipersCave.zip"},

{name: "Prince Charles Welcome to Lochaber", style: "2/4", mp3: "", pdf: "pdf/PrinceCharles.pdf", zip: "pdf/PrinceCharles.pdf.zip"},

{name: "Rakes of Mallow", style: "reel", mp3: "", pdf: "pdf/RakesofMallow.pdf", zip: "pdf/RakesofMallow.zip"},

{name: "Red Hackle Pipe Band", style: "4/4", mp3: "", pdf: "pdf/RedHackleMaryGrant.pdf", zip: "pdf/RedHackleMaryGrant.zip"},

{name: "Rocking the Baby", style: "jig", mp3: "", pdf: "pdf/RockingBaby.pdf", zip: "pdf/RockingBaby.zip"},

{name: "Rowan Tree", style: "4/4", mp3: "", pdf: "pdf/RowanTree.pdf", zip: "pdf/RowanTree.pdf.zip", funeralTrue: true, wedding: true},

{name: "Scotland the Brave", style: "4/4", mp3: "", pdf: "pdf/Scotland.pdf", zip: "pdf/Scotland.pdf.zip", funeralTrue: true, wedding: true},

{name: "The Seagull", style: "jig", mp3: "", pdf: "pdf/seagull.pdf", zip: "pdf/seagull.zip"},

{name: "Sean South of Garryowen", style: "4/4", mp3: "", pdf: "pdf/SeanSouth.pdf", zip: "pdf/SeanSouth.zip"},

{name: "Shamus' Walkabout", style: "hornpipe", mp3: "audio/Shamu's135bpm.mp3", pdf: "pdf/shamusWalkabout.pdf", zip: "pdf/shamusWalkabout.zip", band: "3"},

{name: "Shepherd's Crook", style: "strathspey", mp3: "audio/shepherdsCrook.mp3", pdf: "pdf/ShepherdsCrook.pdf", zip: "pdf/ShepherdsCrook.zip", soloStrath: true},

{name: "Seige of Delhi", style: "2/4", mp3: "", pdf: "pdf/SeigeOfDelhi.pdf", zip: "pdf/SeigeOfDelhi.pdf.zip"},

{name: "Skye Boat Song", style: "slowAir", mp3: "", pdf: "pdf/skyBoatSongOutlander.pdf", zip: "pdf/skyBoatSongOutlander.zip", wedding: true},

{name: "Soldier's Song", style: "4/4", mp3: "", pdf: "pdf/SoldiersSong.pdf", zip: "pdf/SoldiersSong.zip"},

{name: "Sound of Sleat (Strathspey)", style: "strathspey", mp3: "", pdf: "pdf/SoSStrath.pdf", zip: "pdf/SoSStrath.pdf.zip"},

{name: "Sound of Sleat (reel)", style: "reel", mp3: "", pdf: "pdf/SosReel.pdf", zip: "pdf/SosReel.pdf.zip"},

{name: "Spancil Hill", style: "slowAir", mp3: "", pdf: "pdf/Spancil.pdf", zip: "pdf/Spancil.zip", funeralTrue: true},

{name: "Star of the County Down", style: "slowAir", mp3: "", pdf: "pdf/stealAway.pdf", zip: "pdf/stealAway.zip"},

{name: "Steal Away", style: "2/4", mp3: "", pdf: "pdf/StarDown.pdf", zip: "pdf/StarDown.zip", band: "3"},

{name: "Steam Boat", style: "6/8", mp3: "", pdf: "pdf/SteamBoat.pdf", zip: "pdf/SteamBoat.pdf.zip"},

{name: "Steve Byrne's Jig", style: "jig", mp3: "audio/SteveByrne'sJig250bpm.mp3", pdf: "pdf/steveByrnesJig.pdf", zip: "pdf/steveByrnesJig.zip"},

{name: "Strathspey Triplets Exercises", style: "exercises", mp3: "", pdf: "pdf/.pdf", zip: "pdf/.zip"},

{name: "Tachums (all notes) Exercises", style: "exercises", mp3: "", pdf: "pdf/MTachums.pdf", zip: "pdf/MTachums.zip"},

{name: "Taorluath, Crunluath, A Mach Exercises", style: "exercises", mp3: "", pdf: "pdf/taorCrunAMach.pdf", zip: "pdf/taorCrunAMach.zip"},

{name: "Taps", style: "slowAir", mp3: "", pdf: "pdf/taps.pdf", zip: "pdf/taps.zip", funeralTrue: true},

{name: "Tell Me Ma", style: "2/4", mp3: "", pdf: "pdf/TellMa.pdf", zip: "pdf/TellMa.zip", funeralTrue: true},
	
{name: "Thorton's Jig", style: "jigThorntons.m4a", mp3: "audio/Thorntons.m4a", pdf: "pdf/ThorntonsJig.pdf", zip: "pdf/ThorntonsJig.zip"},
	
{name: "Top Gun", style: "4/4", mp3: "", pdf: "pdf/TopGun.pdf", zip: "pdf/TopGun.zip"},

{name: "Trees of North Uist", style: "6/8", mp3: "", pdf: "pdf/TreesUist.pdf", zip: "pdf/TreesUist.pdf.zip", solo: true},

{name: "Trippin' Up the Stairs", style: "jig", mp3: "", pdf: "pdf/Tripping.pdf", zip: "pdf/Tripping.zip"},

{name: "Valley of Knockanuer", style: "slowAir", mp3: "", pdf: "pdf/ValleyKnockeneur.pdf", zip: "pdf/ValleyKnockeneur.zip", funeralTrue: true},

{name: "Voltron", style: "hornpipe", mp3: "", pdf: "pdf/Voltron.pdf", zip: "pdf/Voltron.zip"},

{name: "Walking the Floor", style: "jig", mp3: "", pdf: "pdf/WalkingFloor.pdf", zip: "pdf/WalkingFloor.zip"},

{name: "Wearing of the Green", style: "4/4", mp3: "", pdf: "pdf/WearingGreen.pdf", zip: "pdf/WearingGreen.pdf.zip"},

{name: "Weighing from Land", style: "piob", mp3: "", pdf: "pdf/weighingFromLand.pdf", zip: "pdf/weighingFromLand.zip"},

{name: "When the Battle's Over", style: "3/4", mp3: "", pdf: "pdf/WhenBattlesOver.pdf", zip: "pdf/WhenBattlesOver.pdf.zip", funeralTrue: true},

{name: "Wild Rover", style: "waltz", mp3: "", pdf: "pdf/WildRover.pdf", zip: "pdf/WildRover.zip"},

{name: "Willie Davie", style: "reel", mp3: "audio/WillieDavie.m4a", pdf: "pdf/WillieDavie.pdf", zip: "pdf/WillieDavie.zip"},

{name: "Wings", style: "4/4", mp3: "", pdf: "pdf/Wings.pdf", zip: "pdf/Wings.pdf.zip"},

{name: "Yankee Doodle Dandy", style: "4/4", mp3: "", pdf: "pdf/Yankee.pdf", zip: "pdf/Yankee.zip"},

{name: "Irish Set", style: "peripheal", mp3: "", pdf: "pdf/IrishSet.pdf", zip: "pdf/IrishSet.pdf.zip"},

{name: "Scottish Set", style: "peripheal", mp3: "", pdf: "pdf/4.4set.pdf", zip: "pdf/4.4set.pdf.zip"},

{name: "American Set", style: "peripheal", mp3: "", pdf: "pdf/AmericanSet.pdf", zip: "pdf/AmericanSet.pdf.zip"},

{name: "3/4 Set", style: "peripheal", mp3: "", pdf: "pdf/3.4set.pdf", zip: "pdf/3.4set.pdf.zip"},

{name: "6/8 Set", style: "peripheal", mp3: "", pdf: "pdf/6.8set.pdf", zip: "pdf/6.8set.pdf.zip"},

{name: "'Big' 6/8 Set", style: "peripheal", mp3: "", pdf: "pdf/Big6.8.set.pdf", zip: "pdf/Big6.8.set.pdf.zip"},

{name: "Gardens of Skye Set", style: "peripheal", mp3: "", pdf: "pdf/GardensSkyeSet.pdf", zip: "pdf/GardensSkyeSet.pdf.zip"},

{name: "Cutting Bracken Set", style: "peripheal", mp3: "", pdf: "pdf/CuttingBrackenSet.pdf", zip: "pdf/CuttingBrackenSet.pdf.zip"},

];

//Each of these for loops statements popupates the array for the assigned style.  

const six8 = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "6/8"){ 
		six8.push(tuneObjArray[i]);
	}
}

const two4 = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "2/4"){ 
	two4.push(tuneObjArray[i]);
	}
}

const three4 = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "3/4"){ 
		three4.push(tuneObjArray[i]);
	}
}

const four4 = [];
for (let i = 0; i < tuneObjArray.length; i++){
if (tuneObjArray[i].style === "4/4"){ 
		four4.push(tuneObjArray[i]);
	}
}

const exercises = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "exercises"){ 
		exercises.push(tuneObjArray[i]);
	}
}

const funeralArray = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].funeralTrue === true){ 
		funeralArray.push(tuneObjArray[i]);
	}
}

const grade5Comp = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].band === "5"){ 
	grade5Comp.push(tuneObjArray[i]);
	}
}
 const grade4Comp = [];

for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].band === "4"){ 
		grade4Comp.push(tuneObjArray[i]);
	}
}

const grade3Comp = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].band === "3"){ 
		grade3Comp.push(tuneObjArray[i]);
	}
}

const grade2SoloCris = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].solo === true){ 
		grade2SoloCris.push(tuneObjArray[i]);
	}
}

const hornpipe = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "hornpipe"){ 
		hornpipe.push(tuneObjArray[i]);
	}
}

const jig = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "jig"){ 
		jig.push(tuneObjArray[i]);
	}
}

const peripheal = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "peripheal"){ 
		peripheal.push(tuneObjArray[i]);
	}
}

const piob = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].piobTrue === true){ 
		piob.push(tuneObjArray[i]);
	}
}

const reel = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "reel"){ 
		reel.push(tuneObjArray[i]);
	}
}

const slowAir = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "slowAir"){ 
		slowAir.push(tuneObjArray[i]);
	}
}

const strathspey = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "strathspey"){ 
		strathspey.push(tuneObjArray[i]);
	}
}

const sR = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].soloStrath === true || tuneObjArray[i].soloReel === true){ 
		sR.push(tuneObjArray[i]);
	}
}
	
const waltz = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].style === "waltz"){ 
		waltz.push(tuneObjArray[i]);
	}

}

const wedding = [];
for (let i = 0; i < tuneObjArray.length; i++){
	if (tuneObjArray[i].wedding === true){ 
		wedding.push(tuneObjArray[i]);
	}

}
//array of all the names of the tunes entered
const tuneNamesAll = [];
for (let i = 0; i < tuneObjArray.length; i++) {
	tuneNamesAll.push(tuneObjArray[i].name);
}

//function for searchbar.  instant search on keyup, no button.

function searchFunction(){
	var input, filter, ul, a, li, i;
//gets the user input from serach bar
	input = document.getElementById("search-tune");
//lower cases it
	filter = input.value.toLowerCase();
	ul = document.getElementById("wrapper");
	li = ul.getElementsByTagName("li");
	
	for (let i = 0; i < li.length; i++){
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toLowerCase().indexOf(filter) > - 1){
			li[i].style.display = "";
			ul.style.display = "block";
		}	
		else{
			li[i].style.display = "none";
		}
	}
}
//removes the search background if user clicks off / onBlur.
function gone(){
	var ul = document.getElementById("wrapper");
	ul.style.display = "none";
}
