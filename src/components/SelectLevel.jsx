import { useEffect, useRef } from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const SelectLevel = ({levelSelect, setLevelSelect, levels}) => {

    const levelContainerRef = useRef(null)
    const numOfCards = [{level: 1,cards: 16},{level: 2,cards: 20},{level: 3,cards: 24},
        {level: 4,cards: 30},{level: 5,cards: 36}]

    // gets seleted level 
    const handleClick = (e) => {
        const getSelectedLevel = e.currentTarget.getAttribute('data-cardnum');
        setLevelSelect(false)

        const selectedLevel = numOfCards[getSelectedLevel - 1]
        // passing level data up to parrent component
        levels(selectedLevel)
    }

    // show/hide the level list/container
    function showLevelSelection () {
        if (!levelSelect) {
            levelContainerRef.current.classList.remove('active')
            setLevelSelect(false)
        } else {
            levelContainerRef.current.classList.add('active')
            setLevelSelect(true)
        }
    }

    useEffect (() => {
        showLevelSelection()
    }), [levelSelect];

    return (
            <section ref={levelContainerRef} className="level-container">
                <div className="level-row">
                    <h3>1</h3>
                    <span>16 cards</span>
                    <button className="btn level-btn" data-cardnum='1' onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>2</h3>
                    <span>20 cards</span>
                    <button className="btn level-btn" data-cardnum='2' onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>3</h3>
                    <span>24 cards</span>
                    <button className="btn level-btn" data-cardnum='3' onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>4</h3>
                    <span>30 cards</span>
                    <button className="btn level-btn" data-cardnum='4' onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>5</h3>
                    <span>36 cards</span>
                    <button className="btn level-btn" data-cardnum='5' onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
            </section>
        )
}

export default SelectLevel
