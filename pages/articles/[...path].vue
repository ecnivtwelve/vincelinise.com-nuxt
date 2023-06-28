<script setup>
    const route = useRoute()

    import '~/assets/markdown.css'

    useHead({
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        ],
    })
</script>

<template>
    <main>
        <ContentDoc :path="route.params.path.join('/')">
            <template  v-slot="{ doc }">
                <ArticleHead :title="doc.title" :author="doc.author" :date="doc.date" :image="doc.image" />
                <div class="markdown-body">
                    <ContentRenderer :value="doc" />
                </div>
            </template>
            <template #not-found>
                <div class="markdown-body">
                    <h1>Article introuvable</h1>
                    <p>L'article à l'adresse <code>{{ route.params.path.join('/') }}</code> n'existe pas.</p>
                    <p class="text-center">
                        <nuxt-link to="/">Retour à l'accueil</nuxt-link>
                    </p>
                </div>
            </template>
            <template #empty>
                <div class="markdown-body">
                    <h1>Article vide</h1>
                    <p>L'article à l'adresse <code>{{ route.params.path.join('/') }}</code> n'a pas encore été écrit.</p>
                    <p class="text-center">
                        <nuxt-link to="/">Retour à l'accueil</nuxt-link>
                    </p>
                </div>
            </template>
        </ContentDoc>
        
    </main>
</template>