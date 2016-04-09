// JavaScript source code
var Firebase = require("firebase");
var newBase = new Firebase("https://shotgunapp.firebaseio.com/");
//newBase.auth()
function addUser() {

}

function getStatus(name) {
    var n_stat = newBase.child(name);
}

var onComplete=function(error){
    var element = document.getElementById('fbase');
    if (error) {
        console.log('Synchronization failed');
    } else {
        element.innerHTML = "changed to yes"
    }
}


function determineSG(name) {
    newBase.once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key();
            var childData = childSnapshot.val();
            if (childData == "yes") {
                return true;
            } else {
                // update the name to value of true
                newBase.update({name:'yes'},onComplete);
                return true;
            }
        })
    })
}