
const req = new XMLHttpRequest();

//document selectors
let button = document.querySelector('.button');
let dogImage = document.querySelector('.imagePanel');

//add event listener to the button to call the function
button.addEventListener("click", imageLoader)

//function for getting req on the API
function imageLoader(){
    req.onload = function () {
        //parse the response to JSON
        const data = JSON.parse(this.responseText);

        data.message.map(element => {
            let img = document.createElement('img'); 
            img.src =  element;
            dogImage.appendChild(img); 
        });
    }
    req.onerror  = function (){
        console.log('errrrror!!');
    }
    req.open('GET','https://dog.ceo/api/breeds/image/random/3');
    req.send();
}
