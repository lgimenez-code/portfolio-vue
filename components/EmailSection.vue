<template>
  <section
    id="contact"
    class="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
    <div class="z-10">
      <h5 class="text-xl font-bold text-white my-2">{{ pageData.titleContact }}</h5>
      <p class="text-[#ADB7BE] mb-4 max-w-md">
        {{ pageData.textContact }}
      </p>
      <div class="socials flex flex-row gap-2">
        <a
          href="https://github.com/lgimenez-code"
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer"
        >
          <img :src="GitHubIcon" alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/lgimenez-dev"
          target="_blank"
          rel="noopener noreferrer"
          class="cursor-pointer"
        >
          <img :src="LinkedInIcon" alt="Linkedin Icon" />
        </a>
      </div>
    </div>
    <div>
      <div class="flex flex-col">
        <div class="mb-6">
          <label for="email" class="text-white block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            v-model="email"
            class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="jacob@google.com"
          />
          <p v-if="emailError" class="text-red-500 text-sm mt-2">
            Please enter a correct email
          </p>
        </div>
        <div class="mb-6">
          <label for="subject" class="text-white block text-sm mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            v-model="subject"
            class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          >
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="text-white block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            v-model="message"
            class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="button"
          :disabled="sendingMessage"
          class="text-white font-medium py-2.5 px-5 rounded-lg w-full"
          :class="{
            'bg-primary-500 hover:bg-primary-600': !sendingMessage,
            'bg-disabledPrimary-600 hover:bg-disabledPrimary-800': sendingMessage,
          }"
          @click="handleSubmit"
        >
          Send Message
        </button>
        <p v-if="sendingMessage" class="text-yellow-500 text-sm mt-2">
          Sending message...
        </p>
        <p v-if="emailSubmitted" class="text-green-500 text-sm mt-2">
          Email sent successfully!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import GitHubIcon from "../public/github-icon.svg";
import LinkedInIcon from "../public/linkedin-icon.svg";
import { usePageDataStore } from '~/stores/pageData.js';

const storePageData = usePageDataStore();

const pageData = computed( () => storePageData.getCurrentLanguageData);

const sendingMessage = ref(false);
const emailSubmitted = ref(false);

const email = ref("");
const subject = ref("");
const message = ref("");
const emailError = ref(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateFields()) {
    return false;
  }

  sendingMessage.value = true;
  emailSubmitted.value = false;

  try {
    const response = await fetch("/api/send/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    }); 
    
    if (response.status == 200) {
      setTimeout(() => {
        sendingMessage.value = false;
        emailSubmitted.value = true;
      }, 5000);
    }

  } catch (error) {
    console.error("Error:", error);
    sendingMessage.value = false;
  }
};

const validateFields = () => {
  emailError.value = false;
  if (!email.value) {
    emailError.value = true;
    return false;
  }
  return true;
};
</script>

<style scoped></style>
