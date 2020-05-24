<template src="./console.html"></template>

<script>

export default {
  name: 'Console',

  computed: {
    count () {
      return this.$store.state.count
    }
  }

}

import test from './console'
test.foo()

</script>

<style scoped src="./console.css"></style>
