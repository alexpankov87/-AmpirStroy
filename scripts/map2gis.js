let map;
DG.then(function () {
    map = DG.map('map', {
        center: [50.064386, 72.966744], 
        zoom: 25, 
        scrollWheelZoom: false 
    });                                        
    mapicon = DG.icon({
        iconUrl: 'images/marker.png', 
        iconAnchor: [32, 64], 
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [54, 54] 
    });          
    DG.marker([50.064386, 72.966744], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2>AmpirStroy</h2><br/>проспект Республики 63/3<br/><br/><b>Телефон:+7 700 379 4983</b></div>');     
});