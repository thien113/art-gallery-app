export default function CommentForm({ onSubmitHandler, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    onSubmitHandler(comment, slug);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Your Comment: </label>
      <input type="text" name="comment" id="comment"></input>
      <button type="submit">Create a Comment</button>
    </form>
  );
}
