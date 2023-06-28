<script setup>
  import { Search } from 'lucide-vue-next';

  const props = defineProps(['placeholder'])
</script>

<template>
    <div class="searchBar">
        <Search class="icon"/>
        <input @input="$emit('input', $event)" type="text" :placeholder="placeholder" />
    </div>
</template>

<style scoped>
    .searchBar {
        display: flex;
        width: calc(100% - 18px * 2);
        padding: 15px 18px;
        align-items: center;
        gap: 20px;

        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
    }

    .searchBar .icon {
        opacity: 0.48;
    }

    .searchBar input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        
        font-size: 16px;
        font-weight: 500;
        color: #000000;

        -webkit-tap-highlight-color: transparent;
    }

    .searchBar input::placeholder {
        color: rgba(0, 0, 0, 0.48);
    }

    .searchBar:focus-within {
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.10);
    }

    @media screen and (max-width: 620px) {
        .searchBar {
            width: calc(100% - 18px * 2);
            padding: 10px 18px;
        }
    }
</style>