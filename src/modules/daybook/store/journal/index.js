

import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getter from './getters'


const journalModule = {
    namespaced:true,
    actions,
    mutations,
    getter,
    state
}


export default  journalModule