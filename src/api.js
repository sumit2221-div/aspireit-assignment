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

export const uploadProfilePicture = async (token, formData) => {
  const response = await api.post('/user/profile-picture', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
