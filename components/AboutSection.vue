<template>
  <section id="about" class="text-white">
    <div
      :initial="{ x: 50, opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :transition="{ duration: 1.5 }"
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
      <img class="rounded-xl" src="../public/images/laptop-blue.png" alt="laptop image" width="500px" height="500px"/>
      <div class="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 class="text-4xl font-bold text-white mb-4">About Me</h2>
        <p class="text-base lg:text-lg">
          With more than 5 years of experience, I have developed sites with best practices using Frontend and backend tools, prioritizing good performance.
          When I&apos;m not at the computer, I&apos;m usually drawing or learning music 🎶.
        </p>
        <div class="flex flex-row mt-8 justify-start">
          <TabButton
            :selectTab="'skills'"
            :activeTab="tab === 'skills'"
            @eventSelect="handleTabChange('skills')"
          >
            Skills
          </TabButton>
          <TabButton
            :selectTab="'education'"
            :activeTab="tab === 'education'"
            @eventSelect="handleTabChange('education')"
          >
            Education
          </TabButton>
        </div>
        <div class="mt-8">
          <ul v-if="tab == 'skills'" class="pl-2">
            <li class="flex my-1">
              <img src="../public/html-icon.png" width="20px" height="20px" alt="js icon" />
              <label class="ml-2">HTML</label>
            </li>
            <li class="flex my-1">
              <img src="../public/css-icon.png" width="20px" height="20px" alt="js icon" />
              <label class="ml-2">CSS</label>
            </li>
            <li class="flex my-1">
              <img src="../public/javascript-icon.svg" width="20px" height="20px" alt="js icon" />
              <label class="ml-2">JavaScript</label>
            </li>
            <li class="flex my-1">
              <img src="../public/vue-icon.svg" width="20px" height="20px" alt="vue icon" />
              <label class="ml-2">Vue</label>
            </li>
            <li class="flex my-1">
              <img src="../public/database-icon.png" width="20px" height="20px" alt="database icon" />
              <label class="ml-2">SQL/Oracle</label>
            </li>
            <li class="flex my-1">
              <img src="../public/csharp-icon.svg" width="20px" height="20px" alt="csharp icon" />
              <label class="ml-2">C# .Net</label>
            </li>
            <li class="flex my-1">
              <img src="../public/figma-icon.png" width="20px" height="20px" alt="figma icon" />
              <label class="ml-2">Figma</label>
            </li>
            <li class="flex my-1">
              <img src="../public/postman-icon.png" width="20px" height="20px" alt="postman icon" />
              <label class="ml-2">Postman</label>
            </li>
          </ul>
          <ul v-else class="pl-2">
            <li class="flex my-1">
              <img src="../public/utn-icon.ico" width="20px" height="20px" alt="utn icon" />
              <label class="ml-2">UTN - Facultad Regional Córdoba</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import TabButton from './TabButton.vue';

const tab = ref('skills');

const handleTabChange = (id) => {
  console.log(id)
  tab.value = id;
}
</script>