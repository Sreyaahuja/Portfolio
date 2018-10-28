<template>
  <div class="column is-2 card project">
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
          <p class="subtitle is-6">
            <a
              v-for="tag in project.tags"
              :key="tag"
              href="#">
              {{ tag }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project.card {
  min-width: 300px;
}

.card-content {
  padding: 1rem 0;
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
