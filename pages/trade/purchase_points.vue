<template>
  <v-row justify="center" align="center" width="80%">
    <!-- ダイアログのオンオフ制御 -->
    <v-dialog v-model="dialog">
      <!-- テンプレートの読み込み -->
      <dialog-card
        v-on:update:clickSubmit="onSubmit"
        :select_flg="select_flg"
        :purche_point="purche_point"
        :purche_yen="purche_yen"
      ></dialog-card>
    </v-dialog>

    <v-card class="mx-auto px-auto" width="800px" tile>
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <!-- <v-list-item-content :to="item.to"> -->
              <v-list-item-title v-text="item.point"></v-list-item-title>
              <v-list-item-subtitle v-text="item.yen"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <!-- ボタン押したらダイアログ表示 -->
              <!-- <v-btn color="success" @click.stop="dialog = true"> -->
              <v-btn
                color="success"
                @click.stop="edit_hundover_value(items[i])"
              >
                <!-- クリック時に発火する関数を仕込んでdialog=trueもそこに仕込む -->
                購入する
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-card> </v-card>
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
import DialogCard from "@/components/DialogCard";

export default {
  components: {
    DialogCard,
  },
  data() {
    return {
      img_src: "/img/img1.jpg",
      dialog: false,
      purche_yen: "",
      purche_point: "",
      purche_value: "",
      select_flg: "",
      item: "",
      items: [
        {
          point: "100バリュー",
          yen: "¥100",
          c_value: 100,
        },
        {
          point: "200バリュー",
          yen: "¥200",
          c_value: 200,
        },
        {
          point: "500バリュー",
          yen: "¥500",
          c_value: 500,
        },
        {
          point: "1000バリュー",
          yen: "¥1000",
          c_value: 1000,
        },
        {
          point: "1500バリュー",
          yen: "¥1500",
          c_value: 1500,
        },
        {
          point: "2000バリュー",
          yen: "¥2000",
          c_value: 2000,
        },
        {
          point: "5000バリュー",
          yen: "¥5000",
          c_value: 5000,
        },
      ],
    };
  },
  methods: {
    edit_hundover_value(value) {
      this.purche_point = value.point;
      this.purche_yen = value.yen;
      this.dialog = true;
    },
    // 子（コンポーネント）からの戻り値はparamsで受ける
    onSubmit(params) {
      this.dialog = false;
      this.select_flg = params.select_flg;
    },
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