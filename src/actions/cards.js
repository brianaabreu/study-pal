import * as api from '../api';

export const getCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCards();
        dispatch({ type: 'FETCH_ALL', payload: [data] })
        console.log('hello it works')

    } catch (error) {
        console.log(error.message)
    }
}

export const createCard = (card) => async (dispatch) => {
    try {
        const { data } = await api.createCards(card);
        dispatch({ type: 'CREATE', payload: data })
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteCard = (id) => async (dispatch) => {
    try {
      await await api.deleteCard(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };