<template>
  <div class="container">
    <section class="section">
      <h1 class="title">
        Portfolio
      </h1>
      <h2 class="subtitle">
        My Projects
      </h2>
    </section>
    <section
      v-for="(projects, category) in categories"
      :key="category"
      class="container section">
      <h2 class="title is-2">{{ category }}</h2>
      <div class="projects columns is-multiline">
        <card
          v-for="project in projects"
          :project="project"
          :key="project.name" />
      </div>
    </section>
  </div>
</template>

<script>
import Projects from '~/assets/Projects'
import Card from '~/components/Card'

export default {
  components: { Card },
  data () {
    return {
      categories: Projects
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

h2.title.is-2 {
  text-align: left;
}
</style>
