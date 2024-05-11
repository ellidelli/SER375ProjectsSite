<template>
    <div>
        <button @click="toTagsPage" class="all-tags-button">See All Tags</button>
        <div class="bg">
            <h1>Selected Tag:</h1>
            <p class="selected-tag" :style="{ backgroundColor: getTagColor(selectedTag) }">{{ selectedTag }}</p>
            <div class="results-container">
                <SearchResult v-for="searchResult in searchResults" :key="searchResult" :title="searchResult.Title"
                    :author="searchResult.Author" :display="searchResult.display" />
            </div>
        </div>
    </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue';
import { getProjects } from '../projects/projects-gatherer.js'

export default {
    name: 'TagProjectDisplay',
    components: {
        SearchResult
    },
    mounted() {
        const projects = getProjects().projects
        this.selectedTag = decodeURIComponent(this.$route.params.tag)
        const query = this.selectedTag.toLowerCase();
        const matches = [];
        const cache = new Set();
        projects.forEach(project => {
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
        matches.sort((a, b) => (a.Title.localeCompare(b.Title)));
        this.searchResults = matches;
        // if no results, redirect user back to the tags page
        if (this.searchResults.length === 0) {
            return this.$router.push('/tags')
        }
    },
    data: () => {
        return {
            selectedTag: null,
            searchResults: [],
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
        }
    },
    methods: {
        toTagsPage() {
            return this.$router.push('/tags')
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
        getRandomColor() {
            return this.colors[Math.floor(Math.random() * this.colors.length)];
        }
    }
}
</script>

<style scoped>
.bg {
    padding: 0vh 10vw 25vh 10vw;
    /* top right bottom left */
    background-color: rgb(32, 33, 38);
    min-height: 100vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.all-tags-button {
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;
    box-shadow: none;
    border: none;
}

.all-tags-button:hover {
    background: rgb(199, 197, 197);
    transition: .1s;
}

.selected-tag {
    font-weight: 600;
    margin-top: 20px;
    background-color: rgb(110, 136, 196);
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

.results-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 10px;
}
</style>