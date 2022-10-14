import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import axios from 'axios'; 


const vuexPersist = new VuexPersist({
    key: "cineblend",
    storage: window.localStorage
})


const defaultState = {
    popularMovies: null,
    frenchMovies: null,
    americanMovies: null,
    lastMovies: null,
    top50Movies: null
}

export const store = createStore({

    state() {

        if (localStorage.state) {
            return localStorage.state;
        } else {
            return defaultState;
        }

    },

    mutations: {

        storePopularMovies(state, payload) {
            state.popularMovies = payload;
        },

        storeFrenchMovies(state, payload) {
            state.frenchMovies = payload;
        },

        storeAmericanMovies(state, payload) {
            state.americanMovies = payload;
        },

        storeLastMovies(state, payload) {
            state.lastMovies = payload;
        },

        storeTop50Movies(state, payload) {
            state.top50Movies = payload;
        }, 
        resetState(state){
            Object.assign(state , defaultState)
        }

    },

    getters: {

        getPopularMovies(state) {
            return state.popularMovies;
        },

        getFrenchMovies(state) {
            return state.frenchMovies;
        },

        getAmericanMovies(state) {
            return state.americanMovies;
        },

        getLastMovies(state) {
            return state.lastMovies;
        },

        getTop50Movies(state) {
            return state.top50Movies;
        }, 
    }, 

    actions : {
        storeAmericanMovies(){
            axios
            .get(
                "https://api.themoviedb.org/3/discover/movie?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_original_language=en&with_watch_monetization_types=flatrate"
            )
            .then((res) => {
               
                store.commit('storeAmericanMovies' , res.data.results)             
            });
        } ,

        storePopularMovies(){
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7d83cf4dcf03db332755aef99b57ffe7')
            .then(res =>{
                store.commit('storePopularMovies' , res.data.results)
            })
        },
        storeFrenchMovies(){
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7d83cf4dcf03db332755aef99b57ffe7&language=fr-FR&certification_country=france&with_original_language=fr')
            .then(res =>{
                store.commit('storeFrenchMovies' , res.data.results)
            })
        }, 

        resetState(){
            store.commit("resetState")
        }
    },

    plugins : [vuexPersist.plugin]

})

