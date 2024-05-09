<template>
  <div class="root">
    <h1>Browse All Projects</h1>
    <div class="paging-container">
      <button class="page-button" @click="prevPage">&lt;</button>
      <p class="page-label">Page {{ page + 1 }}</p>
      <button class="page-button" @click="nextPage">&gt;</button>
    </div>
    <div class="projects">
      <SearchResult v-for="project in getProjectsOnPage()" :key="project" :title="project.header.title"
        :author="project.header.author" :display="project.header.display" />
    </div>
    <div class="paging-container">
      <button class="page-button" @click="prevPage">&lt;</button>
      <p class="page-label">Page {{ page + 1 }}</p>
      <button class="page-button" @click="nextPage">&gt;</button>
    </div>
  </div>
</template>

<script>
import { getProjects } from '../projects/projects-gatherer.js'
import SearchResult from '@/components/SearchResult.vue'

export default {
  name: 'BrowseView',
  components: {
    SearchResult
  },
  data: () => {
    return {
      projects: [],
      page: 0,
      numberPerPage: 10
    }
  },
  computed: {
    lastPage() {
      return Math.ceil(this.projects.length / this.numberPerPage) - 1
    }
  },
  mounted() {
    this.projects = getProjects().projects
    this.projects.sort((a, b) => (a.header.title.localeCompare(b.header.title)));
    this.page = parseInt(this.$route.query.page, 10) - 1
    if (Number.isInteger(this.page)) {
      if (this.page < 0) {
        this.page = 0
      }
      else if (this.page > this.lastPage) {
        this.page = this.lastPage
      }
    }
    else {
      this.page = 0
    }
    return this.updatePageInQuery()
  },
  methods: {
    getProjectsOnPage() {
      return this.projects.slice(this.page * this.numberPerPage, (this.page + 1) * this.numberPerPage)
    },
    nextPage() {
      if (this.page < this.lastPage) {
        this.page++
        return this.updatePageInQuery()
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page--
        return this.updatePageInQuery()
      }
    },
    updatePageInQuery() {
      return this.$router.replace({ path: this.$route.path, query: { page: this.page + 1 } })
        .catch(() => { })
    }
  }
}
</script>

<style scoped>
button {
  font-family: 'Poppins';
  font-weight: 600;
  background-color: white;
  color: rgb(116, 115, 197);
  border-radius: 20px;
  margin: 1rem;
}

.root {
  background-color: rgb(32, 33, 38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.paging-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 40px;
  padding-top: 40px;
}

.page-label {
  width: 80px;
}

.page-button {
  width: 40px;
  height: 20px;
  border: none;
}

.page-button:hover {
  background-color: rgb(116, 115, 197);
  color: white;
  transition: ease-in-out 0.2s;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 10px;
}
</style>
