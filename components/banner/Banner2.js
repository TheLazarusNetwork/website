import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/server.svg";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center md:p-20">
            <h1 className="title">
            Enterprise Grade Cybersecurity Solutions for Individuals and Businesses
            </h1>
            <h4 className="subtitle font-light">
            Leveraging AI And Blockchain Technologies For Cyber Defense to protect you from online Viruses while you Work From Home.
            </h4>
            <Row style={{paddingTop:15}}>
              <Col lg="6" md="6" className="m-b-30">
                <h6 style={{color:'white'}}>Surf Internet Anonymously</h6>
                <h6 style={{color:'white'}}>No Advertisements</h6>
                <h6 style={{color:'white'}}>Integrated Firewall</h6>
              </Col>
              <Col lg="6" md="6" className="m-b-30">
                <h6 style={{color:'white'}}>Unlimited Bandwidth</h6>
                <h6 style={{color:'white'}}>Faster Internet Access</h6>
                <h6 style={{color:'white'}}>Anonymous VPN</h6>
              </Col>
          </Row>
            <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-0 "
            >
              Join Us
            </a>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
