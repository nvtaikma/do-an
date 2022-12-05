const firebaseConfig = {
    apiKey: "AIzaSyBsnfJiKhpUv9bsW-mxCkpTka2pmmtAvrs",
    authDomain: "doan1-1b8c9.firebaseapp.com",
    databaseURL: "https://doan1-1b8c9-default-rtdb.firebaseio.com",
    projectId: "doan1-1b8c9",
    storageBucket: "doan1-1b8c9.appspot.com",
    messagingSenderId: "500104821890",
    appId: "1:500104821890:web:67d401cccdc16c27f9c89b",
    measurementId: "G-24HSN7ESEW"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var slider = document.getElementById("pwmSlider");
var dataSlider = document.getElementById("textslider_value")

var database = firebase.database();
database.ref().on("value", function(snap){      
    slider.value = snap.val().ValueSlider;           //get value blueValue from firebase and store to  sliderBlue.value
	dataSlider.innerHTML = snap.val().ValueSlider;  //get value blueValue from firebase and store to  SelectValueBlue.innerHTML	
});

slider.oninput = function(){
    dataSlider.innerHTML = this.value; /* able to change the value*/
    var firebaseRef = firebase.database().ref().child("ValueSlider");
    //firebaseRef.set(Number(sliderBlue.value));           
    firebaseRef.set(slider.value);           
}


function updateSliderPWM(element) {
  var slider_value = document.getElementById("pwmSlider").value;
  document.getElementById("textslider_value").innerHTML = slider_value;
  console.log(slider_value);
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "/slider?value=" + slider_value, true);
//   xhr.send();
  var Speed__fan = document.getElementById("rotate_03");
  if (slider_value <=250 ) {
    Speed__fan.style.animationDuration = "0.9s";
  } else if (slider_value <= 225) {
    Speed__fan.style.animationDuration = "0.8s";
  } else if (slider_value <= 200) {
    Speed__fan.style.animationDuration = "0.7s";
  } else if (slider_value <= 175) {
    Speed__fan.style.animationDuration = "0.6s";
  } else if (slider_value <= 150) {
    Speed__fan.style.animationDuration = "0.5s";
  } else if (slider_value <= 125) {
    Speed__fan.style.animationDuration = "0.4s";
  } else if (slider_value <= 100) {
    Speed__fan.style.animationDuration = "0.3s";
  } else if (slider_value <= 75) {
    Speed__fan.style.animationDuration = "0.2s";
  } else if (slider_value <= 50) {
    Speed__fan.style.animationDuration = "0.1s";
  } else if (slider_value == 0) {
    Speed__fan.style.animationDuration = "0s";
  }
//   document.getElementById("rotate_03").style.animationDuration = '0.' + slider_value + 's';
}
