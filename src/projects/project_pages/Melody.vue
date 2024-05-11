<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>Melody is a social music platform designed to help music listeners track the music they love. Users with Spotify accounts
        can log into Melody and begin rating music right away. <br><br> The novelty is in the way Melody determines song ratings. 
        Commonly, users are asked to rate the song on a numeric scale. However, Melody finds songs you have already rated and forces you to pick them against eachother - resulting in a fun
        user experience. Melody then assigns a rating on a 0.0-10.0 scale for you based on your choices.<br><br>
        Additionally, Melody has a social aspect where friends can connect with eachother and see their ratings of songs as well. 
        </p>
      </template>
      <template v-slot:story>
        <p>Melody is heavily inspired by a food rating app called Beli. The rating system in Melody is identical to that of Beli, with users rating things against eachother rather than independently on a numeric scale. I really like to listen to music, so I thought it would be a fun idea to try and implement Beli's rating idea in this way.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>This was my first time using NextJS, NextAuth (for session management), and honestly React. It was also my first large web-app.
        NextJS particularly has alot of interesting caveats with server-side and client-side rendering having to be explicitly specified.
        Authentication using the Spotfiy API was also something that took a large chunk of time. Overall, I'm glad I chose this project
        because it gave me a good experience in creating web applications and the logic of web development. However, due to learning so many new things, Melody is still not in a fully realized state (5/1/24).<br><br>
        The app is currently in development, and some of the features described may not be implemented. The link to
        the Vercel-hosted website is below. Please note that this project is still in development and updates to the project may break
        the website until further update.
        </p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://melody-kappa-five.vercel.app/">Website (in development)</a>
          <span> - </span>
          <a href="https://github.com/Anton-Petrenko/melody">GitHub</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import sampleImage from '../project_images/melody.jpg';
import sampleVideo from '../project_videos/MelodyVideo.mov'

export default {
  name: 'Melody',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Melody",
      author: "Anton Petrenko",
      pictures: [sampleImage],
      video: sampleVideo //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Melody',
    author: 'Anton Petrenko',
    tags: ["NextJS", "Music", "React", "Spring 2024"]
  }
}
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
  text-align: left;
  max-width: 90%;
}

h1 {
  padding-bottom: 2vh;
}
</style>