<template>
  <div class="home">
    <Greetings/>
  </div>
</template>

<script>
import Greetings from "@/components/Greetings";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Greetings,
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
