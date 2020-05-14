
import {elements, wordLimit} from '../views/base';

const renderSimilar = similar => {

    const markup = `
        <div class="sm-poster">
            <img src="http://image.tmdb.org/t/p/original/${similar.poster_path}">
            <div class="sm-rating"> ${similar.vote_average} <i class="ion-ios-star-outline"></i> </div>
            <div class="sm-title"> ${wordLimit(similar.title)} </div>
        </div>
    `;

    elements.sm_wrapper.insertAdjacentHTML('beforeend', markup);

}

const createButton = (page, type ) => `

        <div class="sm-arrows sm-arrows-${type} arrows" data-goto_sm= ${type === 'back' ? page - 1 : page + 1}>
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

    elements.sm_wrapper.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (results, page = 1, resulstPerPage = 7) => {
    
    const start = (page - 1) * resulstPerPage ;
    const end = page * resulstPerPage;

    results.slice(start,end).forEach(el => renderSimilar(el));

    //pagination
    //renderButtons(page, results.length,resulstPerPage);
 
}