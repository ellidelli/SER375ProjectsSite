<template>
    <div class="search-container">
        <input v-on:input="search" type="text" v-model="searchTerm" placeholder="Search a project or an author..." class="searchbar">
    </div>
    <div class="results-container" v-if="searchResults && searchResults.length > 0">
        <h1>Results</h1>
        <search-result v-for="searchResult in searchResults" :key="searchResult.display" :title="searchResult.Title"
            :author="searchResult.Author" :summary="searchResult.summary" :display="searchResult.display" />
    </div>
    <p class="no-results-label" v-else-if="(!searchResults || searchResults.length === 0) && searchTerm !== ''">No Results</p>
</template>
  
<script>
import SearchResult from "@/components/SearchResult.vue";
import { getProjects } from '../projects/projects-gatherer.js'

export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: '',
            searchField: 'project',
            searchResults: null,
            projects: []
        };
    },
    mounted() {
        this.projects = getProjects().projects
        this.projects.sort((a, b) => (a.header.title.localeCompare(b.header.title)));
        if (this.$route.query.query) {
            this.searchTerm = this.$route.query.query;
            this.search();
        }
    },
    methods: {
        search() {
            this.$router.replace({ path: this.$route.path, query: { ...this.searchTerm ? { query: this.searchTerm } : {} }}).catch(() => {})
            if (!this.searchTerm) {
                this.searchResults = []
                return
            }
            const query = this.searchTerm.toLowerCase();
            const matches = [];
            const cache = new Set();
            this.projects.forEach(project => {
                const heading = project.header;
                if (heading.title.toLowerCase().includes(query) || heading.author.toLowerCase().includes(query)) {
                    const display = `${heading.title}-${heading.author}`;
                    if (!cache.has(display)) {
                        matches.push({ Title: heading.title, Author: heading.author, summary: heading.summary });
                        cache.add(display);
                    }
                }
            });
            this.searchResults = matches;
        }
    },
    components: {
        SearchResult,
    },
};
</script>
  
<style scoped>
.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.searchbar {
    width: 500px;
    height: 30px;
    padding: 20px;
    font-family: "Poppins";
    border-radius: 20px;
    outline: none;
    border: none;
}

.results-container {
    background-color: rgb(32, 33, 38);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 10px;
    padding-bottom: 50px;
}

.allButton {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    margin-top: 2vh;
    /* Adjust margin-top as needed */
}

.allButton>button {
    text-decoration: none;
    color: white;
    font-family: "Poppins";
    background-color: #7473BF;
    padding: .7rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 5vh;
    font-weight: 500;
}

.allButton>button:hover {
    background-color: #5d5b99;
    transition: background-color 0.3s ease-in-out;
}

button>img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    transition: filter 0.3s, color 0.3s;
}

button>img:hover {
    filter: brightness(0) invert(1);
}

h1 {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: x-large;
}

.no-results-label {
    margin-top: 40px;
}

@media only screen and (max-width: 500px) {
    .searchbar {
        width: 90%;
    }
}


</style>
