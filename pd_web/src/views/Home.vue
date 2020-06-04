<template>
  <!DOCTYPE html>
  <html>
    <div>
      <div class="home">
        <h1>This is Home page</h1>

        <v-tabs fixed-tabs>
          <v-tab :to="{name: 'console_d'}">Console</v-tab>
          <v-tab :to="{name: 'editor_d', params: { filename: 'patch1.pd' }}">Patch1.pd</v-tab>
          <v-tab :to="{name: 'editor_d', params: { filename: 'patch2.pd' }}">Patch2.pd</v-tab>
        </v-tabs>

        <router-view></router-view>
      </div>

    </div>
  </html>

</template>

<script>
import Editor from '../components/editor/Editor';
import Console from '../components/console/Console';


import Module from '../emscripten/js/pdtest';
import {initAudioCtx, suspendAudio} from '../emscripten/utils/audio_ctx';

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
      { name: 'editor_d' ,  path: '/editor/:filename', component: Editor },
    );
    this.$router.addRoutes([routeData])

    initAudioCtx()
    suspendAudio()
  },
}
</script>

<style>
div {
  background-color: #f0efeb;
}
</style>