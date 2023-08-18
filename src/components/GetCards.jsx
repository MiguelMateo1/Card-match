import { useEffect, useState } from "react";
import WinnerScreen from "./WinnerScreen";
import DisplayCards from "./DisplayCards";
import GameStats from "./GameStats";

const GetCards = ({numOfCards}) => {
    const [win, setWin] = useState(false);
    const [visible, setVisible] = useState(true);
    const [matchedCards, setMatchedCards] = useState(0);

    function handleClickOnSecondCard (selectedCard) {
        setVisible((prev) => !prev)
        // remove active class
        selectedCard.forEach((c) => c.classList.remove('active'));
        // resets selected cards
        selectedCards = [];
        backOfcard = [];
    }

    function cardMatchedSound () {
        let audio = new Audio('/music/mached-sound.mp3')
        audio.volume = 0.04
        audio.play()
        setMatchedCards(matchedCards + 1)
    }

    let selectedCards = [];
    let backOfcard = [];
    let lastSelectNode = null;

    function showWonScreen () {
        if (matchedCards == numOfCards.cards / 2) {
            setWin(true)
        }
        return;
    }
    useEffect(() => {
        showWonScreen()
    },[matchedCards]);

    // handle card click
    function handleClick (e) {
        // if card click add active class and push to selectedCards var
        if (e.target.classList.contains('front')){    
                backOfcard.push(e.target.parentElement);
                e.target.parentElement.classList.add('active');
                selectedCards.push(e.target.parentElement.getAttribute('value'));
                if (lastSelectNode == null) {
                    lastSelectNode = e.target.parentElement;
                }
            
         // TODO if Cards match put in a var and add a match class (or and in handleClickOnSecondCard func)
        if (selectedCards[0] == selectedCards[1]){
            cardMatchedSound()
            lastSelectNode.childNodes[1].classList.add('matched')
            e.target.parentElement.childNodes[1].classList.add('matched')
            
            lastSelectNode = null;
            selectedCards = [];
            backOfcard = [];
            return
        }

        // once clicks on secound card runs handleCardsClick func
        if (selectedCards.length > 1 ) {
            setVisible((prev) => !prev)
                lastSelectNode = null;
                setTimeout(handleClickOnSecondCard, 2000, backOfcard)
            }
        }
    }

    return (
        <div className="card-display" onClick={visible && handleClick}>
            {win && <WinnerScreen level={numOfCards.level}/>}
            {!win && <DisplayCards numOfCards={numOfCards} />}
            {!win && <GameStats active={true} matched={matchedCards}/>} 
        </div>
    )
}

export default GetCards
