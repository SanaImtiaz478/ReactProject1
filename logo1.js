import React from 'react'
import img1 from './Assets/Logo/logo.svg'

function logo(){
    const Style={
        imgc:{
            
            backgroundColor:'black',
            
        }
    
    }
    return(

        <div>
        <img style={Style.imgc}src={img1} alt={"Logo of Website"}/>
        </div>
    )
}

export default logo;