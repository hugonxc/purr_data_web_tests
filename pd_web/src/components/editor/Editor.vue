<template src="./editor.html"></template>

<script>
import {resumeAudio, suspendAudio} from '../../emscripten/utils/audio_ctx';


export default {
  name: 'Editor',


  methods: {      
      dsp (event){
        
        if(this.$store.getters.audio_ctx_list[0].state === "suspended"){
          resumeAudio()
        }else{
          console.log("stop");
          suspendAudio()
        }
  }

  }

}
</script>

<style scoped src="./editor.css"></style>
