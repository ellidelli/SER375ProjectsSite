<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
import sampleImage from '../projects/project_images/webapp-ss.png';
import realvid from '../projects/project_videos/webapp-video.mp4'


export default {
  name: 'FinanceWebApp',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "FinanceWebApp",
      author: "Alex Power",
      pictures: [sampleImage],
      video: realvid 
    }
  },
  info: {
    title: 'FinanceWebApp',
    author: 'Alex Power',
    tags: ["Vue.js", "API", "Express.js", "Spring 2024"]
  }
}
</script>

<template>
    <div>
      <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
        <template v-slot:description>
          <p>This web app, intended to be a beginner project to learn underlying technologies such as Vue.js and Express, aimed 
            to replicate a paper trading app. The idea was use to use live market data and have people be able to make accounts. 
            This way, they could attempt various strategies before testing them in the real market and losing their money. 15 stocks
            can be searched via the search bar, and live market data will be fetched via an API to display on the website.
          </p>
        </template>
        <template v-slot:story>
          <p>As someone who is passionate about finance, I was motivated to see if I could create my own clone of Yahoo Finance that also
            implemented paper trading functionality. While I did not progress as far a long as I would have hoped, I hope to someday start 
            this from scratch and fully implement all the features, instead of just displaying live market data on a given stock. 
          </p>
        </template>
        <template v-slot:strugglesAndTriumphs>
          <p>There were a plethora of struggles during this project. For example, clean and responsive web design is definitely challening,
            and having a website appear the way you want it to be seems impossible. I would say this was my main setback throughout the duration
        of this project, and the reason why I was not able to get as far as I liked. Additionally, learning how to implement an Express server
        to handle API calls presented unique challenges I did not expect. However, through the process, I learned a ton of valuable skills, and 
    am glad I went down the path of implementation that I did.</p>
        </template>
        <template v-slot:links>
          <div style="padding-bottom: 10vh;">
            <a style="padding-right:10px;" href="ca.finance.yahoo.com">Yahoo Finance</a>
            <a href="https://github.com/alexpower9/option-selling-webapp.git">GitHub Repo</a>
          </div>
        </template>
      </twoColumnTemplate>
    </div>
</template>

<style scoped>
a {
  color: white;
}

h1, h2, h3 {
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

