import axios from 'axios';

let movieId = sessionStorage.getItem('movieId'); 
const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';


export default class MovieSelected {
    constructor () {

    }

        async selectedMovie () {

        try {
            const movie = await axios(`http://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=videos`);
            this.movieDet = movie.data;
        }
        catch(error){
            alert(error);
        }
    }

    async GetSimilar() {
        
        try {
            const movie = await axios(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${key}&language=en-US&page=1`);
            this.similar = movie.data.results;
            
        }
        catch(error){
            alert(error);
        }

    }

}

