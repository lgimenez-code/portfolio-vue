<template>
  <div>
    <button
      type="button"
      class="mr-3 font-semibold hover:text-white text-[#ADB7BE]"
      :class="{ 'text-white': activeTab }"
      @click="emit('eventSelect', selectTab)"
    >
      <slot />
    </button>
    <div
      class="h-1 bg-primary-500 mr-3 fade-background"
      :class="{
        'text-white': activeTab,
        'text-[#ADB7BE] bg-disabledPrimary-300': !activeTab,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  selectTab: {
    type: String,
    required: true,
  },
  activeTab: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['eventSelect']);
</script>

<style scoped>
.fade-background {
  transition: background-color 0.5s ease;
}
</style>
