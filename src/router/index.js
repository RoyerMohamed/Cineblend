import { createRouter , createWebHistory } from "vue-router";
import App from '../App'; 
import FrenchMovies from '../components/FrenchMovies'
import AmericanMovies from '../components/AmericanMovies'
import TopRatedMovies from '../components/TopRatedMovies'
import LastMovies from '../components/LastMovies'
import SearchMovies from '../components/SearchMovies'
import MovieDetails from '../components/MovieDetails'


const routes = [
    {
        name : 'accueil', 
        path: '/', 
        component : App
    }, 
    {
        name : 'FrenchMovies', 
        path: '/FrenchMovies', 
        component : FrenchMovies
    },
    {
        name : 'AmericanMovies', 
        path: '/AmericanMovies', 
        component : AmericanMovies
    },
    {
        name : 'TopRatedMovies', 
        path: '/TopRatedMovies', 
        component : TopRatedMovies
    }, 
    {
        name : 'LastMovies', 
        path: '/LastMovies', 
        component : LastMovies
    },
    {
        name : 'SearchMovies', 
        path: '/SearchMovies', 
        component : SearchMovies
    },
    {
        name : 'MovieDetails', 
        path: '/MovieDetails/:id', 
        component : MovieDetails
    },
    
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router; 
