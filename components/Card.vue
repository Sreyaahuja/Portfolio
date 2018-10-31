<template>
  <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
    <nuxt-link :to="'/projects/' + project.name">
      <div class="card project">
        <div class="card-image">
          <figure
            :class="['image', project.posterImage.ratio ? project.posterImage.ratio: 'is-square',]">
            <img :src="project.posterImage.src">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ project.name }}</p>
              <div class="tags">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="tag is-rounded is-medium"
                  href="#">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.title.is-4 {
  margin-bottom: 0.75;
}

.column {
  overflow: auto;
}

.card.project {
  height: 100%;
}
</style>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>
