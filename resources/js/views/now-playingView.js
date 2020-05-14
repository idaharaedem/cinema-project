import {elements, wordLimit} from './base';
//import {movieSelected} from '../models/MovieSelected';

export const clearResults = () =>{
    
    elements.ns_posters.innerHTML ='';
    elements.ns_arrows.innerHTML = '';

} 

const renderNowShowing = nowShowing => {

    const markup = `
        <div class="ns-poster">
            <a href="#${nowShowing.id}"><img src="http://image.tmdb.org/t/p/original/${nowShowing.poster_path}"></a>
            <div class="ns-rating"> ${nowShowing.vote_average} <i class="ion-ios-star-outline"></i> </div>
            <div class="ns-title"> ${wordLimit(nowShowing.title)} </div>
        </div>
    `;

    elements.ns_posters.insertAdjacentHTML('beforeend', markup);

}

const createButton = (page, type ) => `

        <div class="ns-arrows ns-arrows-${type} arrows" data-goto_ns= ${type === 'back' ? page - 1 : page + 1}>
                <a><i class="ion-ios-arrow-${type === 'back'? 'back': 'forward'}"></i></a>
        </div> 

`;


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults/resPerPage);

    let button;

    if (page === 1 && pages > 1) {
        //button to go to next page
        button = createButton(page, 'forward');
    }
    //middle page
    else if(page < pages) {
        button = `
            ${button = createButton(page, 'forward')}
            ${button = createButton(page, 'back')}
        `;
    }
    //last page
    else if(page === pages && pages > 1){
        button = createButton(page, 'back');
    }

    elements.ns_posters.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (results, page = 1, resulstPerPage = 6) => {
    
    const start = (page - 1) * resulstPerPage ;
    const end = page * resulstPerPage;

    results.slice(start,end).forEach(el => renderNowShowing(el));

    //pagination
    renderButtons(page, results.length,resulstPerPage);
 
}


