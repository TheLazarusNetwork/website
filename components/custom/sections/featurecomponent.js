/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/img1.jpg";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 style={{fontSize:35, fontWeight:'bold'}}>Pricing Options</h1>
              <h6 className="subtitle">
              We have multiple pricing options and two different plans, Personal plan and enterprise plan to protect you from cyber-attacks like ransomware, email spoofing, phishing etc.
              </h6>
            </Col>
          </Row>
          {/* <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">For Personal Security</h5>
                      <h6>Surf Internet Anonymously</h6>
                      <h6>No Advertisements</h6>
                      <h6>Integrated Firewall</h6>
                      <h6>Unlimited Bandwidth</h6>
                      <h6>Faster Internet Access</h6>
                      <h6>Anonymous VPN</h6>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">For Enterprise Security</h5>
                      <h6>Surf Internet Anonymously</h6>
                      <h6>No Advertisements</h6>
                      <h6>Integrated Firewall</h6>
                      <h6>Unlimited Bandwidth</h6>
                      <h6>Faster Internet Access</h6>
                      <h6>Anonymous VPN</h6>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>

      <div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">
    
  
    <div className="relative block md:flex items-center">
      <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">For Personal Security</div>
        {/* <div className="block sm:flex md:block lg:flex items-center justify-center">
          <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
            <div className="inline-flex items-center">
              <span className="text-3xl font-medium">1.4%</span>
              <span className="text-xl text-gray-600 ml-2">+</span>
              <span className="text-xl ml-2">20p</span>
            </div>
            <span className="block text-sm text-gray-600 mt-2">for European cards</span>
          </div>
          <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
            <div className="inline-flex items-center">
              <span className="text-3xl font-medium">2.9%</span>
              <span className="text-xl text-gray-600 ml-2">+</span>
              <span className="text-xl ml-2">20p</span>
            </div>
            <span className="block text-sm text-gray-600 mt-2">for non-European cards</span>
          </div>
        </div> */}
        <div className="flex justify-center mt-3">
          <ul>
            <li className="flex items-center">
              <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-umbrella"><path className="primary" d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"/><path className="secondary" d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"/></svg>
              </div>
              <span className="text-gray-700 text-lg ml-3">No Traffic / Request Logs</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-shopping-bag"><path className="primary" d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"/><path className="secondary" d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"/></svg>
              </div>
              <span className="text-gray-700 text-lg ml-3">Unmetered Data Transfer</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-pie-chart"><path className="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"/><path className="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"/></svg>
              </div>
              <span className="text-gray-700 text-lg ml-3">Anonymous VPN</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-pie-chart"><path className="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"/><path className="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"/></svg>
              </div>
              <span className="text-gray-700 text-lg ml-3">Block ADs, Trackers and Malware</span>
            </li>
            <li className="flex items-center mt-3">
              <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-pie-chart"><path className="primary" d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"/><path className="secondary" d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"/></svg>
              </div>
              <span className="text-gray-700 text-lg ml-3">Firewall Enabled</span>
            </li>
          </ul>
        </div>
        <a className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16" href="#">
          <span>Know More</span>
          <span className="font-medium text-gray-700 ml-2">➔</span>
        </a>
      </div>
      <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
        <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
          <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">For Enterprise Security</div>
          <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
          Multiple Solutions for Enterprises
          </div>
          <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Priority Support</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">Dedicated IP Addresses</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Blockchain Services</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4">Server & Application Security</div>
          </div>
          <a className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8" href="#">
            <span>Know more</span>
            <span className="font-medium text-gray-300 ml-2">➔</span>
          </a>
        </div>
      </div>
    </div>  
  </div>

  
      {/* <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img1}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
                      The New way of Making Your Website in mins
                    </h3>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience. You will love
                      it for sure.
                    </p>
                    <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default FeatureComponent;
