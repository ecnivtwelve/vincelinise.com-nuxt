<script setup>
    const props = defineProps(['title', 'date', 'author', 'image'])
</script>

<template>
    <div class="articleHead">
        <h2>{{ title }}</h2>
        <p>par {{ author }} - {{ new Date(date).toLocaleDateString('fr-FR',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</p>
    </div>

    <img :src="image" v-if="image" class="article-image" alt="article-image" />
</template>

<style scoped>
    .articleHead {
        margin-top: 36px;
        padding-bottom: 18px;
        margin-bottom: 18px;

        border-bottom: 1px solid #00000020;
    }

    .articleHead h2 {
        color: #000;
        font-size: 24px;
        font-weight: 600;
    }

    .articleHead p {
        color: #000;
        font-size: 16px;
        font-weight: 400;
        opacity: 0.6;
    }

    .article-image {
        width: 100%;
        max-height: 50vh;
        margin-bottom: 1rem;
        object-fit: cover;
        border-radius: 7px;
    }
</style>