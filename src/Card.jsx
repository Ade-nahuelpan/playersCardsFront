import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Divider,
    Modal
} from '@mui/material'
import PlayerModal from './Modal'
import { useState } from 'react';
import tetament from './assets/smokement.png'
import './styles.css'


const ActionAreaCard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardActionArea>
                <CardMedia onClick={handleOpen}
                    component="img"
                    height="140"
                    image={tetament}
                    alt="green iguana"

                />
                <Modal open={open}
                    onClose={handleClose}>
                    <PlayerModal ></PlayerModal>
                </Modal>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Divider ></Divider>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ActionAreaCard
