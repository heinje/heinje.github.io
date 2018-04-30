function geoSuccess(position) {
  self.postMessage({
    success: true,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  });
}

function geoError(error) {
  self.postMessage({
    success: false,
    error: error
  });
}

function getGps() {
  //navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  self.postMessage('tick');
  setTimeout(getGps, 60000);
}

getGps();
