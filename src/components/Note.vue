<template>
  <div class="modal-backdrop">
    <div class="note">
      <div class="note__header">
        <input
          type="text"
          name="note-title"
          id="noteTitle"
          placeholder="New note"
          v-model="userTitle"
        />
        <button class="btn-close">x</button>
      </div>
      <div class="note__body">
        <div class="note__content"></div>
      </div>
      <NoteMenu class="note__menu" />
    </div>
  </div>
</template>

<script>
import NoteMenu from "@/components/note-items/NoteMenu";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Note",
  components: {
    NoteMenu,
  },
  methods: {},
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(16, 133, 88, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.note {
  background-color: #ffffff;
  border: 3px solid rgb(16, 133, 88);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 80%;
  padding: 10px;
  border-radius: 30px;
}
.note__header {
  display: flex;
  position: relative;
  width: 80%;
}
.note__menu {
  align-self: center;
}
</style>