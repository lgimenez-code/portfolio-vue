<template>
  <section id="home" class="lg:py-16">
    <div class="grid grid-cols-1 sm:grid-cols-12">
      <div
        class="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1
          class="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold cursor-arg-flag"
        >
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            {{ pageData.nameHero }}
          </span>
          <br/>
          Lucas Gimenez
        </h1>
        <p class="text-[#ADB7BE] text-base sm:text-lg lg:text-xl cursor-default">
          {{ pageData.infoHero }}
        </p>
        <p class="text-[#ADB7BE] text-base sm:text-lg lg:text-xl cursor-default my-4 lg:my-6">
          {{ pageData.missionHero }}
        </p>
        <div class="flex">
          <a
            class="px-6 py-3 w-full sm:w-fit rounded-full mr-4 border-4 border-secondary-700 bg-secondary-700 hover:bg-secondary-600 hover:border-secondary-400 fade-border fade-background text-white cursor-pointer-arg-flag"
            href="https://www.linkedin.com/in/lgimenez-dev"
            target="_blank" rel="noopener noreferrer"
          >
            <span class="block px-5 py-2">
              {{ pageData.btnHire }}
            </span>
          </a>
          <a
            class="px-6 py-3 w-full sm:w-fit rounded-full mr-4 border-4 border-secondary-700 bg-[#121212] hover:bg-disabledPrimary-800 hover:border-primary-500 fade-border fade-background text-white"
            :href="pageData.linkCv"
            target="_blank"
          >
            <span class="block px-5 py-2">
              {{ pageData.btnDownload }}
            </span>
          </a>
        </div>
      </div>
      <div class="col-span-4 place-self-center mt-4 lg:mt-0">
        <div
          class="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]"
        >
          <img
            src="../public/images/profile_pic.jpg"
            alt="profile_pic"
            width="300px"
            height="300px"
            class="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[300px] lg:h-[300px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const pageData = computed( () => storePageData.getCurrentLanguageData);
</script>

<style scoped>
.cursor-arg-flag {
  cursor: url("../public/arg-flag-icon.png"), pointer;
}
.cursor-pointer-arg-flag {
  cursor: url("../public/arg-cursor-icon.png"), pointer;
}
</style>