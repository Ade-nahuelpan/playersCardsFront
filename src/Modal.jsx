import { Typography, Paper, Modal } from "@mui/material"
import PlayerCard from "./Card";
import { useState } from "react";
import "./modalStyless.css"
const PlayerModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        console.log(open)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <PlayerCard onClick={handleOpen}>
            </PlayerCard>
            <Modal
                open={open}
                onClose={handleClose}
                className='modal'>
                <Paper className='box'>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <button>asda</button>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                </Paper>
            </Modal>
        </>
    )
}


export default PlayerModal