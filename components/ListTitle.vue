<script setup>
    const props = defineProps(['title', 'count', 'name'])
</script>

<template>
    <div class="listTitle">
        <h2>{{ title }}</h2>
        <p>{{ count }} {{name}}</p>
    </div>
</template>

<style scoped>
    .listTitle {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;

        margin-top: 50px;
        margin-bottom: 16px;
    }

    .listTitle h2 {
        color: #000;
        font-size: 20px;
        font-weight: 600;
    }

    .listTitle p {
        color: rgba(0, 0, 0, 0.50);
        text-align: right;
        font-size: 14px;
    }
</style>