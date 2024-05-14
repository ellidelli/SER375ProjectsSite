<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>This project aims to balance and change Shulk in the Super Smash Bros. Ultimate
                    known as HDR. I did this by adding many more tools to his moveset that greatly impact
                    his effectivenss in game.</p>
                <h3>Monado Art Adjustments</h3>
                <p>The Monado Arts are a key component of Shulk's moveset.
                    The art allow for Shulk to change his stats on the fly, allowing him to
                    run faster, jump higher, do more damage, et cetera. These arts last for a
                    small period of time and take around 16-18 seconds to recharge.
                    I changed this functionality by making it so that hitting the opponent will reduce the recharge time.</p>
                <h3>Hit Cancel With Monado Arts</h3>
                <p>In the base game, it would normally have to wait until the move you were doing was finished before changing arts.
                    This made it very difficult to change monado arts during a combo. I made it such that when you hit someone with a normal attack,
                    you can use Shulk's monado arts to cancel the move that was happening. This allows Shulk players to do more complex combos.</p>
                <h3>Forward Tilt Change</h3>
                <p>Shulk's forward tilt attack as a simple swing in the original version of the game.
                    While the move is effective, it's missing a key feature that other characters have.
                    Some characters have the ability to slighty angle their forward tilt. Ike has a forward tilt similar to Shulk that has this.
                    In this project, I have essentially given Ike's foward tilt to Shulk, giving him the ability to angle his forward tilt.</p>
                <h3>Jump Cancel Out Of Down Tilt</h3>
                <p>It's important for characters to have the ability to start their combo's on the ground and continue them in the air.
                    Despite this importance, Shulk cannot do this at all. All of his grounded moves either don't send the opponent in the right direciton
                    or have too much end lag to be able to lead into any aerial options. In this project, I have added the ability to use jump to cancel out of Shulk's Down Tilt.
                    This allows for Shulk to follow up in the air with an attack after hitting the opponent with down tilt. This greatly enhances Shulk's combo potential.</p>
                <h3>Up Throw Combo</h3>
                <p>I adjusted Shulk's up throw such that he can follow up in the air with an attack. This only works while Shulk is in his "Jump" art</p>
                <h3>Visual Mods</h3>
                <p>I used Cattail's "Godcleaver Shulk" mod to make Shulk look like he does in "Xenoblade Chronicles 3 - Future Redeemed"</p>
                <h3>Additional Changes</h3>
                <p>I changed some of the attributes of Shulk in the interest of balance. I buffed the knockback growth of Shulk's foward smash attack.
                   I adjusted the base damage of Shulk's forward aerial attack just to ensure that the damage can break through recoveries with armor.
                   As a joke, I nerfed many of the attributes for Pit because one of my friends is a top 40 player in HDR and he mains Pit.</p>
            </template>
            <template v-slot:story>
                <p>I came up with the idea for this project last semester. A friend of mine was introducing the HDR mod for Super Smash Bros. Ultimate to me.
                    I had tried to play my main, Shulk, in this mod, but I found that he had actually sucked.
                    Many other characters had in depth reworks done to them, making them very overpowered. However, Shulk had barely been touched
                    In that moment, I wanted to take things into my own hands and rework Shulk in my own image.</p>
                <h3>What I learned</h3>
                <p>I learned the following technologies for this project:
                    <ul>
                        <li>Rust</li>
                        <li>Skyline</li>
                        <li>Smashline 1&2</li>
                    </ul>
                    I also had to learn other Super Smash Bros. Ultimate modding techniques such as animation swapping.</p>
                <h3>Prioritization</h3>
                <p>I prioritized tasks by difficulty. I prioritized a lot of my difficult tasks first because there was always the chance that I wouldn't get something working by the end of a given workplan. This worked out as I was able to get the features that I really wanted to implement to work.</p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <h3>Triumphs</h3>
                <p>
                    <ul>
                        <li>I gave Shulk new moves and features.</li>
                        <li>I learned a lot about game modding.</li>
                        <li>I learned a lot about programming in Rust.</li>
                    </ul>
                </p>
                <h3>Strugles</h3>
                <p>
                    <ul>
                        <li>The API's for interacting with game code were difficult to use.</li>
                        <li>Firmware updates often made it difficult to maintain the functionality of the project.</li>
                        <li>The amount of time it takes to reboot the game with updated code made the debugging process difficult.</li>
                    </ul>
                </p>
            </template>
            <template v-slot:links>
                <a href="https://github.com/jpmason64/HDR-Shulk-Rework">Github</a>
                <a href="https://www.youtube.com/watch?v=02NaFwNcC3M&list=PLJ8C0Hk2ZKHvxjfFylRUIbVnDUvxLdejh">Smash Ultimate Modding Workshop</a>
                <a href="https://discord.gg/hdr">HDR Discord</a>
                <a href="https://discord.gg/ASJyTrZ">Smash Ultimate Modding Discord</a>
                <a href="https://raw.githubusercontent.com/ultimate-research/param-labels/master/ParamLabels.csv">Param Tables</a>
                <a href="https://docs.google.com/spreadsheets/d/1q_TpWoQkr9YWgQ7fc3JpHuU9zKfCLtl80Uodcyc0NPY/edit#gid=0">Animation Labels</a>
                <a href="https://github.com/WuBoytH/SSBU-Dumped-Scripts">Smash Ultimate Script Dumps</a>
            </template>
        </oneColumnTemplate>
    </div>
</template>
    
<script>
import oneColumnTemplate from '../../components/templates/oneColumnTemplate.vue'
import image_one from '../project_images/monado_arts.jpg'
import image_two from '../project_images/monado_forward_tilt.jpg'
import video from '../project_videos/demo_smash_match.mp4'

export default {
    name: 'HDRShulkRework',
    components: {
        oneColumnTemplate
    },
    data() {
        return {
            projectTitle: "HDR Shulk Rework",
            author: "Jonathan Mason",
            githubUrl: 'https://github.com/jpmason64/HDR-Shulk-Rework',
            pictures: [image_one, image_two],
            video: video //get rid of the quotes when putting in your video variable
        }
    },
    info: {
        title: 'HDR Shulk Rework',
        author: 'Jonathan Mason',
        tags: ["Super Smash Bros. Ultimate", "Game Modding", "Rust", "Skyline", "Smashline", "Nintendo Switch", "Spring 2024"]
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
    