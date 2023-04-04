import { useRef,useEffect } from "react"

const GameStats = ({active,matched,moves}) => {
    const statsBox =  useRef(null)
    
    function showStats () {
        if (active == true) {
            statsBox.current.classList.add('active')
        } else {
            statsBox.current.classList.remove('active')
        }
    }

    useEffect (() => {
        showStats()
    }), [active];

    return (
        <>
            <section ref={statsBox} className="stats-area">
                <div className="stats-title">
                    <h6>moves</h6>
                    <h6>{moves}</h6>
                </div>
                <div className="stats-data">
                    <h6>matched</h6>
                    <h6>{matched}</h6>
                </div>
            </section>
        </>
        )
}

export default GameStats
