import { levelOne } from "../CardImages/card-images"

const GetCards = ({numOfCards}) => {

    function handleCardsClick (selectedCard) {
        // remove active class
        selectedCard.forEach((c) => c.classList.remove('active'));
        // resets selected cards
        selectedCards = [];
        backOfcard = [];
    }

    let selectedCards = [];
    let backOfcard = [];
    let matchedCards = [];

    function handleClick (e) {
        console.log(selectedCards)
        console.log(backOfcard)
        
        // if card click add active class and push to selectedCards var
        if (e.target.classList.contains('front')){
                backOfcard.push(e.target.parentElement);
                e.target.parentElement.classList.add('active');
                selectedCards.push(e.target.parentElement.getAttribute('value'))
                console.log(selectedCards)
            }  
         // TODO if Cards match put in a var and add a match class (or and in handleCardsClick func)


        // once clicks on secuond card runs handleCardsClick func
        if (selectedCards.length > 1 ) {
                setTimeout(handleCardsClick, 2000, backOfcard)
            }
    }
    

    // get and display cards functions below
    function getRandomOrder(level) {
        let holdRamdonNum = []
        let keys;
        let randomOrder = []
        // for-loop to have cards ramdomly ordered in the randomOrder array
        for (let i=0;i<level.length;i++){
            keys = level[Math.floor(Math.random() * level.length)]
            
            // checks if key is alrady added/ to not have duplicates
            while (holdRamdonNum.includes(keys.key)) {
                keys = level[Math.floor(Math.random() * level.length)]
            }
            holdRamdonNum.push(keys.key)
            randomOrder.push(keys)
        };
        // doubles the array
        const cardSet = randomOrder.concat(randomOrder);
        return cardSet;
    }

    // displays cards
    function displayCards (setOfCard) {
        shuffleCards(setOfCard)
        const dispaly = setOfCard.map((card) => {
            return (
                <aside key={card.key} value={card.key}>
                        <div className="front"></div>
                        <div className="back" style={{backgroundImage: `url(${card.img})`}}></div>
                    </aside>
                )
            })
        return dispaly
    }
    // shuffle cards func
    function shuffleCards(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // TODO set up use effect/next level btn to run when game is over and display next level cards?

    return (
        <div className="card-display" onClick={handleClick}>
            {displayCards(getRandomOrder(levelOne))}
        </div>
        )
}

export default GetCards
