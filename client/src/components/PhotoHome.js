import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import  { makeStyles }  from '@mui/styles';


const useStyles = makeStyles({
    btn: {
        fontSize: '20px',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black'
        }
    },
    title: {
        textDecoration: 'underline'
    }
})

function PhotoHome(){
    const classes = useStyles()
    return (
            <>
            <Container>
            <Typography variant='h3' 
                className={classes.title}
                component='h2'
                color='secondary' 
                style={{fontSize: '50px', marginBottom: '10vh', marginTop: '2vh', fontStyle: 'bold'}} 
                align='center'
                display='block'
                gutterBottom
            >
                Welcome to the Brenna's Photography...
            </Typography>
            <Button 
            className={classes.btn}
            color='secondary' 
            variant='contained' 
            align='center' 
            style={{marginLeft: '50vh'}} 
            startIcon={<AddAPhotoIcon/>}
            endIcon={<AddAPhotoIcon/>}
            >
                Click Here to Continue
            </Button>
            </Container>
            </>
    )
}

export default PhotoHome;