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
        :name="name"
        :email="email"
      ></dialog-card>
    </v-dialog>
    <v-text-field v-model="name" label="Name" disabled></v-text-field>
    <v-text-field v-model="email" label="E-mail" disabled></v-text-field>
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
      email: '',
      dialog: false
    }
  },
  methods: {
    onSubmit(params) {
      this.dialog =false
      this.name = params.name
      this.email = params.email
    }
  }
}
</script>

<style>

</style>