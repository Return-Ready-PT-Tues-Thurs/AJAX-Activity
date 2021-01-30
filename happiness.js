var xhr = new XMLHttpRequest();

function sendAJAX() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var n = JSON.parse(xhr.responseText);
      //var sec = JSON.parse(xhr.responseText);
      //console.log(n.message);
      document.getElementById("dogImage").src = n.message[0];
      document.getElementById("secImage").src = n.message[1];
      document.getElementById("thirdImage").src = n.message[2];
    }
  };

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random/3");
  //https://dog.ceo/api/breeds/image/random/3
  //xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

  xhr.send();
}
