import axios from 'axios';

const url = 'http://localhost:5000/cards';

export const fetchCards = () => axios.get(url);
export const createCards = (newCard) => axios.post(url, newCard)
export const deleteCard = (id) => axios.delete(`${url}/${id}`);

