<template lang="">
<ul class="scroll ">
<MovieCardUtils v-for="movie in movies" v-bind:key="movie.id" :movie="movie"/>
</ul>
</template>
<script>
import MovieCardUtils from './MovieCardUtils.vue'
export default {
    name : "MoviesListUtils", 
   props : [ 
      "movies"
    ], 
    components : {
      MovieCardUtils
    }
}
</script>
<style>
  ul > li {
    list-style: none;
  }
  ul{
    display: flex;
  }
  .scroll {
        margin: 4px, 4px;
        padding: 4px;
        width: 100%;
        overflow: auto;
        white-space: nowrap;
    }

  ::-webkit-scrollbar {
  width: 0;
}
</style>