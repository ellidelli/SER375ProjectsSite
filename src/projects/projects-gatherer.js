import { markRaw } from 'vue'

// returns a list of all file names that end with .vue inside of the projects folder
// e.g. if there were files in the projects folder named "SampleProject1.vue" and "SampleProject2.vue", this function would return ['SampleProject1.vue', 'SampleProject2.vue']
const getAllProjectFileNames = () => {
  return require.context('@/projects/project_pages', false, /.vue$/).keys()
}

// Creates a JSON structure for each project page utilizing their "info" field, which is a custom field containing project metadata
// Can be used to gather all available project page's info to be used with feature implementations such as searching
export const getProjects = () => {
  const vueFileNames = getAllProjectFileNames()
  const projects = vueFileNames.map(vueFileName => {
    const name = vueFileName.slice(2, -4)
    return {
      header: {
        ...require(`./project_pages/${name}`).default.info
      }
    }
  })
  return { projects }
}

// retrieves a Vue component for a project based
// can be used for loading in a component dynamically into another Vue file
export const getProjectComponent = (projectName) => {
  const vueFileNames = getAllProjectFileNames()
  const selectedFileName = vueFileNames.find(vueFileName => vueFileName.slice(2, -4).replaceAll(' ', '').toLowerCase() === projectName)
  if (!selectedFileName) {
    return null
  }
  const component = require(`./project_pages/${selectedFileName.substr(2)}`).default
  return component ? markRaw(component) : null
}


