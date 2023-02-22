export default function CommentForm({ onSubmitComment }) {
  return (
    <form onSubmit={onSubmitComment}>
      <label htmlFor="comment">Your Comment: </label>
      <input type="text" name="comment"></input>
      <button type="submit">Create a Comment</button>
    </form>
  );
}
