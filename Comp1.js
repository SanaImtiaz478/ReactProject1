import React from 'react'
import Navb from './Navbar';
import Logo1 from './logo1';
import Login from './login';
import img2 from './Assets/Cyber.png'
function Comp1() {

    const Style = {
        Container: {
            height: '100vh',
            width: '100%',
            backgroundColor: '#000000',
            color: 'white',
            display: 'flex',
            flexDirection:'column',
            justifyContent:'space',
            alignItems:'center',
           
        },
        Text1:{
            fontSize: '60px',
            display:'flex',
            marginTop:'200px',
            marginLeft:'50px',
           
            
        },
        Text2:{
            fontSize: '30px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'left',
            alignItems: 'left',
            color: 'rgb(114, 114, 209)',
            marginLeft:'50px',
            
        },
        Title1:{
            fontSize: '30px',
            backgroundColor:'black',
            color:'white',
            display:'flex',
           
            
        },
        st:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'black',
             
        },
        colm1:{
            flex:'60%',
            fontSize:'60px',
        },
        colm2:{
            flex:'40%',
            fontSize:'60px',
        },
        container2:{
            height: '100vh',
            width: '100%',
            backgroundColor: '#000000',
            color: 'white',
            display: 'flex',
        },
        imageS:{
            backgroundColor:'black',
            width:'500px',
            height:'400px',
            marginRight:'20px',
            marginTop:'130px'
           
        },
        startedButton:{
            color:'white',
            fontSize: '20px',
            font: 'Arial',
           marginLeft:'100px',
           backgroundSize: '10%',
           backgroundColor: '#1C55C9',
           paddingTop:'10px',
           paddingLeft:'50px',
           paddingRight:'10px',
           paddingBottom:'10px',
           alignItems: 'center',
           justifyContent: 'center',
           marginRight:'200px',
           marginTop:'50px',
           
        },
        dropDown:{
            color:'white',
            fontSize: '20px',
            font: 'Arial',
           marginLeft:'100px',
           backgroundSize: '10%',
           backgroundColor: '#1C55C9',
           paddingTop:'10px',
           paddingLeft:'50px',
           paddingRight:'10px',
           paddingBottom:'10px',
           alignItems: 'center',
           justifyContent: 'center',
           marginRight:'20px',
           marginTop:'50px',
        }
    
    }

    return (
       <>
       
        <div style={Style.st}>
            <Logo1>
            
            </Logo1>
            
            <Navb></Navb>
           
            <Login></Login>
      </div>
        
      <div style={Style.container2}>
        <div style={Style.colm1}>
            <p style={Style.Text1}>CYBER SECURITY</p>
            <p style={Style.Text2}>is much more than a matter of</p>
            <p style={Style.Text2}>information technology.</p>
            <p style={Style.startedButton}>Get started</p>
        </div>
        <div style={Style.colm2}></div>
        <p>
        <img style={Style.imageS}src={img2} alt={"Logo of Website"}/>
        <p style={Style.dropDown}>Drop Down To View More-></p>
        </p>
        </div>
        
        </>
        
        
        
    )
}

export default Comp1;
