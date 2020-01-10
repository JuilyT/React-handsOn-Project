import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID 6e18181eb691fa2e934cd5773199ba52b4dd351e03e9b0482aa24098526df360'
    }
});