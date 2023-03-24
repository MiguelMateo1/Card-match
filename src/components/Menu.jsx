
const Menu = ({start,end,level,active}) => {

    return (
        <div className="menu">
        {active && <button className="btn end-btn" onClick={end}>End</button>}
        {!active && <button className="btn" onClick={start}>Start</button>}
        {!active && <button className="btn" >Level</button>}
        </div>
        )
}

export default Menu
