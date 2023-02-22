export default function Comments({ id }) {
  const comments = JSON.parse(localStorage.getItem("art-pieces-info"))
    .filter((artPieceObject) => artPieceObject.slug === id)
    .shift().comments;
  return (
    <>
      <h4>Comments: </h4>
      {comments.map((comment) => (
        <p>{comment}</p>
      ))}
    </>
  );
}
