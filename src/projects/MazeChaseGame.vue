<template>
  <div>
    <twoColumnTemplate
      :projectTitle="projectTitle"
      :author="author"
      :pictures="pictures"
      :video="video"
    >
      <template v-slot:description>
        <p>
          It is a two part project that has the goal of being a one part
          project.

          <h1>Part 1</h1>
          The first part is a website built with react and express.js.
          The goal of the site is to be a place holder website for a webGL game.
          The site currently is set up with websocket room and chat
          functionality and users joined display (Shown in photos).
          <a href="https://github.com/Jaysalgado/stp.git">Link to Repository</a>

          <h1>Part 2</h1>
          The second part is a multiplayer maze chase unity game that has a "enemy" player attempt
          to destroy all the other players by making contact (Shown in video).
            <a href="https://github.com/Jaysalgado/game.git">Link to Repository</a>


        </p>
      </template>
      <template v-slot:story>
        <p>
        The idea originated from wanting to get a deeper understanding and practical experience with 
        websockets and game development. In order to complete that task I had to learn about websockets,
        unity mulitplayer developement, and C#.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          The biggest struggle was understanding how to code for the unity multiplayer solution 
          netcode for gameobjects. This was due to not having prior experience with server and client 
          side code being contained in the same file.
        </p>
      </template>
      <template v-slot:links>
        <div>
          <a href="https://docs-multiplayer.unity3d.com/netcode/current/about/">Netcode for gameobjects</a>
        </div>
        <div>
          <a href="https://learn.unity.com/?_gl=1%2Ah530y3%2A_gcl_aw%2AR0NMLjE2MzY3MTY5ODMuQ2p3S0NBaUF2cmlNQmhBdUVpd0E4Q3M1bGFJenM2UXZhV2RxendXU3cwSUlFN3ZYLXBrLTgySU50QWRTTk5acEl4dThCUGZPMnBFeTFSb0M5ZDhRQXZEX0J3RQ..%2A_gcl_dc%2AR0NMLjE2MzY3MTY5ODMuQ2p3S0NBaUF2cmlNQmhBdUVpd0E4Q3M1bGFJenM2UXZhV2RxendXU3cwSUlFN3ZYLXBrLTgySU50QWRTTk5acEl4dThCUGZPMnBFeTFSb0M5ZDhRQXZEX0J3RQ..&_ga=2.182193959.1225568882.1643885899-337911776.1601136010">Learn Unity</a>
        </div>
        <div>
          <a href="https://socket.io/">Websocket library used</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>

<script>
import twoColumnTemplate from "../components/templates/twoColumnTemplate.vue";
import sampleImage from "../projects/project_images/P1.png";
import sampleImage2 from "../projects/project_images/P2.png";
import sampleVideo from "../projects/project_videos/WrkCompleted6.mov";

export default {
  name: "MazeChaseGame",
  components: {
    twoColumnTemplate,
  },
  data() {
    return {
      projectTitle: "Maze Chase Game",
      author: "Jay Salgado",
      pictures: [sampleImage, sampleImage2],
      video: sampleVideo, 
    };
  },
  info: {
    title: "Maze Chase Game",
    author: "Jay Salgado",
    tags: ["Unity", "Websockets", "React.js", "Express.js", "C#","Netcode for gameobjects", "Open Source", "Multiplayer Game", "Spring 2024"],
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
  max-width: 90%;
}

h3 {
  padding-bottom: 5vh;
}

p {
  padding-bottom: 10vh;
  text-align: center;
  max-width: 90%;
}

h1 {
  padding-bottom: 2vh;
}
</style>
