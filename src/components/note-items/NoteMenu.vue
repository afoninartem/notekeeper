<template>
  <div class="note__menu">
    <div class="note__menu-buttons">
      <ListItem role="button" class="menu-btn" />
      <TextItem role="button" class="menu-btn" />
      <ArchiveItem role="button" class="menu-btn" />
      <DeleteItem role="button" class="menu-btn" />
    </div>
    <div class="note__menu-date"></div>
  </div>
</template>

<script>
import DeleteItem from "@/components/menu-items/DeleteItem";
import ArchiveItem from "@/components/menu-items/ArchiveItem";
import ListItem from "@/components/menu-items/ListItem";
import TextItem from "@/components/menu-items/TextItem";
import { mapGetters } from "vuex";

export default {
  components: { DeleteItem, ArchiveItem, ListItem, TextItem },
  computed: {
    userInput() {
      return this.$store.getters.GET_CONTENT;
    },
  },
  methods: {
    makeListFromText() {
      console.log(1)
    },
  },
};
</script>

<style scoped>
.note__menu-buttons {
  display: flex;
  padding: 10px;
}
.note__menu-buttons div {
  margin-right: 20px;
}
.note__menu-buttons div:last-child {
  margin-right: 0;
}
button {
  cursor: pointer;
}
.menu-btn {
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}
.menu-btn:hover {
  transform: scale(1.1);
}
.menu-btn:active {
  transform: scale(1.05);
}
</style>