<template>
  <div class="entry-container   mb-3 pointer p-2" @click="$router.push({ name:'EntryView',params:{ id:10 }})">

        <section class="entry-title d-flex" >
            <span class="text-success fs-5 fw-bold">29</span>
            <span class="mx-1 fs-5">Diciembre</span>
            <span class="mx-2 fw-light">2021</span>
        </section>
        <section class="entry-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias debitis cupiditate laudantium eaque optio? Ab minima quas aperiam iure veniam. Eveniet labore dolore recusandae architecto saepe aliquam eum libero!
        </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid rgb(13, 119, 39);
    transition: 0.2s  all ease-in;

//?esto es propio de sass , lo que hace es usar el mismo codigo de arriba pero con el efecto de hover
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    }
    .entry-description{
        font-size: 12px;
    }
}


</style>