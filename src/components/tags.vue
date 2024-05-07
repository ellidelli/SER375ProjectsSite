<template>
    <h1>Project Tags</h1>
    <div class="search-container">
        <input type="text" v-model="searchTerm" v-on:input="onFilter" placeholder="Filter tags..." class="searchbar">
    </div>
    <div class="tag-container">
        <h4 v-for="tag in filteredTags" :key="tag" :style="{ backgroundColor: getTagColor(tag) }" @click="openResults(tag)"
            class="tagButton">
            {{ tag }} ({{ tagCounts[tag] || 0 }}) </h4>
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
                "#7473BF", // Original color: Blueish
                "#4E5D92", // Darker Blue
                "#A0A7D0", // Lighter Blue
                "#4D71A3", // Blue with Cyan Hue
                "#6A579E", // Deeper Blue with Purple Hue
                "#6E88C4", // Lighter Blue with Cyan Hue
                "#3C6C8F", // Darker Blue with Grayish Tone
                "#497ABD", // Darker Blue with Cyan Hint
                "#7BA1C8", // Lighter Blue with Cyan Hint
                "#366E8A", // Darker Blue with Green Hint
                "#88A7CF", // Lighter Blue with Green Hint
                "#3F678B"  // Darker Blue with Grayish Tone
            ],
            searchResults: null,
            searchTerm: '',
            projectData: [],
            tagColors: {}
        }
    },
    created() {
        this.projectData = getProjects()
        if (this.$route.query.query) {
            this.searchTerm = this.$route.query.query
        }
        // Check if the flag is set in local storage
        const clearLocalStorageFlag = localStorage.getItem('clearLocalStorageFlag');

        // If the flag is not set, clear local storage and set the flag
        if (!clearLocalStorageFlag) {
            localStorage.clear();
            localStorage.setItem('clearLocalStorageFlag', true);
        }
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
            return this.$router.push(`/tags/${encodeURIComponent(tag)}`)
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
        },
        onFilter() {
            return this.$router.replace({ path: this.$route.path, query: { ...this.searchTerm ? { query: this.searchTerm } : {} }})
                .catch(() => {})
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
    cursor: pointer;
}

h1 {
    padding-bottom: 5vh;
}
</style>