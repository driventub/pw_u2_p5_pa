const obtenerIdPokemones = () => {
  const poke1 = randomIntFromInterval(1, 600);
  const poke2 = randomIntFromInterval(1, 600);
  const poke3 = randomIntFromInterval(1, 600);
  const poke4 = randomIntFromInterval(1, 600);

  return [poke1, poke2, poke3, poke4];
};

const obtenerNombresPokemones = async ([p1, p2, p3, p4]) => {
  const nombre1 = await consultarNombre(p1);
  const nombre2 = await consultarNombre(p2);
  const nombre3 = await consultarNombre(p3);
  const nombre4 = await consultarNombre(p4);

  

  const arreglo = [
    {
      id: p1,
      nombre: nombre1,
    },
    {
      id: p2,
      nombre: nombre2,
    },
    {
      id: p3,
      nombre: nombre3,
    },
    {
      id: p4,
      nombre: nombre4,
    },
  ];

  console.log(arreglo);
  return arreglo;
  
};

const obtenerPokemons = async () => {
  const arregloId = obtenerIdPokemones();
  return await obtenerNombresPokemones(arregloId);
};

async function consultarNombre(id) {
  const data = await consumirAPI(id);
  return data.name;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const consumirAPI = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) =>
    r.json()
  );
};

export const obtenerIdPokemonesFachada = async () => {
  return await obtenerPokemons();
};
// export default obtenerIdPokemonesFachada;
