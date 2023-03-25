import { useState } from 'react';
import useDragger from '../hooks/useDragger';
import CardsArea from './CardsArea';
import GameStats from './GameStats';
import Menu from './Menu';
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
                <GameStats active={showCards} />
            </div>
        </section>
        )
}

export default MainContainer
