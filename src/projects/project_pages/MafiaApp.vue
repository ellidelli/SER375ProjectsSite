<template>
  <div>
    <oneColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>
          This is an iOS app for playing the party game “Mafia”.
          Each player joins from their phone and the software moderates the game.
          At the start each player is assigned a random role and the game proceeds to go through night and day cycles.
          During the night, players use their respective powers. (The mafia can kill someone, the doctor can save someone
          etc.)
          During the day, players vote for who should be eliminated.
          The game continues until there is a winner according to the rule of Mafia.
        </p>
      </template>
      <template v-slot:story>
        <p>
          This project was inspired by my love of social games. My fondest memories involve playing games with friends,
          especially ones that drew everyone in and got them involved. Mafia was always the epitome of this.
          I love how it tests acting skills and analytical skills and how it sometimes erupts into heated back and
          fourths. However, it does come with a caveat, one person has to sit out to moderate the game.
          It struck me that the moderator’s tasks are completely robotic, so why shouldn’t a robot do them? This exactly
          what I came to fix, with this app everyone can join in the game and the software does the technical work.
          Additionally, it avoids the long periods where players have to keep their eyes closed as they wait for others to
          go. Mafia seems like it was meant to have an app. So here it is, the code runs the game while the players get to
          focus on playing.

          In order to do this project I had to learn Swift, Firebase, and GitHub. But more generally, I learned how to
          develop the front-end and back-end of an app. These skills are valuable and will continue to come in handy.

          In the beginning I was unsure of how to structure the project. I wasn’t yet familiar with app development so it
          was difficult to predict how long each thing would take. In the end however, a wonderful structure fell into
          place.
          The first few work-cycles were spent implementing the fundamentals of an app, both on the front-end and
          back-end. The remaining cycles were spent implementing the game.
          This was done in three parts; One, writing out the game logic on paper; Two, creating game-play functions that
          communicate with the back-end; Three, creating the game itself.
          This turned out to be a great structure and I plan to return to it in future app development.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          The biggest struggle for me was learning new technology from scratch. This project required me to step way out
          of my comfort zone, and to jump in to tasks without knowing how to finish them.
          At the beginning I would be held back by minor syntax and technical errors and it was only through countless
          google searches and YouTube tutorials that I managed to move forward.
          However, at the end of the project I finally had enough skills and I was able to move much quicker towards the
          finish line. There were accomplishments along the way that encouraged the process.
          One notable one was when I connected the app to firebase for the first time and sent information from one phone
          to another. I was also fortunate to have a great professor who provided both technical help and encouragement.
        </p>
      </template>
      <template v-slot:links>
        <a href="https://firebase.google.com/docs">Firebase Docs</a>
        <a href="https://www.youtube.com/@SwiftfulThinking">Swiftful Thinking Channel</a>
        <a href="https://www.youtube.com/playlist?list=PLwvDm4Vfkdphl8ly0oi0aHx0v2B7UvDK0">Swift Firebase Tutorial Playlist</a>
      </template>
    </oneColumnTemplate>
  </div>
</template>

<script>
import oneColumnTemplate from "../../components/templates/oneColumnTemplate.vue";
import sampleImage1 from "../project_images/sf_mafia_1.png";
import sampleImage2 from "../project_images/sf_mafia_2.png";
import sampleImage3 from "../project_images/sf_mafia_3.png";
import sampleImage4 from "../project_images/sf_mafia_4.png";
import sampleVideo from '../project_videos/mafiaDemoCompressed.mp4';

export default {
  name: "MafiaApp",
  components: {
    oneColumnTemplate,
  },
  data() {
    return {
      projectTitle: "Mafia App",
      author: "Sam Feld",
      githubUrl: 'https://github.com/shmulif/Mafia',
      pictures: [sampleImage1, sampleImage2, sampleImage3, sampleImage4],
      video: sampleVideo
    };
  },
  info: {
    title: "Mafia App",
    author: "Sam Feld",
    summary: 'Mafia Game Mobile App',
    tags: ["Spring 2024", "iPhone", "iOS", "Swift", "SwiftUI", "Xcode", "Firebase", "Game", "Mafia", "Multiplayer"],
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
