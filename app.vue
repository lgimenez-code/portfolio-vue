<template>
  <main class="flex min-h-screen flex-col bg-[#121212]">
    <Navbar class="z-20"/>
    <div class="container mt-24 mx-auto py-12 px-4 z-10">
      <AboutSection/>
      <EmailSection/>
    </div>
    <Footer/>
  </main>
</template>

<script setup>
import Footer from './components/Footer.vue'
import EmailSection from './components/EmailSection.vue';
import AboutSection from './components/AboutSection.vue';
</script>
