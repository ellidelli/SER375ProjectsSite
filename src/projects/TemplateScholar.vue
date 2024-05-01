<template>
    <div>
      <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
        <template v-slot:description>
          <p>This program offers a one-stop shop for all academic needs. Whether it is automated formatting of 
            academic posters or helping you build a professional looking resume, Template Scholar has the resources 
            for you.</p>
        </template>
        <template v-slot:story>
          <p>This project originated from the constant need for students to be making professional looking presentations, 
            posters, and resumes. As a soon to be new graduate, I found myself constantly updating and fighting my resume. 
            This project works elimate the time spent formatting to allow users more time to be productive in other ways.
          </p>
        </template>
        <template v-slot:strugglesAndTriumphs>
          <p>This project turned out to be even larger than I thought. I originally started with one idea and it just kept 
            expanding to a website that has many different resources. My struggles in learning HTML, CSS, JavaScript and then 
            transfering and learning Vue tookmup much of my time. In addition, formatting a pdf export proved to take up much 
            more time than anticipated.
          </p>
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
  import twoColumnTemplate from '../components/templates/twoColumnTemplate.vue'
  import homepage_image from '../projects/project_images/tshome.png';
  import resume1_image from '../projects/project_images/tsresume1.png';
  import resume2_image from '../projects/project_images/tsresume2.png';
  import resume3_image from '../projects/project_images/tsresume3.png';
  // import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'
  
  export default {
    name: 'TemplateScholar',
    components: {
      twoColumnTemplate
    },
    data() {
      return {
        projectTitle: "Template Scholar",
        author: "Hannah Pfersch",
        pictures: [homepage_image, resume1_image, resume2_image, resume3_image],
        video: "sampleVideo" //get rid of the quotes when putting in your video variable
      }
    },
    info: {
      title: 'Template Scholar',
      author: 'Hannah Pfersch',
      tags: ["Vue", "Templates", "Open Source", "HTML", "CSS", "JavaScript", "Academic"]
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