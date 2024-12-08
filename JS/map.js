document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map', {
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        tap: false
    }).setView([40.3886813, 49.8720688], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    L.marker([40.3886813, 49.8720688], {
        icon: L.icon({
            iconUrl: 'Images/marker-icon-red.png',
            iconSize: [41, 41],
            iconAnchor: [30, 41],
            popupAnchor: [-8, -34],
        })
    }).addTo(map)
        .bindPopup('Our Location')
        .openPopup();

    map.once('click', function () {
        map.dragging.enable();
        map.scrollWheelZoom.enable();
        map.doubleClickZoom.enable();
        map.boxZoom.enable();
        map.tap.enable();
    });
});
