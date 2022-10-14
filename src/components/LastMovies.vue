<template lang="">
  <h2>Films 2022</h2>  
<div v-if="$route.path !== '/'">
  <SortBoutonUtils :movies="movies" @sortedMovies="sortedMovies" />
</div>
  <div class="container-fluid ">
    <MoviesListUtils :movies="movies"/>
  </div>
</template>
<script>
import MoviesListUtils from "./utils/MoviesListUtils.vue";
import SortBoutonUtils from "./utils/SortBoutonUtils.vue"; 
import axios from "axios";
export default {
  name: "TopRatedMovies",
  components: {
    MoviesListUtils,
    SortBoutonUtils
  },

  data() {
    return {
      movies: [],
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie/?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr&primary_release_year=2022&sort_by=popularity.desc&page=1"
      )
      .then((res) => {
        this.movies = res.data.results;
        axios.get("https://api.themoviedb.org/3/discover/movie/?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr&primary_release_year=2022&sort_by=popularity.desc&page=2")
        .then((res) => {
          res.data.results.forEach((movie) =>{
            this.movies.push(movie)
          })
          
        } )
      });
  },
   methods : {
    sortedMovies(sortedMovies){
      this.movies = sortedMovies
    }, 
  }
};
</script>

<style>
</style>
