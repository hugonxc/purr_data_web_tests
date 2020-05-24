<template src="./patch.html"></template>

<script>

export default {
  name: 'Patch',

  computed: {
    count () {
      return this.$store.state.count
    }
  },

  methods: {
      increaseCount (){
          this.$store.commit('increment')
      }
  }

}
</script>

<style scoped src="./patch.css"></style>
