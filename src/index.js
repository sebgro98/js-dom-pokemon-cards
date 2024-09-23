console.log(data[0])

const pokemonListUl = document.querySelector("#pokemon"); // first one


function renderPokemonCard() {

    const pokemonList = document.getElementById('cards'); // first 

    pokemonList.innerHTML = "";

    for(let i = 0; i< data.length; i++) {
        const pokemon = data[i];

        const pokemonLi = document.createElement('li');
        pokemonLi.classList.add("card");

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add("card--title");
        pokemonName.textContent = pokemon.name;
        pokemonLi.appendChild(pokemonName);

        const pokemonImg = document.createElement('img');
        pokemonImg.width = 256;
        pokemonImg.classList.add("card--img")
        pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
        pokemonLi.appendChild(pokemonImg);

        const pokemonCardTextUl = document.createElement("ul");
        pokemonCardTextUl.classList.add("card--text");

        
        const pokemonStats = document.createElement('li');
        pokemonCardTextUl.appendChild(pokemonStats);
       

        pokemonStats.textContent = 
        `HP: ${pokemon.stats[0].base_stat}
         Attack: ${pokemon.stats[1].base_stat} 
         Defense: ${pokemon.stats[2].base_stat} 
         Sp. Atk: ${pokemon.stats[3].base_stat} 
         Sp. Def: ${pokemon.stats[4].base_stat} 
         Speed: ${pokemon.stats[5].base_stat}`;
        
         pokemonLi.appendChild(pokemonCardTextUl);
        
   
        
        
        pokemonList.appendChild(pokemonLi);
        
        console.log(pokemon);
    }
}

function main() {
    renderPokemonCard();
}

main();