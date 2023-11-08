const img = document.querySelector('#image');
const buttonDog = document.querySelector('#dog');
const buttonCat = document.querySelector('#cat');
const buttonSurprise = document.querySelector('#random');


buttonDog.addEventListener("click", () => {
   
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((result) => result.json())
    .then((data) => {
       const petURL = data.message;
       img.src = petURL;
    })
})

buttonCat.addEventListener("click", () => {
   
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((result) => result.json())
    .then(([data]) => {
       const petURL = data.url;
       img.src = petURL;
    })
})

buttonSurprise.addEventListener("click", () => {
    Promise.any([
      fetch("https://api.thecatapi.com/v1/images/search"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ])
    .then((res) => res.json())
    .then((data) => {
        const petURL = data.message || data[0].url;
  
        img.src = petURL;
      });
  });

