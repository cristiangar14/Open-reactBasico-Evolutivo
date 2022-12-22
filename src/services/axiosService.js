import APIRequest from "../utils/config/axios.config";

export function getRandomUsers(){
    return  APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    });
}