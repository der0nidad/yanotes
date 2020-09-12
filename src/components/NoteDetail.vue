<template>
  <div class="note-detail">
      <ControlButtons />
  Название заметки
  </div>
</template>

<script>
import ControlButtons from './ControlButtons.vue';

export default {
  name: 'NoteDetail',
  components: {
      ControlButtons
  }
}
</script>

<style scoped>
.note-detail {
    /* border: 1px solid greenyellow; */
    height: 100vh;
    width: 70vw;
}
</style>
