import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { fetchUserProfile } from '../api';

const UserProfile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserProfile = async () => {
      if (token) {
        const data = await fetchUserProfile(token);
        dispatch(setUser(data));
      }
    };
    loadUserProfile();
  }, [token, dispatch]);

  if (!user) return <div>Loading...</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetchUserProfile(token, user);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  return (
    <div className="user-profile">
      <h1>{user.username}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
        <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        <button type="submit">Save Changes</button>
      </form>
     
    </div>
  );
};

export default UserProfile;
