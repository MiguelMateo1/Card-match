
const Menu = ({start,end,levelSelect,active,selectedLevel}) => {

    return (
        <div className="menu">
            {active && <button className="btn end-btn" onClick={end}>End</button>}
            {!active && <button className="btn" onClick={start}>Start</button>}
            {!active && <button className="btn" onClick={levelSelect}>Level</button>}
            {!active && <h5 className="level-selected-text">Selected level: {selectedLevel}</h5>}
        </div>
        )
}

export default Menu
