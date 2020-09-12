<template>
  <div :note="note" class="note-list__note-elem">
    <div class="note-list__note-title">{{ note.name }}</div>
    <div class="note-list__creation-date">создано 21.09.20</div>
    <div class="note-list__author">Автор Виталий</div>
  </div>
</template>

<script>
export default {
  name: "NoteListItem",
  props: {
    note: Object,
  },
  created() {
    console.log(this.note.name);
  },
};
</script>

<style scoped>
.note-list__note-elem {
  border: 1px solid #666;
  padding: 4px 4px 4px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.note-list__note-title {
  font-weight: bold;
  line-height: 28px;
  font-size: 18px;
}
.note-list__creation-date {
  font-size: 14px;
  font-style: italic;
}
.note-list__author {
  flex-basis: 100%;
}
</style>
