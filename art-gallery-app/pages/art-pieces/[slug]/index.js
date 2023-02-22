import ArtPieceDetails from "../../../component/ArtPieceDetails";
import { useRouter } from "next/router";

export default function renderArtPiece({ pieces, onSubmitHandler }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <ArtPieceDetails
      id={slug}
      pieces={pieces}
      onSubmitHandler={onSubmitHandler}
    />
  );
}
