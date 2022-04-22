// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHB54phaRQ9diU9C4r1UjpYtFI6X8ZelI",
    authDomain: "announcement-36206.firebaseapp.com",
    projectId: "announcement-36206",
    storageBucket: "announcement-36206.appspot.com",
    messagingSenderId: "5716612230",
    appId: "1:5716612230:web:f59ccc020e14f705126d07",
    measurementId: "G-LCMDZL847E"
  };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function comment() {
 msg = document.getElementById("msg").value;
 firebase.database().ref().push({
       name: user_name,
       message: msg,
       like: 0
 })
 document.getElementById("msg").value = "";
}

function question(){
    msg = document.getElementById("msg").value;
    firebase.database().ref().push({
          name: user_name,
          message: msg,
          like: 0
    })
    document.getElementById("msg").value = "";
   }
}
