function filterPokemons() {

    var input, filter, pokeRow, matCards, i;
    input = document.getElementById("searchText");
    filter = input.value.toUpperCase();
    pokeRow = document.getElementById("pokeRow");
    matCards = pokeRow.getElementsByTagName("p");
    console.log(matCards.length)
    for (i = 0; i < matCards.length; i++) {
        pokemonName = matCards[i].getElementsByTagName("mat-card-title")[0];
        console.log("Inner: " + pokemonName.innerText);

        // console.log(matCards.length);
        if (pokemonName) {
            txtValue = pokemonName.textContent || pokemonName.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                matCards[i].style.display = "";
            } else {
                matCards[i].style.display = "none";
            }
        }
    }

}