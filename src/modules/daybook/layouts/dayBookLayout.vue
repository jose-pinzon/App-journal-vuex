<template>
        <navar/>
    <div class="d-flex">        
        <div class="col-4">
            <EntryList  />
        </div>
        <div class="col">
                <router-view></router-view>
        </div>
    </div>
</template>




<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        navar:defineAsyncComponent(() => import('../components/navar.vue')),
        EntryList:defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>

