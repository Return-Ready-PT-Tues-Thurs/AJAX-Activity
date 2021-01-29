function dogs() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
        document.getElementById("dogs0").src = data.message[0];
        document.getElementById("dogs1").src = data.message[1];
        document.getElementById("dogs2").src = data.message[2];
        }
    };
    
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random/3");
    xhr.send();
    }