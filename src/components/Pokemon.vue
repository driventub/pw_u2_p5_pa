<template>
    <div class="fondo"></div>
  <div class="container">
    
    <div class="poke">
    <h1>Buscar Por ID</h1>
      <input v-model="numero" @keyup.enter="consumirPoke" type="number" />
      <button disabled>Presione Enter</button>
    </div>
  </div>
  <div class="container">
    <div class="poke">
      <label for="">Nombre</label>
      <p>{{ nombre }}</p>
      <label for="">Base</label>
      <p>{{ base }}</p>
      <label for="">Weight</label>
      <p>{{ weight }}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      numero: null,
      nombre: "Valor",
      base: "A",
      weight: "Llegar",
    };
  },
  methods: {
    async consumirPoke() {
      const api = "https://pokeapi.co/api/v2/pokemon/".concat(this.numero);
      const { name, weight, base_experience } = await fetch(api).then((r) =>
        r.json()
      );
      // console.log(name, weight, base_experience);

      this.nombre = name;
      this.base = base_experience;
      this.weight = weight;
    },
  },
  watch:{

  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  
}

h1{
    margin-left: 65px;
}
.poke {
    margin-top: 10px;
  display: grid;
  
  background-color: #BCB6FF;
  
  width: 350px;
  align-items: center;
  padding: 20px;
}





input {
  
  padding: 5px ;
  border-radius: 5px;
  /* border: none; */
}


p {
  font-size: 20px;
  margin-top: 0px;
  border: black 1px solid;
  background-color: #A9FFF7;
  
}

h2 {
  margin-top: 150px;
}

input:focus {
  outline: none;
}
</style>
