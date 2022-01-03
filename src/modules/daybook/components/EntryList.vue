<template>
    <div class="entry-list">
        <div class="px-2 pt-2">
            <input type="text" class="form-control" placeholder="Buscar..">
        </div>
        <div class="entry-scroll" >
            <Entry v-for="i in 10" :key="i"/>
        </div>
    </div>

  
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Entry:defineAsyncComponent(()=>import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>
.entry-list{
    border-right:1px solid rgb(17, 76, 134) ;
    height: calc(100vh - 56px);
}
.entry-scroll{
    height: calc(100vh - 120px);
    overflow: scroll;
}
</style>