<template>
  <div class="control-buttons__container">
    <div class="control-buttons__note-title">
      Название заметки
      <div
        class="control-buttons__note-subtitle"
      >Виталий создал 10.09.20 в 12:17. Иван отредактировал 11.09.20 в 23:34.</div>
    </div>

    <div class="control-buttons__buttons-container">
      <Button buttonText="Сохранить"></Button>
      <Button buttonText="Войти"></Button>
    </div>
  </div>
</template>

<script>
import Button from "./common/Button.vue";
export default {
  name: "ControlButtons",
  components: {
    Button,
  },
};
</script>

<style scoped>
.control-buttons__container {
  border: 1px solid gray;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.control-buttons__note-title {
  padding: 4px 12px;
  font-weight: bold;
  font-size: 20px;
}
.control-buttons__note-subtitle {
  font-weight: light;
  color: #666666;
  font-size: 12px;
  padding-top: 6px;
}
</style>
