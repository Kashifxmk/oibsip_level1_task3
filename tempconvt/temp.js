


function convert() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var value = document.getElementById("value").value;
  
    if (from == "celsius" && to == "fahrenheit") {
      result = (value * 9 / 5) + 32;
    } else if (from == "fahrenheit" && to == "celsius") {
      result = (value - 32) * 5 / 9;
    } else {
      result = value;
    }
  
    document.getElementById("result").innerHTML = result;
    document.getElementById("submit").addEventListener("click", convert);
  }
  document.getElementById("submit").addEventListener("click", convert);