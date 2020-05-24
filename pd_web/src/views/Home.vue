<template>
  <div class="home">
    <Console/>
    <Patch/>
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
