<template>
  <footer class="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div class="container p-12 flex justify-between">
      <img
        class="invert"
        src="/raton-icon.png"
        alt="profile pic"
        width={48}
        height={48}
      />
      <p class="text-slate-600">
        {{ pageData.textFooter }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const pageData = computed( () => storePageData.getCurrentLanguageData);
</script>