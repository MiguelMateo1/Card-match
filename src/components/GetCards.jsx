import { levelOne } from "../CardImages/card-images"

const GetCards = ({numOfCards}) => {

    function hangleCardMatch (selectedCard) {
        selectedCard.classList.remove('active');
    }

    function handleClick (e) {
        const backOfcard = e.currentTarget.parentElement;
        
        backOfcard.classList.add('active');
        setTimeout(hangleCardMatch, 2000, backOfcard)
    }


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
                <aside key={card.key}>
                        <div className="front" onClick={handleClick}></div>
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

    return (
        <div className="card-display">
            {displayCards(getRandomOrder(levelOne))}
        </div>
        )
}

export default GetCards
