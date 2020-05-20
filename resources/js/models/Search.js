import axios from 'axios'


export default class Search  {

    constructor(query) {
        this.query = query;
    }


    async getSearch() {
        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';
    
        try {
        const {data:{results}} = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.query}&page=1&include_adult=false`);
        this.results = results
        console.log(this.results);
        }
        catch (error) {
            console.log(error)
        }
    }
    
}