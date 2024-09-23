function renderPokemonCard() {

    const pokemonList = document.getElementById('cards');

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

        const statsLabels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

        pokemon.stats.forEach((stat, index) => {
        const pokemonStatLi = document.createElement("li");
        pokemonStatLi.textContent = `${statsLabels[index]}: ${stat.base_stat}`;
        pokemonCardTextUl.appendChild(pokemonStatLi);
        });
         
        pokemonLi.appendChild(pokemonCardTextUl);
        pokemonList.appendChild(pokemonLi)
        
         
        const gameAppearancesUl = document.createElement("ul");

        const gameTitleLi = document.createElement("li");
        gameTitleLi.textContent = "Appeared in Games:";
        gameAppearancesUl.appendChild(gameTitleLi);

        pokemon.game_indices.forEach((gameIndex) => {
            const gameLi = document.createElement("li");
            gameLi.textContent = gameIndex.version.name;
            gameAppearancesUl.appendChild(gameLi);
        });

        pokemonLi.appendChild(gameAppearancesUl);

    const pokemonImages = [
        pokemon.sprites.front_default,   
        pokemon.sprites.back_default,    
        pokemon.sprites.front_shiny     
    ];
    
    let currentImageIndex = 0;
    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonImages[currentImageIndex];
    pokemonImage.style.cursor = "pointer"; 

    // Add event listener to toggle image on click
    pokemonImage.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % pokemonImages.length;
        pokemonImage.src = pokemonImages[currentImageIndex];
    });

    pokemonLi.appendChild(pokemonImage);
    }
    
   
}

function main() {
    renderPokemonCard();
}

main();