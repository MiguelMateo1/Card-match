import useDragger from '../hooks/useDragger';

const CardsBox = () => {
        
    useDragger('cards-box')

    return (
        <section className='drag-area'>
            <div id='cards-box'>

             </div>
        </section>
        )
}

export default CardsBox
