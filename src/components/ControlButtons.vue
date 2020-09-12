<template>
  <div class="control-buttons__container">
  <Button
    buttonText="+"
  ></Button>
  <Button
    buttonText="Войти"
  ></Button>
  </div>
</template>

<script>
import Button from './common/Button.vue'
export default {
  name: 'ControlButtons',
  components: {
      Button
  }
}
</script>

<style scoped>
.control-buttons__container {
    border: 1px solid gray;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
}
</style>
