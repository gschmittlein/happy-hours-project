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
    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPGkttTH_BTbV3v7OVU5yxtn2IODePLM_bRLdXuuDBnyF72Qn1w',
    iconSize:     [30, 55], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var WhiskeyThief = L.marker([42.0463, -87.6806], {icon: beerIcon}).bindPopup('<h4>Whiskey Thief</h4><b>Saturday and Sunday (11am-12pm):</b> Free mimosas<br><b>Monday (all hours):</b> Industry night - drink deals and 20% off for people working in the restaurant or hair salon industry<br><b>Tuesday (all hours):</b> Drink deals and karaoke at 10pm'),

    BarLouie = L.marker([42.0454, -87.6821], {icon: beerIcon}).bindPopup('<h4>Bar Louie</h4><b>Wednesday (all hours):</b> Beer Night - $1.25 select domestic bottles, $5.25 signature martinis'),

    WorldOfBeer = L.marker([42.0472, -87.6816], {icon: beerIcon}).bindPopup('<h4>World of Beer</h4><b>Week Nights (4pm-7pm):</b> $4 draughts, $5 spirits, $5 shareables, $6 wines'),

    SmylieBrothers = L.marker([42.0477, -87.6864], {icon: beerIcon}).bindPopup('<h4>Smylie Brothers</h4><b>Tuesday, Wednesday, Thursday, Sunday (4pm-6pm):</b> $3 select Smylie Brothers beer, $3 ribwich slider or $10 for 3 sliders with fries, $5 individual white bean dip'),

    TheCelticKnot = L.marker([42.0480, -87.6801], {icon: beerIcon}).bindPopup('<h4>The Celtic Knot</h4><b>Monday (all hours):</b> $4 16oz pints of Smithwicks Ale<br><b>Tuesday (all hours):</b> $4 16oz Pints of Hickster Cream Ale<br><b>Wednesday (all hours):</b> $4 16oz pints of Blue Moon<br><b>Thursday (all hours):</b> $4 16oz pints of Snakebite<br><b>Sunday (all hours):</b> $4 16oz pints of Magners Hard Cider<br><b>All Week (all hours):</b> $3 Beer Special, $6 Special Cocktail'),

    Bat17 = L.marker([42.0488, -87.6832], {icon: beerIcon}).bindPopup('<h4>Bat 17</h4><b>All Nights:</b> $3 12oz cans of Pabst Blue Ribbon and $4 16oz cans of Miller Lite<br><b>Monday (tk hours):</b> $3 Select Pints and $20 Select Towers<br><b>Tuesday (tk hours):</b> $5 Appetizer Special<br><b>Wednesday (tk hours):</b> $4.50 Draft Night<br><b>Thursday (tk hours):</b> $3 Vodka Special<br><b>Saturday (tk hours):</b> $5 Shipwrecked Rum Special<br><b>Sunday (tk hours):</b> $4.50 Bloody Mary'),

    PrairieMoon = L.marker([42.0474, -87.6788], {icon: beerIcon}).bindPopup('<h4>Prairie Moon</h4><b>Week Nights (4pm-6pm):</b> $6 select wines, $5 cocktails, $4 pints');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `pk.eyJ1IjoiZ2FiZXNjaG1pdHRsZWluIiwiYSI6ImNqcnkxbjQweDB0Z3g0YXBnYTNpdm5oYzYifQ.IvSdK54kCmTC5pDJy2dbKA`
}).addTo(mymap);


var all = L.layerGroup([WhiskeyThief, BarLouie, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, PrairieMoon]);
var monday = L.layerGroup([WhiskeyThief, WorldOfBeer, TheCelticKnot, Bat17, PrairieMoon]);
var tuesday = L.layerGroup([WhiskeyThief, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, PrairieMoon]);
var wednesday = L.layerGroup([BarLouie, WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, PrairieMoon]);
var thursday = L.layerGroup([WorldOfBeer, SmylieBrothers, TheCelticKnot, Bat17, PrairieMoon]);
var friday = L.layerGroup([WorldOfBeer, TheCelticKnot, Bat17, PrairieMoon]);
var saturday = L.layerGroup([WhiskeyThief, TheCelticKnot, Bat17]);
var sunday = L.layerGroup([WhiskeyThief, SmylieBrothers, TheCelticKnot, Bat17]);


var baseMaps = {};


all.addTo(mymap);


var overlayMaps = {
  "All": all,
  "Monday": monday,
  "Tuesday": tuesday,
  "Wednesday": wednesday,
  "Thursday": thursday,
  "Friday": friday,
  "Saturday": saturday,
  "Sunday": sunday
};


L.control.layers(null, overlayMaps).addTo(mymap);






