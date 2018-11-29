<template>
  <div class="section container">
    <div class="columns">
      <div class="column is-3">
        <figure :class="['image', 'is-square']">
          <img :src="'/' + project.posterImage.src">
        </figure>
        <h2 class="title is-3">{{ project.name }}</h2>
        <h3 class="project-subtitle">{{ project.description }}</h3>
        <div class="tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="tag is-rounded is-medium">{{ tag }}</span>
        </div>
      </div>
      <div class="column">
        <transition
          name="fade"
          mode="out-in">
          <hollow-dots-spinner
            v-if="loading"
            :animation-duration="1000"
            :dot-size="15"
            :dots-num="3"
            color="#092d52"
            style="margin: 5rem auto"
          />

          <img
            v-else
            :src="project.contentImage">
        </transition>
      </div>
      <div class="column is-1 close-column"><nuxt-link to="/"><span class="tag is-large is-delete" /></nuxt-link></div>
    </div>
  </div>
</template>

<script>
import AllProjects from '~/assets/Projects'
import { HollowDotsSpinner } from 'epic-spinners'

export default {
  components: { HollowDotsSpinner },
  data () {
    return {
      loading: false,
      project: null
    }
  },
  created () {
    const slug = 'projects/' + this.$route.params.slug

    for (let category in AllProjects) {
      const projects = AllProjects[category]

      for (let i in projects) {
        if (projects[i].slug === slug) {
          this.project = projects[i]
          break
        }
      }

      if (this.project != null) break
    }

    if (this.project) {
      this.loading = true
      let img = new Image()
      img.src = this.project.contentImage
      img.addEventListener('load', this.loaded)
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    loaded () {
      this.$nextTick(() => this.loading = false)
    }
  }
}
</script>

<style scoped>
.close-column .tag {
  position: fixed;
}

.scale-enter-active, .scale-leave-active {
  transition: all .5s ease-in;
}
.scale-enter, .scale-leave-to {
  transform: scale(0);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.project-subtitle {
  margin-bottom: 1.5rem;
}
</style>
