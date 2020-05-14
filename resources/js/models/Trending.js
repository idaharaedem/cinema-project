import axios from 'axios';

export default class Trending {
    constructor() {

    }
    
    async getTrending() {

        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';

        try {
            const res = await axios(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
            this.getTrending = res.data.results;
        }

        catch (error) {
            alert(error);
        }

     
    }
}