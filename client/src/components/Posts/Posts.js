import React from 'react';

import Post from './Post/Post';

const Posts = () => {
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