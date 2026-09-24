import useFetch from "../../useFetch";

const PostDetails = (props) => {
  let { data: post, loading, error } = useFetch(
    `http://localhost:4000/posts/${props.match.params.id}`
  );

  const handleDelete = () => {
    fetch(`http://localhost:4000/posts/${props.match.params.id}`, {
      method: "DELETE",
    }).then(() => {
      props.history.push("/");
    });
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