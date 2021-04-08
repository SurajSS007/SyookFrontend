import axios from "axios";

const instance = axios.create({
    baseURL:"https://syooklvltwo.herokuapp.com/"
});

export default instance;