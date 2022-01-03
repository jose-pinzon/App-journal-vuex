<template>
  <button class="btn btn-outline-primary">
      <i class="fa fa-2x" :class="icon"></i><!--El segundo :class sera le compremento del primero  -->
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type:String,
      required:false,
      default:'fa-plus'
    }
  }

}
</script> 

<style lang="scss" scoped>

button{
    position: fixed;
    bottom:20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
}
</style>