let cards = [
  // Los Angeles CA
  {
    name: "Rocco",
    type: "dog",
    sex: "male",
    age: "young",
    city: "los angeles ca",
    img: "./images/pet-01.png",
  },
  {
    name: "Chanona",
    type: "cat",
    sex: "male",
    age: "young",
    city: "los angeles ca",
    img: "./images/pet-02.png",
  },
  {
    name: "Morio",
    type: "cat",
    sex: "male",
    age: "young",
    city: "los angeles ca",
    img: "./images/pet-03.png",
  },
  {
    name: "Danio",
    type: "cat",
    sex: "male",
    age: "young",
    city: "los angeles ca",
    img: "./images/pet-04.png",
  },
  // New York NY
  {
    name: "Lilia",
    type: "cat",
    sex: "Female",
    age: "young",
    city: "new york ny",
    img: "./images/pet-02.png",
  },
  {
    name: "Decer",
    type: "dog",
    sex: "Female",
    age: "old",
    city: "new york ny",
    img: "./images/pet-04.png",
  },
  {
    name: "Trixy",
    type: "dog",
    sex: "Female",
    age: "young",
    city: "new york ny",
    img: "./images/pet-01.png",
  },
  // San Fransico SA
  {
    name: "Rakan",
    type: "dog",
    sex: "Male",
    age: "old",
    city: "san fransico sa",
    img: "./images/pet-01.png",
  },
  {
    name: "Jacklyn",
    type: "dog",
    sex: "Female",
    age: "old",
    city: "san fransico sa",
    img: "./images/pet-03.png",
  },
  {
    name: "Miley",
    type: "cat",
    sex: "Female",
    age: "young",
    city: "san fransico sa",
    img: "./images/pet-02.png",
  },
  {
    name: "Camilla",
    type: "cat",
    sex: "Female",
    age: "young",
    city: "san fransico sa",
    img: "./images/pet-04.png",
  },
];
document
  .getElementsByClassName("form-group")[0]
  .lastElementChild.addEventListener("click", () => {
    const value = document.getElementsByClassName("form-group")[0]
      .firstElementChild.value;
    const card = cards.filter((i) => i.city.includes(value));
    // console.log(cards.length);
    card.length == 0
      ? (document.getElementsByClassName(
          "widgets is-searchResults"
        )[0].innerHTML = "Please type the name of the city correctly, Try CA, NY, SA")
      : (document.getElementsByClassName(
          "widgets is-searchResults"
        )[0].innerHTML = card.map(
          (pet) => `
        <div class="widget">
          <div class="widget__image">
            <img src="${pet.img}" alt="pet image" />
          </div>
          <div class="widget__desc">
             <h4>${pet.name}</h4>
              <p>${pet.sex} | ${pet.age}</p>
           <p>${pet.city}</p>
          </div>
         </div>
`
        ));
  });
let Stories = [
  "Kori was lost in the jungle, i wasn't doing anything but walking around our village and suddenly i ran into Kori and we had a small talk and ended up best friends forever.",
  "Nochi is my delivery pet, I cant imagine losing her, she my daily savior always ready to deliver my mails.",
  "Pets can be more than pets to you, I take my cat everywhere we're like soulmates I'm never alone, loneliness missed me i guess .",
];
for (let i = 0; i < 3; i++) {
  document.getElementsByClassName("link")[i].addEventListener("click", () => {
    document.getElementsByClassName("link")[i].innerHTML = `
    <p> ${Stories[i]} </p>`;
  });
}
