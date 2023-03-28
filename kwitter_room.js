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
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      myTesting123 : "add room name"
    });
   localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
  }

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
       row = "<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'> # "+ Room_names + " </div> <hr>";

    });
  });

}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

getData();


