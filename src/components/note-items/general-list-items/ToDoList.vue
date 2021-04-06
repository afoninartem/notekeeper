<template>
  <div class="todo-list">
    <h3>ToDo: {{strings.length}}</h3>
    <ul class="note__list">
      <li v-for="(el, i) in strings" :key="i">
        <input type="checkbox" :name="i" :id="i" @change="updateList"/><label :for="i">{{
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
      return this.userInput.split("\n").filter((el) => el != "").filter(el => !el.checked);
    },
  },
  methods: {
    updateList() {
      
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  display: flex;
  width: 50%;
}
input[type="checkbox"] {
  margin-right: 10px;
}
input[type="checkbox"]:checked + label {
  color: #ccc;
  text-decoration: line-through;
}
</style>