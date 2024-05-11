<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>This website is designed for book readers to search for new books as well as track books that they would like
          to read in the future, are currently reading, and have finished reading. Readers are also able to set reading
          goals for themselves as well as view their past reading goals they have completed. </p>
      </template>
      <template v-slot:story>
        <p>MyLittleLibrary was created because I am an avid reader and wanted to create my application to track the
          books that I have read and want to read. My inspiration was the website Goodreads, which has a lot of similar
          objectives. However, I wanted to have a website without advertisements and wanted it to have a softer color
          tone and a cozier feeling towards it. To make this project I had to learn the different components of Vue,
          JavaScript, HTML, CSS, and the OpenLibrary API. As for my workplans, I found that I worked best when I had one
          mandatory goal to complete, and then had the freedom to work on whatever I wanted to for the rest of the
          sprint. However, each sprint consisted of working on one page at a time for my website, for example, the home
          page and the browse page. </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>One of the struggles that I had with this website was the style. I struggled with finding the right color
          combination and how I wanted the books to appear on my website. Another difficulty I encountered was learning
          Vue script and how I could simplify my code. The most recent significant challenge I had was figuring out how
          to make the book data transfer across the pages. I overcame this by using the local storage available on the
          web browser.</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://openlibrary.org/dev/docs/api/search">Open Library API</a>
          <br>
          <a href="https://github.com/sloanelauren/MyLittleLibrary">GitHub Repository</a>
          <br>
          <a href="https://www.goodreads.com/">Goodreads</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>

<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import Homescreen from '../project_images/MyLittleLibraryhomescreen.png';
import BrowseScreen from '../project_images/BrowseViewMLL.png';
import MyLittleLibraryVid from '../project_videos/MyLittleLibraryVid.mp4'

export default {
  name: 'MyLittleLibrary',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "MyLittleLibrary",
      author: "Lauren Sloane",
      pictures: [Homescreen, BrowseScreen],
      video: MyLittleLibraryVid
    }
  },
  info: {
    title: 'MyLittleLibrary',
    author: 'Lauren Sloane',
    tags: ["Vue", "Website", "JavaScript", "CSS", "HTML", "Spring 2024"]
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