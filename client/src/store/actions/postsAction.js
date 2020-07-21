import {GET_POSTS} from './types';

const getPosts = () => dispatch => {
    return fetch('/api/posts')
        .then(res => res.json())
        .then(posts => dispatch({type: GET_POSTS, payload: posts}))
        .catch(err => console.log(err.message));
}

export default getPosts;