<template>
  <PokemonPage />
</template>

<script>
import Imagen from "./components/Imagen.vue";

import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
    Imagen,
  },
  data() {
    return {
      puntaje: 0,
      intentos: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXXXXXXXXXXXXXX",
      texto2: "XXXXXXXXXXXXXXXXXXX",
      texto3: "XXXXXXXXXXXXXXXXXXX",
      mostarGanador: false,
      mostrarPerdedor: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async jugar() {
      const data1 = await this.consumirAPI();
      const data2 = await this.consumirAPI();
      const data3 = await this.consumirAPI();

      this.texto1 = data1.answer;
      this.url1 = data1.image;

      this.texto2 = data2.answer;
      this.url2 = data2.image;

      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    evaluarResultado() {
      this.intentos++;
      if (
        this.texto1 == "yes" &&
        this.texto2 == "yes" &&
        this.texto3 == "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      }

      if (this.puntaje >= 10) {
        this.mostrarJuego = false;
        this.mostrarPerdedor = false;
        this.mostarGanador = true;
      }

      if (this.intentos === 5) {
        this.mostrarJuego = false;
        this.mostarGanador = false;
        this.mostrarPerdedor = true;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intentos = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXXXXXXXXXXXXXXX";
      this.texto2 = "XXXXXXXXXXXXXXXXXXXXX";
      this.texto3 = "XXXXXXXXXXXXXXXXXXXXX";
      this.mostarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  text-align: center;
}

h1 {
  grid-column: span 4;
}

h2 {
  grid-column: span 2;
}

button {
  grid-column: span 4;
}

.juego {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 250px);
}
img,
label {
  grid-column: span 1;
}
</style>
