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
            Hello, I&apos;m
          </span>          
          <br/>
          Lucas Gimenez
        </h1>
        <p class="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          from 📍Argentina. Enthusiastic about emerging web technologies and
          staying up-to-date with industry trends. Passionate, proactive,
          self-taught, specializing in building exceptional digital experiences.
        </p>
        <div class="flex">
          <a
            class="px-6 py-3 w-full sm:w-fit rounded-full mr-4 border-4 border-secondary-700 bg-secondary-700 hover:bg-secondary-600 fade-border fade-background text-white cursor-pointer-arg-flag"
            href="https://www.linkedin.com/in/lucas-gimenez-76a712221/"
            target="_blank" rel="noopener noreferrer"
          >
            <span class="block px-5 py-2">
              Hire Me
            </span>
          </a>
          <a
            class="px-6 py-3 w-full sm:w-fit rounded-full mr-4 border-4 border-secondary-700 bg-[#121212] hover:bg-disabledPrimary-800 hover:border-primary-500 fade-border fade-background text-white cursor-pointer-arg-flag"
            href="https://drive.google.com/uc?export=download&id=1d4XRtZ5pVN5p39yAcV0L8jDnjgul3gKW"
            target="_blank"
          >
            <span class="block px-5 py-2">
              Download CV
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
</script>

<style scoped>
.cursor-arg-flag {
  cursor: url("../public/arg-flag-icon.png"), pointer;
}
.cursor-pointer-arg-flag {
  cursor: url("../public/arg-cursor-icon.png"), pointer;
}
.fade-background {
  transition: background-color 0.5s ease;
}
.fade-border {
  transition: border-color 0.5s ease;
}
</style>