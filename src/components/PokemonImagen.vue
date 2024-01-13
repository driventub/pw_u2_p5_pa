<template>
  <div class="container">
    <!-- <h1>Imagen</h1> -->
    <img
      v-if="showPokemon"
      :src="imagenFuente"
      alt="No se encontro la imagen"
    />
    <img
      v-else
      :src="imagenFuente"
      alt="No se encontro la imagen"
      class="ocultar"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  
};
</script>

<style scoped>
.ocultar {
  filter: brightness(0);
}

img {
  position: absolute;
}

.container {
  display: flex;
  justify-content: center;
  height: 300px;
}
</style>
