import PhotoCard from '../components/PhotoCard';
import Typography from '@mui/material/Typography'


function PhotoContainer({ photos }) {

    let photoarray = photos.map((photoObj) => <PhotoCard key={photoObj.id} photos={photoObj}/> )
    return (
        <>
        <Typography>
            Photo
        </Typography>
        <div>
            {photoarray}
        </div>
        </>

    )
}

export default PhotoContainer;