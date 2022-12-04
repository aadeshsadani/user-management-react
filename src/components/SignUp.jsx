import React, { useState } from 'react'
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
export default function SignUp(props) {
  const [passwordValidation, setPasswordValidation] = useState();
  const navigate = useNavigate();
  const confirmPassword = (e) => {
    const element = document.getElementById('msg');
    const myBtn = document.getElementById('myBtn');
    if(passwordValidation !== e.target.value){
        element.classList.remove("d-none");
        myBtn.classList.add("disabled");
      }else{
        element.classList.add("d-none");
        myBtn.classList.remove("disabled");
      }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get('fName'), 
      email: formData.get('userEmail'),
      userPassword: formData.get('userPassword'),
      userConfirmPassword: formData.get('userConfirmPassword')
    }
    props.forUserInfromation(userData);
    //redirect
    navigate("/");
  }
  console.log(passwordValidation);
  return (
    <>
    <Header targetName="Login" target="/" />
    <Container className='my-5'>
      <Card className='m-auto h-100 w-75'>
        <Card.Header><h4 className='text-center'>Sign up</h4></Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="fName" placeholder="Enter first name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="userEmail" placeholder="Enter email" required />
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" name="userPassword" placeholder="Password" onChange={(e) => {setPasswordValidation(e.target.value)}} minLength={6} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="text" name="userConfirmPassword" placeholder="Confirm password" onBlur={confirmPassword} minLength={6} required />
                </Form.Group>
                <p id='msg' className='d-none text-danger'>Password not matched!</p>
                </Col>
            </Row>
            <Row>
              <Col md={12}>
                  <Button className='disabled' id="myBtn" variant="primary" type="submit">
                    Sign up
                  </Button>
              </Col>         
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer className='text-center'>
                  <Link to="/">Login</Link>
        </Card.Footer>
      </Card>
    </Container>
    </>
  )
}
