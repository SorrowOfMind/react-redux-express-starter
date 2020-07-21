import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './posts.css';
import getPosts from '../../store/actions/postsAction';

const Posts = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <div className="list">
                {posts.length !== 0 && posts.map(post => 
                <div key={post.id} className="list-item">
                    <h3 className="title">{post.title}</h3>
                    <p className="author">author: {post.author}</p>
                    <p className="body">{post.body}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Posts;