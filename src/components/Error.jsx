import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error(props) {
    const navigate = useNavigate();
    // const confirmdata = (e) =>{
    //     e.preventDefault();
    //     confirm("Sorry you're not authorized!");
    // }
    // if(confirm === true){
    //     navigate("/");
    // }
    // var data = props.flagTest;
    let check = ()=>{
        props.flagTest===false?navigate("/"):alert('error shown')
    }
    useEffect(()=>{
        check();
    },[]);
  return (
    <div>error</div>
  )
}
