import React from 'react'
import {useFormik } from 'formik';
import './App.css';
import * as Yup from "yup";
import { Col, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
//   const mynav = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .required('Choose Coin Name !'),
        price: Yup.number()
        .required('Please Enter Your Price !'),
    
        qty: Yup.number()
        .required('Please Enter Your Qty !'),
      });
      const formik = useFormik({
        initialValues: {
          "name": "",
          "price":"",
          "qty":"",
        },
    
        validationSchema: SignupSchema,
        
    
        onSubmit: (values) => {
          axios.post("http://localhost:5000/create",values)
          .then(response=> response)
          console.log(values)
        },
      });
    //   mynav("/home")
      
  return (
    <>
    <h1 className='App'> Cryptocurrency Website</h1>
    <Row className="justify-content-center">
      <Col className="shadow bg-white col-lg-5 mt-5">
        <Form className="p-3" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
             <Form.Label>Coin Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Coin Name" onChange={formik.handleChange} isInvalid={formik.touched.name && formik.errors.name} />

            <Form.Control.Feedback type="invalid">
            {formik.touched.name && formik.errors.name}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price" placeholder="Enter Price" onChange={formik.handleChange} isInvalid={formik.touched.price && formik.errors.price} />
            
            <Form.Control.Feedback type="invalid">
            {formik.touched.firstName && formik.errors.firstName}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Qty</Form.Label>
            <Form.Control type="number" name="qty" placeholder="Enter Qty" onChange={formik.handleChange} isInvalid={formik.touched.qty && formik.errors.qty} />
            
            <Form.Control.Feedback type="invalid">
            {formik.touched.lastName && formik.errors.lastName}
            </Form.Control.Feedback>
            </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
    </>
  )
}

export default Add;