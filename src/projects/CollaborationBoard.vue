<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>
                    Our application is a website that provides users with an all-in-one option for collaborative projects. Our application allows users to make their own topics, issues, and goals as cards on a board, and then categorize those cards into columns. The main appeal of our application over other Kanban board solutions such as Trello is the inclusion of an integrated chat feature on every card. This allows for simplified live collaboration between team members and leads to an intuitive organization of project-related discussions. Instead of having to search for hours through the team’s development channel on Slack or Teams, all discussions related to an issue will be stored on the issue’s card itself, making it easy to join ongoing tasks and coordinate with team members working on the same task.
                </p>
            </template>
            <template v-slot:story>
                <p>
                    We chose to make this project because we wanted to gain experience with web development while also creating a practical application that would address a real problem that we deal with on a day-to-day basis. Specifically, we were selecting our project topic right after we had finished working on the 48-hour Global Game Jam with a team of nine developers. We had just experienced the difficulties of organizing discussions on such a short deadline firsthand and ran into many issues related to not being able to find information related to a specific issue. For example, during the jam, we ran into issues with artists not being able to determine if features were fully implemented, developers not knowing if assets were finalized and ready to be added to the final build, and writers not being able to find if character sprites were updated. With these issues in mind, we set out to create an application that could help us resolve these issues.
                    <br><br>
                    To make this project, we focused on learning the basics of full-stack web development and spent a couple weeks early on working with a variety of frontend web frameworks such as React, Remix, and Next.js to determine which one would work best for our application. After two weeks of testing, we ultimately found that Next.js with React offered us the most functionality while also being relatively simple to learn and well-documented. We also decided to create a backend using WebSockets that leverages a MongoDB database (previously a PostgreSQL database) for storing information and worked on connecting the two within the first two sprints to get a minimum viable product available for demonstration. Once that demo was completed with generatable Kanban cards and chatrooms, we then focused the subsequent development sprints on taking those Kanban essentials and designing the rest of the board’s functionality to tie it all together. During this process, we tested around with a couple packages related to drag-and-drop functionality within React and eventually decided to use react-dnd for the flexible drag and drop behaviors and events it provided. Once the core functionality was completed, we then used the final sprint to work on formatting and designing the frontend to look more user-friendly and intuitive using Tailwind CSS.
                </p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>
                    TODO: struggles and triumphs
                </p>
            </template>
            <template v-slot:links>
                <a href="https://react.dev/reference/react">React Documentation</a>
                <a href="https://tailwindcss.com/docs/installation">Tailwind CSS Documentation</a>
                <a href="https://react-dnd.github.io/react-dnd/docs/tutorial">React DnD Tutorial</a>
            </template>
        </oneColumnTemplate>
    </div>
</template>
    
<script>
import oneColumnTemplate from '../components/templates/oneColumnTemplate.vue'
import boardImage from '../projects/project_images/merritt-collaboration-board-1.png';
import cardImage from '../projects/project_images/merritt-collaboration-board-2.png';
import chatImage from '../projects/project_images/merritt-collaboration-board-3.png';
import collabVideo from '../projects/project_videos/merritt-collaboration-board.mp4'

export default {
    name: 'CollaborationBoard',
    components: {
        oneColumnTemplate
    },
    data() {
        return {
            projectTitle: "Collaboration Board",
            author: "Matthew Merritt and Michael Merritt",
            pictures: [boardImage, cardImage, chatImage],
            video: collabVideo
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
    