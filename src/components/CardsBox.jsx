import useDragger from '../hooks/useDragger';

const CardsBox = () => {
    // custom hook, to make element dragable
    useDragger('cards-box')

    return (
        <section className='drag-area'>
            <div id='cards-box'>
             </div>
        </section>
        )
}

export default CardsBox
