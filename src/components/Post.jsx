export default ({ post }) => {
  return (
    <article className="article">
      <h2 className="article-title">{post.title}</h2>
      <div className="article-body">{post.body}</div>
    </article>
  );
};
