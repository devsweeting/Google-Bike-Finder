const loadGoogleMapsApi = require('load-google-maps-api');
const googleKey = `${process.env.GOOGLEMAPS_API}`;

export class Map {
  constructor() {
    this.markers = [];
    console.log(this.markers);
  }
  static loadMap() {
    return loadGoogleMapsApi({ key: `${googleKey}` });
  }

  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: {
        lat: 45.5122,
        lng: -122.6587
      },
      zoom: 8
    });
  }
}
 //
 //  static placeMarkerAndPanTo(googleMaps, latLng, map) {
 //    let marker = new googleMaps.Marker({
 //       position: latLng,
 //       map: map,
 //       draggable:true,
 //    });
 //    // this.markers.push(marker)
 //    map.panTo(latLng);
 //    return marker;
 // }
