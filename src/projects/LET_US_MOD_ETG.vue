<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>This is a mod for Enter the Gungeon titled Let Us Mod in the Gungeon. 
        This mod consists of two mod packs, one that has weapons and items, the other has a custom character, both are from my SER225 project LetUsCook. 
        The original SER225 project was heavily inspired by Enter the Gungeon</p>
      </template>
      <template v-slot:story>
        <p>This project came from my love of roguelike video games,
         which led me to create LetUsCook, a roguelike in the fall semester of 
         2023. When given the opportunity to work
         on an open source project, I knew I had to do something with Enter the Gungeon</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>There was a lot of struggling in this project. For one, 
        although there is a large modding community along with modding tools,
         there was one little problem... they were all for Windows computers... 
         and I have a Mac. After a time of struggling with different virtual desktops,
          I was graciously allowed to borrow a PC laptop from Professor Thimminer. Along with the Mac mess, 
          I also had momentary blockages, but when consulting the modding community through their Discord, all of them got fixed!</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://www.google.com">google</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
import sampleImage from '../projects/project_images/4.jpeg';
import sampleVideo from '../projects/project_videos/Video.mp4'

export default {
  name: 'LET_US_MOD_ETG',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "LET_US_MOD_ETG",
      author: "Riley Damasco",
      pictures: [sampleImage],
      video: sampleVideo //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'LET_US_MOD_ETG',
    author: 'Riley Damasco',
    tags: ["Sample", "Templates", "Open Source", "Help","Test"]
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