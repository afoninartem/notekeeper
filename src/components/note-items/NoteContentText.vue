<template>
  <textarea
    name="note__text"
    id="noteText"
    cols="150"
    rows="30"
    v-model="text"
    :placeholder="textTemplate"
    @input="updateUserInput"
  ></textarea>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    }
  },
  computed: {
    textTemplate() {
      return this.$store.state.textPlaceHolder
    }
  },
  methods: {
    updateUserInput() {
      this.$store.dispatch('APPLY_SETTINGS', this.text)
    }
  }
}
</script>

<style scoped>
textarea {
  border: none;
  outline: none;
}
</style>