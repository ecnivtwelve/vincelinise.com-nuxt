<template>
    <div>
        <Header />
        <slot />

        <footer>
            <p class="copyright">(C) 2023 Vince Linise - Tous les projets présentés ici sont menés ou crées intégralement par moi et sont soumis, sauf cas contraire, aux droits d’auteur.</p>
        </footer>
    </div>
</template>

<style scoped>
  footer {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer .copyright {
    max-width: 600px;
    font-size: 13px;
    text-align: center;
    opacity: 0.5;
    user-select: none;
  }
</style>