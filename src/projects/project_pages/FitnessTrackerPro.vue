<template>
  <div>
    <twoColumnTemplate :projectTitle="'Fitness Tracker App'" :author="'Kastrijot Syla'" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>Introducing the Fitness Tracker App—an all-in-one tool to help you crush your fitness goals! Whether you're tracking your macros, logging workouts, monitoring your weight, or staying on top of your progress, this app has got you covered.</p>
        <h3>High-Level Description</h3>
        <p>The Fitness Tracker App is a class project aimed at demonstrating proficiency in mobile app development and user interface design. It provides basic features for tracking fitness activities and serves as a learning tool for the development process.</p>
        <h3>Features</h3>
        <ul>
          <li>Macro tracking</li>
          <li>Workout logging</li>
          <li>Weight monitoring</li>
        </ul>
      </template>
      <template v-slot:story>
        <p>As a student passionate about fitness and technology, creating this app was an exciting challenge. I wanted to apply my classroom knowledge to develop a practical solution that could potentially benefit others in managing their fitness routines.</p>
        <h3>What I learned in order to make this project</h3>
        <p>Developing the Fitness Tracker App required me to learn various concepts in mobile app development, including UI/UX design, data management, and integration of external libraries. I also gained insights into project planning and collaboration through team discussions and feedback sessions.</p>
        <h3>How I structured my work plans and prioritized</h3>
        <p>Throughout the project, I followed a structured approach to prioritize tasks based on their importance and dependencies. Regular meetings with my classmates helped us stay aligned on goals and address any challenges that arose during development.</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>While working on this project, I encountered several challenges, including debugging complex code errors and optimizing performance on limited resources. Through collaboration with classmates and seeking guidance from instructors, I was able to overcome these obstacles and achieve satisfactory results.</p>
        <h3>Big “wins”</h3>
        <p>One of the biggest victories was successfully implementing the core features of the app and presenting a functional prototype during class demonstrations. It was rewarding to see our efforts translate into a tangible product that showcased our skills and creativity.</p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;">
          <a href="https://github.com/rpekash/Fitness-Tracker-App">Download the app</a>
        </div>
      </template>
    </twoColumnTemplate>
  </div>
</template>




  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import sampleImage from '../project_images/iosphone.png';
import sampleImage2 from '../project_images/fitness.png';
 import sampleVideo from '../project_videos/Iphone.mp4'

export default {
  name: 'FitnessTrackerPro',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "FitnessTrackerPro",
      author: "Kastrijot Syla",
      pictures: [sampleImage,sampleImage2],
      video: sampleVideo
    }
  },
  info: {
    title: 'FitnessTrackerPro',
    author: 'Kastrijot Syla',
    tags: ["Fitness", "Workout", "Tracking", "IOS", "Spring 2024"]
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