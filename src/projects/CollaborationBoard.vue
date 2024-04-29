<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
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
                <a href="https://www.google.com">google</a>
            </template>
        </oneColumnTemplate>
    </div>
</template>
    
<script>
import oneColumnTemplate from '../components/templates/oneColumnTemplate.vue'
import sampleImage from '../projects/project_images/ProjectSampleImage.jpeg';
// import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'

export default {
    name: 'CollaborationBoard',
    components: {
        oneColumnTemplate
    },
    data() {
        return {
            projectTitle: "Collaboration Board",
            author: "Matthew Merritt and Michael Merritt",
            pictures: [sampleImage, sampleImage],
            video: "sampleVideo" //get rid of the quotes when putting in your video variable
        }
    },
    info: {
        title: 'Collaboration Board',
        author: 'Matthew Merritt and Michael Merritt',
        tags: ["React", "Next.js", "TypeScript", "JavaScript", "Full-stack", "Frontend", "Backend", "MongoDB", "WebSockets", "Real-time Chat", "Kanban Board", "react-dnd"]
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
}

h3 {
    padding-bottom: 5vh;
}

p {
    padding-bottom: 10vh;
    text-align: left;
}

h1 {
    padding-bottom: 2vh;
}
</style>
    