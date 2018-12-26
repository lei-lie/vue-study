let vm = new Vue({
  el: '#app',
  router: router,
  data() {
    return {
      
    }
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
})