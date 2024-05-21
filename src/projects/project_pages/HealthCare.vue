<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>The Healthcare Companion App is a comprehensive mobile application developed for Android platforms, designed to
          simplify the management of health-related tasks. It provides users with the ability to easily schedule doctor’s
          appointments, book home sample collection services for lab tests, and order medications for home delivery. The
          app also offers extensive health-related information, including articles on disease prevention and healthy
          lifestyles. Built using Android Studio and integrating various health service APIs, the app is planned to
          incorporate AI-driven health recommendations in its upcoming versions to further personalize user care.</p>
      </template>
      <template v-slot:story>
        <p>The idea for the Healthcare Companion App emerged from personal experiences and the noticeable difficulties
          many face in managing their health care efficiently. Inspired to make a difference, the project was conceived to
          offer a streamlined, user-friendly platform that addresses these challenges. During the development process, I
          expanded my skills in Android Studio, delved deeper into Java programming. The project was managed using Agile
          methodologies, allowing for adaptive planning and priority adjustments based on immediate user feedback and
          technical needs. This flexible approach helped prioritize core functionalities such as appointment scheduling
          early in the development phase.</p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>Throughout the development of the Healthcare Companion App, integrating multiple, diverse healthcare services
          posed a significant technical challenge due to varying standards and reliability issues. This was overcome
          through rigorous testing and collaboration with service providers, ensuring seamless functionality. The
          project’s major triumph was the overwhelmingly positive feedback from its initial users, who praised the app's
          intuitive interface and the innovative home sample collection feature. This user acclaim was instrumental in
          securing additional funding and endorsements, significantly impacting the project's continuation and expansion.
        </p>
      </template>
      <template v-slot:links>
        <div style="padding-bottom: 10vh;" class="links-container">
          <a href="https://www.youtube.com/watch?v=JSwRqOZo2Y8">YouTube</a>
          <a href="https://developer.android.com/studio">Android Studio</a>
          <a href="https://github.com/shankaryellure/HealthCare.git">GitHub</a>
        </div>
      </template>
    </twoColumnTemplate>∏
  </div>
</template>
  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import sampleImage from "../project_images/HealthCare.png";
import sampleVideo from "../project_videos/HealthCare.mp4";

export default {
  name: 'HealthCare',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "HealthCare",
      author: "Shankar Yellure",
      githubUrl: 'https://github.com/shankaryellure/HealthCare/',
      pictures: [sampleImage],
      video: sampleVideo // get rid of the quotes when putting in your video variable
    }
  },
  info: {
    title: 'HealthCare',
    author: 'Shankar Yellure',
    summary: 'Healthcare Mobile App',
    tags: ["Java", "Android", "Spring 2024"]
  }
}
</script>
  
<style scoped>
.links-container a {
  color: white;
  margin-right: 15px;
  /* adds space between the links */
  text-decoration: none;
  /* optional: removes underline from links */
}

.links-container a:last-child {
  margin-right: 0;
  /* removes right margin from the last link */
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