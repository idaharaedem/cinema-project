import {elements} from './base';

/* const renderSelectedBackdrop = selected => {
    const markupBackDrop = `
        <img src="http://image.tmdb.org/t/p/original/${selected.backdrop_path}" href=#" alt="Movie selected backdrop image">
    `;

    elements.ms_backdrop.insertAdjacentHTML('beforeend', markup);
}  */

export const renderSelectedMovie = selected => {
    let markupBackDrop = `
        <img src="http://image.tmdb.org/t/p/w780/${selected.backdrop_path}" href=#" alt="Movie selected backdrop image">
    `;
    
    let markupDetails = `
         <div class="details-title"> ${selected.title}</div>
        <div class="details-overview"> 
            ${selected.overview}
        </div>
        <div class="details-rating"> Rating: <h4> ${selected.vote_average} <i class="ion-ios-star"></i></h4></div>
        <div class="details-release"> Release Date </br> <h4>${selected.release_date}: ${selected.status} </h4> </div>
        <div class="details-runtime"> Movie Runtime </br> <h4> ${selected.runtime}: Minutes </h4> </div>
        <div class="details-genres"> Movie Genre </br> <h4> ${selected.genres[0].name}</h4> </div>
        <div class="details-poster"> 
            <img src="http://image.tmdb.org/t/p/original/${selected.poster_path}">
        </div>
        <div class="trailer">
            <a href="https://www.youtube.com/watch?v=${selected.videos.results[0].key}"><i class="ion-play"></i></a>
        </div> 
    `;

    
    elements.ms_backdrop.insertAdjacentHTML('beforeend', markupBackDrop);
    elements.ms_details.insertAdjacentHTML('beforeend', markupDetails);
};


