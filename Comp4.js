import React from 'react'
import './Comp4_style.css'
import soc from './Assets/social/social_links.svg'
function Comp4(){
    return(
        <>
        <div className='container4'>
        <br></br>
            <p className='container4'> Social Media Links</p> 
            <p className='heading2'> Feel Free To Contact Us</p>
            <br></br>
            <img className='links'src={soc} alt={"Logo of Website"}/>

            <button className='startButton'>Get Started</button>
        </div>
        



        
        </>
       
    )
}
export default Comp4