import { useState } from "react";
const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("codv");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
      image: url,
      author,
    };
    setSaving(true);
    setError(null);
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        props.history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setSaving(false);
      });
  };
  return (
    <section className="create-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleForm}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Image :</label>
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>Blog body :</label>
        <textarea
          required
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="admin">admin</option>
          <option value="codv">codv</option>
        </select>
        {error && <div role="alert">Could not save the post: {error}</div>}
        <button className="btn" type="submit" disabled={saving}>
          {saving ? "Saving..." : "Add Blog"}
        </button>
      </form>
    </section>
  );
};

export default CreatePost;