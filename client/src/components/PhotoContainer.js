import PhotoCard from '../components/PhotoCard';
import Typography from '@mui/material/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


function PhotoContainer({ photos }) {

    // let photoarray = photos.map((photoObj) => <PhotoCard key={photoObj.id} photos={photoObj}/> )
    return (
            <>
            <Container>
                <Typography>
                    Photo Catalogue
                </Typography>
                <Grid container spacing={4} style={{marginTop: '10vh'}}>
                    {photos.map((photo)=> 
                      <Grid item key={photo.id} xs={12} md={6} lg={4}>
                          <PhotoCard photo={photo}/>
                      </Grid>)}
                </Grid>
            </Container>
            </>

    )
}

export default PhotoContainer;