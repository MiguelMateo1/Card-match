
const Menu = ({start,end,levelSelect,active}) => {

    return (
        <div className="menu">
        {active && <button className="btn end-btn" onClick={end}>End</button>}
        {!active && <button className="btn" onClick={start}>Start</button>}
        {!active && <button className="btn" onClick={levelSelect}>Level</button>}
        </div>
        )
}

export default Menu
