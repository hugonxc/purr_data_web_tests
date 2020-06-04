<template src="./console.html"></template>

<script>

export default {
  name: 'Console',

  computed: {    
    audio_ctx_list(){      
      if(this.$store.getters.audio_ctx_list.length > 0){
        let msg = this.$store.commit("msgConsole", this.$store.getters.audio_ctx_list[0].state)
        return this.$store.getters.consoleMsgs
      }else{
        return this.$store.getters.consoleMsgs
      }

    }
  },

}


</script>

<style scoped src="./console.css"></style>
