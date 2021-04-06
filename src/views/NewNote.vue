<template>
  <div class="note">

    <div class="note__header">

      <input
        type="text"
        name="note-title"
        id="noteTitle"
        v-model="userTitle"
        :placeholder="userTitle"
      />

      <button @click="toFirestore">Save</button>
      <button @click="backHome">Cancel</button>
    </div>

    <div class="note__content">
      <NoteContentText v-if="this.contentIsText" v-on:makeListFromText="makeList"/>
      <NoteContentList v-else />
    </div>

    <div class="note__footer">
      <NoteMenu class="note__menu" />
    </div>
  </div>
</template>

<script>
import NoteMenu from "@/components/note-items/NoteMenu";
import NoteContentText from "@/components/note-items/NoteContentText";
import NoteContentList from "@/components/note-items/NoteContentList";
export default {
  name: "NewNote",
  components: {
    NoteMenu,
    NoteContentText,
    NoteContentList,
  },
  data() {
    return {
      userTitle: "New note",
      text: "What's on your mind?",
      date: Date.now(),
    };
  },
  computed: {
    contentIsText() {
      return this.$store.getters.GET_CONTENT_TYPE;
    }
  },
  methods: {
    makeList() {
      const text = document.querySelector("textarea").value;
      console.log(text);
    },
    onSubmit() {
      const newNote = {
        title: userTitle,
        created: new Date(this.date).toLocaleDateString(),
      };
    },
    backHome() {
      this.$router.push('/')
    },
    toFirestore() {
      
    }
  },
};
</script>

<style scoped>
.note {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 130px);
}
input {
  width: 25%;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
}
.note__content {
  margin-top: 30px;
  padding: 0 180px;
}
.note__menu {
  align-self: center;
}
</style>