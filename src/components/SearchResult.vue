<!-- SearchResult.vue -->
<template>
    <router-link :to="projectRoute" class="search-result">
        <div class="result-info">
            <h3>{{ title }}</h3>
            <p>{{ author }}</p>
        </div>
    </router-link>
</template>
  
<script>
export default {
    props: {
        title: String,
        author: String,
        display: String,
    },
    data() {
        return {
            projectRoute: ''
        };
    },
    created() {
        this.projectRoute = `/projects/${this.title.replaceAll(' ', '').toLowerCase()}`;
    },
};
</script>
  
<style scoped>
.search-result {
    display: block;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    border-radius: 20px;
    outline: 1px solid #000;
    outline-offset: -6px;

    text-decoration: none;
    color: rgb(247, 247, 247);
    transition: background-color 0.3s;
    background-color: rgb(116, 115, 197)
}

.search-result:hover {
    background-color: rgb(93, 92, 158)
}

.result-info {
    text-align: center;

}

.result-info h3 {
    padding-top: 1vh;
}

.result-info p {
    font-size: 14px;
    color: rgb(247, 247, 247);
    padding-top: 2vh;
    padding-bottom: 1vh;
}
</style>
  