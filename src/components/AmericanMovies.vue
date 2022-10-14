<template lang="">
  <h2>Films american</h2> 
<div v-if="$route.path !== '/'">
  <SortBoutonUtils :movies="movies" @sortedMovies="sortedMovies" />
</div>
  <div class="container-fluid">
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
    SortBoutonUtils,
    
  },
  data() {
    return {
      movies: [],
    };
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=en&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        this.movies = res.data.results;
        axios.get( "https://api.themoviedb.org/3/discover/movie?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000&with_original_language=en&with_watch_monetization_types=flatrate")
        .then(res=>{
          res.data.results.forEach( movie => {
            this.movies.push(movie)
          });
        })
      });
  },
   methods : {
    sortedMovies(sortedMovies){
      this.movies = sortedMovies
    }, 
  }, 
};
</script>
<style>
</style>
