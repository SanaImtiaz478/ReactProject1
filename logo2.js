import React from 'react'
import img2 from './Assets/Logo/logo_light.svg'

function logo(){
    const Style={
        imgc:{
            
            backgroundColor:'white',
            
        }
    
    }
    return(

        <div>
        <img style={Style.imgc}src={img2} alt={"Logo of Website"}/>
        </div>
    )
}

export default logo;