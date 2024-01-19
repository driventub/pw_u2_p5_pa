<template>
  <div >
    <img :src="urlImg" alt="No se ve" />
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style scoped>
img{
    width: 200px;
    height: 300px;
}

</style>
