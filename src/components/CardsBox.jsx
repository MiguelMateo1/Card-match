import useDragger from '../hooks/useDragger';
import WeatherBox from './WeatherToggle';

const CardsBox = () => {
    // custom hook, to make element dragable
    useDragger('cards-box')

    return (
        <section className='drag-area'>
            <div id='cards-box'>
                <div className='snow-cap'></div>
            </div>
            <WeatherBox />
        </section>
        )
}

export default CardsBox
