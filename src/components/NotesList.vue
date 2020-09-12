<template>
  <div class="notes-list">
    <div class="notes-list__title">Cписок заметок</div>
    <ul class="notes-list__list">
      <li v-for="note in notes" :key="note.id" x>
        <NoteListItem :note="note" />
      </li>
    </ul>
  </div>
</template>

<script>
import NoteListItem from "./NoteListItem.vue";
export default {
  name: "NotesList",
  data: function () {
    return {
      notes: [
        {
          id: 1,
          name: "первая заметка",
        },
        {
          id: 2,
          name: "вторая заметка",
        },
      ],
    };
  },
  components: {
    NoteListItem,
  },
};
</script>

<style scoped>
.notes-list {
  border-right: 2px solid gray;
  min-width: 250px;
  width: 30vw;
  height: 100vh;
}
.notes-list__list {
  list-style-type: none;
  padding-inline-start: 0;
}
.notes-list__title {
  font-weight: bold;
  font-size: 20px;
  padding: 16px;
}
</style>
