<template>
  <div>
    <v-btn color="success" @click.stop="dialog = true">
      開く
    </v-btn>
    <!-- v-modelのbooleanで表示制御 -->
    <v-dialog v-model="dialog">
      <!-- テンプレートの読み込み -->
      <dialog-card
        v-on:clickSubmit="onSubmit"
        :select_flg="select_flg"
      ></dialog-card>
    </v-dialog>
    <v-text-field v-model="select_flg" label="Name" disabled></v-text-field>
  </div>
</template>

<script>
import DialogCard from '@/components/DialogCard'

export default {
  components: {
    DialogCard
  },
  data() {
    return {
      name: '',
      select_flg: '',
      dialog: false
    }
  },
  methods: {
    onSubmit(params) {
      this.dialog =false
      this.select_flg = params.select_flg
    }
  }
}
</script>

<style>

</style>