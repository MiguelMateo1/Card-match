import { useEffect, useRef } from 'react'
import Parallax from 'parallax-js'
import moon from './assets/moon5.png'
import front from './assets/front5.png'
import mid from './assets/mid5.png'
import clif from './assets/clif5.png'

const Backgound = () => {
    const sceneRef = useRef(null);

    useEffect (() => {
        const scene = sceneRef.current;
        const parallaxInstance = new Parallax(scene)
    })

    return (
            <div className='container'>
                <div ref={sceneRef} id='scene'>
                    <div className='layer moon' data-depth-y="0.1" data-depth-x="0.15"><img src={moon}></img></div>
                    <div className='layer front' data-depth-y="0.03" data-depth-x="0.2"><img src={front}></img></div>
                    <div className='layer mid' data-depth-y="0.13" data-depth-x="0.35"><img src={mid}></img></div>
                    <div className='layer clif' data-depth-y="-0.08" data-depth-x="0.1"><img src={clif}></img></div>
                </div>
            </div>
        )
}

export default Backgound
