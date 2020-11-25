<template>
  <v-card>
    <v-card-title>Component Title</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Name" v-model="returnData.name" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="E-mail" v-model="returnData.email" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="success" @click="submit">
        OK
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: '',
    email: ''
  },
  data() {
    return {
      returnData: {
        name: this.name,
        email: this.email
      }
    }
  },
  methods: {
    submit() {
      this.$emit('clickSubmit', this.returnData)
    }
  }
}
</script>