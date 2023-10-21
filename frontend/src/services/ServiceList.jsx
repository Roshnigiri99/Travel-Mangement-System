import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/Images/Weather.png'
import guideImg from '../assets/Images/Guide.jpg'
import customizationImg from '../assets/Images/Customization.jpg'

const serviceData=[
    {
        imgURL :weatherImg,
        title :"Calculate Weather ",
        desc :"Lorem Ipsum dolar",
    },
    {
        imgURL :guideImg,
        title :"Best Tour Guide ",
        desc :"Lorem Ipsum dolar",
    },
    {
        imgURL :customizationImg,
        title :"Customization ",
        desc :"Lorem Ipsum dolar ",
    },

]

const ServiceList = () => {
  return <>
  {serviceData.map((item,index) =>
   (<Col lg ='3' key={index}>
        <ServiceCard item = {item}/>
        </Col>
  ))}
  </>
};

export default ServiceList;