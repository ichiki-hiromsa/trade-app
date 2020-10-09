<template>
  <v-row justify="center" align="center" width="80%">
    <v-expansion-panels>
      <v-expansion-panel v-for="(QuesdtionList,i) in questions" :key="i">
        <v-expansion-panel-header>
          {{QuesdtionList.question}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{QuesdtionList.ans}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-card  class="mt-2">
      <v-card-text>
        その他問い合わせは<a href="/contact/contactform">こちら</a>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data(){
    return{
      questions:[
        {
          question:'質問がしたい',
          ans:'フォームから送信'
        },
        {
          question:'質問2',
          ans:'解答2'
        },
        {
          question:'質問3',
          ans:'解答3'
        }
      ]
    }
  }
}
</script>