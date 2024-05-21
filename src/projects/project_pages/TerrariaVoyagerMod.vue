<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>The Terraria Mod project on GitHub, created by Andrew Labbe and Garrett Goldberg, 
          enhances the Terraria game by introducing new items, enemies, and biome.
          It aims to seamlessly integrate with the existing gameplay mechanics, offering new challenges and rewards. 
          Features include new armor sets, custom weapons, a unique biome, and improved game mechanics, all designed to keep the game fresh and engaging.
          The largest addition is the new biome that we have created. Sitting above in the sky, this new biome introduces a new survival mechanic, "suffocating",
          where the player must come prepared to tackle the elements of this new biome. But, if they're able to survive, they'll be met with three new ores, all of which 
          help enhance the gameplay experinece, and give the player a chance to challenge the vanilla bosses with new weaponry and armor sets. 
        </p>
      </template>
      <template v-slot:story>
        <p>The Terraria Mod project stemmed from a passion for Terraria and a desire to engage with its modding community. Being terraria players, and experiencing modded playthroughs,
          we wanted to take a swing at modding the game ourselves. We've always thought that mods could be better or different, so it made sense to try it ourselves, and learn
          the ins and outs of the game and its modding community.
          Developing this mod involved learning the Terraria API, understanding its core mechanics, and drawing inspiration from other mods. It also helped us learn more
          developer-centered skills, such as time management, research skills, and more. The big obstacle for us was learning the language that this game was developed in,
          which is C#. We had to learn the documentation for the language front to back, and were able to implement many different things when using this language for video games.
          Throughout the process, we structured our workplans in an efficient manner, with the goal of doing the core features as soon as possible. We started by figuring out the basics,
          such as creating armor and simple weapons. Then, as we developed further, we wanted to implement the biome ASAP, so that we could keep our project on track. Lastly,
          toward the end, we were able to focus more on graphics, which helped enhance the player experience of our game.
          </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>Key challenges included ensuring mod compatibility and resolving numerous bugs that affected gameplay and stability. 
          These were overcome through meticulous debugging and community engagement, enhancing the mods performance and reputation. 
          The success in overcoming these challenges reaffirmed my commitment to delivering quality content.
          One big win of our project was the biome implementation. While it was eaiser to figure out the bits and pieces of armor
          and weapons, implementing a biome and learning world generation was a huge task. Furthermore, implementing the suffocation
          mechanic, in order to add a challenge to the biome and not giving access to the new features too early. While world generation itself
          wasn't extremely difficult, the unique pieces such as the mountain caused many hiccups through our development process. 
          But, as the pieces came together, it was really exciting figuring out all the challenges such as this.
          </p>
      </template> 
      <template v-slot:links>
        <a href="https://store.steampowered.com/about/download">Install Steam</a>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import modImageA from '../project_images/VoyagerModIcon.jpg';
import modImageB from '../project_images/VoyagerModBiome.jpg';
import sampleVideo from '../project_videos/TerrariaTrailer.mp4'

export default {
  name: 'TerrariaVoyagerMod',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Terraria Voyager Mod",
      author: "Garrett Goldberg & Andrew Labbe",
      githubUrl: 'https://github.com/AndrewLabbe/Terraria-Mod',
      pictures: [modImageA, modImageB],
      video: sampleVideo //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Terraria Voyager Mod',
    author: 'Garrett Goldberg & Andrew Labbe',
    summary: 'Terraria Mod',
    tags: ["Game", "Game Modding", "Terraria", "Video Game", "Spring 2024"]
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