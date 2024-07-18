<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";

const {
  darkModeIconGit,
  darkModeIconEmail,
  darkModeIconWssp,
  darkModeIconLink,
  isDark,
  openLink,
} = logicPage();
</script>

<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div class="w-1/2 px-4 z-1">
      <h2
        class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
      >
        {{ $t("thanks") }}
      </h2>

      <p
        class="text-center font-medium text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg"
      >
        {{ $t("forContact") }}
      </p>
      <div class="flex flex-wrap justify-center gap-4 py-3">
        <button
          @click="openLink('https://github.com/Jesus-Escala')"
          class="flex items-center justify-center px-[1.2rem] py-1.5 sm:px-[1.2rem] sm:py-1.5 md:px-[1.7rem] md:py-2 lg:px-[1.7rem] lg:py-2 xl:px-[1.7rem] xl:py-2 2xl:px-[1.7rem] 2xl:py-2 rounded-md text-center hover:bg-indigo-800 hover:shadow-indigo font-semibold text-white transition-transform duration-300 transform hover:scale-105 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
          :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
        >
          {{ $t("gitHub") }}
          <img
            :src="darkModeIconGit"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('https://www.linkedin.com/in/jesusescala')"
          class="flex items-center justify-center px-3.5 py-1.5 sm:px-3.5 sm:py-1.5 md:px-5 md:py-2 lg:px-5 lg:py-2 xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 rounded-md text-center hover:bg-indigo-800 hover:shadow-indigo font-semibold text-white transition-transform duration-300 transform hover:scale-105 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
          :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
        >
          {{ $t("linkedin") }}
          <img
            :src="darkModeIconLink"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('https://wa.me/924762054')"
          class="flex items-center justify-center px-[0.6rem] py-1.5 sm:px-[0.7rem] sm:py-1.5 md:px-[1.1rem] md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 2xl:px-4 2xl:py-2 rounded-md text-center hover:bg-indigo-800 hover:shadow-indigo font-semibold text-white transition-transform duration-300 transform hover:scale-105 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
          :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
        >
          {{ $t("wssp") }}
          <img
            :src="darkModeIconWssp"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
        <button
          @click="openLink('mailto:jesusescalatrabajo@gmail.com')"
          class="flex items-center justify-center px-[1.2rem] py-1.5 sm:px-[1.2rem] sm:py-1.5 md:px-[1.6rem] md:py-2 lg:px-[1.7rem] lg:py-2 xl:px-[1.7rem] xl:py-2 2xl:px-[1.7rem] 2xl:py-2 rounded-md text-center hover:bg-indigo-800 hover:shadow-indigo font-semibold text-white transition-transform duration-300 transform hover:scale-105 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
          :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
        >
          {{ $t("email") }}
          <img
            :src="darkModeIconEmail"
            class="ml-2 h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5"
            alt="{{ $t('altDownload') }}"
          />
        </button>
      </div>
    </div>
  </div>
</template>
