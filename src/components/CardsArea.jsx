import { useEffect, useRef, useState } from "react"
import GetCards from "./GetCards"
import IntroCard from "./IntroCard"
import Menu from "./Menu"
import SelectLevel from "./SelectLevel"

const CardsArea = ({active, setActive }) => {

    const [levelSelect, setLevelSelect] = useState(false)
    const cardArea = useRef(null)

    function startCards () {
        if (active == true) {
            cardArea.current.classList.add('active')
        } else {
            cardArea.current.classList.remove('active')
        }
    }

    function cardsContainer () {
        if (active == true) {
            cardArea.current.parentElement.classList.add('active')
        } else {
            cardArea.current.parentElement.classList.remove('active')
        }
    }

    useEffect (() => {
        startCards()
        cardsContainer()
    }), [active];

    const startBtnHandle = () => {
        setActive(true)
        if (levelSelect) {
            setLevelSelect(false)
        }
    }

    const endBtnHandle = () => {
        setActive(!true)
    }

    const handleLevelBtn = () => {
        setLevelSelect(!levelSelect)
    }

    return (
        <>
            {!levelSelect && <Menu start={startBtnHandle} end={endBtnHandle} active={active} levelSelect={handleLevelBtn}/>}
            {levelSelect && <SelectLevel levelSelect={levelSelect} setLevelSelect={setLevelSelect}/>}
            <section ref={cardArea} className='cards'>
                {active ? <GetCards/> : <IntroCard hide={levelSelect}/>}
            </section>
        </>
        )
}

export default CardsArea
