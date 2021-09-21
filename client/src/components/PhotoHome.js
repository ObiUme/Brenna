import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import  { makeStyles }  from '@mui/styles';
import Box from '@mui/material/Box'
import Image from './images/background2.jpg'
import Paper from '@mui/material/Paper'


const useStyles = makeStyles({
    root: {
        fontSize: '20px',
        background: `url(${Image}) no-repeat center fixed`,
        backgroundPosition: 'fixed',
        backgroundSize: '35%',
        height: '100vh',
        
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'black'
        },
        align: 'center',
        textDecoration: 'underline'
    },
    title: {
        textDecoration: 'underline',
        
    }
})

function PhotoHome(){
    const classes = useStyles()
    return (
            <>
            <div className={classes.root}>
            <Container>
               <Typography variant='h3' 
                className={classes.title}
                color='primary' 
                style={{fontSize: '50px', marginBottom: '10vh', marginTop: '2vh', fontStyle: 'bold', fontFamily: 'Pinyon Script'}} 
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
                size='large'
                >
                Click Here to Continue
            </Button>
            </Box>
            </Container>
            </div>
            </>
    )
}

export default PhotoHome;