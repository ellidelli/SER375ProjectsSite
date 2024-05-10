<template>
  <div>
    <oneColumnTemplate
      :projectTitle="projectTitle"
      :author="author"
      :pictures="pictures"
      :video="video"
    >
      <template v-slot:description>
        <p>
          This iOS app is a trip planner application that allows users to plan
          their next trip. Users are able to create an itinerary with
          information about the event, a packing list and check off an packed
          items, and keep track of the budget for their trip by adding items
          money spent on.
        </p>
      </template>
      <template v-slot:story>
        <p>
          I came up with idea as I was thinking about what I like. I love to
          travel and I plan on going to Europe this summer, so I thought it was
          a great idea to create an app that allows someone to plan their
          vacation. To make this project, I had to learn Swift. I never used
          Swift and XCode before this project so I did a lot of research on how
          to create an iOS app. To complete this app, I planned on focusing on
          one screen for each workplan. At first I priotitized the the main
          screen where users can app a trip. I then focused on the three main
          screens; itinerary, packing and budget screens, one for each
          interation. I really focused on getting the logic for each page and
          then focused on the styling.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          A big "win" I was able to accomplish during this project was being
          able to get all the logic for each page and complete everything I had
          intended to do. One thing I struggled with was creating data with
          SwiftData for each page. I was able to complete this by watching
          YouTube videos and doing trial and error.There is also a small issue
          with the application as the trip data is not unique to each trip, I
          spent hours trying to fix it however it can be something for future
          implementation/fixes.
        </p>
      </template>
      <template v-slot:links>
        <a href="https://www.youtube.com/@CodeWithChris"
          >Code with Chris was super helpful as he was able to explain things
          very well.
        </a>
        <a href="https://www.youtube.com/@SwiftfulThinking"
          >This YouTube Channel was also very helpful in learning Swift and
          XCode in general.</a
        >
        <a href="https://www.youtube.com/watch?v=CcUgRDLcUmQ&t=1783s"
          >This video helped me with SwiftData and putting data into lists as
          well as checking off an item in a list.</a
        >
        <a href="https://developer.apple.com/documentation/swift"
          >This is Apple's documentation for Swift.</a
        >
      </template>
    </oneColumnTemplate>
  </div>
</template>

<script>
import oneColumnTemplate from "../components/templates/oneColumnTemplate.vue";
import mainScreen from "../projects/project_images/mainScreen.png";
import itinerary from "../projects/project_images/itineraryScreen.png";
import packing from "../projects/project_images/packingScreen.png";
import budget from "../projects/project_images/budgetScreen.png";
import video from "../projects/project_videos/finalRecording.mp4";

export default {
  name: "TripPlannerApp",
  components: {
    oneColumnTemplate,
  },
  data() {
    return {
      projectTitle: "Trip Planner App",
      author: "Julia Woeste",
      pictures: [mainScreen, itinerary, packing, budget],
      video: video, //get rid of the quotes when putting in your video variable
    };
  },
  info: {
    title: "Trip Planner App",
    author: "Julia Woeste",
    tags: ["iOS", "Swift", "X Code", "Spring 2024"],
  },
};
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
