import { TextField } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

function PhotoForm(){

    const classes = useStyles()

    return(
        <div>
            <form noValidate autoComplete='off'>
                <TextField
                    className={classes.field}
                    label='Photo Request'
                    variate='outlined'
                    color='primary'
                    style={{marginTop: '2vh'}}
                    
                    fullWidth
                    required
                />
                
            </form>
        </div>
    )
}

export default PhotoForm;