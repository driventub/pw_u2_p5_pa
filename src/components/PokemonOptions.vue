<template>
  <div class="f-container">
    <ul >
      <li @click="this.$emit('seleccion', [pokemon.id,100])" v-for="pokemon in pokemones" :key="pokemon.id">{{pokemon.nombre}}</li>
    </ul>
  </div>
</template>

<script>




export default {
  props: {
    pokemones: {
      type: Array,
      required: true,
    },
    
  },
  mounted() {
    console.log(this.arreglo);
  },
};
</script>

<style scoped>
.f-container {
  display: flex;
  justify-content: center;
}
ul {
  list-style-type: none;
}
li {
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
