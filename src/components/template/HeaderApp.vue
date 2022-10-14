<template lang="">
<div class="mb-5">
  <nav class="navbar navbar-expand-xl">
  <div class="container-fluid">
  <router-link class="link" to="/"> <img :src="image" /></router-link>
    <button class="navbar-toggler btn-close-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-label="Close" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-around"> 
        <li class="nav-item">
          <router-link class="link" to="/FrenchMovies">Films français</router-link>
        </li>
        <li class="nav-item">
         <router-link class="link" to="/AmericanMovies">Films american</router-link>
        </li>
        <li class="nav-item">
        <router-link class="link" to="/TopRatedMovies">Top: les mieux notés</router-link>
        </li>
        <li class="nav-item">
         <router-link class="link" to="/LastMovies">Films 2022</router-link>
        </li>
        <li class="nav-item">
          <router-link class="link" to="/SearchMovies">Rechercher un film</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>
<script>
   import image from "../../assets/logo-Cineblend.png"
export default {
      
  data: function () {
    return {
       image: image
    }
  }  
}
</script>
<style >
    .link {
  text-decoration: none;
  color: white;
}
nav{
  height: 100px;
  background: #181729;
}
img{
  width:150px; 
  padding: 1rem;

}
@media (max-width : 1200px) {
     .link {
  text-decoration: none;
  color: #181729;
  font-size: 1.5rem;
  text-align: center;
}
ul{
  text-align: center;
    display: flex;
    align-items: center;
    height: 30%;
}
}
</style>