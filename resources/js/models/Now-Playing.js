import {elements} from '../views/base';
import axious from 'axios';

export default class NowPlaying {

    constructor() {
        
    }

    async WhatsOn() {
        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';
        try {
        const res =  await axious (`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`);
        this.nowShowing = res.data.results;
        }

        catch(error) {
            alert(error);
        }
        
    }
}