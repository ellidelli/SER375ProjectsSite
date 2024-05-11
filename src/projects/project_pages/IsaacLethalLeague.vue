<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>A mod for The Binding of Isaac: Repentance that adds content inspired by Lethal League Blaze.
          [As of 4/27/24] Adds Candyman as a playable character, with a tainted variant, alongside 6 new items (with External Item Description compatibility).
          More content may come in the future! NOTE: Requires the REPENTOGON mod to run, linked below.</p>
      </template>
      <template v-slot:story>
        <p>In 2023 my friend James "VideoJames" Cioppa and I, fans of both Isaac and Lethal League, had the idea for this mod.
          He made Candyman's player sprite, but I didn't have the time to make the mod once school started.
          Thankfully, this class ended up being the perfect opportunity to revive the idea.
          I learned some Lua, XML, and brushed off my pixel art skills in order to make the mod a reality.</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>For as well documented as it is, Isaac has a very interesting modding API.
          Many seemingly simple effects are actually incredibly complex to implement when modded.
          Additionally, I needed to do much more pixel art than I expected due to each item requiring at least two sprites,
          and all of the game's text being spritework, not a font.
          Not every aspect of the mod was this complex though, and the game has an active modding community that was wonderful to refer to.</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3233922664">Steam Workshop Page</a>
          <a href="https://repentogon.com/index.html">REPENTOGON</a>
          <a href="https://wofsauge.github.io/IsaacDocs/rep/">Isaac Lua API Documentation</a>
          <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=836319872">External Item Descriptions Steam Workshop Page</a>
          <a href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/">The Binding of Isaac: Repentance</a>
          <a href="https://store.steampowered.com/app/553310/Lethal_League_Blaze/">Lethal League Blaze</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import screen1 from '../project_images/screen1.jpg'
import screen2 from '../project_images/screen2.jpg'
import video1 from '../project_videos/video1.mp4';

export default {
  name: 'IsaacLethalLeague',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Isaac Lethal League",
      author: "Marcus Ferreira",
      pictures: [screen1, screen2],
      video: video1 //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Isaac Lethal League',
    author: 'Marcus Ferreira',
    tags: ["Lua", "XML", "Open Source", "TBOI: Repentance", "Lethal League Blaze", "Video Game", "Spring 2024"]
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