function enableShotgun(){
  var element = document.getElementById('firebaseCall');
  element.disabled = true;
  if (isShotgunEnabled()){
    element.disabled = false;
  }
}

function isShotgunEnabled(){
  isEnabled = false;
  $.get("http://52.1.228.101:1337/swag", function(data){
    isEnabled = data;
  });
  return isEnabled;
}
