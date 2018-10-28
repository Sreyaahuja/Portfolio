<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Portfolio
      </h1>
      <h2 class="subtitle">
        My Projects
      </h2>
      <section class="section">
        <div class="my-projects container tile">
          <div
            v-for="project in projects"
            :key="project.title"
            class="project card">
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

        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Projects from '~/assets/Projects.js'

export default {
  data () {
    return {
      projects: Projects
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.my-projects {
  align-items: flex-start;
  flex-wrap: wrap;
}

.project.card {
  min-width: 300px;
  flex-grow: 0;
}

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

.links {
  padding-top: 15px;
}
</style>
