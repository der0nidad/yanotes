<template>
  <div class="note-detail">
      <ControlButtons />
  
  <div class="note-detail__text">текст заметки
  </div>
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
.note-detail__text {
  padding: 12px;
}
</style>
