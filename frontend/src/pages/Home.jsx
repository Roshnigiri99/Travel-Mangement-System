import React from "react"; 
import '../styles/home.css'

import { Container,Row,Col } from "react-bootstrap";
import TouristImg from '../assets/Images/Tourist_1.jpg';
import TouristImg2 from '../assets/Images/Tourist_2.jpg';
import TouristVideo from '../assets/Images/Tourist.mp4';
import bestplaces from '../assets/Images/bestplaces.jpg';
import experienceImg from '../assets/Images/experience.jpg';
import Subtitle from './../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery.jsx";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
    {/*========== tourist section start=========*/}
    <section>
      <Container>
        <Row>
        <Col lg='6'>
          <div className="tourist__content">
          <div className="tourist__subtitle d-flex item align-item-center">
          <Subtitle subtitle={"Discover the WORLD"}/>
          <img src = {bestplaces} alt= " "/>
          </div>
          <h1>People forget <span className="highlight">YEARS</span> <br></br>and remember  
              <span className="highlight">  MOMENTS.</span> </h1>
               <p>
              “To move, to breathe, to fly, to float;<br></br>
              To gain all while you give; <br></br>
               To roam the roads of lands remote;<br></br>
               To travel is to live.”
                
              </p>

          </div>
        </Col>
        <Col lg='2'>
        <div className="tourist__img-box">
            <img src= {TouristImg} alt ="" />
          </div>
        </Col>
          <Col lg='2'>
            <div className="tourist__img-box mt-4">
            <video src= {TouristVideo} alt =""  autoPlay muted/>
            </div>
            </Col>
            <Col lg='2'>
            <div className="tourist__img-box mt-5">
            <img src= {TouristImg2} alt ="" />
            </div>
            </Col>
            </Row>
         <SearchBar/>
        <Row/>
      </Container>
    </section>
    {/*===========tourist section end ==========*/}
    <section>
      <Container>
        <Row>
            <Col lg ='3'>
              <h4 className="service__subtitle"> What we serve</h4>
              <h2 className="service__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      {/*===================featured tour section start =====================*/}
      <section>
        <Container>
          <Row>
            <Col lg ='12' className="mb-5">
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tour-title">Our featured tours</h2>
  
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/*=================== featured tour section end  =====================*/}
      {/*=================== experience section start ======================*/ }
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our experience <br/>we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
                  Facilis praesentium hic eos numquam molestias ducimus adipisci blanditiis mollitia tenetur cum earum aliquam officiis quos perferendis deserunt, consequatur id aperiam nostrum.
  
                </p>
              </div>
              
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>14</span>
                  <h6>Years Experience</h6>
                </div>
              </div>

            </Col>
            <Col lg ="6">
            <div className="experience__img">
              <img src = {experienceImg} alt = ""/>
            </div>
            </Col>
          </Row>
        </Container>
        </section>
      {/*=================== experience section end ========================*/ }
      {/*=================== gallery section start ========================*/ }
      <section>
        <Container>
          <Row>
            <Col lg ="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery__title">
                Visit Our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg ="12">
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>

      </section>


   
{/*=================== gallery section end ========================*/ }
<Newsletter/>
    </>
  );
};
                
            
          
 export default Home;