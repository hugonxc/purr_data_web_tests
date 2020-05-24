<template src="./patch.html"></template>

<script>
import { bus } from '../../main'

export default {
  name: 'Patch',

  data: function () {
    return {
      count: 0
    }
  },

  methods: {
      increaseCount (){
          bus.$emit('added', ++this.count);
      }
  }

}
</script>

<style scoped src="./patch.css"></style>
