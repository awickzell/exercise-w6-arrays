const originalPokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

let additionalPokemons = [];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${originalPokemons.length + additionalPokemons.length} pokemons!`);
};

const orderThem = () => {
  // order the pokemons alphabetically
  const orderedPokemons = originalPokemons.sort();
  console.log(orderedPokemons);
};

const flipThem = () => {
  // reverse the order of the pokemons
  const reversedPokemons = [...originalPokemons].reverse();
  console.log(reversedPokemons);
};

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  const upperCasePokemons = originalPokemons.map(pokemon => pokemon.toUpperCase());
  console.log(upperCasePokemons);
};

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  const bPokemons = originalPokemons.filter(pokemon => pokemon.startsWith("B"));
  console.log(bPokemons);
};

const notTheCs = () => {
  // remove all pokemons that starts with C
  const noCPokemons = originalPokemons.filter(pokemon => !pokemon.startsWith("C"));
  console.log(noCPokemons);
};

const nameAndId = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  originalPokemons.forEach((pokemon, index) => {
    console.log(`number ${index + 1} - ${pokemon}`);
  });
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  additionalPokemons.push(name);
  console.log([...originalPokemons, ...additionalPokemons]);
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  const caught = [...originalPokemons, ...additionalPokemons].includes(name);
  console.log(caught ? `${name} is on the list!` : `${name} is not on the list.`);
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there
  const newPokemons = [...originalPokemons];
  newPokemons.splice(2, 0, "Clefairy");
  console.log(newPokemons);
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  const allPokemons = [...originalPokemons, ...additionalPokemons];
  const longestPokemon = allPokemons.reduce((longest, pokemon) =>
    pokemon.length > longest.length ? pokemon : longest, ""
  );
  console.log(`The longest name is: ${longestPokemon}`);
};





countThem();
orderThem();
flipThem();
makeThemBig();
onlyTheBs();
notTheCs();
nameAndId();
catchPokemon("LoooongNamePokemon");
didICatchIt("Pikachu");
addInThirdPlace();
theLongestName();
