<template>
  <div justify="center" align="center">

    <v-row justify="center" align="center" class="grey lighten-3">
      <v-col v-for="(icon,index) in icons" :key="index" cols="12" sm="6" md="4">
        <v-card height="150px" width="200px">
          <a href="/item_detail">
          <img :src="icon.img" height="100px" width="150px"/>
          </a>
        </v-card>
      </v-col>

    </v-row>
    <v-card-actions class="justify-center">
      <!-- ※【未】ログインフラグによってトレードに進むか登録に進むか -->
      <a href="/shuppin">
        <v-btn color="black--text" class="grey lighten-3">
          トレードに出す
        </v-btn>
      </a>
    </v-card-actions>

  </div>  
</template>

<script>

export default {
  data () {
    return {
      icons:[
        {
          img:'/img/img1.jpg',
          to:'/item_detail'
        },
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
<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>