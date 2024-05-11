<template>
<div>
<slideshowTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
<template v-slot:slideshow>
<vueper-slides fade :touchable="false" class="slideshow">
<vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
</vueper-slides>
</template>
<template v-slot:description>
<p>Here's a brief description for your open source project:
"Open Source" is a vibrant, competitive multiplayer adventure game designed for players who enjoy strategy and fast-paced action.
In this grid-based game, players race against each other to collect and deliver food items like pizzas and coffees to hungry NPCs, while also gathering coins to boost their scores.
Each game session presents a dynamic world with randomly placed items, NPCs, and obstacles, ensuring a unique experience every time.
Players can customize their avatars with distinctive chef outfits and engage in real-time interactions facilitated by Firebase.
The game challenges players to navigate through blocked paths, strategize their moves, and become the ultimate provider and richest adventurer in a pixelated, lively setting.</p>
</template>
<template v-slot:story>
<p>Matt and Brian, having previously collaborated on a game project, decided to team up again for a new challenge in their open source course. Drawing from their past experience,
they wanted to build a game that blended strategic gameplay with real-time interactions, leading to the creation of a competitive multiplayer game set in a dynamic, grid-based world.
The duo focused on leveraging Firebase to enhance real-time player interactions, a technical step up from their last mission, Project Z. Matt was responsible for developing the engaging pixel art and user interface,
while Brian tackled the complex backend systems to ensure smooth gameplay and data synchronization. They structured their work into bi-weekly sprints, prioritizing tasks that would have the most immediate impact on gameplay and stability.

Regular testing sessions helped them identify and resolve issues quickly, keeping the project on track. This project not only sharpened their technical skills but also refined their ability to manage and execute a collaborative development project effectively.
Through "Open Source," Matt and Brian successfully created a game that was both fun to play and technologically robust, marking another successful collaboration in their growing portfolio.
</p>
</template>
<template v-slot:strugglesAndTriumphs>
<p>Throughout the development of "Open Source," Matt and Brian encountered several challenges that tested their skills and perseverance. One of the significant struggles was the integration of Firebase for real-time game interactions.
Ensuring that all players experienced smooth and synchronous gameplay across different devices proved to be more complex than anticipated. The duo spent countless hours researching best practices, experimenting with different data structures,
and optimizing network code to reduce latency.
Another challenge was designing the game's dynamic world. They wanted to ensure that each playthrough offered a unique experience, which required sophisticated logic for item and NPC placement.
This task became a puzzle of its own, as they had to balance randomness with strategic placement to keep the game engaging yet fair.
On the triumph side, mastering Firebase and seeing their game function flawlessly in real-time was a significant win. It not only boosted their confidence but also added a robust feature set that distinguished their game from many class projects.
Additionally, the positive feedback from early testers on the game's engaging mechanics and aesthetic feel was a major win. It validated their design choices and hard work, motivating them to polish the game further.
Overcoming these challenges taught Matt and Brian valuable lessons in persistence, technical problem-solving, and the importance of user feedback in game development. These experiences not only enhanced their technical prowess but also
equipped them with a deeper understanding of what it takes to create a compelling and technically sound multiplayer game.
</p>
</template>
<template v-slot:links>
<div style="padding-bottom: 10vh;">
<a href="https://www.youtube.com/watch?v=xhURh2RDzzg&feature=youtu.be">Creator</a>
</div>
</template>
</slideshowTemplate>
</div>
</template>

<script>
import slideshowTemplate from '../../components/templates/SlideshowTemplate.vue';

//import images
import one from '../project_images/screenshot1.png';
import two from '../project_images/screenshot2.png';


//import video
import video from '../project_videos/DeliveryDuelVideo.mp4'

// Import VueperSlides and VueperSlide from vueperslides
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
name: 'DeliveryDuel',
components: {
slideshowTemplate,
VueperSlides,
VueperSlide
},
data() {
return {
projectTitle: "Delivery Duel Project",
author: "Brian Wanamaker & Matt Nova",
video: video, //get rid of the quotes when putting in your video variable
slides: [
{
image: one
},
{
image: two
}
]

}
},
info: {
title: 'Delivery Duel',
author: 'Brian Wanamaker & Matt Nova',
tags: ["JavaScript", "Firebase", "Full Stack", "Spring 2024", "Game"]
}
}
</script>

<style scoped>
.slideshow {
padding-bottom: 10vh ;
}

a {
color: white ;
}

h1,
h2,
h3 {
color: white   ;
max-width: 90% ;
}

h3 {
padding-bottom: 5vh ;
}

p {
padding-bottom: 10vh ;
text-align: left     ;
max-width: 90%       ;
}

h1 {
padding-bottom: 2vh ;
}
</style>
