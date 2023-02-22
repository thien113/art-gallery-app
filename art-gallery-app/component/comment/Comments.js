export default function Comments({ id }) {
  const comments = JSON.parse(localStorage.getItem("art-pieces-info"))
    .filter((artPieceObject) => artPieceObject.slug === id)
    .shift().comments;
  return (
    <>
      <h4 className="header__comment"></h4>
      {comments.map((comment) => (
        <p className="new__comment">{comment}</p>
      ))}
    </>
  );
}
