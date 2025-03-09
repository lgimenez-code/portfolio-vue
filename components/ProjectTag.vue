<template>
  <button
    class="rounded-full border-2 px-6 py-3 text-xl cursor-pointer fade-background fade-border"
    :class="( isSelected ? 'text-white bg-primary-500' : 'text-[#ADB7BE] border-slate-600 hover:border-white')"
    @click="emit('categorySelected', name)"
  >{{ name }}</button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    required: true
  },
});

const emit = defineEmits(['categorySelected']);
</script>

<style scoped>
.fade-background {
  transition: background-color 0.5s ease;
}
.fade-border {
  transition: border-color 0.5s ease;
}
</style>