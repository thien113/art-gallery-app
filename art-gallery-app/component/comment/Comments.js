export default function Comments({ id, artPiecesInfo }) {
  const artPieceObject = artPiecesInfo.map((artpiece) => artpiece.slug === id);
  const comments = artPieceObject.comments;
  return (
    <>
      {comments.map((comment) => (
        <p>{comment}</p>
      ))}
    </>
  );
}
