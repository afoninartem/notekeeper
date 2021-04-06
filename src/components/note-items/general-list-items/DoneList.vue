<template>
  <div class="done-list">
    <h3>Done: {{strings.length}}</h3>
    <ul class="note__list">
      <li v-for="(el, i) in strings" :key="i">
        <input type="checkbox" :name="i" :id="i" /><label :for="i">{{
          el
        }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    userInput() {
      return this.$store.getters.GET_CONTENT;
    },
    strings() {
      return this.userInput.split("\n").filter((el) => el != "").filter(el => el.checked);
    },
  },
};
</script>