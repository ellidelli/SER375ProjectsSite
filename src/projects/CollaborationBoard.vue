<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>Our application is a website that provides users with an all-in-one option for collaborative projects. Our application allows users to make their own topics, issues, and goals as cards on a board, and then categorize those cards into columns. The main appeal of our application over other Kanban board solutions such as Trello is the inclusion of an integrated chat feature on every card. This allows for simplified live collaboration between team members and leads to an intuitive organization of project-related discussions. Instead of having to search for hours through the team’s development channel on Slack or Teams, all discussions related to an issue will be stored on the issue’s card itself, making it easy to join ongoing tasks and coordinate with team members working on the same task.</p>
            </template>
            <template v-slot:story>
                <p>We chose to make this project because we wanted to gain experience with web development while also creating a practical application that would address a real problem that we deal with on a day-to-day basis. Specifically, we were selecting our project topic right after we had finished working on the 48-hour Global Game Jam with a team of nine developers. We had just experienced the difficulties of organizing discussions on such a short deadline firsthand and ran into many issues related to not being able to find information related to a specific issue. For example, during the jam, we ran into issues with artists not being able to determine if features were fully implemented, developers not knowing if assets were finalized and ready to be added to the final build, and writers not being able to find if character sprites were updated. With these issues in mind, we set out to create an application that could help us resolve these issues.</p>
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
    