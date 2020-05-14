import axios from 'axios';

export default class Upcoming {
    constructor () {

    }

    async getUpcoming() {

        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';

        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`);
            this.upcomingMovies = res.data.results;
        }
        catch(error) {
           console.log(error); 
        }
    }

}