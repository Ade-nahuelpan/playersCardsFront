import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Divider,
} from '@mui/material'
import tetament from './assets/smokement.png'

const PlayerCard = ({ onClick }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: "10px" }} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={tetament}
                />
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

export default PlayerCard
