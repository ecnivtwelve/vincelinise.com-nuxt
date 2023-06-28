<script setup>
    import { Github, Twitter, Youtube } from 'lucide-vue-next';
</script>

<template>
    <img src="~/assets/background_gradient.png" class="background_gradient" alt="background_gradient" />

    <header>
        <div class="me">
            <img src="~/assets/avatar_me.png" class="avatar" alt="avatar" />
            <div class="me_text">
                <h3>Vince Linise</h3>
                <p>@ecnivtwelve</p>
            </div>
        </div>

        <nav>
            <NuxtLink to="/">Projets</NuxtLink>
            <NuxtLink to="/articles">Articles</NuxtLink>
            <NuxtLink to="/articles/about">A propos</NuxtLink>

            <div class="socials">
                <a href="https://github.com/ecnivtwelve/" target="_blank">
                <Github />
                </a>
                <a href="https://twitter.com/ecnivtwelve/" target="_blank">
                <Twitter />
                </a>
                <a href="https://youtube.com/@ecnivtwelve/" target="_blank">
                <Youtube />
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 60px;
    margin-bottom: 20px;
  }

  .me {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;

    border: 1px solid #00000020;
  }

  .me_text {
    display: flex;
    flex-direction: column;
  }

  .me_text h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .me_text p {
    font-size: 1rem;
    opacity: 0.6;
  }

  nav {
    display: flex;
    gap: 0.25rem;
  }

  nav a {
    text-decoration: none;

    display: flex;
    padding: 8px 15px;
    align-items: center;
    gap: 10px;

    border-radius: 300px;

    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    color: #000;

    border : 1px solid #00000000;

    -webkit-tap-highlight-color: transparent;
  }

  nav a:hover {
    border: 1px solid #00000020;
    /* inner shadow */
    box-shadow: inset 0px 1px 2px #00000020;
  }

  nav a.router-link-active {
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);

    animation: nav-active 0.15s ease-out;
  }

  nav a.router-link-active:hover {
    border: 1px solid #00000000;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  }

  @keyframes nav-active {
    from {
      padding: 5px 10px;
      margin: 3px 5px;
    }
    to {
      padding: 8px 15px;
    }
  }

  .socials {
    display: flex;
    gap: 20px;

    padding-left: 25px;
    margin-left: 15px;

    border-left: 1px solid #00000020;
  }

  .socials a {
    padding: 0px 0px;
    opacity: 0.5;
  }

  .socials a:hover {
    box-shadow: none;
    border: 1px solid #00000000;
    opacity: 1;
  }

  @media screen and (max-width: 720px) {
    header {
      margin-top: 20px;
    }

    header {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    nav {
      margin-top: 1.2rem;
    }

    header {
      background: linear-gradient(#F9F9F9 10%, #ffffff99);

      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);

      position: fixed !important;
      top: 0;
      left: 0;

      width: 100%;
      height: 115px !important;
      z-index: 999;

      margin: 0 !important;

      border-bottom: 1px solid #00000020;

      justify-content: space-between;
    }

    .me {
      width: calc(100% - 20px * 2);
      justify-content: flex-start;
      align-items: center;

      gap: 0.75rem;

      padding: 0 20px;
      margin-top: 15px;
    }

    .me .avatar {
      width: 42px;
      height: 42px;
    }

    nav {
      width: 100%;
      gap: 0px;
      justify-content: center;

      margin-top: 0;
    }

    nav a {
      background: none !important;
      padding: 10px 0 !important;

      box-shadow: none !important;
      border: none !important;
      animation: none !important;

      border-radius: 0 !important;

      width: 100% !important;
      text-align: center;

      justify-content: center;

      border-bottom: 2px solid #00000000 !important;

      opacity: 0.5;
    }

    nav a.router-link-active {
      border-bottom: 2px solid #000000 !important;
      opacity: 1;
    }

    .socials {
      position: absolute;
      top: 16px;
      right: 30px;

      margin-left: 0;
      padding-left: 0;

      gap: 25px;

      border-left: none;
    }
  }

  .background_gradient {
    position: fixed;
    top: -50px;
    left: 0;
    z-index: -999;

    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  @media screen and (max-width: 620px) {
    .background_gradient {
      top: 0px;
    }
  }
</style>