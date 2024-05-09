<template>
    <div class="bg">
        <h1>Selected Tag:</h1>
        <p class="selected-tag">{{ selectedTag }}</p>
        <div class="results-container">
            <SearchResult v-for="searchResult in searchResults" :key="searchResult" :title="searchResult.Title"
                :author="searchResult.Author" :display="searchResult.display" />
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
        console.log(this.searchResults[0])
        // if no results, redirect user back to the tags page
        if (this.searchResults.length === 0) {
            return this.$router.push('/tags')
        }
    },
    data: () => {
        return {
            selectedTag: null,
            searchResults: []
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