<template>
    <div>
        <twoColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>Supptrack is an app for NCAA athletes and military personnel to monitor supplement ingredients. Users can
                    scan barcodes of supplements and see if they are safe to use, get personalized plans, and discover new
                    products.</p>
            </template>
            <template v-slot:story>
                <p>Last semester I had a friend approach me and ask if I could make her an iOS app for a project that she
                    and some classmates had been working on. At the time I knew nothing about iOS programming so I said no
                    but I really liked the idea for the app so when given the opportunity to learn iOS and swift I decided
                    to give it a try.</p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>I really enjoyed programming swift and I was able to pick it up pretty quickly. Working with the API to
                    get a list of ingrdients to appear after scanning the barcode was definitely the biggest struggle and it
                    took a few tries to get that right.</p>
            </template>
            <template v-slot:links>
                <div style="padding-bottom: 10vh;">
                    <a href="https://github.com/Taylorlea43/SuppTrackSwtift">Github Repo</a><br>
                    <a href="https://firebase.google.com/docs">Firebase Documentation</a><br>
                    <a href="https://sortablejs.github.io/Vue.Draggable/#/simple">Draggable Vue components</a><br>
                    <a href="https://github.com/heart/CarBode-Barcode-Scanner-For-SwiftUI">Carbode</a>
                </div>
            </template>
        </twoColumnTemplate>
    </div>
</template>

<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import SupptrackImage2 from '../project_images/SupptrackImage2.png';
import SupptrackImage3 from '../project_images/SupptrackImage3.png';
import SupptrackVideo from '../project_videos/supptrackVideo.mp4';

export default {
    name: 'SuppTrack',
    components: {
        twoColumnTemplate
    },
    data() {
        return {
            projectTitle: "SuppTrack",
            author: "Taylor Lea",
            pictures: [SupptrackImage2, SupptrackImage3],
            video: SupptrackVideo
        }
    },
    info: {
        title: 'SuppTrack',
        author: 'Taylor Lea',
        tags: ["iOS", "Swift", "API", "Spring 2024"]
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

li {
    color: white;
    padding-bottom: 10vh;
    text-align: left;
    padding-bottom: 5px;
    max-width: 90%;
}

h1 {
    padding-bottom: 2vh;
}
</style>