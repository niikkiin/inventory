import axios from 'axios';

import { GET_ITEMS, ITEM_ERROR, DELETE_ITEM, ADD_ITEM, UPDATE_ITEM, GET_ITEM } from 'store/actions/types.actions';

import { setAlert } from './alert.actions';

// Get items
export const getItems = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/items');

		dispatch({
			type: GET_ITEMS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ITEM_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get item
export const getItem = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/items/${id}`);

		dispatch({
			type: GET_ITEM,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: ITEM_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete item
export const deleteItem = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/items/${id}`);

		dispatch({
			type: DELETE_ITEM,
			payload: id,
		});

		dispatch(setAlert('Item removed.'));
	} catch (err) {
		dispatch({
			type: ITEM_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add item
export const addItem = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
	try {
    const res = await axios.post('/api/items', formData, config);

		dispatch({
			type: ADD_ITEM,
			payload: res.data
		});

		dispatch(setAlert('Item created.'));
	} catch (err) {
		dispatch({
			type: ITEM_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Update item
export const updateItem = (formData, id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
	try {
    const res = await axios.post(`/api/items/update/${id}`, formData, config);

		dispatch({
			type: UPDATE_ITEM,
			payload: res.data
		});

		dispatch(setAlert('Item updated.'));
	} catch (err) {
		dispatch({
			type: ITEM_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
