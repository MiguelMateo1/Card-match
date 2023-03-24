import { useRef,useEffect } from "react"

const GameStats = ({active}) => {
    const startsBox =  useRef(null)
    
    function showStats () {
        if (active == true) {
            startsBox.current.classList.add('active')
        } else {
            startsBox.current.classList.remove('active')
        }
    }

    useEffect (() => {
        showStats()
    }), [active];

    return (
        <>
            <aside ref={startsBox} className="stats-area"></aside>
        </>
        )
}

export default GameStats
