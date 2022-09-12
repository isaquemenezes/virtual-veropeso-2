import Axios from "axios";

const api_url = "http://localhost:5000/api";

const authService = {
    
    //Comunicação com o back end para efetuar login
    async sendLogin(_data) 
    {
        let endpoint = api_url + "/auth";
        res = Axios.post(endpoint, _data);
        return res;
    }
}