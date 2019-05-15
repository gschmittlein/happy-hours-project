import '../scss/main.scss';

window.$('.custom-icon--facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.bt-icon--twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/intent/tweet?text=${status}`);
});

var mymap = L.map('mapid').setView([42.048, -87.684], 16);


var popup = L.popup()
    .setLatLng([42.044, -87.691])
    .setContent("Click on the markers to find some of Evanston's hottest happy hour deals")
    .openOn(mymap);

var SmylieBrothersIcon = L.icon({
    iconUrl: 'smyliebrothers.jpg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

var beerIcon = L.icon({
    iconUrl: 'https://morganmcfalljohnsen.files.wordpress.com/2019/05/images.png',
    iconSize:     [30, 55], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var WhiskeyThief = L.marker([42.0463, -87.6806], {icon: beerIcon}).bindPopup('<h4>Whiskey Thief</h4><b>Saturday and Sunday (11am-12pm):</b> Free mimosas<br><b>Monday (all hours):</b> Industry night - drink deals and 20% off for people working in the restaurant or hair salon industry<br><b>Tuesday (all hours):</b> Drink deals and karaoke at 10pm'),

    BarLouie = L.marker([42.0454, -87.6821], {icon: beerIcon}).bindPopup('<h4>Bar Louie</h4><b>Wednesday (all hours):</b> Beer Night - $1.25 select domestic bottles, $5.25 signature martinis'),

    WorldOfBeer = L.marker([42.0472, -87.6816], {icon: beerIcon}).bindPopup('<h4>Evanston Pub (formerly World of Beer)</h4><b>Week Nights (4pm-7pm):</b> $4 draughts, $5 spirits, $5 shareables, $6 wines'),

    SmylieBrothers = L.marker([42.0477, -87.6864], {icon: beerIcon}).bindPopup('<h4>Smylie Brothers</h4><b>Tuesday, Wednesday, Thursday, Sunday (4-6pm):</b> $3 select Smylie Brothers beer, $3 ribwich slider or $10 for 3 sliders with fries, $5 individual white bean dip'),

    TheCelticKnot = L.marker([42.0480, -87.6801], {icon: beerIcon}).bindPopup('<h4>The Celtic Knot</h4><b>Monday (all hours):</b> $4 16oz pints of Smithwicks Ale<br><b>Tuesday (all hours):</b> $4 16oz Pints of Hickster Cream Ale<br><b>Wednesday (all hours):</b> $4 16oz pints of Blue Moon<br><b>Thursday (all hours):</b> $4 16oz pints of Snakebite<br><b>Sunday (all hours):</b> $4 16oz pints of Magners Hard Cider<br><b>All Week (all hours):</b> $3 Beer Special, $6 Special Cocktail'),

    Bat17 = L.marker([42.0488, -87.6832], {icon: beerIcon}).bindPopup('<h4>Bat 17</h4><b>Every Night:</b> $3 12oz cans of Pabst Blue Ribbon and $4 16oz cans of Miller Lite<br><b>Monday (all hours):</b> $4.95 house wines<br><b>Monday (5-11pm):</b> $3 Select Pints and $20 Select Towers<br><b>Tuesday (5-11pm):</b> $5 Appetizer Special<br><b>Wednesday (5-11pm):</b> $4.50 Draft Night<br><b>Thursday (5-11pm):</b> $3 Vodka Special<br><b>Saturday (all hours):</b> $5 Shipwrecked Rum Special<br><b>Sunday (all hours):</b> $4.50 Bloody Mary'),

    Koi = L.marker([42.0465, -87.6810], {icon: beerIcon}).bindPopup('<h4>Koi</h4><b>Every Night (4:30 - 6:30pm):</b> half off cocktails'),

    FoundKitchen = L.marker([42.0472, -87.6790], {icon: beerIcon}).bindPopup('<h4>Found Kitchen</h4><b>Tuesday-Friday (4-6pm):</b> $5 cocktail of the day, select wines, select beers on tap'),

    PrairieMoon = L.marker([42.0474, -87.6788], {icon: beerIcon}).bindPopup('<h4>Prairie Moon</h4><b>Week Nights (4pm-6pm):</b> $6 select wines, $5 cocktails, $4 pints'),

    BangersLace = L.marker([42.0456, -87.6824], {icon: beerIcon}).bindPopup('<h4>Bangers & Lace</h4><b>All Week (4pm-6pm):</b> $5 pints, all apps half off (except alligator), $7 house wine, $8 select cocktails');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `pk.eyJ1IjoiZ2FiZXNjaG1pdHRsZWluIiwiYSI6ImNqcnkxbjQweDB0Z3g0YXBnYTNpdm5oYzYifQ.IvSdK54kCmTC5pDJy2dbKA`
}).addTo(mymap);


var all = L.layerGroup([WhiskeyThief, BarLouie, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, Koi, FoundKitchen, PrairieMoon, BangersLace]);
var monday = L.layerGroup([WhiskeyThief, WorldOfBeer, TheCelticKnot, Bat17, Koi, PrairieMoon, BangersLace]);
var tuesday = L.layerGroup([WhiskeyThief, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, Koi, FoundKitchen, PrairieMoon, BangersLace]);
var wednesday = L.layerGroup([BarLouie, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, Koi, FoundKitchen, PrairieMoon, BangersLace]);
var thursday = L.layerGroup([WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, Koi, FoundKitchen, PrairieMoon, BangersLace]);
var friday = L.layerGroup([WorldOfBeer, TheCelticKnot, Bat17, Koi, FoundKitchen, PrairieMoon, BangersLace]);
var saturday = L.layerGroup([WhiskeyThief, TheCelticKnot, Bat17, Koi, BangersLace]);
var sunday = L.layerGroup([WhiskeyThief, SmylieBrothers, TheCelticKnot, Bat17, Koi, BangersLace]);

all.addTo(mymap);

let dayClicked = all
let dayClickedPrev;

let dayClickedBtn;
let dayClickedPrevBtn;

const changeClickedColor = function(e) {
  dayClickedPrevBtn = dayClickedBtn;
  console.dir(dayClickedPrevBtn)
  dayClickedBtn = e.target;
  console.dir(dayClickedBtn)
  dayClickedBtn.style.backgroundColor = '#CE92CC';
  dayClickedPrevBtn.style.backgroundColor = 'white';
}

let allClicked = false;
$("#all-button").click((e) => {
  changeClickedColor(e);
  dayClicked ? dayClickedPrev = dayClicked : dayClickedPrev = $("#all-button").children()[0]
  dayClicked = all
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)//add day clicked
  monClicked === false ? allClicked=true : allClicked=true;
  console.log(`All clicked? ${allClicked}`)
  allClicked === true ? all.addTo(mymap) : mymap.removeLayer(all)
})

let monClicked = false;
$("#mon-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = monday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)//add day clicked
  monClicked === false ? monClicked=true : monClicked=true;
  console.log(`mon clicked? ${monClicked}`)
  monClicked === true ? monday.addTo(mymap) : mymap.removeLayer(monday)
})

