
export default function ArtPieceDetails({image, title, artist, year, genre}) {

    return (
        <>
            <Image className="details__image"src={image}></Image>
            <h2 className="details__title">{title}</h2>
            <h3 className="details__artist">{artist}</h3>
            <div className="details__year">{year}</div>
            <div className="details_genre">{genre}</div>
        </>

    )
}