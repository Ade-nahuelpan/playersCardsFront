import ActionAreaCard from './Card.jsx'


const count = 10;
const CardMap = () => {
    return (
        <div className='container'>

            {
                //mapeo de las tarjetas
                Array.from({ length: count }).map((_, index) => (
                    <ActionAreaCard></ActionAreaCard>
                ))
            }

        </div>
    )
}

export default CardMap