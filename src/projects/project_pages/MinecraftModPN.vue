<template>
    <div>
        <slideshowTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
            <template v-slot:slideshow>
                <vueper-slides fade :touchable="false" class="slideshow">
                    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
                </vueper-slides>
            </template>
            <template v-slot:description>
                <p>
                    <h1>Desription</h1>
                    This Minecraft mod covers multiple aspects of the game from custom key binding, all the way to eating a new strawberry item.
                    There is a new creative tab menu that has all of the new materials, blocks and items that were added in the mod.
                    
                    <h1>New Mods</h1>
                    The new items,blocks, etc. are: 
                    strawberries/strawberry crop,ignitium ore, ignitium block, jump block, water hud, new lamp block, 
                    3 new paintings, ore generation across 3 dimensions, and a new custom key bind.
                </p>
            </template>
            <template v-slot:story>
                <p>
                    <h1>Why I chose this</h1>
                    Minecraft has always been my favorite game since I was a little kid. I figured since we've been learning java since freshman year,
                    modding Minecraft 1.19 java edition would be a fun challenge, and give me a reason to play more Minecraft.

                    <h1>What I had to learn</h1>
                    The first thing I had to learn was how to install forge, and then start learning how to create and register items and blocks.
                    Once I got familiar with adding items and blocks I started adding custom mechanics. Once I learned those couple things everything
                    became a lot easier.
                </p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>
                    <h1>Something I struggled with and my greatest triumph</h1>
                    The major struggle I had was adding ore generation. This took me multiple days, and a ton of attempts before finally getting everything
                    right. With all of the new files that I had to add, this opened a lot of opportunity for typos and other simple mistakes. When I got to
                    the end of making ore generation, the Ender ore wouldn't display the correct texture. I spent hours and hours changing things, only for
                    the error to be a missing underscore.
                    My greatest Triumph during this was making the textures. I'm not very good at art and color theory, but I feel like I really outdid my
                    usual standards.
                </p>
            </template>
            <template v-slot:links>
                <a href="https://www.youtube.com/watch?v=LpoSy091wYI">Minecraft Modding Tutorial</a>
                <a href="https://www.reddit.com/r/CreateMod/comments/12y9hc1/create_mod_ore_distributions/">Create Ore Mod Q&A</a>
                <a href="https://discord.gg/UvedJ9m">Minecraft Modding Discord</a>
                <a href="https://forums.minecraftforge.net/">Minecraft Modding Forums</a>
            </template>
        </slideshowTemplate>
    </div>
</template>
    
<script>
import slideshowTemplate from '../../components/templates/SlideshowTemplate.vue';

//import images
import one from '../project_images/castle (1).png';
import two from '../project_images/ignitium_block (1).png';


//import video
import video from '../project_videos/ModDemo.mov';

// Import VueperSlides and VueperSlide from vueperslides
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'MinecraftModPN',
    components: {
        slideshowTemplate,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            projectTitle: "Minecraft Mod PN",
            author: "Philip nora",
            githubUrl: 'https://github.com/PhilipN27/Forge1.19Mod',
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
        title: 'Minecraft Mod PN',
        author: 'Philip Nora',
        summary: 'Minecraft Mod',
        tags: ["Minecraft", "Java", "Game Modding", "Spring 2024"]
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
