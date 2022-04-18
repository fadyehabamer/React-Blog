import Post from "./Post";
// import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";
const Posts = () => {


  let {data : posts , loading }= useFetch('http://localhost:4000/posts')
  


  const deletePost = (id) => {
    let curPosts = [...posts];
    let newPosts = curPosts.filter((post) => post.id !== id);
    // setPost(newPosts);
    // console.log('deleted ' + id);
  }

  return (
    <section className="posts">
      {posts ? posts.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      )) : null}
      {loading && <div>Loading...</div>}
      {!posts && !loading && <div>No posts yet</div>}
    </section>
  );
};

export default Posts;