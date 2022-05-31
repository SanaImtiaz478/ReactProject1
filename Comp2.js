import React from 'react';
import './Comp2_style.css';

function Comp2() {
  const Style = {
    Box:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        color: '#EC9B3B',
        fontSize: '23px',
        
    },
    Text1:{
      display:'flex',
      backgroundColor:'black',
      color:'white',
      flexDirection:'column',
      fontSize:'20px',
    },
    Box1:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      fontSize:'20px',
      backgroundColor:'black',
      color:'white',
      marginLeft:'400px',
      padding:'10px',
      marginBottom:'200px',
      display:'flex'
    },
    Box2:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      fontSize:'20px',
      backgroundColor:'black',
      color:'white',
      marginRight:'300px',
      padding:'10px',
      marginBottom:'10px',
      paddingRight:'20px',
      display:'flex'
    },
  
}
  return (
    <>
    <div className='container2'>
    
    <p className='heading'> THE FASTEST <p className='heading'> GROWING PLATFORM </p></p>
    </div>
    <div className='container2'>
          <div style={Style.Box}>
              <p style={Style.Box1}>Privacy – like eating and breathing – is one of life’s basic 

requirements.</p>
          < p style={Style.Box2}>Security used to be an inconvenience sometimes, but now it’s a<br></br> necessity all the time.</p>
          </div>
      </div>

    
    </>
    
  )
}

export default Comp2;