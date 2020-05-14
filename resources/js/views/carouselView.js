import {elements, loader} from './base';


const renderPopMovies = popularMovie => {

    const markup = `
     <div class="myslides fade">
        <img src="http://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}" href="#" alt="slideshow one" class="slideshow-img">
        <p> Popular </p>
        <div class="caption-text"> ${popularMovie.title}</div>
        <div class="rating-carousel">Rating: ${popularMovie.vote_average}</div>

    </div>
`;

    elements.slideshow_container.insertAdjacentHTML('beforeend', markup);

}

export const renderResults = popularMovies => {
    popularMovies.forEach(renderPopMovies);
}