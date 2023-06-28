<script>
  import '~/assets/main.css'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
  .page-enter-active{
    transition: all 0.35s cubic-bezier(0,0,0,1);
  }

  .page-leave-active {
    transition: all 0.2s cubic-bezier(1,0,1,1);
  }

  .page-enter-from{
    opacity: 0;
    transform: translateX(20px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }
</style>