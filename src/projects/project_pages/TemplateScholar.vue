<template>
    <div>
      <twoColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
        <template v-slot:description>
          <p>This program offers a one-stop shop for all academic needs. Whether it is automated formatting of 
            academic posters or helping you build a professional looking resume, Template Scholar has the resources 
            for you. This website targets students, specifically those in higher education and new graduates.</p>
        </template>
        <template v-slot:story>
          <p>This project originated from the constant need for students to make professional looking presentations, 
            posters, and resumes. I felt like I was performing similar tasks over and over. In addition, as a soon to be 
            new graduate I found myself constantly updating and fighting my resume. This project works eliminate the time 
            spent formatting to allow users more time to be productive in other ways. To develop this project I learned HTML, 
            CSS, JavaScript, and the tranfered everthing into Vue. This was a huge learning curve for me but a great experience
            realizing I can learn as I go and I don't have to know everything right away. I took my workplans one at a time and 
            had realistic expectations for my development.
          </p>
        </template>
        <template v-slot:strugglesAndTriumphs>
          <p>This project turned out to be even larger than I thought. I originally started with one idea and it just kept 
            expanding to a website that has many different resources. Before transfering to using the Vue framework my big idea was 
            difficult to maintain in separate HTML, CSS, and JS files. In addition, formatting a pdf export proved to take up much 
            more time than anticipated. I was only able to complete the resume template but hope to expand on this project in the future.
          </p>”
        </template>
        <template v-slot:links>
          <div style="padding-bottom: 10vh;">
            <a href="https://github.com/pferhan/Template-Scholar">GitHub Repository</a>
          </div>
        </template>
      </twoColumnTemplate>
    </div>
  </template>
    
  <script>
  import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
  import homepage_image from '../project_images/tshome.png';
  import resume1_image from '../project_images/tsresume1.png';
  import complete_resume from '../project_images/tsgeneratedresume.png';
  import sampleVideo from '../project_videos/tsvideodemo.mp4'
  
  export default {
    name: 'TemplateScholar',
    components: {
      twoColumnTemplate
    },
    data() {
      return {
        projectTitle: "Template Scholar",
        author: "Hannah Pfersch",
        githubUrl: 'https://github.com/pferhan/Template-Scholar',
        pictures: [homepage_image, resume1_image, complete_resume],
        video: sampleVideo
      }
    },
    info: {
      title: 'Template Scholar',
      author: 'Hannah Pfersch',
      summary: 'Template Document Creator Website',
      tags: ["Vue", "HTML", "CSS", "JavaScript", "Academic", "Spring 2024"]
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