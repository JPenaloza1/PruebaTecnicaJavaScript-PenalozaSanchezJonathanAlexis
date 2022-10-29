const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

let request = () => {
    fetch(url)
        .then(response => response.json()) //Promesa
        .then(data => {            
            showAbilities(data);
        })
        .catch(err=>console.log(err))
}

let showAbilities = (data) => {
    let element = document.getElementById('ditto');
    
    element.innerHTML += `<p>${data.name}</p>
                           <img src='${data.sprites.front_default}'/>`;

    for(let i=0 ; i<data.abilities.length ; i++) {
        element.innerHTML += `<p>${data.abilities[i].ability.name}</p>`;
    }
}