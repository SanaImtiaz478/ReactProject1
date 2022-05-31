
import React from 'react';
function List(){
const Style={
    lists:{
        fontSize: '20px',
            backgroundColor:'black',
            color:'white',
            display:'flex',
            justifyContent:'space-around',
            listStyle:'none',
            width:'50%',


}
}

    return(
    <l style={Style.lists}>
    <li>About</li>
    <li>How it works</li>
    <li>Pricing</li>
    <li>Solution</li>
    <li>Features</li>
   
    </l>

    )
}
export default List;
 