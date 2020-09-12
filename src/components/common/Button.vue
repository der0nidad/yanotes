<template>
    <button
    class="button"
    :buttonText="buttonText"
    >{{buttonText}}</button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        buttonText: String,
    }
}</script>
<style scoped>
.button {
    border: none;
    border-radius: 4px;
    background-color: #41B883;
    /* padding here is linked to padding from control-buttons__note-title */
    padding: 4px 20px;
    color: #ffffff;
    margin-right: 20px;
}

</style>