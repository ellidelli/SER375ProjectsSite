<template>
    <h1>Search for a tag.</h1>
    <div class="search-container">
        <input type="text" v-model="searchTerm" placeholder="Search tags..." class="searchbar">
    </div>
    <div class="tag-container">
        <h4 v-for="tag in filteredTags" :key="tag" :style="{ backgroundColor: getTagColor(tag) }" @click="openResults(tag)"
            class="tagButton">
            {{ tag }} ({{ tagCounts[tag] || 0 }}) </h4>
    </div>
    <div class="results-container" v-if="searchResults && searchResults.length > 0">
        <h1>Results</h1>
        <search-result v-for="searchResult in searchResults" :key="searchResult.display" :title="searchResult.Title"
            :author="searchResult.Author" :display="searchResult.display" />
    </div>
</template>
  
<script>
import { getProjects } from '../projects/projects-gatherer.js'
import SearchResult from './SearchResult.vue';

export default {
    components: {
        SearchResult
    },
    data() {
        return {
            tags: [],
            tagCounts: {},
            // colors: ["#7473BF", "#6767A3", "#5A5A87", "#4D4E6B", "#46485D", "#434556", "#3F414E"],
            colors: [
                "#E6E6FA", // Lavender
                "#D8BFD8", // Thistle
                "#DDA0DD", // Plum
                "#BA55D3", // Medium Orchid
                "#9370DB", // Medium Purple
                "#8A2BE2", // Blue Violet
                "#6A5ACD", // Slate Blue
                "#483D8B", // Dark Slate Blue
                "#778899", // Light Slate Gray
                "#708090", // Slate Gray
                "#2F4F4F", // Dark Slate Gray
                "#696969", // Dim Gray
                "#808080", // Gray
                "#A9A9A9", // Dark Gray
                "#D3D3D3"  // Light Gray
            ],
            searchResults: null,
            searchTerm: '',
            projectData: [],
            tagColors: {}
        }
    },
    created() {
        this.projectData = getProjects()
    },
    mounted() {
        this.getAllTags();
        this.loadTagColors();
    },
    methods: {
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        },
        getAllTags() {
            try {
                this.projectData.projects.forEach(project => {
                    project.header.tags.forEach(tag => {
                        this.tags.push(tag);
                    });
                });
                //sort the tags alphabetically
                this.tags.sort((a, b) => a.localeCompare(b));
                this.countTagOccurrences();
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        },
        countTagOccurrences() {
            this.tagCounts = {};
            this.tags.forEach(tag => {
                this.tagCounts[tag] = (this.tagCounts[tag] || 0) + 1;
            });
        },
        openResults(tag) {
            console.log("clicked", tag);
            this.searchTerm = tag;
            if (!this.searchTerm) {
                return;
            }
            const query = this.searchTerm.toLowerCase();
            const matches = [];
            const cache = new Set();
            this.projectData.projects.forEach(project => {
                const tags = project.header.tags.map(tag => tag.toLowerCase());
                if (tags.includes(query)) {
                    const display = `${project.header.title}-${project.header.author}`;
                    if (!cache.has(display)) {
                        matches.push({
                            Title: project.header.title,
                            Author: project.header.author,
                            display
                        });
                        cache.add(display);
                    }
                }
            });
            matches.sort((a, b) => (a.display > b.display) ? 1 : -1);
            this.searchResults = matches;
        },
        getTagColor(tag) {
            const storedColor = localStorage.getItem(`tagColor_${tag}`);
            if (storedColor) {
                return storedColor;
            } else {
                const randomColor = this.getRandomColor();
                localStorage.setItem(`tagColor_${tag}`, randomColor);
                return randomColor;
            }
        },
        loadTagColors() {
            this.tags.forEach(tag => {
                const storedColor = localStorage.getItem(`tagColor_${tag}`);
                if (storedColor) {
                    this.tagColors[tag] = storedColor;
                }
            });
        }
    },
    computed: {
        filteredTags() {
            const uniqueTags = [...new Set(this.tags)];
            return uniqueTags.filter(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    },
}
</script>

<style scoped>
.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    padding-bottom: 10vh;
}

.searchbar {
    width: 40vw;
    height: 30px;
    margin-right: 10px;
    padding: 20px;
    font-family: "Poppins";
    border-radius: 20px;
    outline: none;
    border: none;
}

.search-button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 3vw;
    min-width: 30px;
    height: 0;
    padding-top: 10%;
    position: relative;
}

h4 {
    text-align: center;
    border-radius: 10px;
    padding-left: 1vw;
    padding-right: 1vw;
    max-width: fit-content;
    max-height: fit-content;
    padding-top: 1vh;
    padding-bottom: 1vh;
    color: white;
    font-size: small;
    margin-right: 1vw;
    margin-left: 1vw;
}

.tag-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5vh;
    flex-wrap: wrap;
}

.tagButton {
    margin: 1vh;
}

.tagButton:hover {
    transition: color 0.3s;
    color: rgb(28 29 33);
}

h1 {
    padding-bottom: 5vh;
}
</style>