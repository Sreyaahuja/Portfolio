<template>
  <section class="section container">
    <div v-if="project">
      <div class="nav">
        <div class="details">
          <h1 class="title is-1">Art Series: {{ project.name }}</h1>
          <h3 class="subtitle is-3">{{ project.description }}</h3>
          <div v-html="project.longDescription" />
        </div>
        <div class="close">
          <nuxt-link to="/"><span class="tag is-large is-delete" /></nuxt-link>
        </div>
      </div>
      <gallery
        :images="images"
        :index="index"
        @close="index = null" />
      <div class="columns is-multiline">
        <div
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
          <div
            :style="{ backgroundImage: 'url(' + image.href + ')', width: '100%', height: '300px', backgroundSize: 'cover', backgroundPosition: 'top center' }"
            class="image"
            @click="index = imageIndex" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between; 
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #DDD;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

p:last-of-type {
  margin-bottom: 0px;
}

h3.title {
  background-color: #000;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.image {
  cursor: pointer;
}
</style>

<script>
import AllProjects from '~/assets/Projects'
import VueGallery from 'vue-gallery'

export default {
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      images: null,
      loading: true,
      index: null,
      project: null
    }
  },
  created () {
    const slug = 'art/' + this.$route.params.slug

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
      this.images = this.project.images
      this.loading = true
      let img = new Image()
      img.src = this.project.posterImage.src
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

