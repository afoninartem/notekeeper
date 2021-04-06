<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="newtodo"
      id="newtodo"
      placeholder="new todo"
      v-model="userTodo"
    /><button>Ok</button>
  </form>
</template>

<script>
export default {
    data() {
    return {
      userTodo: "",
    };
  },
  computed: {
    userInput() {
      return this.$store.getters.GET_CONTENT;
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("ADD_TODOS_FROM_LIST", this.userTodo);
      this.userTodo = "";
    },
  },
}
</script>