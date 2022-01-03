<template>
    <div class="entry-list">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar..">
        </div>
        <div class="entry-scroll" >
            <h1 v-for="i in 10" :key="i">{{i}} </h1>
            <img src="" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped> 
.entry-list{
    border: 1px solid black;
}
</style>

