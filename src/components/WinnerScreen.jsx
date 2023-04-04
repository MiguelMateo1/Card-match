
const WinnerScreen = ({level}) => {

    const numOfCards = [{level: 1,cards: 16},{level: 2,cards: 20},{level: 3,cards: 24},
        {level: 4,cards: 30},{level: 5,cards: 36}]

        const nextLevel = numOfCards[{level}];

        
        const endBtnHandle = () => {
            setActive(!true)
        }



    return (
        <div className="winner-screen">
            <h2>Well Done!!</h2>
            <h5>You beat level {level}</h5>
        </div>
        )
}

export default WinnerScreen
