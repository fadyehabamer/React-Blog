import Post from "./Post";
// import { useState, useEffect } from 'react';
import useFetch from "../../useFetch";
const Posts = () => {


  let {data : posts , loading }= useFetch('http://localhost:4000/posts')
  


  return (
    <section className="posts">
      {posts ? posts.map((post) => (
        <Post key={post.id} post={post} />
      )) : null}
      {loading && <div>Loading...</div>}
      {!posts && !loading && <div>No posts yet</div>}
    </section>
  );
};

export default Posts;