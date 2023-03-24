import { useEffect, useRef } from "react"
import GetCards from "./GetCards"
import IntroCard from "./IntroCard"

const CardsArea = ({active}) => {

    const cardArea = useRef(null)

    function showCards () {
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
        showCards()
        cardsContainer()
    }), [active];

    return (
        <section ref={cardArea} className='cards'>
            {active ? <GetCards/> : <IntroCard/>}
        </section>
        )
}

export default CardsArea
