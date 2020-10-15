<template>
  <div justify="center" align="center">
    <v-container fluid grid-list-xl>
      <v-row justify="space-around" wrap class="grey lighten-3">
        <v-col v-for="(icon,index) in icons" :key="index">
          <v-card width="500px">
            <a href="/item_detail/item_detail">
              <v-img :src="icon.img" height="300px"/>
            </a>
            <v-card-title>
              {{icon.title}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions class="justify-center">
      <a href="/mypage/mypage_top">
        <v-btn color="black--text" class="grey lighten-3">
          マイページに戻る
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
          to:'/item_detail/item_detail',
          title:'串カツ'
        },
        {
          img:'/img/whitebair.jpg',
          to:'/',
          title:'シロクマ'
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