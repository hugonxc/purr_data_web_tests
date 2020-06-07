<template>
  <v-card class="sidebar-card" flat>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item class="px-2">

            <v-list-item-avatar>
                <v-icon>mdi-volume-high</v-icon>
            </v-list-item-avatar>

            <v-list-item-title>DSP</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
  </v-card>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return{
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
    }
  }
}
</script>

<style scoped>
.sidebar-card {
    border: 1px solid black !important;
    height: 100%;
    padding: 0px;
}
</style>