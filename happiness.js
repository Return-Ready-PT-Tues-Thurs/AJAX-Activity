var xhr = new XMLHttpRequest();

function sendAJAX() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var singleDog = JSON.parse(xhr.responseText);
      document.getElementById("singleImage").src = singleDog.message;
      console.log(xhr.responseText);
    }
  };

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

  xhr.send();
}

function sendAJAX3() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var threeDogs = JSON.parse(xhr.responseText);

      document.getElementById("dogImage").src = threeDogs.message[0];
      document.getElementById("secImage").src = threeDogs.message[1];
      document.getElementById("thirdImage").src = threeDogs.message[2];

      console.log(xhr.responseText);
    }
  };

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random/3");

  xhr.send();
}
