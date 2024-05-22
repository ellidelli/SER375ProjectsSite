<template>
    <div>
        <slideshowTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
            <template v-slot:slideshow>
                <vueper-slides fade :touchable="false" class="slideshow">
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
                </vueper-slides>
            </template>
            <template v-slot:description>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
                    quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
                    a, commodi debitis! Ducimus.</p>
            </template>
            <template v-slot:story>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
                    quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
                    a, commodi debitis! Ducimus.</p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
                    quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
                    a, commodi debitis! Ducimus.</p>
            </template>
            <template v-slot:links>
                <a href="https://www.google.com">Google</a>
                <a href="https://www.qu.edu">Quinnipiac</a>
            </template>
        </slideshowTemplate>
    </div>
</template>
    
<script>
import slideshowTemplate from '../../components/templates/SlideshowTemplate.vue';

//import images
import one from '../project_images/1.png';
import two from '../project_images/2.png';
import three from '../project_images/3.png';

//import video
import sampleVideo from '../project_videos/sample.mp4'

// Import VueperSlides and VueperSlide from vueperslides
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'SlideshowSampleProject',
    components: {
        slideshowTemplate,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            projectTitle: "Slideshow Sample Project",
            author: "John Smith",
            githubUrl: 'www.github.com',
            video: sampleVideo,
            slides: [
                {
                    image: one
                },
                {
                    image: two
                },
                {
                    image: three
                }
            ]

        }
    },
    info: {
        title: 'Slideshow Sample Project',
        author: 'John Smith',
        summary: "Example Project",
        tags: ["Sample", "Templates", "Open Source", "Help", "Spring 2024"]
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
