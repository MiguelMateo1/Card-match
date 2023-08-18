import { useState } from 'react';
import useDragger from '../hooks/useDragger';
import CardsArea from './CardsArea';
import title from '../assets/title.png'


const MainContainer = () => {
    // custom hook, to make element dragable
    useDragger('cards-box')
    
    const [showCards, setShowCards] = useState(false)


    return (
        <section className='drag-area'>
            <div className='title'>
                <img src={title} className='title-img'></img>
            </div>

            <div id='cards-box'>
                <div className='snow-cap'></div>
                <CardsArea active={showCards} setActive={setShowCards}/>
            </div>
        </section>
        )
}

export default MainContainer
