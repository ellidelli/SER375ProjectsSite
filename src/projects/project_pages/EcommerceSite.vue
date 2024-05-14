<template>
    <div>
      <twoColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
        <template v-slot:description>
            <p>This is a Vue-based e-commerce website designed for business-to-consumer transactions. It allows consumers to browse through various products, view detailed product information, add items to their shopping cart, and proceed with the checkout process. The website aims to provide a user-friendly shopping experience, with features such as product search, product categories, and a responsive design for optimal viewing on different devices. Additionally, it incorporates Vue's reactive framework to efficiently manage state and update the UI in real-time, providing a seamless and interactive shopping experience for customers.</p>
        </template>
        <template v-slot:story>
            <p>Before this semester, one of the projects I completed at my last internship was working on their WordPress website. WordPress is very user-friendly and doesn't require the user to know any programming. This allowed me, someone with no web experience, to edit their site with ease and overall, I found it fun to work on. Following that internship I was interested in pursuing web development, this time without the safeguards of the WordPress templates. Since the purpose of this project was to learn something new, this seemed like a perfect fit.</p>
            <p>I chose an e-commerce website specifically because of my interest in business and entrepreneurship. Since most businesses need websites, I saw an e-commerce site as a practical application of my web development skills. The new skills I learned to carry this all out include HTML, JavaScript, CSS, Vue, and Pinia.</p>
            <p>With each work cycle now finished, I was able to create a functional Vue website with multiple pages filled with selectable products that can be looked up through the search function and purchased through the cart. This was completed through the implementation of Pinia stores in Vue. While I wanted to add more components to the website, I hope to revisit this project in the future and continue where I left off.</p>
        </template>
        <template v-slot:strugglesAndTriumphs>
            <p>The biggest struggle of this project in its current form I'd say was getting to understand Vue as a framework. Prior to this project, I didn't know or understand what a framework was, and it took a while to figure it all out. Part of why Vue was hard to understand at first was because of the inconsistent tutorials available online. A lot of tutorials available online for Vue only work for Vue 2 and not Vue 3, which is the version I used. Because of this, Vue had a steeper learning curve than I originally anticipated. However, once I began understanding Vue, I was able to complete more work on the site, and I did it much quicker than before.</p>
            <p>The storage system was the Vue component I struggled with the most. Originally, I used VueX, and I had a lot of issues implementing that as a storage system for the cart feature. A lot of the time when a product was added to the cart, it would disappear when the page was refreshed. Once I started working with Pinia instead of VueX as the, the cart functioned properly.</p>
            <p>I think that the big win I had for Vue was getting the cart to function using the Pinia store. Getting this to work was huge for me because it took multiple work cycles to overcome this. My strategy for getting this to work was the same strategy I used throughout this project. I spent as much time as I can trying to figure out the problem utilizing online tutorials and trying to figure it out myself. If I still couldn't figure it out, I'd ask someone with more experience for help. If that didn't work, I'd make a judgement call to either come back to the problem later or try it again. Either decision made in that judgement call proved well for me in the end.</p>
        </template>
        <template v-slot:links>
            <div style="padding-bottom: 10vh;">
                <a href="https://b-regan11.github.io/Ecommerce-Site/ ">Live Webpage</a> | 
                <a href="https://github.com/b-regan11/Ecommerce-Site ">GitHub Repo</a>
            </div>
        </template>
      </twoColumnTemplate>
    </div>
  </template>
    
  <script>
  import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
  import homeImage from '../project_images/Ecommerce_Home.png';
  import searchImage from '../project_images/Ecommerce_Search.png';
  import cartImage from '../project_images/Ecommerce_Cart.png';
  import demoVideo from '../project_videos/Ecommerce_Demo.mp4'
  
  export default {
    name: 'EcommerceSite',
    components: {
      twoColumnTemplate
    },
    data() {
      return {
        projectTitle: "Ecommerce Site",
        author: "Bill Regan",
        githubUrl: 'https://github.com/b-regan11/Ecommerce-Site',
        pictures: [homeImage, searchImage, cartImage],
        video: [demoVideo] 
      }
    },
    info: {
      title: 'Ecommerce Site',
      author: 'Bill Regan',
      tags: ["CSS", "Frontend", "HTML", "JavaScript", "Node", "Pinia", "Spring 2024", "Vue", "Website"]
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