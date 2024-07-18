<script lang="ts" setup>
import NavBgContainer from "./NavBgContainer.vue";
import Presentation from "./Presentation.vue";
import AboutMe from "./AboutMe.vue";
import Skills from "./Skills.vue";
import Contact from "./Contact.vue";
</script>

<template>
  <div>
    <NavBgContainer />
  </div>
  <div id="presentation">
    <Presentation />
  </div>
  <div id="aboutme">
    <AboutMe />
  </div>
  <div id="skills">
    <Skills />
  </div>

  <div id="contact">
    <Contact />
  </div>
</template>
