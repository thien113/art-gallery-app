export default function Comments({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <p>{comment.text}</p>
      ))}
    </>
  );
}
