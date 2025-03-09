<template>
  <div>
    <div
      class="h-52 md:-72 rounded-t-xl relative group"
      :style="{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }"
    >
      <div
        class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500"
      >
        <a
          v-if="gitUrl.length"
          :href="gitUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <CodeBracketIcon
            class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
          />
        </a>
        <a
          v-if="previewUrl.length"
          :href="previewUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <EyeIcon
            class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
          />
        </a>
      </div>
    </div>
    <div class="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
      <h5 class="text-xl font-semibold mb-2">{{ title }}</h5>
      <p class="text-[#ADB7BE]">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { CodeBracketIcon, EyeIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  gitUrl: {
    type: String,
    required: true,
    default: "",
  },
  previewUrl: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
