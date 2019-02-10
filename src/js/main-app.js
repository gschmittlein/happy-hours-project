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

var WhiskeyThief = L.marker([42.0463, -87.6806]).addTo(mymap);

var BarLouie = L.marker([42.0454, -87.6821]).addTo(mymap);

var WorldOfBeer = L.marker([42.0472, -87.6816]).addTo(mymap);

var SmylieBrothers = L.marker([42.0477, -87.6864], {icon: SmylieBrothersIcon}).addTo(mymap);

var TheCelticKnot = L.marker([42.0480, -87.6801]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: `pk.eyJ1IjoiZ2FiZXNjaG1pdHRsZWluIiwiYSI6ImNqcnkxbjQweDB0Z3g0YXBnYTNpdm5oYzYifQ.IvSdK54kCmTC5pDJy2dbKA`
}).addTo(mymap);

WhiskeyThief.bindPopup("<b><i>Whiskey Thief</i></b><br><b>Saturday and Sunday (11am-12pm):</b> Free mimosas<br><b>Monday (all hours):</b> Industry night - drink deals and 20% off for people working in the restaurant or hair salon industry<br><b>Tuesday (all hours):</b> Drink deals and karaoke at 10pm");

BarLouie.bindPopup("<b><i>Bar Louie</i></b><br><b>Wednesday (all hours):</b> Beer Night - $1.25 select domestic bottles, $5.25 signature martinis");

WorldOfBeer.bindPopup("<b><i>World of Beer</i></b><br><b>Week Nights (4pm-7pm):</b> $4 draughts, $5 spirits, $5 shareables, $6 wines");

SmylieBrothers.bindPopup("<b><i>Smylie Brothers</i></b><br><b>Tuesday, Wednesday, Thursday, Sunday (4pm-6pm):</b> $3 select Smylie Brothers beer, $3 ribwich slider or $10 for 3 sliders with fries, $5 individual white bean dip")

TheCelticKnot.bindPopup("<b><i>The Celtic Knot</i></b><br><b>Monday (all hours):</b> $4 16oz pints of Smithwick's Ale<br><b>Tuesday (all hours):</b> $4 16oz Pints of Hickster Cream Ale<br><b>Wednesday (all hours):</b> $4 16oz pints of Blue Moon<br><b>Thursday (all hours):</b> $4 16oz pints of Snakebite<br><b>Sunday (all hours):</b> $4 16oz pints of Magner's Hard Cider<br><b>All Week (all hours):</b> $3 Beer Special, $6 Special Cocktail")




