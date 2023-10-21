import React from "react";
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap';
import femaleTourist from '../assets/Images/female-tourist.png'


const Newsletter = () => {
  return (
     <section className="newsletter">
        <Container>
         <Row>
            <Col lg ="6">
                <div className="newsletter__content">
                <h3>Subscribe now to get Useful Traveling Information</h3>

                <div className="newsletter__input">
                    <input type ="email" placeholder = "Enter your email"/>
                    <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
                     distinctio nulla,  eum quasi eligendi reprehenderit praesentium 
                    labore maxime sunt explicabo nostrum ipsa placeat reiciendis </p>
                </div>
            </Col>
            <Col lg="6"> 
            <div className="newsletter__img">
                <img src ={femaleTourist} alt =""/>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
    ); 
};

export default Newsletter;