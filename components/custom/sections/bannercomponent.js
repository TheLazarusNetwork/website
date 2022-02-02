/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../../assets/images/landingpage/server.svg";

const BannerComponent = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center md:pl-28 md:pt-0">
              <h1 className="title">Enterprise Grade Cybersecurity Solutions for Individuals and Businesses</h1>
              <h6 className="subtitle op-8">
              Leveraging AI And Blockchain Technologies For Cyber Defense to protect you from online Viruses while you Work From Home.
              </h6>
              <h6 className="subtitle op-8">
              We diagnose your IT Security faults and weaknesses Before Hackers Do
              </h6>
              <Row style={{paddingTop:15}}>
              <Col lg="6" md="6" className="m-b-30">
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Surf Internet Anonymously</h6>
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> No Advertisements</h6>
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Integrated Firewall</h6>
              </Col>
              <Col lg="6" md="6" className="m-b-30">
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Unlimited Bandwidth</h6>
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Faster Internet Access</h6>
                <h6 style={{color:'white',paddingBottom:10}}><i class="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Anonymous VPN</h6>
              </Col>
          </Row>
          <a
              href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
              className="btn btn-danger m-r-20 btn-md m-t-0 "
            >
              Join Us
            </a>
            </Col>
            <Col md="6">
            {/* <Image src={bannerimg} alt="hero banner" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
