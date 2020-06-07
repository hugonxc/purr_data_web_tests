<template>
  <v-container class="grey" grid-list-sm>

    <v-layout row>
      <v-flex>
        <Navbar/>
      </v-flex>
    </v-layout>

   <v-layout row wrap class="content">
     <Sidebar/>
      <v-flex class="c-content">
        <v-layout column justify-space-between fill-height>
          <div> 
            <v-tabs fixed-tabs>
              <v-tab :to="{name: 'editor_d', params: { filename: 'patch1.pd' }}">Patch1.pd</v-tab>
              <v-tab :to="{name: 'editor_d', params: { filename: 'patch2.pd' }}">Patch2.pd</v-tab>
            </v-tabs>
            <router-view></router-view>
          </div>

          <Console/>
        </v-layout>
      </v-flex>
   </v-layout>

  </v-container>
</template>


<script>
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Editor from '../components/editor/Editor';
import Console from '../components/console/Console';


import Module from '../emscripten/js/pdtest';
import {initAudioCtx, suspendAudio} from '../emscripten/utils/audio_ctx';


export default {
  name: 'Home',
  components:{
    Navbar,
    Sidebar,
    Console
  },

  beforeCreate() {
    // if (this.$myModule === null) {
    //   new Module().then(myModule => {
    //     this.$myModule = myModule;
    //   });
    // }
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
.home {
  background-color: #f0efeb;
}

.container {
  height: 100%;
}

.content{
  height: 93%;
}

.c-content{
  margin-left: 5px;
}
</style>