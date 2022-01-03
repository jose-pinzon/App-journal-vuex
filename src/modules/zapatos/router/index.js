

export default{
    name:'zapatos',
    component:()=> import('@/modules/zapatos/layouts/ListZapatos.vue'),


    children:[
        {
            path:'',
            name:'pagina1',
            component:()=> import('@/modules/zapatos/views/pagina1.vue'),
        }
    ]
}