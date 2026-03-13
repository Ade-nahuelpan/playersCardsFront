import PlayerModal from "./Modal";


const count = 9;
const CardMap = () => {
    return (
        <div className='container'>

            {
                //mapeo de las tarjetas
                Array.from({ length: count }).map((_, index) => (
                    <PlayerModal></PlayerModal>
                ))
            }

        </div>
    )
}

export default CardMap