<template>
  <div class="notes-list">
    список заметок
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
          name: "первая замет",
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
</style>
