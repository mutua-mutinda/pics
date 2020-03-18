import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers:{
        Authorization:
        'Client-ID iEheVMeIi6HX2CqJ3I3mjw4IT-G1vVoNiEgJVvwqsLU'
    }
});