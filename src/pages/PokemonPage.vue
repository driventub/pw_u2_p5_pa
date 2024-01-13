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
import {obtenerIdPokemonesFachada} from "../helpers/poke.js"

obtenerIdPokemonesFachada()
export default {
  components: {
    PokemonOptionsVue,
    PokemonImagenVue,
  },
  methods: {
    
  },
};
</script>

<style scoped></style>
