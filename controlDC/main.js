const firebaseConfig = {
  apiKey: "AIzaSyBff79i61SirEwTjiUcL8fNa1z6dYPpk_I",
  authDomain: "web-doan2.firebaseapp.com",
  databaseURL: "https://web-doan2-default-rtdb.firebaseio.com",
  projectId: "web-doan2",
  storageBucket: "web-doan2.appspot.com",
  messagingSenderId: "1024016029409",
  appId: "1:1024016029409:web:4d3421e0116c6c24f009a0",
  measurementId: "G-K8T6STMNS9"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var slider = document.getElementById("pwmSlider");
var dataSlider = document.getElementById("textslider_value")
var database = firebase.database();
database.ref().on("value", function(snap){      
    slider.value = snap.val().ValueSlider;           
	dataSlider.innerHTML = snap.val().ValueSlider; 	
});

slider.oninput = function(){
    dataSlider.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("ValueSlider");         
    firebaseRef.set(Number(slider.value));           
}


function updateSliderPWM(element) {
  var slider_value = document.getElementById("pwmSlider").value;
  var Speed__fan = document.getElementById("rotate_03");
  if (slider_value > 240 && slider_value<=255 ) {
    Speed__fan.style.animationDuration = "0.1s";
    console.log("1");
  } else if (slider_value > 210 && slider_value <= 240) {
    Speed__fan.style.animationDuration = "0.2s";
    console.log("2");
  } else if (slider_value > 180 && slider_value <= 210) {
    Speed__fan.style.animationDuration = "0.3s";
    console.log("3");
  } else if (slider_value > 150 && slider_value <= 180) {
    Speed__fan.style.animationDuration = "0.4s";
  } else if (slider_value > 120 && slider_value <= 150) {
    Speed__fan.style.animationDuration = "0.5s";
  } else if (slider_value > 90 && slider_value <= 120) {
    Speed__fan.style.animationDuration = "0.6s";
  } else if (slider_value > 60 && slider_value <= 90) {
    Speed__fan.style.animationDuration = "0.7s";
  } else if (slider_value > 30 && slider_value <= 60) {
    Speed__fan.style.animationDuration = "0.8s";
  } else if (slider_value > 0 && slider_value <= 30) {
    Speed__fan.style.animationDuration = "0.9s";
  } else if (slider_value == 0) {
    Speed__fan.style.animationDuration = "0s";
  }
//   document.getElementById("rotate_03").style.animationDuration = '0.' + slider_value + 's';
}

const checked = () => {
  if (document.getElementById("checkbox").checked == true) {
    console.log("true")
    document.getElementById("slider-data").style.display = "block";
    var value = document.getElementById("pwmSlider").value;
    var dataSlider = document.getElementById("textslider_value")
    dataSlider.innerHTML = value;

    console.log(value);
    
  } else {
    console.log("false");
    document.getElementById("slider-data").style.display = "none"
    var value = document.getElementById("pwmSlider").value = 0;
    document.getElementById("rotate_03").style.animationDuration = "0s";
    // set lai value
    var firebaseRef = firebase.database().ref().child("ValueSlider");         
    firebaseRef.set(Number(0));  

  }
}

