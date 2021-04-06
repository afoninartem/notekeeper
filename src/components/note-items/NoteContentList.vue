<template>
  <div class="list">
    <AddTodoForm />
    <div class="list-wrapper">
      <ToDoList />
      <DoneList />
    </div>
    <!-- <ul class="note__list">
      <li v-for="(el, i) in strings" :key="i">
        <input type="checkbox" :name="i" :id="i" /><label :for="i">{{
          el
        }}</label>
      </li>
    </ul> -->
  </div>
</template>

<script>
import AddTodoForm from "@/components/note-items/general-list-items/AddTodoForm";
import ToDoList from "@/components/note-items/general-list-items/ToDoList";
import DoneList from "@/components/note-items/general-list-items/DoneList";
export default {
  components: {
    AddTodoForm,
    ToDoList,
    DoneList,
  },
};
</script>

<style scoped>
/* ul {
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
} */
</style>