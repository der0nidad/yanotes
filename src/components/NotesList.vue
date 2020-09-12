<template>
  <div class="notes-list">
  список заметок
  <ul>
  <li v-for="note in notes" :key="note.id">
      {{ note.name }}
  </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'NotesList',
  data: function () {
      return {
          notes: [
              {
                  id: 1,
                  name: 'первая замет'
              },
              {
                  id: 2,
                  name: 'вторая заметка'
              }
          ]
      }
  }
}
</script>

<style scoped>
.notes-list {
    border-right: 2px solid gray;
    min-width: 250px;
    width: 30vw;
    height: 100vh;
}
</style>
