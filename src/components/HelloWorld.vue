<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ count2 }}</h1>
    <h1>{{ count3 }}</h1> <input type="button" @click="test()" value="test" /> <input type="button" @click="test2()" value="test2" /> <input type="button" @click="add3()" value="test3" /> </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import { mapMutations } from 'vuex'
  /* mapState 一般不常用 */
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    computed: {
      count() {
        return this.$store.state.test.count
      },
      ...mapGetters(['count2', 'count3'])
    },
    mounted() {},
    methods: {
      test() {
        this.$store.dispatch('increment') // dispatch触发的，需要定义在actions中
        this.$store.commit('increment') // 定义的在mutations中
      },
      ...mapActions(['test2']),
      ...mapMutations({
        add3: 'increment3'
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>