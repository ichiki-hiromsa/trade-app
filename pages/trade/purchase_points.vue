<template>
  <v-row justify="center" align="center" width="80%">
    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <!-- <v-list-item-content :to="item.to"> -->
              <v-list-item-title v-text="item.text"></v-list-item-title>
              <v-list-item-subtitle
                v-text="item.subtext"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn color="success" @click.stop="dialog = true">
                <!-- クリック時に発火する関数を仕込んで -->
                購入する
              </v-btn>
              <v-dialog v-model="dialog">
                <!-- テンプレートの読み込み -->
                <dialog-card
                  v-on:clickSubmit="onSubmit"
                  :select_flg="select_flg"
                ></dialog-card>
              </v-dialog>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card-actions class="justify-center">
        <a href="/">
          <v-btn color="black--text" class="grey lighten-3">
            トップに戻る
          </v-btn>
        </a>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      img_src: "/img/img1.jpg",
      dialog: false,
      items: [
        {
          text: "100バリュー",
          subtext: "¥100",
          value:100
        },
        {
          text: "200バリュー",
          subtext: "¥200",
          value:200
        },
        {
          text: "500バリュー",
          subtext: "¥500",
          value:500
        },
        {
          text: "1000バリュー",
          subtext: "¥1000",
          value:1000
        },
        {
          text: "1500バリュー",
          subtext: "¥1500",
          value:1500
        },
        {
          text: "2000バリュー",
          subtext: "¥2000",
          value:2000
        },
        {
          text: "5000バリュー",
          subtext: "¥5000",
          value:5000
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
}
li {
  border-bottom: 1px solid chocolate;
}
</style>