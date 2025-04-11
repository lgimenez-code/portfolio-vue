<template>
  <section id="about" class="text-white">
    <div
      :initial="{ x: 50, opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :transition="{ duration: 1.5 }"
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16"
    >
      <img class="rounded-xl" src="../public/images/laptop-blue.png" alt="laptop image" width="500px" height="500px"/>
      <div class="mt-4 md:mt-0 text-left flex flex-col h-full cursor-default">
        <h2 class="text-4xl font-bold text-white mb-4">{{ pageData.titleAboutMe }}</h2>
        <p class="text-base lg:text-lg">
          {{ pageData.textAboutMe }}
        </p>
        <div class="flex flex-row mt-8 justify-start">
          <TabButton
            :selectTab="arrayOptions[0]"
            :activeTab="tab === arrayOptions[0]"
            @eventSelect="handleTabChange(arrayOptions[0])"
          >
            {{ pageData.optionsAboutMe[0] }}
          </TabButton>
          <TabButton
            :selectTab="arrayOptions[1]"
            :activeTab="tab === arrayOptions[1]"
            @eventSelect="handleTabChange(arrayOptions[1])"
          >
            {{ pageData.optionsAboutMe[1] }}
          </TabButton>
        </div>
        <div class="mt-4 w-full h-full">
          <div v-if="tab == arrayOptions[0]" class="grid grid-cols-2">
            <div v-for="(tech, index) in technologies" :key="index" class="flex my-1">
              <img :src="tech.icon" width="20px" height="20px" :alt="`${tech.name} icon`" />
              <label class="ml-2">{{ tech.name }}</label>
            </div>
          </div>
          <div v-else class="grid gird-cols-1">
            <div class="flex my-1">
              <img src="../public/utn-icon.ico" width="20px" height="20px" alt="utn icon" />
              <label class="ml-2">UTN - Facultad Regional de Córdoba</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import TabButton from './TabButton.vue';
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const pageData = computed( () => storePageData.getCurrentLanguageData);

const tab = ref('skills');

const arrayOptions = ["skills", "education"];

const technologies = ref([
  { name: 'HTML', icon: '/html-icon.png' },
  { name: 'CSS', icon: '/css-icon.png' },
  { name: 'React', icon: '/react-icon.svg' },
  { name: 'Vue', icon: '/vue-icon.svg' },
  { name: 'JavaScript', icon: '/javascript-icon.svg' },
  { name: 'NodeJs', icon: '/nodejs-icon.svg' },
  { name: 'C# .Net', icon: '/csharp-icon.svg' },
  { name: 'SQL/Oracle', icon: '/database-icon.png' },
  { name: 'Figma', icon: '/figma-icon.png' },
  { name: 'Postman', icon: '/postman-icon.png' }
]);

const handleTabChange = (id) => {
  tab.value = id;
}
</script>