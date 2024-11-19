// JavaScript

console.log('Hello world!');

const map = L.map('map').setView([33.595198335570494, 130.35186542784487],15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',
  
// iconSize:     [40, 40], // size of the icon
//  shadowSize:   [40, 40], // size of the shadow
//  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//  shadowAnchor: [20, 40],  // the same for the shadow
//  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//  });

//  L.marker([33.593382478059006, 130.3514695572939], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.59340091227881, 130.3514763135603], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.595342906596734, 130.36195525166707], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');

  const circle = L.circle([33.59545660466013, 130.36193011367774], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

// 多角形の表示
const polygon = L.polygon([
  [33.585809, 130.376387],
  [33.597105, 130.394282],
  [33.585165, 130.404797],
  [33.579016, 130.39278]
], {
  color: 'blue',
  fillColor: '#000',
  fillOpacity: 0.3
}).addTo(map);