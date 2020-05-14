import {elements,wordLimit,dateEdit} from './base';

export const clearResults = () =>{
    
    elements.upcomingPosters.innerHTML ='';
    elements.upcoming_arrows.innerHTML = '';

} 

const renderUpcoming = upcomingMovies => {
    const markup = `
        <div class="upcoming-poster">
            <a href=#${upcomingMovies.id}id><img src="http://image.tmdb.org/t/p/original/${upcomingMovies.poster_path}"></a>
                <div class="upcoming-rating"> ${upcomingMovies.vote_average} <i class="ion-ios-star-outline"></i> </div>
                <div class="upcoming-title"> ${wordLimit(upcomingMovies.title)} </div>
                
        </div>
`

elements.upcomingPosters.insertAdjacentHTML('beforeend',markup);

}

const createButton = (page, type ) => `

        <div class="upcoming-arrows upcoming-arrows-${type} arrows" data-goto_upcoming= ${type === 'back' ? page - 1 : page + 1}>
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

    elements.upcomingPosters.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (results, page = 1, resulstPerPage = 6) => {
    
    const start = (page - 1) * resulstPerPage ;
    const end = page * resulstPerPage;

    results.slice(start,end).forEach(el => renderUpcoming(el));

    //pagination
    renderButtons(page, results.length,resulstPerPage);
 
}