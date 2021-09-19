import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import  { makeStyles }  from '@mui/styles';
import Box from '@mui/material/Box'


const useStyles = makeStyles({
    root: {
        fontSize: '20px',
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black'
        },
        align: 'center'
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
            <Box textAlign='center'>
                <Button 
                color='secondary' 
                variant='contained' 
                align='center' 
                startIcon={<AddAPhotoIcon/>}
                endIcon={<AddAPhotoIcon/>}
                
                >
                Click Here to Continue
            </Button>
            </Box>
            </Container>
            </>
    )
}

export default PhotoHome;