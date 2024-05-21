<template>
    <div class="data">
        <div class="header">
            <h1>{{ projectTitle }}</h1>
            <h3>by {{ author }}</h3>
            <GitHubButton class="github-button" :GitHubUrl="githubUrl"/>
        </div>
        <div class="container">
            <div class="left">
                <h1>What is this project?</h1>
                <slot name="description"> </slot>
                <h1>Story</h1>
                <slot name="story"> </slot>
                <h1>Struggles and Triumphs</h1>
                <slot name="strugglesAndTriumphs"> </slot>
                <h1>Helpful Links</h1>
                <div class="helpful-links">
                    <slot name="links"></slot>
                </div>
            </div>
            <div class="right">
                <div v-for="(picture, index) in pictures" :key="index">
                    <img :src="picture" alt="Project Image">
                </div>
                <div class="videoSide">
                    <video :src="video" controls type="video/mp4"></video>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import GitHubButton from '../GitHubButton.vue'

export default {
    name: 'twoColumnTemplate',
    props: [
        'projectTitle',
        'author',
        'githubUrl',
        'tags',
        'pictures',
        'video',
    ],
    components: {
        GitHubButton
    }
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

.github-button {
  margin-bottom: 40px !important;
}

.left {
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right {
    width: 50%;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right img {
    width: fit-content;
    max-width: 90%;
}

.right>.videoSide {
    width: 100%;
}

.right>.videoSide>video {
    width: 90%;
    padding-bottom: 10vh;
}

.left>.videoSide {
    width: 100%;
}

.left>.videoSide>video {
    width: 90%;
    padding-bottom: 10vh;
    align-items: center;
}

.left p {
    max-width: 90%;
}

.helpful-links {
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

img {
    padding-bottom: 5vh;
    max-height: 90vh;
}

video {
    max-width: 100%;
    max-height: 90vh;
}

@media screen and (max-width: 600px) {
    .container {
        flex-direction: column;
    }

    .data {
        padding: 2rem;
    }

    .left {
        width: 100%;
        float: center;
    }

    .right {
        width: 100%;
        float: center;
    }
}
</style>

