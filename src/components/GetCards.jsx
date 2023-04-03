import { cards, getRandomOrder, displayCards } from "../getCardsFunc";

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

    return (
        <div className="card-display" onClick={handleClick}>
            {displayCards(getRandomOrder(cards(8)))}
        </div>
        )
}

export default GetCards
