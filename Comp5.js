import React from 'react'
import './button.css'
function Comp1() {
    const Style = {
        Container: {
            height: '140vh',
            width: '100%',
            backgroundColor: '#000000',
            color: 'white',
            display: 'flex',
            flexDirection:'column',
            
            alignItems: 'center',
            
        },
        Text:{
            fontSize: '60px'
            
            
        },
        st:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'black',
             
        },
        colm1:{
            flex:'20%',
            fontSize:'60px',
            backgroundColor:'white',
            float:'left',
            marginLeft:'20px'
        },
        colm2:{
            flex:'20%',
            fontSize:'60px',
            backgroundColor:'#1C55C9',
            float:'left',
            marginLeft:'20px'
        },
        colm3:{
            flex:'20%',
            fontSize:'60px',
            backgroundColor:'white',
            float:'left',
            marginLeft:'20px'
        },
        containerr2:{
            height: '100vh',
            width: '80%',
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
        Textt1:{
            fontSize: '30px',
            display:'flex',
            fontStyle:'bold',
            marginLeft:'30px',
           color:'black',
            
        },
        Textt6:{
            fontSize: '30px',
            display:'flex',
            fontStyle:'bold',
            marginLeft:'30px',
           color:'white',
            
        },
        Textt2:{
            fontSize: '50px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'left',
            alignItems: 'left',
            color: 'black',
            marginLeft:'30px',
            marginTop:'20px'
            
        },
        Textt3:{
            fontSize: '17px',
            display:'flex',
            marginTop:'0px',
            marginLeft:'30px',
           color:'black',
           marginRight:'10px',
          
           

        },
        Linee:{
            marginRight:'20px',
            fontSize: '20px',
            display:'flex',
            marginLeft:'30px',
           color:'black',
        },
        Linee2:{
            marginRight:'20px',
            fontSize: '20px',
            display:'flex',
            marginLeft:'30px',
           color:'white',
        },
        T:
        {
            fontSize: '20px',
            display:'flex',
            marginTop:'-35px',
            marginLeft:'80px',
           color:'black',
        },
        T1:{
            fontSize: '20px',
            display:'flex',
            marginTop:'-35px',
            marginLeft:'80px',
           color:'white',
        },
        Textt4:{
            fontSize: '17px',
            display:'flex',
            marginTop:'0px',
            marginLeft:'30px',
           color:'white',
           marginRight:'10px',
        },
        Textt5:{
            fontSize: '50px',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'left',
            alignItems: 'left',
            color: 'white',
            marginLeft:'30px',
            marginTop:'20px'
            
        },
    }

    // Return JSX
    return (
        <>
        <div style={Style.Container}>
            <p style={Style.Text}> Get your best deal</p>
            
        
        <div style={Style.containerr2}>
        <div style={Style.colm1}>
            <p style={Style.Textt1}>Personal</p>
            <p style={Style.Textt3}>Special first package for all</p>
            <p style={Style.Linee}>_____________________________</p>
            <p style={Style.Textt2}>$8 <p style={Style.T}>/Month</p></p>
            <p style={Style.Textt3}>☑️ Up to 5 page each group</p>
            <p style={Style.Textt3}>☑️ Up to 10 group page</p>
            <p style={Style.Textt3}>☑️ 5 Days group page saved</p>
            <button className='trailButton1'> Start Free Trial</button>
        </div>
        <div style={Style.colm2}>
        <p style={Style.Textt6}>Regular</p>
            <p style={Style.Textt4}>Recommended for personal pro</p>
            <p style={Style.Linee2}>_____________________________</p>
            <p style={Style.Textt5}>$20 <p style={Style.T1}>/Month</p></p>
            <p style={Style.Textt4}>☑️ Up to 15 page each group</p>
            <p style={Style.Textt4}>☑️ Download page up to 20 page</p>
            <p style={Style.Textt4}>☑️ Up to 10 group page</p>
            <p style={Style.Textt4}>☑️ 15 Days group page saved</p>
            <button className='trailButton2'> Start Free Trial</button>
        
        
        
            </div>
        <div style={Style.colm3}>
        <p style={Style.Textt1}>Premium</p>
            <p style={Style.Textt3}>Packet for Startup & Company</p>
            <p style={Style.Linee}>_____________________________</p>
            <p style={Style.Textt2}>$48 <p style={Style.T}>/Month</p></p>
            <p style={Style.Textt3}>☑️ Unlimited group pages</p>
            <p style={Style.Textt3}>☑️ Unlimited download page</p>
            <p style={Style.Textt3}>☑️ Unlimited page each group</p>
            <p style={Style.Textt3}>☑️ Customize sorting group pages</p>
            <p style={Style.Textt3}>☑️ Customize group page name</p>
            <p style={Style.Textt3}>☑️ 30 Days group page saved</p>
            <button className='trailButton3'> Start Free Trial</button>

        </div>
        </div>
        </div>
        </>
    )
}

export default Comp1;
