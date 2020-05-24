<template>
  <div>
    <v-tabs>
      <v-tab>Console</v-tab>
      <v-tab>Patch</v-tab>

      <v-tab-item><Console/></v-tab-item>
      <v-tab-item><Patch/></v-tab-item>
    </v-tabs>

  </div>
</template>

<script>
// @ is an alias to /src
import Console from '@/components/console/Console.vue'
import Patch from '@/components/patch/Patch.vue'

export default {
  name: 'Home',
  components: {
    Console,
    Patch
  }
}
</script>

<style>
div {
  background-color: #f0efeb;
}
</style>