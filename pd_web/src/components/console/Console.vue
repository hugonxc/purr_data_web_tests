<template src="./console.html"></template>

<script>
import { bus } from '../../main'

export default {
  name: 'Console',

  data: function () {
    return {
      count: 0
    }
  },

  created (){
    bus.$on('added', (data) => {
      this.count = data;
    })
  }
}

import test from './console'
test.foo()

</script>

<style scoped src="./console.css"></style>
