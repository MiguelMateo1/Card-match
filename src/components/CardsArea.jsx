import { useEffect, useRef, useState } from "react"
import GetCards from "./GetCards"
import IntroCard from "./IntroCard"
import Menu from "./Menu"
import SelectLevel from "./SelectLevel"

const CardsArea = ({active, setActive }) => {

    const [levelSelectMenu, setLevelSelectMenu] = useState(false)
    const cardArea = useRef(null)
    const [level, setLevel] = useState({level: 1, cards: 16})

    // get selected level from SelectLevel component
    const getLevel = (selectedLevel) => {
        setLevel(selectedLevel)
        console.log("current level", level)
    }

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

    // Start, Level, and End button.. onClick hanle fucntion
    const startBtnHandle = () => {
        setActive(true)
        if (levelSelectMenu) {
            setLevelSelectMenu(false)
        }
    }

    const endBtnHandle = () => {
        setActive(!true)
    }

    const handleLevelBtn = () => {
        setLevelSelectMenu(!levelSelectMenu)
    }

    return (
        <>
            {!levelSelectMenu && <Menu start={startBtnHandle} end={endBtnHandle} active={active}
             levelSelect={handleLevelBtn} selectedLevel={level.level} />}
            <SelectLevel levelSelect={levelSelectMenu} setLevelSelect={setLevelSelectMenu} levels={getLevel}/>
            <section ref={cardArea} className='cards'>
                {active ? <GetCards numOfCards={level} test={setLevelSelectMenu}/> : <IntroCard hide={levelSelectMenu}/>}
            </section>
        </>
        )
}

export default CardsArea
