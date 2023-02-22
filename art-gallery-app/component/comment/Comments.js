export default function Comments({ id, artPiecesInfo,  }) {
  const artPieceObject = artPiecesInfo.map((artpiece) => artpiece.slug === id);
  const comments = artPieceObject.comments;
  console.log(artPieceObject) 
  return (
    <>
      {/* {comments.map((comment) => (
        <p>{comment}</p>
      ))} */}
    </>
  );
}
