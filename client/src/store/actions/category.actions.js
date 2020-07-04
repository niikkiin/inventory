import axios from 'axios';
import { GET_CATEGORIES, CATEGORY_ERROR, ADD_CATEGORY, GET_CATEGORY, DELETE_CATEGORY } from './types.actions';
import { setAlert } from './alert.actions';

// get categories
export const getCategories = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/categories');

		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// add category
export const addCategory = (formData) => async (dispatch) => {
	const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
	try {
		const res = await axios.post('/api/categories', formData, config);

		dispatch({
			type: ADD_CATEGORY,
			payload: res.data,
		});
		
		dispatch(setAlert('Category created.'));
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
}

// Get a category
export const getCategory = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/categories/${id}`);

		dispatch({
			type: GET_CATEGORY,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete a category
export const deleteCategory = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/categories/${id}`);

		dispatch({
			type: DELETE_CATEGORY,
			payload: id,
		});

		dispatch(setAlert('Category removed.'));
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
}

