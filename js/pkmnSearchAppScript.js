const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAtk = document.getElementById("attack");
const pokeDef = document.getElementById("defense");
const pokeSpeAtk = document.getElementById("special-attack");
const pokeSpeDef = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");
const pokeImg = document.getElementById("pkmn-image");

let pokeData = {};
let arrPokeData = [];

//const pokeFetch = "https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/";

const pokeFetch = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

/*
fetch(pokeFetch)
.then((res) => res.json())
.then((data) => {
  pokeData = data;
  arrPokeData = pokeData.results;

  })
  .catch((err) => {
    console.log("Erreur :", err);
})*/

const pokemonData = async () => {
  try {
    const res1 = await fetch(pokeFetch); 
    const data1 = await res1.json();
    pokeData = data1;
    arrPokeData = pokeData.results;
    //console.log(pokeData);
displayPokemon();

    /*const res2 = await fetch(pokeData.results[0].url)
    const data2 = await res2.json();
    pokeData = data2;
    console.log(pokeData);*/
    
  } catch (err) {
    console.log(err);
  }
}

//searchInput.value = "";

//pokemonData();

//fonction itération
const displayPokemon = async () => {
  
let found = false;
 for (let key of arrPokeData) {
   //console.log(arrPokeData[key].name);
   if (searchInput.value.toLowerCase() === key.name
       || searchInput.value === `${key.id}`) {

      found = true;
       pokemonName.textContent = key.name.toUpperCase();
       pokemonId.textContent = `#${key.id}`;
  

   let index = key.id - 1;
  
  const res2 = await fetch (key.url)
  const data2 = await res2.json();
  //console.log(data2);
  //console.log(data2.height);
      pokeWeight.textContent = `Weight: ${data2.weight}`; 
      pokeHeight.textContent = `Height: ${data2.height}`;
  //console.log(data2.stats[1].base_stat)
      pokeHp.textContent = `${data2.stats[0].base_stat}`;
      pokeAtk.textContent = `${data2.stats[1].base_stat}`;
      pokeDef.textContent = `${data2.stats[2].base_stat}`;
      pokeSpeAtk.textContent = `${data2.stats[3].base_stat}`;
      pokeSpeDef.textContent = `${data2.stats[4].base_stat}`;
      pokeSpeed.textContent = `${data2.stats[5].base_stat}`;
      pokeImg.innerHTML = `<img id="sprite" src="${data2.sprites.front_default}">`

//pokeTypes.textContent =`${data2.types[0].type.name}` ;

   if (data2.types[0].type.name){
      pokeTypes.innerHTML =`<span>${data2.types[0].type.name.toUpperCase()}</span>`;
      if (data2.types[1].type.name) {
        pokeTypes.innerHTML +=`<span>${data2.types[1].type.name.toUpperCase()}</span>`;
      }
}


return; //empeche boucle infinie


}   
        
     } if (!found) {
         alert("Pokemon not found");
         pokemonName.textContent = "";
       pokemonId.textContent = "";
       pokeWeight.textContent = ""; 
      pokeHeight.textContent = "";
      pokeHp.textContent = "";
      pokeAtk.textContent = "";
      pokeDef.textContent = "";
      pokeSpeAtk.textContent = "";
      pokeSpeDef.textContent = "";
      pokeSpeed.textContent = "";
      pokeImg.innerHTML = "";
      pokeTypes.innerHTML = "";
       }
     

}

//addEventListener
searchBtn.addEventListener("click", () => {
  pokemonData();
  //displayPokemon();
  
})




/*
for (let key in arrPokeData) {
   //console.log(arrPokeData[key].name);
if (searchInput.value === `${arrPokeData[key].name}` 
|| searchInput.value === `${arrPokeData[key].id}`) {
  pokemonName.textContent = `${arrPokeData[key].name}`;
  pokemonId.textContent = `${arrPokeData[key].id}`;
}
   }


 async : Marque une fonction comme asynchrone, permettant d'utiliser await à l'intérieur.
await : Fait attendre la résolution d'une promesse avant de continuer l'exécution du code.

 pokeData.results.forEach(({id, name, height, url}, index) => {
     if (searchInput.value === `${id}` || searchInput.value === `${name}`) {
       index = `${id}` - 1
       pokemonName.textContent = `${name.toUpperCase()}`;
       pokemonId.textContent = `#${id}`;
       
       pokeData.results[index].url
       pokeHeight.textContent =  index;     
     }
 })
*/