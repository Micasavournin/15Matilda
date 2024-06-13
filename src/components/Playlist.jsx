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
            <div className="botonMusica" style={{ position: 'absolute', top: '6%', left: '89%', transform: 'translate(-50%, -50%)' }}>

                <audio
        src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/My%20Heart%20Will%20Go%20On%20(Titanic)%20Taylor%20Davis%20-%20Violin%20Cover.mp4?alt=media&token=01181691-39a6-4078-9a1e-440d7180612e"
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