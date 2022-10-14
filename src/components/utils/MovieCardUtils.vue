<template lang="">
    <div class="col-xs-12 col-md-4 col-sm-8 col-lg-4 col-xl-3 col-xxl-2 d-flex justify-content-center details-wrapper ">
        <div class="card my_card"  >
        <router-link  :to="`/MovieDetails/${movie.id}`">
            <img :src="preUrl+ movie.poster_path" class="card-img-top poster" width="300" height="400" :alt="movie.title">
        </router-link>   
        </div>
    </div>
</template>
<script>
export default {
    name : 'MovieCardUtils', 
    props : [
        "movie"
    ], 
    data () {
        return {
            preUrl : "https://image.tmdb.org/t/p/original/"
        }
    }

}
</script>
<style>
.poster{
    max-width: 500px;
    margin: auto;
} 
p , h5{
    
    color: white;
}

ul{
    padding:0 ;
}
.my_card{
border-color:#24233e ;
background-color: #da6157;
}
.my_card:hover> a >img{
    transform: scale(1.2);
    transition: all 400ms ease-in;
    z-index: 1000;
}
.my_card> a >img{
    transition: all 400ms ease-out;
}
.card-body{
    display: none;
} 
</style>