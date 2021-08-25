import * as api from '../api'; //import everything as api

// Action Creators: functions that return actions

// we are working with asynchronous data, 
// to actually fetch all the posts
// thus we have to to use redux thunk
// we create a function that returns another function
// and now we can use async capability
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

};