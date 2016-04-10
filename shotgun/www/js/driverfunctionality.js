function enableShotgun(){
  var check = 0;
  var element = document.getElementById('firebaseCall');
  //element.disabled = true;
  if (isShotgunEnabled()) {
      element.disabled = false;
      check = 1;
  } else {
      element.disabled = true;
  }
  if (check == 1) {
      enableShotgun();
  }
}

function isShotgunEnabled(){
  isEnabled = false;
  $.get("http://localhost:1337/swag", function(data){
    isEnabled = data;
  });
  return isEnabled;
}

function disableShotgun() {
    var element = document.getElementById('firebaseCall');
    element.disabled = true;
}
