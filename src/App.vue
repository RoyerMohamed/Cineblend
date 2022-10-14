<template>
    <HeaderApp />
  <div class="content">
    <div v-if="$route.path == '/'">
      <div class="hero-text">
        <h1>Bienvenue sur Cineblend</h1>
        <p>Profitez de bandes d'annonces de films et séries</p>
      </div>
      <TopMovies />
      <FrenchMovies />
      <AmericanMovies />
      <LastMovies />
    </div>
    <div class="d-flex justify-content-center flex-column" v-else>
      <!-- si la route est différente de / -->
      <router-view v-bind:key="$route.fullPath"></router-view>
    </div>
  </div>
    <Footer />
</template>
<script>
import Footer from "./components/template/FooterApp.vue";
import HeaderApp from "./components/template/HeaderApp.vue";
import TopMovies from "./components/utils/Top50MoviesListUtils.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import AmericanMovies from "./components/AmericanMovies.vue";
import LastMovies from "./components/LastMovies.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    Footer,
    TopMovies,
    FrenchMovies,
    AmericanMovies,
    LastMovies,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
body {
  background: #24233e;
  position: absolute;
}
#app {
  width: 100vw;
  height: 100vh;
}
h1 {
  color: white;
  font-family: "Abril Fatface", cursive;
  font-size: 50px;
  padding-bottom: 2rem;
}
h2 {
  position: relative;
  color: #fff;
  text-align: left;
  margin-left: 3rem;
  font-size: 30px;
  font-family: "Abril Fatface", cursive;
}
.hero-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
}
.hero-text>p{
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}
.content{
  display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}
</style>
