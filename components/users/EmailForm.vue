<template>
<!-- 親子間のデータ通信は短方向のみ→v-modelで双方向を実現 -->
<!-- validate-on-blur：エラーのタイミングをカーソルを離した時にする -->
 <v-text-field v-model="setEmail" :rules="[rules.match]" label="メールアドレスを入力" outlined required validate-on-blur/>
</template>

<script>
export default {
  props: {
    // emaliというkeyの性質を定義している？
    email: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    rules: {
      // 正規表現xxx@xxx.xxx
      match: value => /.+@.+\..+/.test(value) || 'エラーがあります'
    }
  }),
  computed: {
    setEmail: {
      // 親の値受け取り
      get () { return this.email },
      set (newVal) { return this.$emit('update:email', newVal) }
    }
  }
}
</script>