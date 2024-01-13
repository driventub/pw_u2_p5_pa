const obtenerIdPokemones = () => {
  const poke1 = randomIntFromInterval(1,600);
  const poke2 = randomIntFromInterval(1,600);
  const poke3 = randomIntFromInterval(1,600);
  const poke4 = randomIntFromInterval(1,600);
  const arreglo = [poke1,poke2,poke3,poke4]
  console.log(arreglo);
};

export const obtenerIdPokemonesFachada = () => {
  obtenerIdPokemones();
};

const obtenerNombresPokemones = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0])
    const nombre2 = consumirAPI(arreglo[1])
    const nombre3 = consumirAPI(arreglo[2])
    const nombre4 = consumirAPI(arreglo[3])
    
}

function consumirAPI(id){
    return "nombre"
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// export default obtenerIdPokemonesFachada;