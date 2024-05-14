<template>
    <div>
        <oneColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
            <template v-slot:description>
                <p>
                    Our application is a website that provides users with an all-in-one option for collaborative projects.
                    Our application allows users to make their own topics, issues, and goals as cards on a board, and then
                    categorize those cards into columns. The main appeal of our application over other Kanban board
                    solutions such as Trello is the inclusion of an integrated chat feature on every card. This allows for
                    simplified live collaboration between team members and leads to an intuitive organization of
                    project-related discussions. Instead of having to search for hours through the team’s development
                    channel on Slack or Teams, all discussions related to an issue will be stored on the issue’s card
                    itself, making it easy to join ongoing tasks and coordinate with team members working on the same task.
                </p>
            </template>
            <template v-slot:story>
                <p>
                    We chose to make this project because we wanted to gain experience with web development while also
                    creating a practical application that would address a real problem that we deal with on a day-to-day
                    basis. Specifically, we were selecting our project topic right after we had finished working on the
                    48-hour Global Game Jam with a team of nine developers. We had just experienced the difficulties of
                    organizing discussions on such a short deadline firsthand and ran into many issues related to not being
                    able to find information related to a specific issue. For example, during the jam, we ran into issues
                    with artists not being able to determine if features were fully implemented, developers not knowing if
                    assets were finalized and ready to be added to the final build, and writers not being able to find if
                    character sprites were updated. With these issues in mind, we set out to create an application that
                    could help us resolve these issues.
                    <br><br>
                    To make this project, we focused on learning the basics of full-stack web development and spent a couple
                    weeks early on working with a variety of frontend web frameworks such as React, Remix, and Next.js to
                    determine which one would work best for our application. After two weeks of testing, we ultimately found
                    that Next.js with React offered us the most functionality while also being relatively simple to learn
                    and well-documented. We also decided to create a backend using WebSockets that leverages a MongoDB
                    database (previously a PostgreSQL database) for storing information and worked on connecting the two
                    within the first two sprints to get a minimum viable product available for demonstration. Once that demo
                    was completed with generatable Kanban cards and chatrooms, we then focused the subsequent development
                    sprints on taking those Kanban essentials and designing the rest of the board’s functionality to tie it
                    all together. During this process, we tested around with a couple packages related to drag-and-drop
                    functionality within React and eventually decided to use react-dnd for the flexible drag and drop
                    behaviors and events it provided. Once the core functionality was completed, we then used the final
                    sprint to work on formatting and designing the frontend to look more user-friendly and intuitive using
                    Tailwind CSS.
                </p>
            </template>
            <template v-slot:strugglesAndTriumphs>
                <p>
                    One of the first challenges we faced was properly maintaining the state information between different
                    components in React without accidentally recreating the WebSocket. This was a problem because when
                    updating state information in React, the whole component will re-render. As a result, we would often
                    lose our WebSocket connection, as the re-render would attempt to recreate a new WebSocket on top of the
                    existing one. This caused issues with data duplication and loss, so we had to use a combination of React
                    states, refs, and effects to properly manage the re-renders. We found that states always forced a
                    render, refs never re-render, and effects conditionally re-render when one of the dependencies updates,
                    so we placed the WebSockets in a ref and the data in states, and then added the WebSocket listeners in
                    an effect so that the functionality would adapt to changes in the application data. Once we had this
                    properly configured, we could then pass states and refs between components, allowing data to be shared
                    across the application.
                    <br><br>
                    Another struggle that we ran into was related to dragging and dropping elements in React. We had started
                    by trying to implement drag-and-drop functionality on our own but found that it was a much more
                    complicated task than we had initially perceived. To simplify the development process, we decided to
                    look for a package to handle dragging instead, specifically using react-draggable, as it was the most
                    used package for dragging. After experimenting with react-draggable, we found that it caused some issues
                    with not properly updating the location of cards once dropped, so we went back to exploring for
                    open-source packages to resolve the issue, this time searching for a solution that supported both
                    dragging and dropping. Eventually we settled on using react-dnd, as it had built-in drag and drop
                    listeners that fired events that we could easily use to send messages to reorder cards on the backend.
                    <br><br>
                    The final challenge that we faced this semester was with our database design. We initially began with a
                    relational database using PostgreSQL, and this worked for a system with only cards, columns, and chat
                    messages with a minimal number of joins between tables. However, as we planned to add more features to
                    the cards, it became more challenging to keep track of all the relevant pieces of information for that
                    card. When we began implementing the checklist items on cards, we decided that it would be more
                    effective to switch to a non-relational database so that we could allocate separate documents for each
                    card with the column, tasks, and messages all stored in a single location. This minimized the number of
                    queries necessary on the backend when rendering cards and chats and made it much easier to add new data
                    to cards in the future.
                </p>
            </template>
            <template v-slot:links>
                <a href="https://github.com/mattcmerritt/Collaboration-Board">GitHub Repository</a>
                <a href="https://react.dev/reference/react">React Documentation</a>
                <a href="https://tailwindcss.com/docs/installation">Tailwind CSS Documentation</a>
                <a href="https://www.mongodb.com/docs/drivers/node/current/">MongoDB Documentation</a>
                <a href="https://react-dnd.github.io/react-dnd/docs/tutorial">React DnD Tutorial</a>
                <a href="https://developer.mozilla.org/docs/Web/API/WebSocket">WebSocket API (Frontend)</a>
                <a href="https://github.com/websockets/ws?tab=readme-ov-file#api-docs">WebSocket Library (Backend)</a>
            </template>
        </oneColumnTemplate>
    </div>
</template>
    
<script>
import oneColumnTemplate from '../../components/templates/oneColumnTemplate.vue'
import boardImage from '../project_images/merritt-collaboration-board-1.png';
import cardImage from '../project_images/merritt-collaboration-board-2.png';
import chatImage from '../project_images/merritt-collaboration-board-3.png';
import collabVideo from '../project_videos/merritt-collaboration-board.mp4'

export default {
    name: 'CollaborationBoard',
    components: {
        oneColumnTemplate
    },
    data() {
        return {
            projectTitle: "Collaboration Board",
            author: "Matthew Merritt and Michael Merritt",
            githubUrl: 'https://github.com/mattcmerritt/Collaboration-Board',
            pictures: [boardImage, cardImage, chatImage],
            video: collabVideo
        }
    },
    info: {
        title: 'Collaboration Board',
        author: 'Matthew Merritt and Michael Merritt',
        tags: ["React", "Next.js", "TypeScript", "JavaScript", "Full Stack", "Frontend", "Backend", "MongoDB", "WebSockets", "Real-Time Chat", "Kanban Board", "react-dnd", "Spring 2024"]
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
    