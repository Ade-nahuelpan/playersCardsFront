import { Typography, Paper } from "@mui/material"

const PlayerModal = () => {
    return (

        <Paper className='box'>

            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <button>asda</button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

        </Paper>

    )
}


export default PlayerModal