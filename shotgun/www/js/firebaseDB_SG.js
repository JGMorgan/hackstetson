// JavaScript source code
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
        element.innerHTML = "changed to yes";
    }
}


function determineSG(name) {
    newBase.once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key();
            var childData = childSnapshot.val();
            if (childData == "yes") {
                return false;
            } else {
                // update the name to value of true
               // var mObject = {};
               // mObject[name] = 'yes';
               // var string_json = JSON.stringify({name});
                var updateString = "{" + Answer + ":'yes'}";
                //var uJSON = JSON.parse(updateString);
                newBase.update(updateString,onComplete);
                return true;
            }
        })
    })
}

function set_SG(){
    var usersRef = newBase.child("users");
    usersRef.set({
        Leon: {
            Answer: "no"
        },
        Andres: {
            Answer: "no"
        }
    });
}