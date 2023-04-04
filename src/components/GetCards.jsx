import { useEffect, useState } from "react";
import WinnerScreen from "./WinnerScreen";
import DisplayCards from "./DisplayCards";
import GameStats from "./GameStats";

const GetCards = ({numOfCards}) => {
    const [win, setWin] = useState(false)
    const [m, setM] = useState(0)
    console.log('mmmm',m)
    console.log('page run')

    // useEffect (() => {
    //     console.log('its a win')
    // },[win]);

    function handleCardsClick (selectedCard) {
        // remove active class
        selectedCard.forEach((c) => c.classList.remove('active'));
        // resets selected cards
        selectedCards = [];
        backOfcard = [];
    }

    let selectedCards = [];
    let backOfcard = [];
    let moves = 0;
    console.log('movesss', moves)
    let matchedCards = 0;


    let lastSelectCard = [];
    let lastSelectNode = null;
    console.log('last seleed', lastSelectCard)

    function handleClick (e) {
        
        // if card click add active class and push to selectedCards var
        if (e.target.classList.contains('front')){
            console.log(e.target.parentElement.childNodes[1])        
                moves += 1;
                console.log('moves', moves)
                backOfcard.push(e.target.parentElement);
                e.target.parentElement.classList.add('active');
                selectedCards.push(e.target.parentElement.getAttribute('value'))
                console.log('selected cards', selectedCards)
                if (lastSelectNode == null) {
                    lastSelectNode = e.target.parentElement
                }
            
         // TODO if Cards match put in a var and add a match class (or and in handleCardsClick func)
        if (selectedCards[0] == selectedCards[1]){
            console.log('seleted if rannn')
            matchedCards += 1
            console.log('mached cards', matchedCards)
            lastSelectNode.childNodes[1].classList.add('matched')
            e.target.parentElement.childNodes[1].classList.add('matched')
            if (matchedCards == numOfCards.cards / 2) {
                setWin(true)
                console.log(win)
            }
            lastSelectNode = null;
            selectedCards = [];
            backOfcard = [];
            return
        }

        // once clicks on secound card runs handleCardsClick func
        if (selectedCards.length > 1 ) {
            console.log('clear rann')
                 lastSelectNode = null;
                setTimeout(handleCardsClick, 2000, backOfcard)
            }
        }
    }

    return (
        <div className="card-display" onClick={handleClick}>
            {win && <WinnerScreen level={numOfCards.level}/>}
            {!win && <DisplayCards numOfCards={numOfCards}/>}
            {!win && <GameStats active={true} matched={matchedCards} moves={moves}/>} 
        </div>
    )
}

export default GetCards
