<template>
  <div class="container">
    <section class="section header">
      <nuxt-link to="/"><img src="/Title.jpg"></nuxt-link>
      <p class="subtitle">
        A User Experience Researcher and Designer.
        <a
          href="/Sreya-Ahuja-Resume.pdf"
          download>My Résumé</a>
        <a
          href="https://www.instagram.com/sreya.ahuja/"
          target="_blank">My Art on Instagram</a>
      </p>
    </section>
    <section
      v-for="(projects, category) in categories"
      :key="category"
      class="container section">
      <h2 class="title is-1">{{ category }}</h2>
      <div class="columns is-multiline">
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
.section.header img {
  width: 319px;
  height: 258px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

p.subtitle {
  font-weight: 400;
  color: #526488;
  text-align: center;
}

h2.title.is-1 {
  font-weight: 400;
}
</style>
