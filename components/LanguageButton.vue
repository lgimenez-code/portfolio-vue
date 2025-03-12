<template>
  <div
    class="flex px-2 py-2 rounded-full border-2 border-slate-600 hover:border-white fade-border"
  >
    <button
      class="fade-opacity hover:opacity-100"
      :class="{ 'opacity-20': storePageData.currentLanguage !== 'en' }"
      :title="'English'"
      @click="storePageData.setLanguage('en')"
    >
      <img
        src="../public/english-icon.png"
        class="mr-4"
        width="28px"
        height="28px"
        alt="english-icon"
      />
    </button>
    <button
      class="fade-opacity hover:opacity-100"
      :class="{ 'opacity-20': storePageData.currentLanguage !== 'sp' }"
      :title="'Spanish'"
      @click="storePageData.setLanguage('sp')"
    >
      <img
        src="../public/spain-icon.png"
        class=""
        width="28px"
        height="28px"
        alt="spain-icon"
      />
    </button>
  </div>
</template>

<script setup>
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();
</script>