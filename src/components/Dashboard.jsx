import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
export default function Dashboard(props) {
  const navigate = useNavigate();
  const myFunc = (e) => {
    e.preventDefault();
    props.checkUser(false);
    navigate("/");
  }
  if(props.checkUser === false){
    navigate("/");
  }
  return (
    <>
      <Header targetName="Logout" target="/" statusChange={myFunc}/>
      <h1>Wellcome</h1>
    </>
  )
}
