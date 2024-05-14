<template>
  <div class="container">
    <a class="button" target="_blank" :href="GitHubUrl">
      <p class="label">GitHub</p>
      <GitHubLogo :scale="scale" class="logo" />
    </a>
  </div>
</template>

<script>
import GitHubLogo from './svgs/GitHubLogo.vue'

export default {
  name: 'GitHubButton',
  components: {
    GitHubLogo
  },
  props: {
    GitHubUrl: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      scale: .2
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0px !important;
  padding: 0px !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: white;
  width: fit-content;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  cursor: default;
}

.button:hover {
  background: rgba(255, 255, 255, 0.788);
  transition: .3s;
  cursor: default;
}

.label {
  user-select: none;
  color: black;
}

</style>