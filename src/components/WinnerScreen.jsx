
const WinnerScreen = ({level}) => {

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
