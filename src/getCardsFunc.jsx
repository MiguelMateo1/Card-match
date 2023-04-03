
export const cards = (num) => {
  let cards = []
  let card = {}
  for (let i = 0; i < num; i++){
    card = {img: `/images/test.png`, key: i}
    cards.push(card)
  }
  console.log(cards)
  return cards
}

// get and display cards functions below
export function getRandomOrder(level) {
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
export function displayCards (setOfCard) {
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
function shuffleCards(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
      }
  }