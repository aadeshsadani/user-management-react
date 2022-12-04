import React from 'react';
import { Form, Button, Row, Col, Card, Container  } from 'react-bootstrap';
import {Link, useNavigate } from 'react-router-dom';
export default function Login(props) {
  const navigate = useNavigate();
  const loginFunc = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginFormDataobject = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    if(props.passData.length === 0){
      alert('First signup'); 
    }else{
      const authentication = props.passData.filter((item, index) => {
        return item.email === loginFormDataobject.email && item.userPassword === loginFormDataobject.password;
      });
      if(authentication.length !== 0){
        props.userValidate(loginFormDataobject);
        props.authAvailable(true);
        navigate("/dashboard");
      }else{
        alert("Invailid email or password!");
      }
    }
  }
  return (
    <>
    <Container className='d-flex justify-content-center'>
        <Card className='' style={{ width: '50%'}}>
          <Card.Header className='text-center'><h4>Sign in</h4></Card.Header>
            <Card.Body>
              <Form onSubmit={ loginFunc } >
                <Row className='flex-column align-items-center'>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" required placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" required placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Col>         
                </Row>
              </Form>
            </Card.Body>
            <Card.Footer className='text-center'>
              <Link to="/signup">Sign Up</Link>
            </Card.Footer>
        </Card >
      </Container>
    </>
  )
}
