import React from 'react';
import './Comp6_style.css';
import Logo2 from './logo2';
import Nav2 from './Navbar2'
function Comp6(){
    const Style={
        final:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'white',
        }
    }
    return(
        <>
        <div className='container6'>
            <br></br>
            <p className='container6'> Join us on email for <p className='heading2'> more information </p></p>
            <button className='joinButton' >Join Now</button>
            </div>
        <div style={Style.final}>
        <Logo2></Logo2>
        <Nav2></Nav2>
        </div>
        
        
        </>
    )
}
export default Comp6;