<template>
  <div class="greet">
    <div class="about">
      <h1 class="about__header">Welcome aboard!</h1>
      <p class="about__text">
        With this app you can create and manage any notes you may be needed.
        <br />
        Make lists, notes, share it with your friends!
      </p>
      <button type="button" @click="getStarted">Try it!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Greetings",
  methods: {
    getStarted() {
      this.$router.push('/newnote')
    }
  },

};
</script>

<style scoped>
button {
  color: #ffffff;
  font-size: 20px;
  padding: 16px 32px;
  align-self: center;
  border: 1px solid rgb(16, 133, 88);
  border-radius: 10px;
  background: rgb(16, 133, 88);
  margin: 30px 0 20px;
  outline: none;
  cursor: pointer;
}
</style>