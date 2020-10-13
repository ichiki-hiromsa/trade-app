<template>
  <div justify="center" align="center">
     <v-container fluid grid-list-xl>
      <v-row justify="space-around" wrap class="grey lighten-3">
        <v-col v-for="(icon,index) in icons" :key="index">
          <v-card width="300px">
            <a href="/item_detail">
              <v-img :src="icon.img" height="200px"/>
            </a>
            <v-card-title>
              {{icon.title}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
          to:'/item_detail',
          title:'串カツ'
        },
        {
          img:'/img/img1.jpg',
          to:'/',
          title:'串カツ'  
        },
        {
          img:'/img/img1.jpg',
          to:'/',
          title:'串カツ'          
        },
        {
          img:'/img/img1.jpg',
          to:'/',
          title:'串カツ'          
        },
        {
          img:'/img/img1.jpg',
          to:'/',
          title:'串カツ'          
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