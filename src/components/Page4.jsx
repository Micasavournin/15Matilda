
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/1mEO1609n4GWEfbjKJKb47YSKfYcEZ9UQWOWsvX5Gyhs/prefill';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/tarjeta%202%20(15)-04.jpg?alt=media&token=c7575dbd-6e4d-4a39-ba76-bfdc54f1feef" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
            style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonRecordar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4