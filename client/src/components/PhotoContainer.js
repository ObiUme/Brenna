import PhotoCard from '../components/PhotoCard';


function PhotoContainer({ photos }) {

    let photoarray = photos.map((photoObj) => <PhotoCard key={photoObj.id} photos={photoObj}/> )
    return (
        <div>
            {photoarray}
        </div>

    )
}

export default PhotoContainer;