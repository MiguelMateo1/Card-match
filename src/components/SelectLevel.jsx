import { BsFillTriangleFill } from "react-icons/bs";

const SelectLevel = ({levelSelect, setLevelSelect}) => {

    const handleClick = () => {
        if (levelSelect) {
            setLevelSelect(false)
        }
    }

    return (
            <section className="level-container">
                <div className="level-row">
                    <h3>1</h3>
                    <span>16 cards</span>
                    <button className="btn level-btn" onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>2</h3>
                    <span>20 cards</span>
                    <button className="btn level-btn" onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>3</h3>
                    <span>24 cards</span>
                    <button className="btn level-btn" onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>4</h3>
                    <span>30 cards</span>
                    <button className="btn level-btn" onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
                <div className="level-row">
                    <h3>5</h3>
                    <span>36 cards</span>
                    <button className="btn level-btn" onClick={handleClick}><BsFillTriangleFill/></button>
                </div>
            </section>
        )
}

export default SelectLevel
