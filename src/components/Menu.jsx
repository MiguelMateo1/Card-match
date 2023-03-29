
const Menu = ({start,end,levelSelect,active}) => {

    return (
        <div className="menu">
        {active && <button className="btn end-btn" onClick={end}>End</button>}
        {!active && <button className="btn" onClick={start}>Start</button>}
        {!active && <button className="btn" onClick={levelSelect}>Level</button>}
        <h5 className="level-selected-text">Selected level: 1</h5>
        </div>
        )
}

export default Menu
