function enableShotgun(){
  var element = document.getElementById('firebaseCall');
  element.disabled = true;
  if (isShotgunEnabled()){
    element.disabled = false;
  }
}

function isShotgunEnabled(){
  isEnabled = false;
  $.get("http://localhost:1337/swag", function(data){
    isEnabled = data;
  });
  return isEnabled;
}
