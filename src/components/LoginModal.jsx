
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import React from 'react';
import Signup from './Signup';
import Axios from 'axios';
import {useState} from 'react'



const LoginModal = (props) => { 
  const [modalShow, setModalShow] = React.useState(false);
  const url="http://127.0.0.1:3333/login"
    const [Data,setData]= useState({
        email :"",
        password:"",
    })
   
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            email: Data.email,
            password: Data.password
        })
        .then(res=>{
            console.log(res)
        }
        )
      
    }
    
    
    function handle(e){
        const newData ={...Data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    
    }

    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <form class="align-center" onSubmit={(e)=>submit(e)}>
              <Modal.Body>
              
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control"onChange={e=>handle(e)} id="email" value={Data.email} placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mot de passe</label>
    <input type="password" class="form-control" onChange={e=>handle(e)} id="password" value={Data.password} placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">remember me </label>
  </div>


<br/>
   <NavLink to="/" className="btn-get-started " onClick={() => setModalShow(true)}> inscrivez-vous ? </NavLink>

              </Modal.Body>
              <Modal.Footer>
                 <Button  type="submit"  bg ="primary"variant="primary" onClick={props.handleModalOpen}>
                    se connecter
                 </Button>
              </Modal.Footer>
              </form>
          </Modal>
          <Signup
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     
        </>
     );
}


export default LoginModal;