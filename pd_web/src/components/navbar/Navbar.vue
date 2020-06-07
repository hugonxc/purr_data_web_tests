<template>
    <v-card color="grey lighten-4" flat>
        <v-toolbar>
            <img :src="logo" alt="logo" />

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on"> File</v-btn>
                </template>
                
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on"> Edit</v-btn>
                </template>
                
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on"> Media</v-btn>
                </template>
                
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on"> Help</v-btn>
                </template>
                
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" @click="">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-toolbar>
    </v-card>
</template>

<script>
import logo from '@/assets/purr.png'

export default {
  name: 'Navbar',
  data() {
    return{
      logo: logo,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  }
}
</script>

<style scoped></style>
