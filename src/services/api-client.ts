import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        
        key: '9368daa7a742403a842a7d1a8261d415'
    }
})