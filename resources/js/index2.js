import MovieSelected from './models/MovieSelected';
import {renderloader, elements} from './views/base';
import * as movieSelectedView from './views/movieSelectedView';
import * as similarmoviesView from './views/similar-moviesView';

const state = {};

//Create new movie selected object
state.movieDetails = new MovieSelected();

const MovieSelectedController = async() => {
    

    
    //Get Data
    await state.movieDetails.selectedMovie();
    
    //Prepare UI for data
    

    //Render results on UI
    movieSelectedView.renderSelectedMovie(state.movieDetails.movieDet);

}

MovieSelectedController();

const SimilarController = async() => { 
    
    //Get Data
    await state.movieDetails.GetSimilar();

     //Render results on UI
     similarmoviesView.renderResults(state.movieDetails.similar);
}

SimilarController();

renderloader(elements.ms_details);

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');  

    loader.className += " hidden"
})
