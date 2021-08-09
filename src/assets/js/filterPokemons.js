function filterPokemons() {

    var input, filter, pokeRow, matCards, i;
    input = document.getElementById("searchText");
    filter = input.value.toUpperCase();
    pokeRow = document.getElementById("pokeRow");
    matCards = pokeRow.getElementsByTagName("a");
    for (i = 0; i < matCards.length; i++) {
        pokemonName = matCards[i].getElementsByTagName("h3")[0];
        if (pokemonName) {
            txtValue = pokemonName.textContent || pokemonName.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                matCards[i].style.display = "inline";
            } else {
                matCards[i].style.display = "none";
            }
        }
    }

}