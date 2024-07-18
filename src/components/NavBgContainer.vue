<script lang="ts" setup>
import { logicPage } from "../AppLogic.ts";

const {
  isDark,
  toggleDark,
  toggleClasses,
  openLink,
  changeLocale,
  toggleMenu,
  isOpen,
  changeImage,
  selectedImage,
  darkModeIconGit,
  lightModeIconGit,
  darkModeIconEmail,
  lightModeIconEmail,
  darkModeIconWssp,
  lightModeIconWssp,
  lightModeIconLink,
  darkModeIconLink,
  pokemonGif,
  pokemonGif2,
  pokemonGif3,
  pokemonGif4,
  mountain,
  bush,
  tree,
  cloud,
  giratina,
  dialga,
  grass,
  scrollToSection,
} = logicPage();
</script>

<template>
  <div
    :class="{ 'menu-open': isOpen }"
    :style="{
      width: isOpen ? '100%' : 'auto',
      height: isOpen ? '100%' : 'auto',
      backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
      transition: 'background-color 0.3s',
    }"
    class="fixed t-0 l-0 z-6"
  >
    <div class="fixed top-5 left-5 cursor-pointer z-6" @click="toggleMenu">
      <div
        v-if="!isOpen"
        class="no-select shadow-indigo bg-indigo-800 text-white flex w-7 h-7 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl items-center justify-center rounded"
      >
        {{ $t("hamburger") }}
      </div>
      <div
        v-if="isOpen"
        class="no-select shadow-indigo bg-indigo-800 text-white flex w-7 h-7 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-9 xl:h-9 2xl:w-9 2xl:h-9 text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl items-center justify-center rounded"
      >
        {{ $t("close") }}
      </div>
    </div>
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 h-full bg-dark-100 w-full"
      @click="toggleMenu"
    ></div>
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-48 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 h-full z-5 transition-transform duration-900 ease-in-out"
      :class="[
        isDark
          ? 'bg-gray-800 shadow-lg shadow-indigo'
          : 'bg-indigo-100 shadow-lg shadow-indigo',
      ]"
    >
      <ul
        class="list-none mt-20 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base h-[100%]"
      >
        <li
          class="flex items-center h-8 mb-[10%] ml-[10%] transition-all duration-300 ease hover:bg-[#3730a3] hover:text-white hover:text-right hover:pr-8 hover:top-0 hover:left-0 hover:rounded-tl-[100px] hover:rounded-bl-[100px]"
        >
          <a
            href="#presentation"
            class="w-full"
            @click.prevent="scrollToSection('presentation')"
            >{{ $t("presentation") }}</a
          >
        </li>

        <li
          class="flex items-center h-8 mb-[10%] ml-[10%] transition-all duration-300 ease hover:bg-[#3730a3] hover:text-white hover:text-right hover:pr-8 hover:top-0 hover:left-0 hover:rounded-tl-[100px] hover:rounded-bl-[100px]"
        >
          <a
            href="#aboutme"
            class="w-full"
            @click.prevent="scrollToSection('aboutme')"
            >{{ $t("about") }}</a
          >
        </li>
        <li
          class="flex items-center h-8 mb-[10%] ml-[10%] transition-all duration-300 ease hover:bg-[#3730a3] hover:text-white hover:text-right hover:pr-8 hover:top-0 hover:left-0 hover:rounded-tl-[100px] hover:rounded-bl-[100px]"
        >
          <a
            href="#skills"
            class="w-full"
            @click.prevent="scrollToSection('skills')"
            >{{ $t("skills") }}</a
          >
        </li>
        <li
          class="flex items-center h-8 mb-[10%] ml-[10%] transition-all duration-300 ease hover:bg-[#3730a3] hover:text-white hover:text-right hover:pr-8 hover:top-0 hover:left-0 hover:rounded-tl-[100px] hover:rounded-bl-[100px]"
        >
          <a
            href="#projects"
            class="w-full"
            @click.prevent="scrollToSection('projects')"
            >{{ $t("projects") }}</a
          >
        </li>
        <li
          class="flex items-center h-8 mb-[10%] ml-[10%] transition-all duration-300 ease hover:bg-[#3730a3] hover:text-white hover:text-right hover:pr-8 hover:top-0 hover:left-0 hover:rounded-tl-[100px] hover:rounded-bl-[100px]"
        >
          <a
            href="#contact"
            class="w-full"
            @click.prevent="scrollToSection('contact')"
            >{{ $t("contact") }}</a
          >
        </li>

        <li class="flex items-center justify-between px-5 h-[5%] ml-[10%]">
          <div>
            <select
              @change="changeLocale($event, $i18n)"
              :class="[
                isDark ? 'bg-gray-600 text-white' : 'bg-indigo-800 text-white',
              ]"
              class="rounded border-none py-1 px-2 outline-none appearance-none cursor-pointer"
            >
              <option value="es">{{ $t("es") }}</option>
              <option value="en">{{ $t("en") }}</option>
            </select>
          </div>
          <div :class="{ dark: isDark }" class="mr-2">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" class="hidden" @change="toggleDark()" />
              <div
                :class="[isDark ? 'bg-gray-600' : 'bg-indigo-800']"
                class="w-10 h-6 rounded-full shadow-inner -ml-10"
              ></div>
              <div
                :class="toggleClasses"
                class="w-6 h-6 bg-white rounded-full shadow -ml-10"
              ></div>
            </label>
          </div>
        </li>
        <li
          class="flex flex-col justify-center items-center h-36 sm:h-36 md:h-40 lg:h-40 xl:h-44 2xl:h-44"
        >
          <p class="font-semibold mb-[10%] mt-[20%]">{{ $t("choose") }}</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center">
              <img
                :src="pokemonGif"
                alt="Image 1"
                @click="changeImage('rocket.gif')"
                class="object-cover max-h-[3.2em] sm:max-h-[3.2em] md:max-h-[3.2em] lg:max-h-[3.8rem] xl:max-h-[3.8rem] 2xl:max-h-[3.8rem] cursor-pointer"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                :src="pokemonGif2"
                alt="Image 2"
                @click="changeImage('rocket2.gif')"
                class="object-cover max-h-[2.2rem] sm:max-h-[2.2rem] md:max-h-[2.2rem] lg:max-h-[3em] xl:max-h-[3em] 2xl:max-h-[3em] cursor-pointer"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                :src="pokemonGif3"
                alt="Image 3"
                @click="changeImage('rocket3.gif')"
                class="object-cover max-h-[2.2rem] sm:max-h-[2.2rem] md:max-h-[2.2rem] lg:max-h-[3em] xl:max-h-[3em] 2xl:max-h-[3em] cursor-pointer"
              />
            </div>
            <div class="flex items-center justify-center">
              <img
                :src="pokemonGif4"
                alt="Image 4"
                @click="changeImage('rocket4.gif')"
                class="object-cover max-h-[2.2rem] sm:max-h-[2.2rem] md:max-h-[2.2rem] lg:max-h-[3rem] xl:max-h-[3rem] 2xl:max-h-[3rem] cursor-pointer"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div style="pointer-events: none">
    <div class="lines">
      <div class="line" v-for="i in 5" :key="i"></div>
    </div>

    <div
      class="pokemon-initial-container items-center justify-center animate-move-x-pokemon-initial bottom-[5.5%] flex bg-red-200"
    >
      <img
        v-if="selectedImage === 'rocket.gif'"
        :src="pokemonGif"
        alt="Rocket 2"
        class="fixed max-w-11 bottom-[1.8%]"
        :class="[isDark ? 'brightness-[0.65]' : 'brightness-[0.85]']"
      />
      <img
        v-if="selectedImage === 'rocket2.gif'"
        :src="pokemonGif2"
        alt="Rocket 2"
        class="fixed max-w-9"
        :class="[isDark ? 'brightness-[0.65]' : 'brightness-[0.85]']"
      />
      <img
        v-if="selectedImage === 'rocket3.gif'"
        :src="pokemonGif3"
        alt="Rocket 2"
        class="fixed max-w-9"
        :class="[isDark ? 'brightness-[0.65]' : 'brightness-[0.85]']"
      />
      <img
        v-if="selectedImage === 'rocket4.gif'"
        :src="pokemonGif4"
        alt="Rocket 2"
        class="fixed max-w-12"
        :class="[isDark ? 'brightness-[0.65]' : 'brightness-[0.85]']"
      />
    </div>
  </div>
  <div style="pointer-events: none">
    <div class="flex fixed bottom-[4%] justify-evenly w-full h-full">
      <img
        :src="cloud"
        v-for="i in 4"
        :key="i"
        alt=""
        class="min-w-[22rem] h-[25%] transform scale-x-[-1]"
        :class="[
          isDark
            ? 'brightness-[0.25] opacity-[0.5]'
            : 'brightness-[0.85] opacity-[0.15]',
        ]"
      />
    </div>
    <div
      class="pokemon-legendary-container items-center animate-move-x-pokemon-legendary justify-center flex"
    >
      <img
        v-if="!isDark"
        :src="dialga"
        class="brightness-[0.45] opacity-[0.65] max-w-[5rem] max-h-[5rem] scale-x-[-1]"
      />
    </div>

    <div
      class="pokemon-legendary-container items-center animate-move-x-pokemon-legendary justify-center flex"
    >
      <img
        v-if="isDark"
        :src="giratina"
        class="brightness-[0.35] scale-x-[-1] max-w-[6rem] max-h-[6rem]"
      />
    </div>
    <div
      class="no-select flex fixed bottom-[-24%] justify-between w-full h-full"
    >
      <img
        :src="mountain"
        class="object-cover w-full h-full sm:w-full md:w-9/10 lg:w-9/10 xl:w-9/10 2xl:w-9/10 xs:h-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-full"
        :class="[isDark ? 'brightness-[0.15]' : 'brightness-[1] opacity-[0.5]']"
      />
      <img
        :src="mountain"
        class="object-cover w-full h-full sm:w-full md:w-9/10 lg:w-9/10 xl:w-9/10 2xl:w-9/10 xs:h-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-full"
        :class="[isDark ? 'brightness-[0.15]' : 'brightness-[1] opacity-[0.5]']"
      />
    </div>

    <div class="no-select flex fixed bottom-[-1%] w-[100%] h-[8%]">
      <img
        :src="tree"
        v-for="i in 40"
        :key="i"
        alt=""
        :class="[isDark ? 'brightness-[0.45]' : 'brightness-[0.90]']"
      />
    </div>

    <div class="no-select flex fixed bottom-[0.5%] w-[100%] h-[7%] md:h-[8%]">
      <img
        :src="bush"
        v-for="i in 40"
        :key="i"
        alt=""
        :class="[isDark ? 'brightness-50' : 'brightness-[0.65]']"
      />
    </div>
    <div class="no-select flex fixed bottom-[-3.5%] w-[100%] h-[8%]">
      <img
        :src="grass"
        v-for="i in 40"
        :key="i"
        alt=""
        :class="[isDark ? 'brightness-[0.45]' : 'brightness-[0.90]']"
      />
    </div>
    <div class="no-select flex fixed bottom-[-5%] w-[100%] h-[8%]">
      <img
        :src="grass"
        v-for="i in 40"
        :key="i"
        alt=""
        class="scale-x-[-1]"
        :class="[isDark ? 'brightness-[0.45]' : 'brightness-[0.90]']"
      />
    </div>
  </div>
  <div
    class="absolute top-0 right-[5%] sm:right-[5%] md:right-[5%] lg:right-[10%] xl:right-[10%] 2xl:right-[10%] flex items-center"
  >
    <div class="flex flex-col items-center">
      <button
        class="flex items-center mx-2 mb-2 mt-5"
        @click="openLink('https://github.com/Jesus-Escala')"
      >
        <img
          :src="isDark ? darkModeIconGit : lightModeIconGit"
          alt="{{ $t('altGitHub') }}"
          class="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 icon transition-transform duration-300 transform hover:scale-110"
        />
      </button>

      <button
        class="flex items-center mb-2 mx-2"
        @click="openLink('https://www.linkedin.com/in/jesusescala')"
      >
        <img
          :src="isDark ? darkModeIconLink : lightModeIconLink"
          alt="{{ $t('altLinkdin') }}"
          class="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 icon transition-transform duration-300 transform hover:scale-110"
        />
      </button>

      <button
        class="flex items-center mb-2 mx-2"
        @click="openLink('https://wa.me/924762054')"
      >
        <img
          :src="isDark ? darkModeIconWssp : lightModeIconWssp"
          alt="{{ $t('altWssp') }}"
          class="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 icon transition-transform duration-300 transform hover:scale-110"
        />
      </button>

      <button
        class="flex items-center mx-2 mb-5"
        @click="openLink('mailto:jesusescalatrabajo@gmail.com')"
      >
        <img
          :src="isDark ? darkModeIconEmail : lightModeIconEmail"
          alt="{{ $t('altEmail') }}"
          class="h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-5 2xl:w-5 icon transition-transform duration-300 transform hover:scale-110"
        />
      </button>
    </div>
    <hr
      class="w-1 h-32 sm:h-32 md:h-32 lg:h-36 xl:h-36 2xl:h-36 bg-neutral-500 rounded"
    />
  </div>
</template>
