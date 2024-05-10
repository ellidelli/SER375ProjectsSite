<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>
                Vent Bot is a discord bot that gives up to date information on the game Genshin Impact. Currently, the bot
                features two main commands: /ci and /di. /ci allows the user to get information on any playable character currently
                 in the game. This will also include characters confirmed to be playable, but not yet in the game. /di allows the
                 user to get information on any domains of forgery, domains of blessing, domain of mastery, or trounce domains that
                 are currently on the map. In addition to these main commands, this bot also has others such as: /help, /server, /user,
                 and "ping". /help outputs the current commands, /server outputs the server the command was run in, /user outputs the
                 user the command was run by, and "ping" is a basic command that replies with pong. Along with these working commands 
                 is one that is not yet finished: /cl. The goal of this command is to allow users to search for a specifc type of 
                 character to make them easier to find.
                </p>
            
            </template>
            <template v-slot:story>
                <p>
                The main reason for the creation of this bot is becuase of my love for the game Genshin Impact. My idea to create a 
                discord bot came from my already present interest in creating one. I use discord to chat with my friends almost
                everyday, so learning how to make a discord bot is something that may be useful in the future for me. Thus, I decided
                to take two things I was already very interested in and combine them into one project for this class. 
                </p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>
                During my time in this class, there were many struggles I faced. The main one would be relying on the official guide for
                the discord API. As I looked through it, I realized that a lot of information was not up-to-date. Other then that, setting
                up the slash commands was difficult to figure out. 
            
                <p>
                Although there were many struggles, once I was able to do the initial setup, everything else went very smoothly. I was able
                to create json files through google spreadsheet for both characters and domains, and use this information for my slash commands.
                The biggest achievment for my discord bot is figuring out how to use two fields for my slash commands that use the autocomplete
                function. My plan is to build upon this command in order to allow users to search characters by specifc fields-- such as the 
                weapon or element they use in-game.
                </p>

                </p>
            </template>
            <template v-slot:links>
                <a href="https://github.com/jilombardi/VentBot">github</a>
            </template>
        </oneColumnTemplate>
    </div>
</template>
    
<script>
import oneColumnTemplate from '../components/templates/oneColumnTemplate.vue';
import sampleImage from '../projects/project_images/ProjectSampleImage.jpeg';
import chrCommandImage from '../projects/project_images/VentBot_characterCommand.png';
import domainCommandImage from '../projects/project_images/VentBot_domainCommand.png';
import showcaseVideo from '../projects/project_videos/VentBotShowcaseVideo.mp4'
// import sampleVideo from '../projects/project_videos/<VIDEO TITLE>'

export default {
    name: 'VentBotProject.vue',
    components: {
        oneColumnTemplate
    },
    data() {
        return {
            projectTitle: "VentBotProject",
            author: "Juliet Lombardi",
            pictures: [chrCommandImage, domainCommandImage],
            video: showcaseVideo //get rid of the quotes when putting in your video variable
        }
    },
    info: {
        title: 'VentBotProject',
        author: 'Juliet Lombardi',
        tags: ["Sample", "Templates", "Open Source", "Help", "Spring 2024"]
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
    