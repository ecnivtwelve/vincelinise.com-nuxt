<script setup>
  import Projects from '~/assets/projects.json'

  import { ref } from 'vue'

  const search = ref('')
  const searchResults = ref([])

  function handleSearch(event) {
    const value = event.target.value;
    search.value = value;
    
    if(value.length > 2) {
      // projects
      searchResults.value = Projects.projects.filter(project => {
        return project.title.toLowerCase().includes(value.toLowerCase()) || project.keywords.toLowerCase().includes(value.toLowerCase()) || project.description.toLowerCase().includes(value.toLowerCase())
      })
      // designs
      searchResults.value = searchResults.value.concat(Projects.designs.filter(project => {
        return project.title.toLowerCase().includes(value.toLowerCase()) || project.keywords.toLowerCase().includes(value.toLowerCase()) || project.description.toLowerCase().includes(value.toLowerCase())
      }))
    } else {
      searchResults.value = []
    }
  }

  useHead({
    title: 'Vince Linise - développeur et designer',
    meta: [
      { name: 'description', content: 'Je développe et designe des applications web et mobile depuis plusieurs années. Retrouvez mes projets sur mon site web.' },
      { name: 'theme-color', content: '#0066ff' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  })
</script>

<template>
  <div>
    <SearchBar placeholder="Rechercher un projet, un service ou un design" @input="handleSearch($event)" />

    <div v-if="search.length > 2">
      <ListTitle title="Résultats de recherche" :count="searchResults.length" name="éléments" />

      <div class="list-items">
        <Project
          v-for="project in searchResults"
          :key="project.id"
          :category="project.category"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :link="project.url"
        />
      </div>

      <div v-if="searchResults.length === 0">
        <p class="no-results">Aucun résultat trouvé pour votre recherche.</p>
      </div>
    </div>

    <ListTitle title="Projets & applications" :count="Projects.projects.length" name="projets" />
    <div class="list-items">
      <Project
        v-for="project in Projects.projects.slice(0, 4)"
        :key="project.id"
        :category="project.category"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.url"
      />
    </div>

    <ListTitle title="Designs et graphisme" :count="Projects.designs.length" name="designs" />
    <div class="list-items">
      <Project
        v-for="project in Projects.designs.slice(0, 4)"
        :key="project.id"
        :category="project.category"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.url"
      />
    </div>
    
    
  </div>
</template>