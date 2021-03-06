import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts); //because reducers/index.js we have posts
    const classes = useStyles();

    console.log(posts);

    return (
        // react fragment
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
};

export default Posts;