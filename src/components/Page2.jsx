import  { useState, useEffect } from 'react';

const Page2 = () => {

    const googleCalendarUrl = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXVvdTZyYmI3dnNvZDJhZTFyMnU5M2tjZjAgbWljYWFzYXZvb0Bt&tmsrc=micaasavoo%40gmail.com";

    const targetDate = new Date('2024-09-12T23:59:59').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    function calculateTimeRemaining() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => {
        clearInterval(timerInterval);
      };
    }, []);
  
    return (
        <div>
            <div className="contenedor" style={{ position: 'relative' }}>
  <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/maltidas%2015%20(cuanto%20falta)-02.jpg?alt=media&token=345bc8f2-03b8-47f7-9330-06d7ad42ac1a"
    alt=""
    style={{ maxWidth: '100%', maxHeight: '100%' }}
  />
  <div className="contador" style={{ position: 'absolute', top: '54%', left: '50%', transform: 'translate(-50%, -50%)' ,display: 'flex', flexDirection: 'row'}}>

  <div className='font' style={{ marginLeft:"44px", marginRight: '25px', fontSize: "40px"}}>{timeRemaining.days}</div> 
          <div className="background">
            <div className='font' style={{ marginRight: '50px', marginLeft:"15px", fontSize: "40px"}}>{timeRemaining.hours}</div> 
          </div>
          <div className="background">
            <div className='font' style={{ marginRight: '10px',marginLeft:"0px", fontSize: "40px"}}>{timeRemaining.minutes}</div> 

          </div>
          <div className="background">
            <div className='font' style={{ marginLeft: '35px',marginRight:"35px" ,fontSize: "40px" }}>{timeRemaining.seconds}</div> 
          </div>
  </div>

  <a style={{ position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleCalendarUrl} target="_blank" 
        rel="noopener noreferrer" className="palabraAgendar">
      <button className="botonRecordar">
          Recordatorio
          </button>
        </a>
</div>
        </div>
        )
    }


export default Page2