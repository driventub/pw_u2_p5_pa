<template>
    <h2>{{ titulo }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <button @click="sumar">+1</button>
    <button @click="restar">-1</button>
</template>

<script>
export default {
    data() {
        return {
            counter: this.valor,
        }
    }, methods: {
        obtenerCuadrado() {
            console.log("Se calcula el cuadrado");
            return this.counter * this.counter;
        },
        sumar() {
            this.counter += 1;
        },
        restar() {
            this.counter -= 1;
        }


    }, computed: {
        obtenerCuadradoComputado() {
            console.log("Se calcula el cuadrado computado");
            return this.counter * this.counter;
        }
        // }, props: ["titulo", "valor"]
    }, props: {
        titulo: String,
        valor: {
            type: Number,
            required: false,
            default: 100,
            validator(value) {
                if (value > 0) {
                    console.log("Error");
                }
                return value > 1;
            }
        }
    }

}
</script>

<style scoped>
    button{
        background-color: #B6C454;
        border-radius: 5px;
        border: 1px solid #E6D3A3;
        cursor: pointer;
        margin: 0px 5px;
        padding: 5px 15px;
    }

    button:hover{
        background-color: #D8D174;
    }
    h2{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    p{
        font-size: large;
        color: brown;
    }
    
</style>