<script setup>
    import '~/assets/markdown.css'

    useHead({
        link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        ],
    })
</script>

<template>
    <main>
        <ContentDoc :path="$route.params.path" v-slot="{ doc }">
            <ArticleHead :title="doc.title" :author="doc.author" :date="doc.date" :image="doc.image" />
            <div class="markdown-body">
                <ContentRenderer :value="doc" />
            </div>
        </ContentDoc>
        
    </main>
</template>