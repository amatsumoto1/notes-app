import { Axios, AxiosError } from 'axios';
import { getState, saveState } from '../store/sessionStorage';
import { UserState, setToken } from '../store/User';
import { store } from '../store';

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

const { dispatch } = store;

const onResponseError = async (error: AxiosError) => {
    if (error.response) {
      // Access Token was expired
      
      if (error.response.status === 401 && !error.config.url?.endsWith('user/login')) {
    
        const userState = getState<UserState>('user-state');
        const username = userState?.username;
        const storedToken = userState?.refreshToken;
  
        try {
          const rs = await client.post(`/user/token`, {
            username: username,
            refreshToken: storedToken
          });
  
          const { token } = rs.data;
  
          dispatch(setToken(token));
          saveState<UserState> ({
              ...userState,
              token: token
          }, 'user-state');
  
        } catch (err) {
            console.log(err);
        }
      }
    }
    return Promise.reject(error);
  };

client.interceptors.response.use((response) => {
    return response;
}, onResponseError
);