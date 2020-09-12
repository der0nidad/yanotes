<template>
  <div class="note-detail">
      <ControlButtons />
  
    <textarea
        class="note-detail__text"
      placeholder="Начните вводить текст заметки..."
    />
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
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 8px 0 0 8px;


}
.note-detail__text::placeholder {
  color: #666666;
}
</style>
