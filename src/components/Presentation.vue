<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const { download, send, cv, openLink } = logicPage();
</script>

<template>
  <header
    class="font-open-sans flex flex-wrap min-h-screen min-w-screen items-center justify-center text-base"
  >
    <div class="w-full p-4 sm:p-4 md:p-6 lg:p-6 xl:p-8 2xl:p-8 z-1">
      <p
        class="text-center font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2"
      >
        {{ $t("greeting") }}
      </p>
      <h1
        class="font-handjet font-bold text-center leading-tight sm:leading-tight md:leading-tight xl:leading-tight 2xl:leading-tight tracking-widest sm:tracking-widest md:tracking-widest xl:tracking-widest 2xl:tracking-widest mt-1 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
      >
        {{ $t("name") }}<br />
        {{ $t("lastname") }}
      </h1>
      <p
        class="text-center font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2 2xl:mt-2"
      >
        {{ $t("role") }}
      </p>
      <div
        class="flex justify-center gap-4 py-3 mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-2 2xl:mt-2 flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-content"
      >
        <a
          download
          :href="cv"
          class="flex items-center text-center text-white font-semibold rounded-md bg-indigo-800 shadow-indigo px-2.5 py-1.5 sm:px-2.5 sm:py-1.5 md:px-5 md:py-2 lg:px-5 lg:py-2 xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
        >
          {{ $t("downloadCV") }}
          <img
            :src="download"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </a>
        <button
          @click="openLink('https://wa.me/924762054')"
          class="flex items-center text-center text-white font-semibold rounded-md bg-indigo-800 shadow-indigo px-3.5 py-1.5 sm:px-3.5 sm:py-1.5 md:px-5 md:py-2 lg:px-5 lg:py-2 xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
        >
          {{ $t("contactMe") }}
          <img
            :src="send"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
      </div>
    </div>
  </header>
</template>
