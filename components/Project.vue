<script setup>
    const props = defineProps(['category', 'title', 'description', 'image', 'link'])
</script>

<template>
    <NuxtLink :to="link" class="project_link">
        <div class="project">
            <div :style="`--background:url('${image}');`" class="project-image">
            </div>
            <div class="project-text">
                <p class="project-category">{{ category }}</p>
                <h3 class="project-title">{{ title }}</h3>
                <p class="project-description">{{ description }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
        -webkit-tap-highlight-color: transparent !important;
    }

    .project {
        width: 100%;

        flex-shrink: 0;
        align-items: flex-start;

        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.05);

        display: flex;
        overflow: hidden;

        transition: all 0.2s ease;
    }

    .project:hover {
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.20), 0px 6px 10px 0px rgba(0, 0, 0, 0.10);
        transform: translateY(-2px);
    }

    .project:active {
        box-shadow: inset 0px 0px 0px #00000000;
        transform: translateY(2px);
    }

    .project-image {
        width: 180px;

        background-image: var(--background);
        background-size: cover;
        background-position: center;

        background-repeat: no-repeat;
        
        flex-shrink: 0;
        align-self: stretch;

        object-fit: cover;
        object-position: center;
    }

    .project-text {
        padding: 13px 15px;
        height: fit-content;
        flex: 1 0 0;
    }

    .project-category {
        color: rgba(0, 0, 0, 0.48);
        font-size: 14px;
    }

    .project-title {
        font-size: 18px;
        font-weight: 600;
        margin-top: 4px;
    }

    .project-description {
        font-weight: 400;
        font-size: 15px;
        margin-top: 14px;
    }

    @media (max-width: 500px) {
        .project {
            flex-direction: column;
        }

        .project-image {
            width: 100%;
            height: 180px;
        }

        .project-text {
            padding: 15px;
        }
    }
</style>