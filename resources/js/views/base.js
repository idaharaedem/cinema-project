export const elements = {
forwardClick: document.querySelector('.ion-ios-arrow-forward'),
backClick: document.querySelector('.ion-ios-arrow-back'),
slideshow_container: document.querySelector('.slideshow-container'),
slides_img: document.getElementsByClassName("myslides"),
sectCarousel: document.querySelector('.section-carousel'),
ns_posters: document.querySelector('.ns-poster-wrapper'),
ns_arrows: document.querySelector('.ns-arrows'),
upcomingPosters: document.querySelector('.upcoming-wrapper'),
upcoming_arrows: document.querySelector('.upcoming-arrows'),
trending: document.querySelector('.section-trending'),
trending_arrows: document.querySelector('.trending-arrows'),
topRated_wrapper: document.querySelector('.topRated-wrapper'),
topRated_arrows: document.querySelector('.topRated-arrows'),
ns_OnClick: document.querySelector('.click'),
ms_backdrop: document.querySelector('.details-img'),
ms_details: document.querySelector('.details-desc'),
sm_wrapper: document.querySelector('.sm-wrapper'),

}

export const renderloader = parent => {
    const loader = `
            <div class="loader">
                    <img src="img/Rings.gif" alt=""Loader/>
            </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);

}

export const wordLimit = (title, limit = 15) => {

    const newTitle = [];
    if(title.length > limit) {
        
        title.split(' ').reduce((acc,current)=> {
            if(acc + current.length <= limit){
                newTitle.push(current)
            }
        return acc + current.length;
        },0);

        return `${newTitle.join(' ')}...`;
    }

    return title;

}

