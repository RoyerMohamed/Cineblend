<template>
  <div class="card my_card" id="details" >
    <img
      :src="preUrl + movie.poster_path"
      class="card-img-top poster"
      :alt="movie.title"
    />
    <div class="descp">
          <div class="mt-5" id="trailer" v-if="video[0]" >
            <iframe width="500" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen class="shadow"></iframe>
        </div>
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text pb-5">{{ movie.overview }}</p>
      <p><strong>Date de sortie :</strong> {{ movie.release_date }}</p>
      <p>
        <strong>Genres :</strong>
        <span>

        <em v-for="genre in movie.genres" v-bind:key="genre.id">{{
          genre.name
        }}</em>
        </span>
      </p>
      <p>
        <strong>Produit par :</strong>
        <span>

        <em
          v-for="production_companie in movie.production_companies"
          v-bind:key="production_companie.id"
          >{{ production_companie.name }}</em
        >
        </span>
      </p>
      <p>
        <strong>Produit en :</strong>
        <span>

        <em
          v-for="production_countrie in movie.production_countries"
          v-bind:key="production_countrie.id"
          >{{ production_countrie.name }}</em
        >
        </span>
      </p>
      <p>
        <strong>Traductions :</strong>
        <span>

        <em
          v-for="spoken_language in movie.spoken_languages"
          v-bind:key="spoken_language.id"
          >{{ spoken_language.name }}</em
        >
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "movie-details",
  data() {
    return {
      movie: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
      video : []
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=7d83cf4dcf03db332755aef99b57ffe7`
      )
      .then((res) => {
        this.movie = res.data;

        axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr`)
            .then((res) => {
              this.video = res.data.results;
            })

        }
      )
  },
  
};
</script>
<style>
.my_card .details {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
#details {
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 80vw; 
  max-width: 1366px;

}
.descp {
  width: 50%;
  height: 100%;
  padding: 1rem;
  text-align: center;
}
.card-text{
  text-align: justify;
  margin: 0 2rem;
}
strong {
  color: #24233e;
}
em {
  margin-right: 0.5rem;
}
p{
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
}
@media (max-width : 1300px) {
 #details{
  width: 95vw;
 
 }
 }
 
 @media (max-width : 1100px) {
 #details{
  width: 70vw;
  flex-direction: column;

 }
 iframe{
  width: 100%;
  height: 300px;
 }
  #details>img{
 display: none;
 }
 .descp {
  width: 100%;
 
}
}
</style>
