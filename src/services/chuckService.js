import APIRequest from "../utils/config/axiosChuck.config";


export function getJokes(){
    return  APIRequest.get('/jokes/random', {
        validateStatus: function (status) {
            return status < 500
        }
    });
}