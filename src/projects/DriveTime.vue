<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>Drive Time is a productivity app to help you get to places on time. You can add tasks with time contraints, 
        and the app will add them all together and set a timer for the tasks. on the main page you can search for any location, 
        and get the driving route and the estimated drive time, you can also go directly to apple maps app for directions to your location. </p>
      </template>
      <template v-slot:story>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>I struggled a lot with swift in the begining, this was my first project working in swift, so there was
        definatly a learning curve. user authorization was pretty difficult, and it took a long time to just get
         the authorization notifications to pop up.</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://github.com/miatroiano/AppProject">github</a>
        </div>npm install
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
import sampleImage from '../projects/project_images/ProjectSampleImage.jpeg';
// import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'

export default {
  name: 'DriveTime',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "Drive Time ",
      author: "Mia Troiano",
      pictures: [sampleImage],
      video: "sampleVideo" //get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'Drive Time ',
    author: 'Mia Troiano',
    tags: ["ios", "SwiftUI", "MapKit" , "Open Source", “Spring 2024"]
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