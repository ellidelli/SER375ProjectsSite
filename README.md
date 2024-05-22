# SER375 Open Source Development Project Website
<div style="text-align: center;">
    <img src="/ReadMeImages/Banner.png" alt="banner"/>
</div>

### [Website Homepage](https://ellidelli.github.io/SER375ProjectsSite/)

## Table of Contents
* [Setting up for development](#setting-up-for-development)
    * [Forking the repo](#fork-the-repo)
    * [Getting the files to your computer](#getting-the-files-to-your-computer)
* [How to add your project page](#adding-your-own-project-page)
    * [Column instructions](#column-instructions)
    * [Slideshow instructions](#slideshow-instructions)
* [How to push your changes to the site](#adding-your-project-to-the-official-repo)
* [Setting up the site locally for further development](#setting-up-the-site-locally-for-further-development)


## Setting up for development
### Fork the repo
1. On the top right side of the GitHub repo page, click the fork option
2. Doing so will take you to a new page; click ```Create fork```

### Getting the files to your computer
1. Go to your newly set up repo on GitHub
2. Click the green drop-down button in the top right corner that says ```Code```
3. Copy the link
4. Open your terminal and cd into a path where you can easily find your files (ex. desktop)
5. Once in your preferred directory, use the command ```git clone (your copied link)```
6. You can now open your forked repository on your IDE
7. Run this command in the terminal ```git remote add upstream https://github.com/ellidelli/SER375ProjectsSite.git```
8. Run this command in the terminal ```npm install```
9. Run this command in the terminal ```npm run serve```
# Adding your own project page
## Choose a template
Choose between the 3 different templates.
   
|One Column Template|Two Column Template|Slideshow Template|
| --- | --- | --- |
|![](https://github.com/ellidelli/SER375ProjectsSite/blob/master/ReadMeImages/OneColumn.png?raw=true) | ![](https://github.com/ellidelli/SER375ProjectsSite/blob/master/ReadMeImages/TwoColumn.png?raw=true) | ![](https://github.com/ellidelli/SER375ProjectsSite/blob/master/ReadMeImages/Slideshow.png?raw=true)

## One and Two Column Instructions
*Note: If you chose the slideshow template, [click here](#slideshow-instructions) to go to the slideshow template instructions*

1. Navigate to ```/src/projects/```. Put your project demo video in the ```/project_videos``` folder and your image(s) in the ```/project_images``` folder
2. In the ```/project_pages``` folder, create a new file. Name it your project name, no spaces, followed by .vue ```<YourProjectName>.vue```
3. Inside this same folder, you will find the sample project templates for each layout. Navigate to the one you want, copy and paste its code into your newly made file
4. In this section of code:
   * Enter your description
   * Enter your story
   * Enter your struggles and triumphs
   * Add any helpful links
   * You are able to add any html tags in each section. p for normal text. a for a link. h2 for headers. Whatever you want.
   ```Javascript
   <template v-slot:description>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:story>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:strugglesAndTriumphs>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:links>
       <a href="https://www.google.com">Google</a>
       <a href="https://www.qu.edu">Quinnipiac</a>
   </template>
   ```
5. In this section of the code, change the import paths to your image(s) and your video. (uncomment the video import and add more imports if you have more than one photo)
    ```Javascript
    import twoColumnTemplate from '../../components/templates/twoColumnTemplate.vue'
    import sampleImage from '../project_images/ProjectSampleImage.jpeg';
    import sampleVideo from '../project_videos/sample.mp4'
   ```
6. In this section of code:
   * Replace the name: with your project name (the same as your vue file)
   * Replace all information under `data()` to match your project
   * When it comes to multiple pictures, just add them to the array [just, like, this]
   * Add your name to the author field
   * Everything under the info section is metadata for your page to show up in the website's search, so please fill out those fields accordingly
        * Title and Author name can be the same as `projectTitle` and `author` in the `data` section
        * Add a brief summary to the summary field (e.g. "Minecraft Mod" or "Stock Trading Website")
        * Add as many tags are you need, such as languages used, if the project is a game or website, etc. This is to make it easier to find similar projects through the tags page. 

   ```Javascript
   export default {
      name: 'TwoColumnSampleProject',
      components: {
        twoColumnTemplate
      },
      data() {
        return {
          projectTitle: "Two Column Sample Project",
          author: "John Smith",
          githubUrl: 'www.github.com',
          pictures: [sampleImage],
          video: sampleVideo
        }
      },
      info: {
        title: 'Two Column Sample Project',
        author: 'John Smith',
        summary: "Example Project"
        tags: ["Sample", "Templates", "Open Source", "Help"]
      }
    }                                        
    ```
7. Check and make sure your project page loads on the site. Check it through the search, and through the tags. If you want to add one of your screenshots into the homescreen background, [click here](#steps-if-you-want-one-of-your-images-to-appear-on-the-homepage-background).

## Slideshow instructions
*Note: The slideshow height cannot be adjusted so take that into consideration when cropping your photos.*

1. Navigate to ```/src/projects/```. Put your project demo video in the ```/project_videos``` folder and your image(s) in the ```/project_images``` folder
2. Create a new file in the ```/projects/project_pages``` folder. Name it your project name, no spaces, followed by .vue ```<YourProjectName>.vue```
3. Inside this same folder, you will find ```SlideshowSampleProject.vue```. Copy and paste its code into your newly made file.
4. In this section of code:
   * Enter your description
   * Enter your story
   * Enter your struggles and triumphs
   * Add any helpful links
   * You are able to add any html tags in each section. p for normal text. a for a link. h2 for headers. Whatever you want.
   ```Javascript
   <template v-slot:description>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:story>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:strugglesAndTriumphs>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci nesciunt distinctio consectetur
          quisquam consequatur, corrupti reiciendis ex aut quibusdam minima quidem earum quod architecto deserunt
          a, commodi debitis! Ducimus.</p>
   </template>
   <template v-slot:links>
       <a href="https://www.google.com">Google</a>
       <a href="https://www.qu.edu">Quinnipiac</a>
   </template>
   ```
5. In this section of code:
   * Update the image imports to your images
   * Update the video import to your video
```Javascript
//import images
import one from '../project_images/1.png';
import two from '../project_images/2.png';
import three from '../project_images/3.png';

//import video
import sampleVideo from '../project_videos/sample.mp4'
```
6. In this section of code:
    * Update the name: to your project name, no spaces, and same as your vue file name. 
```Javascript
    name: 'SlideshowSampleProject',
    components: {
        slideshowTemplate,
        VueperSlides,
        VueperSlide
    },
```
7. In this section of code:
   * Change all the data tags to match your project information.
   * When you get to slides, add an image in the same pattern as seen below. Do it as many times as you need.
```Javascript
 data() {
        return {
            projectTitle: "Slideshow Sample Project",
            author: "John Smith",
            githubUrl: 'www.github.com',
            video: sampleVideo
            slides: [
                {
                    image: one
                },
                {
                    image: two
                },
                {
                    image: three
                }
            ]

        }
    },
```
8. Everything under the info section is metadata for your page to show up in the website's search, so please fill out those fields accordingly
    * Title and Author name can be the same as `projectTitle` and `author` in the `data` section
    * Add a brief summary to the summary field (e.g. "Minecraft Mod" or "Stock Trading Website")
    * Add as many tags are you need, such as languages used, if the project is a game or website, etc. This is to make it easier to find similar projects through the tags page. 
```Javascript
    info: {
        title: 'Slideshow Sample Project',
        author: 'John Smith',
        summary: 'Example Project',
        tags: ["Sample", "Templates", "Open Source", "Help"]
    }
```
9. Check and make sure your project page loads on the site. Check it through the search, and through the tags.


***Please, before continuing, make sure the website still works, and your project page looks the way you want***

## Adding your project to the official repo
1. Run ```git pull upstream master```
2. Go to the original repo’s GitHub page
3. Create a pull request like normal
4. When you get to the Compare changes step, you must hit compare across forks and select your forked repo and branch name
5. Create your pull request
6. Wait until your project is merged with the site!

# Setting up the site locally for further development
1. Clone the repo by typing in the terminal: ```git clone https://github.com/ellidelli/SER375ProjectsSite```
2. Open the folder in your ide, and run these two commands
   ```npm install```
   ```npm run serve```
