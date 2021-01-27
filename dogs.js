function dogs() {

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var img = JSON.parse(xhr.responseText);
        console.log(img);
        document.getElementById('dog').src=img.message;
        // document.getElementById('dog2').src=img.message;
        // document.getElementById('dog3').src=img.message;
    }
};
xhr.open("GET", 'https://dog.ceo/api/breeds/image/random');
xhr.send();
}
