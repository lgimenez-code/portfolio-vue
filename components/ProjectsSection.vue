<template>
  <section id="projects">
    <h2 class="text-center text-4xl font-bold tet-white mt-4 mb-8 md:mb-12">
      {{ pageData.titleProjects }}
    </h2>
    <div
      class="text-white flex flex-row justify-center items-center gap-2 py-6"
    >
      <ProjectTag
        @categorySelected="handleTagChange(categories[0])"
        :name="categories[0]"
        :isSelected="tag === categories[0]"
      />
      <ProjectTag
        @categorySelected="handleTagChange(categories[1])"
        :name="categories[1]"
        :isSelected="tag === categories[1]"
      />
      <ProjectTag
        @categorySelected="handleTagChange(categories[2])"
        :name="categories[2]"
        :isSelected="tag === categories[2]"
      />
    </div>
    <ul ref="domRef" class="grid md:grid-cols-3 gap-8 md:gap-12">
      <motion.li
        v-for="(project, index) in filteredProjects"
        :variants="{ initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 } }"
        :initial="'initial'"
        :animate="isInView ? 'animate' : 'initial'"
        :transition="{ duration: 0.3, delay: index * 0.4 }"
      >
        <ProjectCard          
          :key="index"
          :imgUrl="project.image"
          :title="project.title"
          :description="project.description"
          :gitUrl="project.gitUrl"
          :previewUrl="project.previewUrl"
        />
      </motion.li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { motion, useInView } from 'motion-v'
import ProjectTag from "./ProjectTag.vue";
import ProjectCard from "./ProjectCard.vue";
import { projectsData } from "~/mockData/projectsData";
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const pageData = computed( () => storePageData.getCurrentLanguageData);

const tag = ref("All");

const categories = ["All", "Frontend", "Backend"];

const filteredProjects = ref(projectsData);

const domRef = ref()
const isInView = useInView(domRef)

watch(tag, (newTag) => {
  filteredProjects.value = projectsData.filter((project) =>
    project.tag.includes(newTag)
  );
});

const handleTagChange = (newTag) => {
  tag.value = newTag;
};
</script>
