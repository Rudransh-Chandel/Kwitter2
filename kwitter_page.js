var firebaseConfig = {
      apiKey: "AIzaSyBwWcEwtD1VeLriMcl4RW84FMN4_VnDFo4",
      authDomain: "kwitter-2-ddde9.firebaseapp.com",
      databaseURL: "https://kwitter-2-ddde9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-ddde9",
      storageBucket: "kwitter-2-ddde9.appspot.com",
      messagingSenderId: "535588018329",
      appId: "1:535588018329:web:84448610f6c16c61134008",
      measurementId: "G-QBMYNG3EKF"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send();
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
