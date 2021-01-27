function dogs() {

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var img = JSON.parse(xhr.responseText);
        console.log(img);

        document.getElementById('dog1').src=img.message[0];
        document.getElementById('dog2').src=img.message[1];
        document.getElementById('dog3').src=img.message[2];
    }
};
xhr.open("GET", 'https://dog.ceo/api/breeds/image/random/3');
xhr.send();
}
