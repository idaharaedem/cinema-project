import {elements} from './views/base';
import * as searchView from './views/searchView';
import Search from './models/Search';

//search from main index page


const state = {};

let searchTitle = localStorage.getItem('search');

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();

     searchTitle = searchView.searchItem();

     searchView.clearResults();
    
     SearchController();

});

const SearchController = async() => {

    state.search = new Search(searchTitle);
    
    await state.search.getSearch();

    searchView.renderResults(state.search.results);

}

SearchController();


const movieSelected = () => {
    const id = window.location.hash.replace('#', '');
    sessionStorage.setItem('movieId', id);
    window.location = 'movie';
    return false;
    
}

window.addEventListener('hashchange', movieSelected);

