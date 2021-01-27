var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var n = JSON.parse(xhr.responseText);
    var sec = JSON.parse(xhr.responseText);
    //console.log(n.message);
    document.getElementById("dogImage").src = n.message;
    document.getElementById("secImage").src = sec.message;
    document.getElementById("thirdImage").src = n.message;
  }
};

xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

function sendAJAX() {
  xhr.send();
}

