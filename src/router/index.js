import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import BrowseView from '../views/BrowseView.vue'
import Project from '../views/Project.vue'
import TagView from '../views/TagView.vue'
import TagProjectDisplay from '../views/TagProjectDisplay.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  },
  {
    path: '/browse',
    name: 'browse',
    component: BrowseView
  },
  {
    path: '/projects/:projectTitle',
    name: 'project',
    component: Project
  }, 
  {
    path: '/tags',
    name: 'ProjectTags',
    component: TagView
  },
  {
    path: '/tags/:tag',
    name: 'ProjectTag',
    component: TagProjectDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 } // scroll to top of page when route changes
  }
})

export default router
