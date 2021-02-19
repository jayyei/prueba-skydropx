import axios from 'axios';

// My api-key
const API_KEY = 'fec6da53318476c1f0226dadfdaacf88';

// Url Base for api version 3
const URL_BASE = `https://api.themoviedb.org/3/tv`


/* 
************************ Types of info **************************************
    ===>'popular'<===
    GET tv/popular current popular tv-shows
    https://api.themoviedb.org/3/tv/popular?api_key=${}&language=en-US&page=1 

    ===>'top_rated'<===
    GET tv/top_rated top rated tv-shows on TMDb
    https://api.themoviedb.org/3/tv/top_rated?api_key=${}&language=en-US&page=1

    ===>'airing_today'<===
    GET tv_airing_today list of tv shows that are airing today
    https://api.themoviedb.org/3/tv/airing_today?api_key=${}&language=en-US&page=1 */


// use this function for reach data of any type
export async function getInfo (type, language = 'en-US', page = '1') {
    const response = await axios.get(`${URL_BASE}/${type}`, 
     { 
        params: {
            api_key: API_KEY,
            language,
            page 
        }
     });
     return response.data
}
