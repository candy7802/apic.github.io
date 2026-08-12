const url = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.getElementById('search');
const pokedexContainer = document.getElementById('pokedex');

//funcion para mostrar errores
function showError(message) {
    pokedexContainer.innerHTML = `<p class="error">$(message)</p>`;
}
async function searchPokemon() {
    const searchedPokemon = searchInput.value.toLowerCase();

    try {
        const response = await fetch(url + searchedPokemon);
        if (!response.ok) {
            showError('No se muestra ningun Pokemon llamado "${searchedPokemon}"');
            return;
        }
        const data = await response.json();

        //mostrar el contenido del jason en el html
        pokedexContainer.innerHTML =
            `
              <h2>${data.name.toUpperCase()}</h2>
             <img src ="${data.sprites.front_default}" alt= "${data.name}">
            <p>Numero: ${data.id}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>           
              `;
    } catch (error) {
        showError('Ha ocurrido un eeror al buscar el pokemon');
        console.error(error);
    }

}
//funcionalidad al boton
document.querySelector('button').addEventListener('click', searchPokemon);


