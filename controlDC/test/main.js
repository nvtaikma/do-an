var rangeVal = document.getElementById('range-value');
var rangeInp = document.getElementById('range-input');

var updateVal = function(val) {
  rangeVal.innerHTML = val;
    rangeVal.style.left = val + '%';
    console.log(rangeInp.value);
};

updateVal(rangeInp.value);