let tuesClicked = false;
$("#tues-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = tuesday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  tuesClicked === false ? tuesClicked=true : tuesClicked=true;
  //console.log(`tues clicked? ${tuesClicked}`)
  tuesClicked === true ? tuesday.addTo(mymap) : mymap.removeLayer(tuesday);
});




let wedClicked = false;
$("#wed-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = wednesday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  wedClicked === false ? wedClicked=true : wedClicked=true;
  console.log(`wed clicked? ${wedClicked}`)
  wedClicked === true ? wednesday.addTo(mymap) : mymap.removeLayer(wednesday)
})

let thursClicked = false;
$("#thurs-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = thursday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  thursClicked === false ? thursClicked=true : thursClicked=true;
  console.log(`thurs clicked? ${thursClicked}`)
  thursClicked === true ? thursday.addTo(mymap) : mymap.removeLayer(thursday)
})

let friClicked = false;
$("#fri-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = friday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  friClicked === false ? friClicked=true : friClicked=true;
  console.log(`fri clicked? ${friClicked}`)
  friClicked === true ? friday.addTo(mymap) : mymap.removeLayer(friday)
})


let satClicked = false;
$("#sat-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = saturday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  satClicked === false ? satClicked=true : satClicked=true;
  console.log(`sat clicked? ${satClicked}`)
  satClicked === true ? saturday.addTo(mymap) : mymap.removeLayer(saturday)
})

let sundClicked = false;
$("#sun-button").click((e) => {
  changeClickedColor(e);
  dayClickedPrev = dayClicked
  dayClicked = sunday
  mymap.removeLayer(dayClickedPrev)
  dayClicked.addTo(mymap)
  sundClicked === false ? sundClicked=true : sundClicked=true;
  console.log(`sund clicked? ${sundClicked}`)
  sundClicked === true ? sunday.addTo(mymap) : mymap.removeLayer(sunday)
})


//make the buttons show a certain color when they're clicked
//add Found
