
const Page5 = () => {
    const pinterestUrl = "https://drive.google.com/drive/folders/15HCg5UCKgnP3whZ1d2Vn8pae5ckK2x58?usp=drive_link";
    return (
        <div className="contenedor">
                <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%202%20(15)-06.jpg?alt=media&token=bd25d5fc-725a-4f14-ac5a-e00245bff76c" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <a
            style={{ position: 'absolute', top: '79%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonInspo">

          Cargar
        </button>

        </a>
            
        </div>
        )
    }


export default Page5