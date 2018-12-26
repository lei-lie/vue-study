let vm = new Vue({
  el: '#app',
  router: router,
  data() {
    return {
     
    }
  },
  watch: {
    '$route': function(to, from) {
      console.log('to',to);
      console.log('from',from);
    }
  },
  methods: {}
})