<template>
  <!DOCTYPE html>
  <html>
    <div>
      <div class="home">
        <h1>This is an home page</h1>

        <p>DSP: <input type="checkbox"  v-on:click="dsp" id="dsp"></p>

        <v-tabs fixed-tabs>
          <v-tab :to="{name: 'console_d'}">Console</v-tab>
          <v-tab :to="{name: 'patch_d', params: { filename: 'patch1.pd' }}">Patch1.pd</v-tab>
          <v-tab :to="{name: 'patch_d', params: { filename: 'patch2.pd' }}">Patch2.pd</v-tab>
        </v-tabs>

        <router-view></router-view>
      </div>

    </div>
  </html>

</template>

<script>
import Patch from '../components/patch/Patch';
import Console from '../components/console/Console';


import Module from '../emscripten/js/pdtest';
import {initAudioCtx, resumeAudio, suspendAudio} from '../emscripten/utils/emscripten';

let moduleInstance = null;


export default {
  name: 'Home',
  beforeCreate() {
    if (this.$myModule === null) {
      new Module().then(myModule => {
        this.$myModule = myModule;
      });
    }
  },

  created() {
    let { routes } = this.$router.options;
    let routeData = routes.find(r => r.path === this.$route.path);
    routeData.children.push(
      { name: 'console_d' ,  path: '/console', component: Console },
      { name: 'patch_d' ,  path: '/patch/:filename', component: Patch },
    );
    this.$router.addRoutes([routeData])

    initAudioCtx()
  },

  methods: {
    dsp (event){
      if(event.target.checked){
        console.log("resume");
        resumeAudio()
      }else{
        console.log("stop");
        suspendAudio()
      }
    }
  }
}
</script>

<style>
div {
  background-color: #f0efeb;
}
</style>