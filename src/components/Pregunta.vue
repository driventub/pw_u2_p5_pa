<template>
  <img v-if="img !== null" class="" :src="imagen" alt="Img" />
  <img src="" alt="" />
  <div class="dark">
    <div class="container">
      <div class="pregunta">
        <input v-model="pregunta" type="text" />
        <p>
          Recuerda que debes tener terminar con el signo de interrogacion (?)
        </p>

        <div v-if="preguntaValida == true">
          <h2>{{ pregunta }}</h2>
          <h1>{{ respuesta }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      imagen: null,
      preguntaValida: false,
    };
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "procesando.";
      this.respuesta = "procesando..";
      this.respuesta = "procesando...";
      this.respuesta = "procesando....";
      const {answer, image} = await fetch("https://yesno.wtf/api/?force=maybe").then(r => r.json());
      // const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
      //   r.json()
      // );
      this.respuesta = answer === "yes" 
        ? "SI!" : answer === "maybe" 
        ? "Talvez ???" : "No";
      this.imagen = image;
      
      console.log(answer);
      console.log(image);
    },
  },
  watch: {
    async pregunta(value, oldValue) {
      this.preguntaValida = false;
      console.log(value);
      console.log(oldValue);
      if (!value.includes("?")) return;
      this.consumirAPI();
      this.preguntaValida = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pregunta {
  display: grid;
}
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dark {
  background-color: rgba(0, 0, 0, 0.5);
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p,
h1,
h2 {
  color: white;
}

p {
  font-size: 20px;
  margin-top: 0px;
}

h2 {
  margin-top: 150px;
}

input:focus {
  outline: none;
}
</style>
