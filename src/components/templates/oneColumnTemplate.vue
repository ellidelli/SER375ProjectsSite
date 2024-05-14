<template>
  <div class="data">
    <div class="header">
      <h1 class="project-title">{{ projectTitle }}</h1>
      <h3 class="author">by {{ author }}</h3>
      <GitHubButton class="github-button" :GitHubUrl="githubUrl"/>
    </div>
    <div class="container">
      <h1>What is this project?</h1>
      <slot name="description"> </slot>
      <h1>Story</h1>
      <slot name="story"> </slot>
      <h1>Struggles and Triumphs</h1>
      <slot name="strugglesAndTriumphs"> </slot>
      <div v-for="(picture, index) in pictures" :key="index">
        <img :src="picture" alt="Project Image" />
      </div>
      <video :src="video" controls></video>
      <h1>Helpful Links</h1>
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
import GitHubButton from '../GitHubButton.vue'

export default {
  name: "oneColumnTemplate",
  props: [
    "projectTitle",
    "author",
    "githubUrl",
    "tags",
    "pictures",
    "video",
  ],
  components: {
    GitHubButton
  },
};
</script>

<style scoped>
.data {
  margin-top: 10vh;
}

.header {
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-title {
  font-size: 45px;
}

.author {
  margin-bottom: 10px;
}

.github-button {
  margin-top: 40px !important;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 5vh 10vw 10vh 10vw;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.container h1 {
  font-size: x-large;
}

video {
  width: 100%;
  padding-bottom: 10vh;
}

.left p {
  max-width: 90%;
}

h1,
h2,
h3 {
  color: white;
}

p {
  padding-bottom: 10vh;
  text-align: left;
}

h1 {
  padding-bottom: 2vh;
}

img {
  padding-bottom: 5vh;
  max-width: 100%;
  max-height: 90vh;
}

video {
  padding-bottom: 5vh;
  max-width: 100%;
  max-height: 90vh;
}
</style>
