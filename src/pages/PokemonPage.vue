<template>
  <div>
    <h1>Adivina el Pokemon</h1>
    <PokemonImagenVue :pokemonId="2" :showPokemon="false" />
    <PokemonOptionsVue />
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
  methods: {},
  mounted() {
    // const arreglo = obtenerIdPokemonesFachada();
    // console.log(arreglo);
    console.log("Se monto el componente");
    this.cargaInicial();
  },

  methods: {
    async cargaInicial() {
      const arreglo = await obtenerIdPokemonesFachada();
      console.log("Se monto el componente");
      console.log(arreglo);
    },
  },
};
</script>

<style scoped></style>
