import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// export async function getContactsFromDb() {
//   try {
//     const { data } = await axios.get();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export const fetchContacts = () => {
	return axios.get('/contacts').then(response => response.data);
};

export const addContact = contact => {
	return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = contactId => {
	return axios.delete(`/contacts/${contactId}`);
};
