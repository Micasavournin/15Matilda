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
        src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/Y2meta.app%20-%20Taylor%20Swift%20-%20Shake%20It%20Off%20(Taylor's%20Version)%20(Espa%C3%B1ol%20%2B%20Lyrics)%20(128%20kbps).mp3?alt=media&token=c38d3ef0-3842-4ef8-b715-97365f9437d5"
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