<template>
<!-- counter:varidationがtrueの時だけ文字数カウント -->
 <v-text-field
    v-model="setId"
    :rules="validation ? [rules.match] : [rules.required]"
    :type="text"
    :hint="validation ? hint : undefined"
    :counter="validation"
    label="IDを入力"
    outlined
    required
    validate-on-blur
    autocomplete="on"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    validation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const hint = '8文字以上、半角英数字•ﾊｲﾌﾝ•ｱﾝﾀﾞｰﾊﾞｰが使えます'
    return {
      hint,
      rules: {
        required: value => !!value || '',
        match: value => /^[\w-]{8,72}$/.test(value) || hint
      }
    }
  },
  computed: {
    setId: {
      get () { return this.id },
      set (newVal) { return this.$emit('update:id', newVal) }
    }
  }
}
</script>