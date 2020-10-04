<template>
  <v-row justify="center" align="center" class="grey lighten-3">
    <v-col v-for="icon in icons" :key="icon" cols="12" sm="6" md="4">
      <img :src="icon.img" height="100" />
      <!-- <img src="/img/img1.jpg" height="200"> -->
    </v-col>



  </v-row>
</template>

<script>

export default {
  data () {
    return {
      icons:[
        {
          img:'/img/img1.jpg',
          to:'/'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        },
        {
          img:'/img/img1.jpg',
          to:'/'
        }
      ]
    }
  }
}
</script>
