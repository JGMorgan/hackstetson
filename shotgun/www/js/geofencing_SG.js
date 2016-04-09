
var carLongitude, carLatitude;
carLongitude = "-81";
carLatitude = "29"

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                        'Longitude: ' + position.coords.longitude + '<br />' +
                        '<hr />' + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//


function callLocation() {
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
}
