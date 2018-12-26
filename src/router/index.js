
let router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: {
        template: '<h1>HOMe</h1>'
      }
    },
    {
      path: '/personal',
      component: {
        template: '<h1>PERSONAL</h1>'
      }
    },
    {
      path: '/collection',
      component: {
        template: '<h1>COLLECTION</h1>'
      }
    }
  ]
})