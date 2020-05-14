import axios from 'axios';

export default class TopRated {
    constructor() {

    }

    async getTopRated() {
        
        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';

        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`);
            this.topRated = res.data.results;
            console.log(this.topRated)
        } 
        catch(error) {
            console.log(error);
        }

    }
}