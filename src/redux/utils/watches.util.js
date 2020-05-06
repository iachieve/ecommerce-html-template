import axios from 'axios';
import watchesData from '../../components/Watches/db/watches';

export const fetchAllWatches = () => (
// return axios.get(`/api/businesses/${id}`)
    watchesData
);

export  const fetchWatch = id => (
    watchesData.filter(watch => watch.id === id)[0]
);