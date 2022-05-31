
import React from 'react';
function List(){
const Style={
    lists:{
        fontSize: '20px',
            backgroundColor:'white',
            color:'black',
            display:'flex',
            justifyContent:'space-around',
            listStyle:'none',
            width:'50%',


}
}

    return(
    <l style={Style.lists}>
    <li>Privacy Policy</li>
    <li>Terms and conditions</li>
    <li>Contact Us</li>
    <li>Careers</li>
   
    </l>

    )
}
export default List;
 