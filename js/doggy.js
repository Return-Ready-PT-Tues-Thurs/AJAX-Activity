function dogs() {
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200); {
        var data = JSON.parse(this.responseText)
    document.getElementById("dogs").src = data.message;
    }
};

xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
xhr.send();
}