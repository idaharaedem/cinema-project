import {elements, wordLimit} from '../views/base';

export const clearResults = () => {
    
    elements.topRated_wrapper.innerHTML = '';
    elements.topRated_arrows.innerHTML = '';
}

const renderTopRated =  topRated => {
    const markup = `    
        <div class="topRated-poster">
            <a href='#${topRated.id}'><img src="http://image.tmdb.org/t/p/original/${topRated.poster_path}"></a>
            <div class="ns-rating"> ${topRated.vote_average} <i class="ion-ios-star-outline"></i> </div>
            <div class="ns-title"> ${wordLimit(topRated.title)} </div>
        </div>
    `;

    elements.topRated_wrapper.insertAdjacentHTML('beforeend', markup);
}

const createButton = (page, type ) => `

        <div class="topRated-arrows topRated-arrows-${type} arrows" data-goto_topRated= ${type === 'back' ? page - 1 : page + 1}>
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

    elements.topRated_wrapper.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (results, page = 1, resPerPage = 6) => {

    const start = (page - 1) * resPerPage;
    const end =(page * resPerPage);


    results.slice(start,end).forEach(el => renderTopRated(el));

    renderButtons(page, results.length, resPerPage);
}

