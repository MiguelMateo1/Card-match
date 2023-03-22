import { useState } from 'react';
import useDragger from '../hooks/useDragger';
import Snow from '../Particles';
import { FaSnowflake } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


const WeatherBox = () => {
    // custom hook, to make element dragable
    // useDragger('toggle-box')

    const [snow,setSnow] = useState(-30)

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
                    style={{color: snow <= -30 && "#0f172a" || 
                    snow == 50 && "#94a3b8" || 
                    snow == 130 && "f1f5f9"}} 
                    className='snow-icon'/>
                </button>
                <button type='button' className='btn toggle-btn' onClick={toggleSnow}>
                    <FaSun
                        style={{color: snow <= -30 && "#0f172a" || 
                        snow == 50 && "#94a3b8" || 
                        snow == 130 && "f1f5f9"}} 
                        className='day-icon'
                    />
                </button>
            </div>
            {snow > 0 && <Snow amount={snow}/>}
        </>
        )
}

export default WeatherBox
