<template>
  <ul class="flex flex-col py-4 items-center">
    <NavLink
      v-for="link in listLinks"
      :key="link.title"
      :link="link.path"
      :title="link.title"
    />
    <LanguageButton class="mt-2"/>
  </ul>

</template>

<script setup>
import { defineProps } from 'vue';
import NavLink from './NavLink.vue';
import LanguageButton from "./LanguageButton.vue";

const props = defineProps({
  listLinks: {
    type: Array,
    required: true,
  },
});
</script>