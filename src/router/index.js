
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
    },
    {
      path: '/user/:id',
      component: {
        data() {
          return {
            tableData: [{
              name: 'tom',
              age: 10,
              sex: 'male'
            }]
          }
        },

        template: `
        <el-table :data="tableData">
        <el-table-column label="name" prop="name"></el-table-column>
        <el-table-column label="sex" prop="sex"></el-table-column>
        <el-table-column label="age" prop="age"></el-table-column>
      </el-table>`
      },
      beforeRouteUpdate(to, from, next) {
        console.log('to', to);
        console.log('from', from);
        next()
      },
    },
    {
      path: '/list',
      component: {
        template: `<h1>Nest Router</h1>`
      },
      children: [
        {
          path: 'info',
          component: {
            template: `<h2>info</h2>`
          }
        },
        {
          path: 'add',
          component: {
            template: `<h2>add</h2>`
          }
        }
      ]
    }
  ]
})