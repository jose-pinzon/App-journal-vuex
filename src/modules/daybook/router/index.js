

export default{
    name:'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/dayBookLayout'),

    children:[
        {
            path: '',
            name:'no-entry',
            component:() => import(/* webpackChunkName: "daybook-no-entry" */'@/modules/daybook/views/NoEntrySelect')
        },
        {
            path: ':id',
            name:'EntryView',
            component:() => import(/* webpackChunkName: "daybook-entry-view" */'@/modules/daybook/views/EntryView')
        }
    ]
}