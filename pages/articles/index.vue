<script setup>
    useHead({
        title: 'Articles - Vince Linise',
    })
</script>

<template>
    <main>
      <ContentList>
        <template #default="{ list }">
            <ListTitle title="Articles" :count="list.length" name="article(s)" />

            <div class="list-items">
                <Article
                    v-for="article in list.sort((a, b) => new Date(b.date) - new Date(a.date))"
                    :key="article._path"
                    :title="article.title"
                    :description="article.description"
                    :date="article.date"
                    :image="article.image"
                    :link="'/articles'+article._path"
                />
            </div>
        </template>
        <template #not-found>
            <p>No articles found.</p>
        </template>
      </ContentList>
    </main>
 </template>