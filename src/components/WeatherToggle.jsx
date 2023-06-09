import { useState } from 'react';
import Snow from '../Particles';
import { FaSnowflake } from "react-icons/fa";

const WeatherBox = () => {

    const [snow,setSnow] = useState(-30)
    // func to set the snow amount then is passed to 
    // the Particles(Snow) in the return
    function toggleSnow () { 
        setSnow(snow + 80)
        if (snow >= 130) {
            setSnow(-30)
        }
    }

    return (
        <>
            <div id='toggle-box'>
                <button type='button' className='btn toggle-btn' onClick={toggleSnow}>
                    <FaSnowflake 
                    style={{color: snow <= -30 && "#000" || 
                    snow == 50 && "#94a3b8" || 
                    snow == 130 && "f1f5f9"}} 
                    className='snow-icon'/>
                </button>
            </div>
            {snow > 0 && <Snow amount={snow}/>}
        </>
        )
}

export default WeatherBox
