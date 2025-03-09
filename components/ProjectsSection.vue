<template>
  <section id="projects">
    <h2 class="text-center text-4xl font-bold tet-white mt-4 mb-8 md:mb-12">
      My Projects
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
    <ul class="grid md:grid-cols-3 gap-8 md:gap-12">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :imgUrl="project.imgUrl"
        :title="project.title"
        :description="project.description"
        :gitUrl="project.gitUrl"
        :previewUrl="project.previewUrl"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProjectTag from "./ProjectTag.vue";
import ProjectCard from "./ProjectCard.vue";
import { projectsData, categories } from "~/mockData/mockedData";

const tag = ref("All");

const filteredProjects = projectsData.filter((project) =>
  project.tag.includes(tag)
);

console.log(filteredProjects);

const handleTagChange = (newTag) => {
  tag.value = newTag;
};
</script>
