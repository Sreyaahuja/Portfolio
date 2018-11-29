const AllProjects = require('./Projects.js')

for (let category in AllProjects) {
  const projects = AllProjects[category]

  for (let i in projects) {
    if (projects[i].slug === slug) {
      this.project = projects[i]
      console.log(this.project.slug)
    }
  }
}