<template>
    <v-card class="console-card" flat>
        <v-card-title class="card-title">
          <v-icon>mdi-console</v-icon>
          <div class="headline">Console</div>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          {{ audio_ctx_list }}
        </v-card-text>
        
    </v-card>
</template>

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
