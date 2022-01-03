import { createStore } from "vuex";
import ModuleJournal from '@/modules/daybook/store/journal'

const store = createStore({
    modules:{
        journal:ModuleJournal
    }
})

export default store