<template>
  <div>
    <oneColumnTemplate
      :projectTitle="projectTitle"
      :author="author"
      :githubUrl="githubUrl"
      :pictures="pictures"
      :video="video"
    >
      <template v-slot:description>
        <p>
            This Minecraft Mod is built using the Minecraft Forge Modding API for Minecraft version 1.20.
            This mod allows players to use ice skates to move faster on special ice blocks when wearing 
            ice skates, and also adds a hockey stick weapon that can be used like a bow and arrow..
        </p>
      </template>
      <template v-slot:story>
        <p>
            I chose to make a minecraft hockey mod because hockey and minecraft are both huge parts of my childhood.
            I figured what better way to pay hommage to two of my favorite pastimes than to combine them into one. Not to
            mention the Quinnipiac Bobcats are one of the best Division 1 hockey teams in the country.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          Learning how to add features to such an enourmous game like Minecraft has many challenges. Just getting 
                comfortable with the API and how file structures are set up is a challenge of itslef. fortunately, there is 
                an enourmous Minecraft modding community with plenty of people willing to help and planety of youtube tutorials.
        </p>
      </template>
      <template v-slot:links>
        <a href="https://github.com/AidanMountain/AidansMod.git">Aidans Mod GitHub</a>
        <a href="https://www.youtube.com/watch?v=55qUIf3GMss&list=PLKGarocXCE1H9Y21-pxjt5Pt8bW14twa-">Tutorial</a>
      </template>
    </oneColumnTemplate>
  </div>
</template>

<script>
import oneColumnTemplate from "../../components/templates/oneColumnTemplate.vue";
import sampleImage from "../project_images/AidansModPhoto1.png";
import sampleVideo from '../project_videos/AidansModVideo.mp4'

export default {
  name: "OneColumnSampleProject",
  components: {
    oneColumnTemplate,
  },
  data() {
    return {
      projectTitle: "Aidans Mod",
      author: "Aidan Mountain",
      githubUrl: 'https://github.com/AidanMountain/AidansMod',
      pictures: [sampleImage],
      video: sampleVideo
    };
  },
  info: {
    title: "Aidans Mod",
    author: "Aidan Mountain",
    summary: "Minecraft Mod",
    tags: ["Minecraft", "Game Modding", "Hockey", "Java", "Spring 2024"],
  },
};
</script>

<style scoped>
a {
  color: white;
}

h1,
h2,
h3 {
  color: white;
}

h3 {
  padding-bottom: 5vh;
}

p {
  padding-bottom: 10vh;
  text-align: left;
}

h1 {
  padding-bottom: 2vh;
}
</style>
