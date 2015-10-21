import axios from 'axios';

// objekti jossa property getTussit
//getTussit on funktio
export default {
    getTussit: function() {
        return axios.get('/api/tussi').then((response) => {
            return response.data;
        });
    }
};
