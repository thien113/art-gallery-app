import ArtPieceDetails from "../component/ArtPieceDetails";
import { useRouter } from "next/router";

export default function renderArtPiece () {
    const router = useRouter();
    const {slug}= router.query;

    return (
        <Layout>
          <ArtPieceDetails id={slug}/>
        </Layout>
    )

}
