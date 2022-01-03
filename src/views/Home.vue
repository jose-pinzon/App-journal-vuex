<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Titulo</h1>

    <button class="btn btn-primary" @click="goTodaybook">Diario</button>
    <button class="btn btn-primary" @click="goBuyZapatos"> Venta de Zapatos</button>
  
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  methods:{
    goTodaybook(){
      this.$router.push({
        name:'no-entry'
      })
    },

    goBuyZapatos(){
      this.$router.push({
        name:'zapatos'
      })
    }
  }

}
</script>
