<template lang="">
   <h2>SearchMovies</h2>
<div v-if="$route.path !== '/'">
  <SortBoutonUtils :movies="movies" @sortedMovies="sortedMovies" />
</div>  <div class="d-flex justify-content-center">
      <input type="text" v-model="search" placeholder="Search " @keyup="getResult" />
  </div>
   <div class="wrapper">
      <MoviesListUtils :movies="movies"/>
   </div>
</template>
<script>
import MoviesListUtils from '../components/utils/MoviesListUtils.vue'; 
import SortBoutonUtils from './utils/SortBoutonUtils.vue'; 
import axios from 'axios'; 
export default {
     name : 'SearchMovies', 
     components : {
      MoviesListUtils, 
      SortBoutonUtils
     }, 
     data(){
      return {
         movies :[], 
         search: '',
      }
     }, 
     created() {   
   
  }, 
methods : {
   sortedMovies(sortedMovies){
      this.movies = sortedMovies
   }, 
   getResult(){
      axios
      .get(
          "https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr&include_adult=false&query=" +
            this.search
        ).then((res) => {
           this.movies = res.data.results;
      });
   } 
}
}
</script>
<style >
 input{
   position: relative;
 }

</style>
