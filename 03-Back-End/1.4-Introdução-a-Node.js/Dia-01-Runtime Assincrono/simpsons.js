const fs = require('fs').promises;

async function readAll() {
  const fileCotent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileCotent);
  const string = simpsons.map(({ id, name }) => `${id} - ${name}`);
  string.forEach((element) => console.log(element));
}
// readAll();

const getCharacterById = async (id) => {
  const fileCotent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileCotent);
  const character = simpsons.find((element) => element.id === '2');
  return character;
};



async function filterSimpsons() {
  const fileCotent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileCotent);
  const arrayFiltrado = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')
  await fs.writeFile('./simpsons.json', JSON.stringify(arrayFiltrado));
}


const oneToFour = async () => {
  const fileCotent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileCotent);
  const arrayFiltrado = simpsons.filter((simpson) => simpson.id === '1' ||simpson.id === '2' ||simpson.id === '3'||simpson.id === '4');
 
  await fs.writeFile('./simpsonsFiltered.json', JSON.stringify(arrayFiltrado));
}
async function mainID() {
  // const simpson = await getCharacterById(id)
  // console.log(simpson);
  await filterSimpsons();
  await oneToFour();
}
mainID()