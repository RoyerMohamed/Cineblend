<template>
  <div class="container d-flex justify-content-around w-50 sort-btn">
    <button @click="triParTitre"  class="btn btn-secondary">
      Trier par titre
    </button>
    <button @click="triParNote"  class="btn btn-secondary">
      Trier par note
    </button>
    <button @click="triParDate"  class="btn btn-secondary">
      Trier par date
    </button>
  </div>
</template>
<script>
export default {
  name: "sortBoutonUtils",
  props: ["movies"],
  data() {
    return {
      triesParTitre: false,
      triesParNote: false,
      triesParDate: false,
    };
  },
  methods: {
    triParTitre() {
        let sorted = this.movies ; 
        if(!this.triesParTitre){
            sorted.sort(function(a,b){
                   if(a.title < b.title){
                       return -1
                   }
                   if(a.title > b.title){
                       return 1
                   }
                   return 0
                 })
        }else{
             sorted.sort(function(a,b){
                   if(a.title > b.title){
                       return -1
                   }
                   if(a.title < b.title){
                       return 1
                   }
                   return 0
                 })
                 
        }    
        this.triesParTitre = !this.triesParTitre 
        console.log(sorted);
    },
    triParNote() {
        let sorted = this.movies ; 
        if(!this.triesParNote){
            sorted.sort(function(a,b){
                   if(a.vote_average < b.vote_average){
                       return -1
                   }
                   if(a.vote_average > b.vote_average){
                       return 1
                   }
                   return 0
                 })
        }else{
             sorted.sort(function(a,b){
                   if(a.vote_average > b.vote_average){
                       return -1
                   }
                   if(a.vote_average < b.vote_average){
                       return 1
                   }
                   return 0
                 })
                 
        }    
        this.triesParNote = !this.triesParNote 
    },
    triParDate() {
          let sorted = this.movies ; 
        if(!this.triesParDate){
            sorted.sort(function(a,b){
                   if(a.release_date < b.release_date){
                       return -1
                   }
                   if(a.release_date > b.release_date){
                       return 1
                   }
                   return 0
                 })
        }else{
             sorted.sort(function(a,b){
                   if(a.release_date > b.release_date){
                       return -1
                   }
                   if(a.release_date < b.release_date){
                       return 1
                   }
                   return 0
                 })
                 
        }    
        this.triesParDate = !this.triesParDate 
        console.log(sorted)
    },
  },
};
</script>
<style>
.sort-btn {
  position: relative;
}
</style>