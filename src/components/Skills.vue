<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const {
  darkModeIconBack,
  darkModeIconFront,
  darkModeIconMobile,
  darkModeIconTool,
  isDark,
  lightModeIconBack,
  lightModeIconFront,
  lightModeIconMobile,
  lightModeIconTool,
} = logicPage();
</script>
<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div
      class="w-full lg:w-4/6 2lg:w-5/6 xl:w-4/6 2xl:w-full flex flex-col z-1"
    >
      <div>
        <h2
          class="font-handjet text-center font-bold mt-1 leading-tight sm:leading-tight md:leading-tight xl:leading-tight 2xl:leading-tight tracking-widest sm:tracking-widest md:tracking-widest xl:tracking-widest 2xl:tracking-widest mt-1 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
        >
          {{ $t("skills") }}
        </h2>
      </div>
      <div class="flex flex-wrap p-3 items-center justify-center">
        <div
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center flex-col items-center mb-5 h-[11rem] xs:h-[11rem] smx:h-[10rem] sm:h-[13rem] md:h-[13rem] lg:h-[13rem] xl:h-[13rem] 2xl:h-[13rem]"
        >
          <img
            :src="isDark ? darkModeIconFront : lightModeIconFront"
            alt="{{ $t('altFront') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
          >
            {{ $t("frontend") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("html") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("css") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("javascript") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("sass") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("tailwind") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("vue") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("angular") }}
            </div>
          </div>
        </div>
        <!-- Backend Section -->
        <div
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center top-0 flex-col items-center mb-5 h-[10rem] xs:h-[10rem] smx:h-[10rem] sm:h-[13rem] md:h-[13rem] lg:h-[13rem] xl:h-[13rem] 2xl:h-[13rem]"
        >
          <img
            :src="isDark ? darkModeIconBack : lightModeIconBack"
            alt="{{ $t('altBack') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
          >
            {{ $t("backend") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("java") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("spring") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("c") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("mysql") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("sqlserver") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("mongodb") }}
            </div>
          </div>
        </div>
        <!-- Mobile Section -->
        <div
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center flex-col items-center mb-5"
        >
          <img
            :src="isDark ? darkModeIconMobile : lightModeIconMobile"
            alt="{{ $t('altMobile') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
          >
            {{ $t("mobile") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("kotlin") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("swift") }}
            </div>
          </div>
        </div>
        <!-- Tools Section -->
        <div
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center flex-col items-center mb-5"
        >
          <img
            :src="isDark ? darkModeIconTool : lightModeIconTool"
            alt="{{ $t('altTools') }}"
            class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
          />
          <h6
            class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
          >
            {{ $t("tool") }}
          </h6>
          <div class="flex flex-wrap items-center justify-center">
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("git") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("gitHub") }}
            </div>
            <div
              class="skill-item"
              :class="[isDark ? 'bg-gray-600' : 'bg-gray-800']"
            >
              {{ $t("postman") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.skill-item {
  @apply text-center flex items-center justify-center  text-white font-bold rounded h-[1.3rem] xs:h-[1.3rem] smx:h-[1.3rem] sm:h-[1.5rem] md:h-[1.5rem] lg:h-[2rem] xl:h-[2rem] 2xl:h-[2rem] p-1 w-[4.5rem]   sm:w-[4.5rem] md:w-[4.5rem] lg:w-20 xl:w-20 2xl:w-20     m-1 sm:m-1 md:m-1 lg:m-2 xl:m-2 2xl:m-2 text-xxs sm:text-xxs md:text-xxs lg:text-xs xl:text-xs 2xl:text-xs;
}
</style>
