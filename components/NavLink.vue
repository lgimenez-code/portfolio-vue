<template>
  <a
    :href="link"
    class="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
  >
    {{ title }}
  </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>