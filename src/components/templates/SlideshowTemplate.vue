<template>
    <div class="data">
        <div class="header">
            <h1>{{ projectTitle }}</h1>
            <h3>by {{ author }}</h3>
            <GitHubButton class="github-button" :GitHubUrl="githubUrl"/>
        </div>
        <slot name="slideshow"></slot>
        <div class="container">
            <div class="left">
                <h1>What is this project?</h1>
                <slot name="description"> </slot>
                <h1>Story</h1>
                <slot name="story"> </slot>
            </div>
            <div class="right">
                <h1>Struggles and Triumphs</h1>
                <slot name="strugglesAndTriumphs"> </slot>
            </div>
        </div>
        <video :src="video" controls></video>
        <h1>Helpful Links</h1>
        <slot name="links"></slot>
    </div>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import GitHubButton from '../GitHubButton.vue'

export default {
    components: { 
       GitHubButton 
    },
    props: [
        'projectTitle',
        'author',
        'githubUrl',
        'tags',
        'pictures',
        'video',
    ]
}
</script>

<style scoped>
.data {
    margin-top: 10vh;
}

.container {
    display: flex;
    flex-direction: row;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}

.header {
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.left {
    float: left;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right {
    float: right;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left p {
    max-width: 90%;
}

.right p {
    max-width: 90%;
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

video {
    width: 70%;
    padding-bottom: 10vh;
    max-height: 90vh;
}
</style>