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
          <li class="py-2" v-for="link in navLinks[storePageData.currentLanguage]" :key="link.title">
            <NavLink
              :link="link.path"
              :title="link.title"
            />
          </li>
          <li>
            <LanguageButton/>
          </li>
        </ul>
      </div>
    </div>
    <MenuOverlay
      v-if="navbarOpen"
      class="md:hidden"
      :listLinks="navLinks[storePageData.currentLanguage]"
    />
  </nav>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from 'vue';
import NavLink from './NavLink.vue';
import MenuOverlay from './MenuOverlay.vue';
import LanguageButton from "./LanguageButton.vue";
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const navLinks = {
  'sp': [
    { title: 'Inicio', path: "#home" },
    { title: "Sobre mí", path: "#about" },
    { title: "Proyectos", path: "#projects" },
    { title: "Contacto", path: "#contact" },
  ],
  'en': [
    { title: 'Home', path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ],
}

const pageData = computed( () => storePageData.getCurrentLanguageData);

const navbarOpen = ref(false);

</script>