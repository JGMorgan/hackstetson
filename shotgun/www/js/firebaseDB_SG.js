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
    var wkk = 2;
    newBase.once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key();
            var childData = childSnapshot.val();
            //childData = childData.toString();
            if (childData == "yes") {
                wkk = 1;
                return wkk=1;
            } else {
                wkk = 3;
                //wkk = 0;
                //update the name to value of true
                //var mObject = {};
                //mObject[name] = 'yes';
                //var string_json = JSON.stringify({name});
                //var updateString = "{" + Answer + ":'yes'}";
                //var uJSON = JSON.parse(updateString);
                //newBase.update({answer:'yes'},onComplete);
                //return false;
            }
        })
    })

    if (wkk != 2) {
        newBase.update({ answer: 'yes' }, onComplete);
    }
}

function set_SG() {
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