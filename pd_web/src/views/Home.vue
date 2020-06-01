<template>
  <div>
  <div class="home">
    <h1>This is an home page</h1>


    <v-tabs fixed-tabs>
      <v-tab :to="{name: 'console_d'}">Console</v-tab>
      <v-tab :to="{name: 'patch_d', params: { filename: 'patch1.pd' }}">Patch1.pd</v-tab>
      <v-tab :to="{name: 'patch_d', params: { filename: 'patch2.pd' }}">Patch2.pd</v-tab>
    </v-tabs>

    <router-view></router-view>



  </div>

  </div>
</template>

<script>
import Patch from '../components/patch/Patch';
import Console from '../components/console/Console';

export default {
  name: 'Home',
  created() {
    let { routes } = this.$router.options;
    console.log("before",routes);    
    let routeData = routes.find(r => r.path === this.$route.path);
    routeData.children.push(
      { name: 'console_d' ,  path: '/console', component: Console },
      { name: 'patch_d' ,  path: '/patch/:filename', component: Patch },
    );

    this.$router.addRoutes([routeData])

    // routes = this.$router.options;
    // console.log("after",routes);    
  },


   methods: {
    new_tab:function() {
      console.log("new tab")
    },
   }


}
</script>

<style>
div {
  background-color: #f0efeb;
}
</style>