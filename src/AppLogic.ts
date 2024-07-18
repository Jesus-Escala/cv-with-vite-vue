import { useDark, useToggle } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import darkModeIconGit from "./assets/icons/github-icon-B0B0B0.png";
import lightModeIconGit from "./assets/icons/github-icon-6B6B6B.png";
import darkModeIconEmail from "./assets/icons/email-icon-B0B0B0.png";
import lightModeIconEmail from "./assets/icons/email-icon-6B6B6B.png";
import darkModeIconWssp from "./assets/icons/wssp-icon-B0B0B0.png";
import lightModeIconWssp from "./assets/icons/wssp-icon-6B6B6B.png";
import darkModeIconLink from "./assets/icons/linkedin-icon-B0B0B0.png";
import lightModeIconLink from "./assets/icons/linkedin-icon-6B6B6B.png";

import darkModeIconBack from "./assets/icons/back-icon-B0B0B0.png";
import lightModeIconBack from "./assets/icons/back-icon-6B6B6B.png";
import darkModeIconFront from "./assets/icons/front-icon-B0B0B0.png";
import lightModeIconFront from "./assets/icons/front-icon-6B6B6B.png";
import darkModeIconMobile from "./assets/icons/mobile-icon-B0B0B0.png";
import lightModeIconMobile from "./assets/icons/mobile-icon-6B6B6B.png";
import darkModeIconTool from "./assets/icons/tool-icon-B0B0B0.png";
import lightModeIconTool from "./assets/icons/tool-icon-6B6B6B.png";

import pokemonGif from "./assets/icons/pokemon.gif";
import pokemonGif2 from "./assets/icons/pokemon2.gif";
import pokemonGif3 from "./assets/icons/pokemon3.gif";
import pokemonGif4 from "./assets/icons/pokemon4.gif";
import mountain from "./assets/icons/mountain.webp";
import bush from "./assets/icons/bush.png";
import cloud from "./assets/icons/cloud.gif";
import giratina from "./assets/icons/giratina.gif";
import dialga from "./assets/icons/dialga.gif";

import grass from "./assets/icons/grass.jpg";
import tree from "./assets/icons/tree.gif";

import download from "./assets/icons/download-icon-FFFFFF.png";
import send from "./assets/icons/plane-icon-FFFFFF.png";
import photo from "./assets/icons/profile-photo.jpg";
import cv from "../public/docs/CV.pdf";

export function logicPage() {
  /*DARK MODE*/
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const toggleClasses = computed(() => ({
    "translate-x-4": isDark.value,
    "translate-x-0": !isDark.value,
  }));

  /*PAGE ROUTES*/
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  function scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  /*NAV*/
  const isOpen = ref(false);
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

  /*NAV IMAGE SELECTED */
  const selectedImage = ref("pokemon.gif");
  const changeImage = (imageName: string): void => {
    if (selectedImage.value !== imageName) {
      selectedImage.value = imageName;
      localStorage.setItem("selectedImage", imageName);
    }
  };

  /*CHANGE LANGUAGE */
  function changeLocale(event: Event, $i18n: any) {
    const target = event.target as HTMLSelectElement;
    $i18n.locale = target.value;
  }

  onMounted(() => {
    const savedImage = localStorage.getItem("selectedImage");
    if (savedImage) {
      selectedImage.value = savedImage;
    }
  });

  return {
    /*DARK MODE */
    isDark,
    toggleDark,
    toggleClasses,
    /*LINKS PAGE */
    isOpen,
    openLink,
    toggleMenu,
    /*CHANGE IMAGE */
    selectedImage,
    changeImage,
    /*LANGUAGE */
    changeLocale,
    /*SOCIAL MEDIA ICONS */
    darkModeIconGit,
    darkModeIconEmail,
    darkModeIconWssp,
    darkModeIconLink,

    lightModeIconWssp,
    lightModeIconLink,
    lightModeIconGit,
    lightModeIconEmail,

    darkModeIconBack,
    darkModeIconFront,
    darkModeIconMobile,
    darkModeIconTool,

    lightModeIconBack,
    lightModeIconFront,
    lightModeIconMobile,
    lightModeIconTool,
    /*ROCKET GIF */
    pokemonGif,
    pokemonGif2,
    pokemonGif3,
    pokemonGif4,
    mountain,
    bush,
    tree,
    cloud,
    giratina,
    grass,
    dialga,
    photo,
    /*PAGE ICONS */
    download,
    send,
    cv,
    scrollToSection,
  };
}
