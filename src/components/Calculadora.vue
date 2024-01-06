<template>
  <div class="container">
    <div class="calculadora">
      <div class="screen" v-if="check">{{ operacion }}</div>
      <div class="screen" v-else>Resultado</div>

      <button @click="limpiar">C</button>
      <button @click="borrar">&#8592</button>
      <button @click="">%</button>
      <button @click="agregarSigno('/')">/</button>
      <button @click="agregarNumero(7)">7</button>
      <button @click="agregarNumero(8)">8</button>
      <button @click="agregarNumero(9)">9</button>
      <button @click="agregarSigno('*')">X</button>
      <button @click="agregarNumero(4)">4</button>
      <button @click="agregarNumero(5)">5</button>
      <button @click="agregarNumero(6)">6</button>
      <button @click="agregarSigno('-')">-</button>
      <button @click="agregarNumero(1)">1</button>
      <button @click="agregarNumero(2)">2</button>
      <button @click="agregarNumero(3)">3</button>
      <button @click="agregarSigno('+')">+</button>
      <button @click="agregarNumero(0)">0</button>
      <button @click="agregarSigno('.')">.</button>
      <button @click="resultado()">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operacion: "",
      check: false,
    };
  },
  methods: {
    agregarNumero(valor) {
        this.check= true
      console.log(valor);
      console.log(this.operacion);
      this.operacion = this.operacion.concat(valor);
    },

    agregarSigno(valor) {
      console.log(valor);
      console.log(this.operacion);

      if (this.chequear(this.operacion.charAt(this.operacion.length - 1))) {
        return;
      }

      this.operacion = this.operacion.concat(valor);
    },

    resultado() {
      console.log(this.operacion);

      if (this.chequear(this.operacion.charAt(this.operacion.length - 1))) {
        return;
      }

      try {
        var res = eval(this.operacion);
        this.operacion = res;
      } catch (error) {
        alert("Expresion: " + error.message);
      }
    },

    chequear(char) {
      return ["+", "-", "*", "/", "."].includes(char);
    },

    limpiar() {
      this.operacion = "";
      console.log("esto obvio que funciona");
      this.check = false;
    },

    borrar() {
      this.operacion = this.operacion.slice(0, -1);
      
    },
    
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* test */
.calculadora {
  display: grid;
  grid-template-columns: 75px 75px 75px 75px;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 80px repeat(5, 75px);
  background-color: #fb8500;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #00000033;
}

/* testing */
.screen {
  grid-column: span 4;
  padding: 15px;
  margin: 10px 20px 20px 20px;
  background-color: #36363636;
  border-radius: 32px;
  text-align: right;
  box-shadow: 0px 0px 0px 10px #00000033;
}

button {
  margin: 5px;
  padding: 0;
  border-radius: 32px;
  /* border: none; */
  background-color: #ffb703;
  box-shadow: 5px 5px 10px -3px #00000040;
}
</style>
