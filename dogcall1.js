const dogLink = "https://dog.ceo/api/breeds/image/random/3";
let btn = document.querySelector('button');
const doks = document.querySelector('#doks');

btn.addEventListener('click', loadImage);

function loadImage() {
    fetch(dogLink).then( res => res.json()).then(({message})=>{
        message.forEach(src => {
          doks.innerHTML += `<img src=${src}>`;
        });
      }
    )
}


  fetch(dogLink).then( res => res.json()).then(({message})=>{
    photo.innerHTML = message
  }
  )
