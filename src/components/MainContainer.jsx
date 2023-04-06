import { useState } from 'react';
import useDragger from '../hooks/useDragger';
import CardsArea from './CardsArea';
import title from '../assets/title.png'
import { RiDragMove2Fill } from "react-icons/ri";


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
                <RiDragMove2Fill className='drag-icon'/>
            </div>
        </section>
        )
}

export default MainContainer
