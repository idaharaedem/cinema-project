import {elements, wordLimit} from '../views/base';

export const clearResults = () =>{
    
    elements.trending.innerHTML ='';
    elements.trending_arrows.innerHTML = '';

} 

 const renderTrending = trending => {
    const markup = `
            <div class="trending-desc">
                    <p> Trending</p>
                    <div class="trending-title"> ${trending.title}</div>
                    <div class="trending-overview">  ${trending.overview}</div>
                    <div class="trending-rating"> Rating: ${trending.vote_average} </div>
            </div>

            <div class="trending-img">
                <img src="http://image.tmdb.org/t/p/original/${trending.backdrop_path}">
            </div> 
    `;

    elements.trending.insertAdjacentHTML('beforeend', markup);
}

const createButton = (page, type ) => `

        <div class="trending-arrows trending-arrows-${type} arrows" data-goto_trending= ${type === 'back' ? page - 1 : page + 1}>
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

    elements.trending.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (results, page = 1, resulstPerPage = 1) => {
    
    const start = (page - 1) * resulstPerPage ;
    const end = page * resulstPerPage;

    results.slice(start,end).forEach(el => renderTrending(el));

    //pagination
    renderButtons(page, results.length,resulstPerPage);
 
}
