import { Axios } from 'axios';
import { getState } from '../store/sessionStorage';
import { UserState } from '../store/User';

export const client = new Axios({
    baseURL: 'http://localhost:8080/',
    headers: { 'Content-Type': 'application/json' },
    transformRequest: (data) => JSON.stringify(data),
    transformResponse: (data) => JSON.parse(data || '{}')
});

client.interceptors.request.use((request) => {
    const user = getState<UserState>('user-state');
    if (user) {
        request.headers!['authorization'] = `Bearer ${user.token}`;
    }
    return request;
});