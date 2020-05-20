import {elements,wordLimit} from './base'

export const searchItem = () => elements.search_Input.value;

export const clearResults = () =>{
    
    elements.searchContainer.innerHTML ='';
} 

const renderSearch = search => {

    if(search.poster_path)
   {     
    const markup = `
        <div class="search-poster">
            <a href="#${search.id}"><img src="http://image.tmdb.org/t/p/original/${search.poster_path}"></a>
            <div class="search-rating"> ${search.vote_average} <i class="ion-ios-star-outline"></i> </div>
            <div class="search-title"> ${wordLimit(search.title)} </div>
        </div>
    `;

    elements.searchContainer.insertAdjacentHTML('beforeend', markup);
    }
}

export const renderResults = movie => {
    movie.forEach(el => renderSearch(el));
}