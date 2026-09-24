import Post from "./Post";
// import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";
import { API_URL } from "../../config";
const Posts = () => {


  let {data : posts , loading, error }= useFetch(`${API_URL}/posts`)
  


  return (
    <section className="posts">
      {posts ? posts.map((post) => (
        <Post key={post.id} post={post} />
      )) : null}
      {loading && <div>Loading...</div>}
      {error && !loading && <div role="alert">Could not load posts: {error}</div>}
      {!error && !loading && (!posts || posts.length === 0) && <div>No posts yet</div>}
    </section>
  );
};

export default Posts;