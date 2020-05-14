import Carousel from './models/Carousel';
import NowPlaying from './models/Now-Playing';
import Upcoming from './models/Upcoming';
import Trending from './models/Trending';
import TopRated from './models/TopRated';
//import {movieSelected} from './models/MovieSelected';
import * as carouselView from './views/carouselView';
import * as nowplayingView from './views/now-playingView';
import * as upcomingView from './views/upcomingView';
import * as trendingView from './views/trendingView';
import * as topRatedView from './views/topRatedView';
import {elements,renderloader} from './views/base';




/* Global state of the app */
const state = {};


const  CarouselController = async () => {

    // Prepare page for the data
    state.carousel = new Carousel();

    // prepare UI for popular movies
    renderloader(elements.sectCarousel);

    // get the popular movies
    await state.carousel.getPopular();

    //Render results on UI
    carouselView.renderResults(state.carousel.popularMovies);
    

    //slide from image to image
    state.carousel.nextSlide();
}
    CarouselController();



//NowPlaying
const SwiperController = async () => {

    // Prepare page for the data
    state.nowPlaying = new NowPlaying();
    // prepare UI for now playing movies

    // get the now playing movies
    await state.nowPlaying.WhatsOn();

    //Render results on UI
    nowplayingView.renderResults(state.nowPlaying.nowShowing)

}
SwiperController();
 
//NowPlaying
//Swipe Controlloer arrow clicks
elements.ns_posters.addEventListener('click', el => {
    
    
    const ns_arrow = el.target.closest('.ns-arrows');
    if(ns_arrow){

        const goToPage = parseInt(ns_arrow.dataset.goto_ns,10);
        
        //Clear reults for blank page
        nowplayingView.clearResults();

        nowplayingView.renderResults(state.nowPlaying.nowShowing, goToPage);
        //console.log(goToPage);
    }
     
});



const UpcomingController = async () => {
    // Prepare page for the data
    state.upcoming = new Upcoming();

    // prepare UI for now playing movies

    // get the now playing movies
    await state.upcoming.getUpcoming();

    //Render results on UI
    upcomingView.renderResults(state.upcoming.upcomingMovies);


}
UpcomingController();

elements.upcomingPosters.addEventListener('click', el => {

    const upcoming_Arrow = el.target.closest('.upcoming-arrows');
    if(upcoming_Arrow) {

        const goToPage = parseInt(upcoming_Arrow.dataset.goto_upcoming,10);

        upcomingView.clearResults();

        upcomingView.renderResults(state.upcoming.upcomingMovies, goToPage);
    }
})

const TrendingController = async() => {
    // Prepare page for the data
     state.trending = new Trending();

     // prepare UI for latest movie

     //get the latest movie
    await state.trending.getTrending();

    //Render results on UI
    trendingView.renderResults(state.trending.getTrending);
}

TrendingController();


elements.trending.addEventListener('click', el=> {

   const trending_arrow =  el.target.closest('.trending-arrows');

   if(trending_arrow) {
       
    const goToPage = parseInt(trending_arrow.dataset.goto_trending,10);

    trendingView.clearResults();

    trendingView.renderResults(state.trending.getTrending, goToPage);

   }
});

const TopRatedController = async() => {
    //initialise the data
    state.topRated = new TopRated();

    // prepare for for the UI

    //get data
    await state.topRated.getTopRated();

    //prepare data for Ui
    topRatedView.renderResults(state.topRated.topRated);

    
}

TopRatedController();

elements.topRated_wrapper.addEventListener('click', el => {

    const topRated_Arrows = el.target.closest('.topRated-arrows');

    if(topRated_Arrows)
    {
        const goToPage = parseInt(topRated_Arrows.dataset.goto_toprated,10);

        topRatedView.clearResults();

        topRatedView.renderResults(state.topRated.topRated, goToPage);

    }
    
});
//Spinner funtion
window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');  

    loader.className += " hidden"
})


const movieSelected = () => {
    const id = window.location.hash.replace('#', '');
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
    
}

window.addEventListener('hashchange', movieSelected);




