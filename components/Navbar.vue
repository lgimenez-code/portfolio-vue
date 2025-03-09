<template>
  <nav class="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
    <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
      <a href="/" class="text-2xl md:text-5xl text-white font-semibold">
        <img src="../public/raton-icon.png" class="invert" alt="profile pic" width="48px" height="48px"/>
      </a>
      <div class="mobile-menu block md:hidden">
        <button
          v-if="!navbarOpen"
          @click="navbarOpen = true"
          class="flex items-center px-3 py-2 border rounded border-salte-200 text-slate-200 hover:text-white hover:border-white"
        >
          <Bars3Icon class="h-5 w-5"/>
        </button>
        <button
          v-else
          @click="navbarOpen = false"
          class="flex items-center px-3 py-2 border rounded border-salte-200 text-slate-200 hover:text-white hover:border-white"
        >
          <XMarkIcon class="h-5 w-5" />
        </button>
      </div>
      <div class="menu hidden md:block md:w-auto">
        <ul class="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          <li class="py-2" v-for="link in navLinks" :key="link.title">
            <NavLink :link="link.path" :title="link.title" />
          </li>
          <li>
            <div class="flex px-2 py-2 rounded-full border-2 border-slate-600 hover:border-white fade-border">
              <button
                :class="{ 'grayscale': storePageData.currentLanguage !== 'en' }"
                :title="'English'"
                @click="storePageData.setLanguage('en')"
              >
                <img src="../public/english-icon.png" class="mr-4" width="28px" height="28px" alt="english-icon">
              </button>
              <button
                :class="{ 'grayscale': storePageData.currentLanguage !== 'sp' }"
                :title="'Spanish'"
                @click="storePageData.setLanguage('sp')"
              >
                <img src="../public/spain-icon.png" class="" width="28px" height="28px" alt="spain-icon">
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <MenuOverlay
      v-if="navbarOpen"
      class="md:hidden"
      :listLinks="navLinks"
    />
  </nav>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from 'vue';
import NavLink from './NavLink.vue';
import MenuOverlay from './MenuOverlay.vue';
import { navLinks } from '~/mockData/mockedData';
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const navbarOpen = ref(false);

</script>