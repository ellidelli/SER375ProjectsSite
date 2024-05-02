<template>
    <div>
        <slideshowTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
            <template v-slot:slideshow>
                <vueper-slides fade :touchable="false" class="slideshow">
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
                </vueper-slides>
            </template>
            <template v-slot:description>
                <p>This is an apple app that gives users the opportunity to save memories about where they have traveled to
                 and their favorite memories. Users also have the ability to search resturants around them and see information 
                 on each resturant. </p>
            </template>
            <template v-slot:story>
                <p>I have a passion for traveling but I often find myself forgetting important memories and my favorite places that I visited.
                I wanted to create this app to help keep track of places that I have traveled to and amazing memories that I have made there. </p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>Before creating this app I had no background on Xcode or swift. This project helped me to learn Swift as well as using Xcode. 
                I wanted to challenge myself by adding in an API to learn how these work in Swift and Xcode. This was a great opportunity to learn 
                a new language and be able to work with open source projects. </p>
            </template>
            <template v-slot:links>
                <div style="padding-bottom: 10vh;">
                    <a href="https://github.com/dytlabs/TravelJournal">google</a>
                </div>
            </template>
        </slideshowTemplate>
    </div>
</template>
    
<script>
import slideshowTemplate from '../components/templates/SlideshowTemplate.vue';

//import images
import one from '../projects/project_images/collage.png';
//import two from '../projects/project_images/resturant.png';
//import three from '../projects/project_images/journal.png';

//import video
import video from '../projects/project_videos/travelDemoVideo.mp4'

// Import VueperSlides and VueperSlide from vueperslides
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'TravelJournalProject',
    components: {
        slideshowTemplate,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            projectTitle: "Travel Journal Project",
            author: "Gabby Pierce",
            video: video,
            slides: [
                {
                    image: one
                }
                //,
                //{
                   // image: two
                //},
                //{
                //    image: three
                //}
            ]

        }
    },
    info: {
        title: 'Travel Journal Project',
        author: 'Gabby Pierce',
        tags: ["Travel", "Journal", "Memories"]
    }
}
</script>

<style scoped>
.slideshow {
    padding-bottom: 10vh;
}

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
