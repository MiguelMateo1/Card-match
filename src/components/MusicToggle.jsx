import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { musicList } from "../audios";

function MusicToggle() {
    const musicBoxRef = useRef(null);
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(musicList[0]);

    function handleClick () {
        musicBoxRef.current.classList.toggle('active')
        setIsPlaying(!isPlaying)
    };

    function nextSongClick () {
        if (currentSong.key == musicList.length) {
            setCurrentSong(musicList[0])
        } else {
            setCurrentSong(musicList[currentSong.key]) 
        }
        setIsPlaying(true)
    };

    useEffect(() => {
        const ele =  audioElement.current;
        ele.volume = 0.5
        ele.crossOrigin = "anonymous";
        if (isPlaying) {
            ele.play();
        } else {
            ele.pause();
        }
    },[isPlaying,currentSong]);

    return (
        <div ref={musicBoxRef} id="music-box">
            <audio src={currentSong.url} ref={audioElement} />
            <h6>{currentSong.title}
                <button className="next-btn" onClick={nextSongClick}>
                    <FaForward/>
                </button>
            </h6>
            <button className="music-btn btn" onClick={handleClick}>
                {isPlaying ? <FaPause className="music-icon pause"></FaPause> 
                : <FaMusic className="music-icon"></FaMusic>}
            </button>
        </div>
    )
  }
  export default MusicToggle;