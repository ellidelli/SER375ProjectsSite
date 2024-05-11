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
          Have you ever been cooking a recipe but had to keep wiping your hands
          to scroll down on your laptop? Or maybe found yourself unable to use
          the trackpad becuase you have gloves on? Air Mouse lets you control
          your mouse using your camera to track your hand and recognize hand
          gestures. The mouse matches the movement of your hand and the
          recognized hand gestures control different mouse functions like left
          and right click. This program currently only runs on Windows.
        </p>
      </template>
      <template v-slot:story>
        <p>
          I found myself being annoyed that when I was cooking from a recipe on
          my laptop I would have to wipe my hands everytime just to scroll down.
          I thought it would be cool if I could somehow scroll up or down
          without having to touch my laptop track pad. The best way I could
          think to do this was to use a camera and somehow control scrolling
          throuh it. And if I was gonna be able to scroll, I might as well make
          it so you can control the whole mouse to really allow for navigating
          your computer without having to touch it. I hadn't worked with
          cameras/computer vision before this project so I had to learn how to
          take in live camera feed. Other than that, the only new thing to learn
          was just standard getting used to new libraries needed for the
          project. For my workplans, I focused on getting the core functionality
          of the project done. Each workplan after the previous, I would work on
          a feature that was not as integral to the core functionality. This
          allowed me to make sure I had the most important features completed
          before the end of the project.
        </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>
          As mentioned, I have never worked with computer vision before this
          project so my first hurdle was just accessing the camera through
          python. After I got camera access, I had to figure out how to get the
          hand gesture recognizer to analyze the live video frames. Thankfully I
          found some GitHub repositories that had this working so I could model
          my code after their base structure. Once I was getting hand data, it
          was mostly straight forward feeding that data to the library I used to
          control the mouse. With the biggest hurdles out of the way early on, I
          was able to spend a lot of time polishing the code and making it
          readable. After I had everything wrapped up, I wanted to package up
          the project so anyone could download and run it without needing Python
          or any of the libraries installed. This was also new territory for me
          but I found a library, Pyinstaller, that made it possible. There was a
          major bug that caused an error when packaging my project, but all that
          was required was to change my Python version. Once I got the project
          packaged up into a downloadable exe, the project was officially done.
        </p>
      </template>
      <template v-slot:links>
        <a href="https://github.com/mmills2/Air_Mouse">Air Mouse Github</a>
        <a
          href="https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer"
          >Gesture recognizer library</a
        >
        <a
          href="https://thepythoncode.com/article/control-mouse-python#drawing-project"
          >Mouse control instructions</a
        >
        <a
          href="https://github.com/RohitSanjay00/GestureRecognition/blob/main/GestureClass.py"
          >Working with gesture recognizer data example</a
        >
        <a href="https://github.com/google/mediapipe/issues/4448"
          >Working with live camera feed with gesture recognizer example</a
        >
        <a href="https://github.com/pyinstaller/pyinstaller/issues/6301"
          >Pyinstaller error with Python 3.10</a
        >
      </template>
    </oneColumnTemplate>
  </div>
</template>

<script>
import oneColumnTemplate from "../../components/templates/oneColumnTemplate.vue";
import UsingAirMouseImg from "../project_images/UsingAirMouse.png";
import ClickInstructionsImg from "../project_images/ClickInstructions.png";
import AirMouseVideo from "../project_videos/AirMouseShowcase.mp4";

export default {
  name: "AirMouse",
  components: {
    oneColumnTemplate,
  },
  data() {
    return {
      projectTitle: "Air Mouse",
      author: "MacArthur Mills",
      pictures: [UsingAirMouseImg, ClickInstructionsImg],
      video: AirMouseVideo, //get rid of the quotes when putting in your video variable
    };
  },
  info: {
    title: "Air Mouse",
    author: "MacArthur Mills",
    tags: [
      "Spring 2024",
      "Computer Vision",
      "Mouse",
      "Hand Tracking",
      "MediaPipe"
    ],
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
