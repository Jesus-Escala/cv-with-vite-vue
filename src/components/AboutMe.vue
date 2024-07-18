<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";
const { photo } = logicPage();
</script>
<template>
  <div
    class="font-open-sans flex flex-wrap min-h-screen items-center justify-center"
  >
    <div
      class="w-full w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 xl:w-2/3 flex flex-col lg:flex-row z-1"
    >
      <div class="w-full lg:w-1/3 flex items-center justify-center p-2">
        <img
          :src="photo"
          alt="{{ $t('altPhoto') }}"
          class="rounded-full border w-2/4 sm:w-2/4 md:w-3/4 lg:w-3/4 xl:w-full 2xl:w-full"
        />
      </div>
      <div
        class="w-full lg:w-2/3 p-6 flex flex-col justify-center items-center"
      >
        <p
          class="text-center tracking-widest font-medium leading-tight mt-1 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base"
        >
          {{ $t("who") }}
        </p>
        <h5
          class="font-handjet text-center tracking-widest font-bold leading-tight mt-1 text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
        >
          {{ $t("about") }}
        </h5>
        <p
          class="text-justify mt-1 leading-relaxed text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base"
        >
          {{ $t("aboutme") }}
        </p>
      </div>
    </div>
  </div>
</template>
