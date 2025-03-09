<template>
  <ul class="flex flex-col py-4 items-center">
    <NavLink
      v-for="link in listLinks"
      :key="link.title"
      :link="link.path"
      :title="link.title"
    />
  </ul>

</template>

<script setup>
import { defineProps } from 'vue';
import NavLink from './NavLink.vue';

const props = defineProps({
  listLinks: {
    type: Array,
    required: true,
  },
});
</script>