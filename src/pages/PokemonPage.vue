<template>
  <h1 v-if="pokemonGanador == null">Cargando......</h1>
  <div v-if="pokemonGanador !== null">
    
    <!-- <div> -->
    <h1 class="text-3xl font-bold underline">Adivina el Pokemon</h1>
    <PokemonImagenVue :pokemonId="pokemonGanador.id" :showPokemon="mostrarPokemon" />
    <!-- <PokemonImagenVue :pokemonId="6" :showPokemon="false" /> -->
    <PokemonOptionsVue @seleccion="revisarClick" :pokemones="pokemonArr" :ganador="mostrarPokemon" />
  </div>
</template>

<script>
import PokemonOptionsVue from "@/components/PokemonOptions.vue";
import PokemonImagenVue from "@/components/PokemonImagen.vue";
import { obtenerIdPokemonesFachada } from "../helpers/poke.js";

export default {
  components: {
    PokemonOptionsVue,
    PokemonImagenVue,
  },
  mounted() {
    // const arreglo = obtenerIdPokemonesFachada();
    // console.log(arreglo);
    console.log("Se monto el componente");
    this.cargaInicial();
  },

  beforeCreate() {
    console.log("Antes de crear el componente");
  },

  created() {
    console.log("Se creo el componente");
  },

  beforeMount() {
    console.log("Antes de que monte el componente en la pagina");
  },

  beforeUpdate() {
    console.log("Antes de que se actualice el componente");
  },
  updated() {
    console.log("Se actualiza el componente");
  },
  beforeDestroy() {
    console.log("Antes de destruir");
  },
  destroyed() {
    console.log("Destruido");
  },
  methods: {
    async cargaInicial() {
      const arreglo = await obtenerIdPokemonesFachada();
      console.log(arreglo);
      this.pokemonArr = arreglo;
      console.log(this.pokemonArr[0])

      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonArr[indiceGanador];
      console.log("Id encontrado: " + this.pokemonGanador);
    },
    revisarClick(seleccion) {
      console.log("Revisar click", seleccion[0]);
      console.log(this.pokemonGanador.id);

      if (this.pokemonGanador.id === seleccion[0]) {

        console.log("paso");
        this.mostrarPokemon = true

        
      }
    }
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      
    };
  },
};
</script>

<style scoped></style>
