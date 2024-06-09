import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.aspireit.com',
});

export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const fetchUserProfile = async (token) => {
  const response = await api.get('/user/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


