import { useRef, useState } from 'react';
import { RiPlayFill, RiPauseFill } from 'react-icons/ri'; // Importa los íconos de react-icons


const Playlist = () => {

    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
    return (
        <div >
            <div className="botonMusica" style={{ position: 'absolute', top: '83%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                <audio
        src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/Y2meta.app%20-%20Justin%20Timberlake%20-%20Can't%20Stop%20The%20Feeling!%20%5BLyrics%5D%20(128%20kbps).mp3?alt=media&token=8b3828af-b1b6-437f-aa16-8961db4256b0"
        ref={audioRef}
        preload="metadata"
      />
      <button 
  className={`botonMusica ${isPlaying ? 'playing' : ''}`}
  onClick={handlePlayPause}
>
  <span className="icon-background">
    {isPlaying ? <RiPauseFill className='icon' /> : <RiPlayFill className='icon' />}
  </span>
  {isPlaying ? '' : ''}
</button>
    </div>

    {/* <h3 className='play' style={{ position: 'absolute', top: '6%', left: '89%',  }}>Dale */}
   {/* Play!</h3> */}
        </div>
        )
    }


export default Playlist