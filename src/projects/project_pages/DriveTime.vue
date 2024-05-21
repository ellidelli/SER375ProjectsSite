<template>
  <div>
    <twoColumnTemplate :projectTitle="projectTitle" :author="author" :githubUrl="githubUrl" :pictures="pictures" :video="video">
      <template v-slot:description>
        <p>Drive Time is a productivity app to help you get to places on time. You can add tasks with time contraints, 
        and the app will add them all together and set a timer for the tasks. On the main page you can search for any location, 
        and get the driving route and the estimated drive time, you can also go directly to Apple Maps app for directions to your location.</p>
      </template>
      <template v-slot:story>
        <p>I have had the idea for this app for a while now, being late to things stresses me out a lot, and it can be hard to know exactly when you need to leave
        when thing like traffic can be unexpected. So I wanted to make an app that would wake you up on time for work or school, based on the estimated arrival time 
        and how long it takes you to get ready. I went into this project knowing very little about Swift, and SwiftUI, so it took me a while to understand how the language 
        works, especially because parts of it are very different from the languages im used to. I also haven't had much experiance using API's before this project, so integrating 
        MapKit was also pretty difficult. With my workplans I tried to do at least one high priority task and some tasks I needed for the high priority one each iteration, I think
        this worked out pretty well for me, but I did end up spending a lot of time on things that didnt work out, like the alarm feature. I spent around 2 or 3 iterations working on the alarm,
        and I didn't end up including it in my final project because I couldn't get it to work the way it needed to. </p>
      </template>
      <template v-slot:strugglesAndTriumphs>
        <p>I struggled a lot with Swift in the begining, this was my first project working in Swift, so there was
        definatly a learning curve. User authorization was pretty difficult, and it took a long time to just get
         the authorization notifications to pop up. Apple can also be a little annoying with certain things. I wanted 
         the app to have an alarm feature that would wake the user up on time, but that didn't happen because apple doesnt allow
         access to its "clock app" and there are very specific rules for notifications, so I couldnt have a notification play a sound long enough 
         to really be an alarm. I also ran into a lot of problems with MapKit, specifically getting map elements to be compatable with the variables I already had.
         <br><br>
         Once I was able to get a location request notification, using the users's location was easier.
         With the user location I was able to search the surrounding area of the user for their selected location. 
         Since I had a start location (the user's current location) and an end location I was able to show the driving route. </p>
      </template>
      <template v-slot:links>
        <a href="https://developer.apple.com/documentation/mapkit/">Apple's MapKit Documentation</a> 
        <a href="https://developer.apple.com/documentation/corelocation/requesting_authorization_to_use_location_services">Apple's Location Service Documentation</a> 
        <a href="https://github.com/StewartLynch/MyTrips/tree/V9-Routes_and_directions">My Trip App in SwiftUI using MapKit</a> 
        <a href="https://medium.com/@ramdhas/mastering-swiftui-best-practices-for-efficient-user-preference-management-with-appstorage-cf088f4ca90c">App Storage Implementation</a> 
        <a href="https://mia-e.medium.com/a-comprehensive-list-of-swiftui-views-the-building-blocks-of-swift-ui-45de711c0265">SwiftUI Views</a>
      </template>
    </twoColumnTemplate>
  </div>
</template>
  
<script>
import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
import DriveTime1 from '../project_images/DriveTimeOne.png';
import DriveTime2 from '../project_images/DriveTimeTwo.png';
import DriveVideo from '../project_videos/DriveTimeVideo.mov'

export default {
  name: 'DriveTime',
  components: {
    twoColumnTemplate
  },
  data() {
    return {
      projectTitle: "DriveTime",
      author: "Mia Troiano",
      githubUrl: 'https://github.com/miatroiano/AppProject',
      pictures: [DriveTime1, DriveTime2],
      video: DriveVideo 
    }
  },
  info: {
    title: 'Drive Time',
    author: 'Mia Troiano',
    summary: 'Productivity Mobile App',
    tags: ["iOS", "SwiftUI", "Swift", "Apple MapKit", "Spring 2024"]
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
