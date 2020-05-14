import axious from 'axios';
import {elements} from '../views/base';

let slideIndex = 0;
let time;

export default class Carousel {
    constructor(){

    }

    async getPopular() {
        const key = 'cd8cd9d5479177d9e34d62b9ff73ea09';
    
        try{
            const result = await axious(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);
           
                this.popularMovies = result.data.results;
      
        }
        catch(error){
            alert(error);
        }
    }


    nextSlide() {
       var slides = elements.slides_img;

        if (slides != null){
            for(let i = 0; i < slides.length; i++ ){
                slides[i].style.display = "none";
            }
             if(slideIndex > slides.length -1){
                 slideIndex = 0;
             }
             slides[slideIndex].style.display= "block";
             slideIndex ++;
             time - setInterval(this.nextSlide, 5000);
    
        }
      
    }


}






