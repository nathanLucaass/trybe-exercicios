const button = document.getElementById('button');
const name = document.getElementById('name');
const img = document.getElementById('img');
const generateID = () => Math.floor(Math.random() * 731) + 1;
button.addEventListener('click', async () =>{
    const characterId = generateID();
    const characterUrl = `https://www.superheroapi.com/api.php/177143588425901/${characterId}`;
    const response = await fetch(characterUrl);
    const character = await response.json();
    console.log(character);
    const imagemNova = character.image.url
    name.innerHTML = character.name
    img.src = `${imagemNova}`;
})

const response = await fetch(apiUrl);
const data = await response.json();


