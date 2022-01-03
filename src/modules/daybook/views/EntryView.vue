<template>
    <div class="entry-title d-flex justify-content-between p-2"> 
        <section>
            <span class="text-success fs-5 fw-bold">29</span>
            <span class="mx-1 fs-5">Diciembre</span>
            <span class="mx-2 fw-light">2021</span>
        </section>
        <section>
            <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash"> </i></button>
            <button class="btn btn-primary">Subir foto <i class="fa fa-upload"> </i></button>
       
        </section>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que sucedio?"></textarea>
    </div>


    <Fab  icon="fa-save"/>
    <img src="https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg" alt="picture-pc" class="img-thumbnail">


</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Fab:defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 14px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>