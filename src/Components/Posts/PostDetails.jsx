import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { API_URL } from "../../config";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let { data: post, loading, error } = useFetch(
    `${API_URL}/posts/${id}`
  );

  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = () => {
    setDeleteError(null);
    fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        navigate("/");
      })
      .catch((err) => setDeleteError(err.message));
  };
  return (
    <>
      {loading && <div>loading ...</div>}
      {error && !loading && <div role="alert">Could not load this post: {error}</div>}
      {post && !loading  && (
        <article className="container post-details">
          <div className="post-details-title">
            <h1> {post.title}</h1>
            <button className="btn btn-danger" onClick={handleDelete}>
              {" "}
              Delete{" "}
            </button>
          </div>
          {deleteError && <div role="alert">Could not delete the post: {deleteError}</div>}
          <img src={post.image} alt="" className="post-details-img" />
          <div className="post-author">
            By: {post.author ? post.author : "Ali"}
          </div>
          <p className="post-details-body">{post.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;