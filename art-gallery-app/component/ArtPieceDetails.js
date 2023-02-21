import Image from "next/image"
import Link from "next/link"

export default function ArtPieceDetails({pieces, id}) {
const artPieceObject = pieces.find((piece) => piece.slug === id )

    return (
        <>
            <Image className="details__image" src={artPieceObject.imageSource} width={400} height={500}></Image>
            <h2 className="details__title">{artPieceObject.title}</h2>
            <h3 className="details__artist">{artPieceObject.artist}</h3>
            <div className="details__year">{artPieceObject.year}</div>
            <div className="details_genre">{artPieceObject.genre}</div>
            <Link href="/art-pieces">Back</Link>
        </>
    )
}