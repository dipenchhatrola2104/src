import React, {useState} from 'react'

function Slot(props){
    const[faculty,setFaculty]=useState('');
    
    return(
        <>
        <div style={{color:props.color,backgroundColor:props.backgroundColor,margin:3}}>
            <h4 onMouseOver={()=>setFaculty(props.faculty)} onMouseLeave={()=>setFaculty('')}>{props.text}</h4>
            <p>{faculty}</p>
            
        </div>
        </>
    )
}

export default Slot