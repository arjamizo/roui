<script setup lang="ts">
import { ref } from 'vue';
// import RouiInput from './components/Input.vue'

const name = ref('Imię i nazwisko')

</script>

<template>
  <input v-model="name"/>
  <!-- <roui-input v-model="name"/> -->
  <span>{{ name }}</span>
</template>

<style scoped>
</style>
