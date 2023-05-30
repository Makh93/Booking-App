
import {FaUserAlt,FaUserFriends} from "react-icons/fa";
import '../Components/booking.css'
import React, {useState} from 'react'

export default function Booking() {




 const  [date, setDate]= useState();





const [guests, setGuests]= useState(0)


const handleAvailability=(e)=>{

setGuests(e.target.value)




}





  return (




  
    <div className='Booking'>

<div className="calendar">
<h4>CHECK-IN </h4>
<input  style={{padding: '10px', border: 'none', fontSize: '20px', fontweight: '400'}}type="date" onChange={e=>setDate(e.target.value)} />          
</div>
<div  className="calendar" >
<h4>CHECK-OUT   </h4>
<input  style={{padding: '10px',border: 'none', fontSize: '20px', fontWeight:'400' }}type="date" onChange={e=>setDate(e.target.value)} /></div>

<div  className="calendar">
<h4 >Guests <FaUserAlt/> </h4>
<input on  style={{padding: '10px',border: 'none', fontSize: '20px', fontWeight:'400', width: '100px' }}  type='number' />
</div>
<div  className="calendar">
<h4>Children <FaUserFriends/></h4>
<input    style={{padding: '10px',border: 'none', fontSize: '20px', fontWeight:'400' , width: '100px'}} type='number'/>

</div>



<button   onClick= {handleAvailability}className='check'>Check Availability</button>


       

    

   </div>
   
  );
}
