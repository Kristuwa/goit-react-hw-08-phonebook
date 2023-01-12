import axios from 'axios';

axios.defaults.baseURL = 'https://63bb014e32d17a50908405c7.mockapi.io/api/v1/';

export const getContacts = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);

  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
