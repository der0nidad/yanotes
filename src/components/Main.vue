<template>
<div class="main-screen">
    <NotesList />
    <div>
    <NoteDetail />
    </div>
</div>
</template>
<script>
import NotesList from './NotesList.vue';
import NoteDetail from './NoteDetail.vue';
export default {
  name: 'App',
  components: {
    NotesList,
    NoteDetail
  }
}

</script>
<style scoped>
.main-screen {
    display: flex;
    flex-direction: row;
}
</style>