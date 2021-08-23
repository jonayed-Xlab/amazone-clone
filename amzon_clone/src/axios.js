import axios from "axios"

const instance = axios.create({
    baseURL : 'http://localhost:5001/challenge-15c45/us-central1/api' //The api(cloud function) url
    //'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
});

export default instance;