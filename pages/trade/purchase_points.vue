<template>
  <v-row align-content="center">
    <ul>
      <li>
        <div class="decolate_list">
          <h3>100バリュー</h3>
          <p>¥100</p>
        </div>
      </li>
      <li>
        <div class="decolate_list">
          <h3>500バリュー</h3>
          <p>¥500</p>
        </div>
      </li>
      <li>
        <div class="decolate_list">
          <h3>1000バリュー</h3>
          <p>¥1000</p>
        </div>
      </li>
      <li>
        <div class="decolate_list">
          <h3>1500バリュー</h3>
          <p>¥1500</p>
        </div>
      </li>
      <li>
        <div class="decolate_list">
          <h3>3000バリュー</h3>
          <p>¥3000</p>
        </div>
      </li>
      <li>
        <div class="decolate_list">
          <h3>5000バリュー</h3>
          <p>¥5000</p>
        </div>
      </li>
    </ul>
  </v-row>
</template>

<script>

export default {
  data () {
    return{
      img_src:'/img/img1.jpg',
      needed_points:'100',
      avilable_points:'200',
      dialog:false,
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
ul{
  list-style-type: none;
}
li{
  border-bottom:1px solid  chocolate;
}

</style>