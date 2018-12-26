let vm = new Vue({
  el: '#app',
  router: router,
  data() {
    return {

    }
  },
  methods: {
    toInfo() {
      this.$router.push(
        {
          path: 'program/info'
        }
      )
    },
  }
})