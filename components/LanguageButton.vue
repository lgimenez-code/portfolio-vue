<template>
  <div class="relative cursor-pointer" >
    <div
      class="flex px-2 py-2 text-[#ADB7BE] w-[125px] items-center justify-evenly rounded-full border-2 border-slate-600 hover:border-white hover:text-white hover:bg-zinc-800 fade-border fade-text"
      @click="hidePanel = !hidePanel"
    >
      <LanguageIcon class="h-5 w-5"/>
      <span>{{ langSelected }}</span>
      <ChevronDownIcon v-if="!hidePanel" class="h-5 w-5 mt-1"/>
      <ChevronUpIcon v-else class="h-5 w-5 mt-1"/>
    </div>
    <div
      v-if="hidePanel"
      @mouseleave="mouseLeavePanel"
      class="bg-[#121212] bg-opacity-90 flex-col items-start right-0 top-[50px] w-[125px] rounded-3xl border-2 border-slate-600 absolute top-[10px]"
    >
      <div
        class="fade-opacity hover:opacity-100 flex justify-evenly py-2 hover:bg-zinc-800 rounded-t-3xl"
        :class="{ 'opacity-20': storePageData.currentLanguage !== 'en' }"
        @click="storePageData.setLanguage('en')"
      >
        <img
          src="../public/english-icon.png"
          width="28px"
          height="28px"
          alt="english-icon"
        />
        <span>English</span>
      </div>
      <div
        class="fade-opacity hover:opacity-100 flex justify-evenly py-2 hover:bg-zinc-800 rounded-b-3xl"
        :class="{ 'opacity-20': storePageData.currentLanguage !== 'sp' }"
        @click="storePageData.setLanguage('sp')"
      >
        <img
          src="../public/spain-icon.png"
          width="28px"
          height="28px"
          alt="spain-icon"
        />
        <span>Spanish</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { LanguageIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const hidePanel = ref(false)

const langSelected = computed(() => storePageData.currentLanguage == 'en' ? 'English' : 'Spanish')

const mouseLeavePanel = () => {
  setTimeout(() => {
    hidePanel.value = !hidePanel
  }, 1000);
}
</script>