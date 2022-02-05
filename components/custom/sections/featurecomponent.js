/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/img1.jpg";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";
import Link from 'next/link';
;


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
    
  
    {/* <div className="relative block md:flex items-center">
      <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
        <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">For Personal Security</div> */}
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
      
      
  </div>

  <section className="block relative z-1 bg-gray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    For Personal Security
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col justify-center items-center min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url("https://www.indusface.com/wp-content/uploads/2019/07/Things-To-Consider-When-Choosing-A-SaaS-Security-Provider-1200x720.png")` }}>
                      <div class="pt-8 pl-10">
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;No Traffic / Request Logs
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Unmetered Data Transfer
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Anonymous VPN
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Block ADs, Trackers and Malware
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Firewall Enabled
                        </li>
                        <div class="block flex items-center p-8  uppercase">
                          <button
                            class="mt-3 text-lg font-semibold 
                                            bg-blue-600 w-full text-white rounded-lg 
                                            px-6 py-3 block shadow-xl hover:bg-gray-700"
                            style={{ backgroundColor: '#24A0ED' }}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    For Enterprise Security
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col justify-center items-center min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aGpeL5n3carq57Df8-0zAimrWFDV2ulbHKfzoot1w03XDTrQ7UI-Hn3xZQofRL4ASiY&usqp=CAU")` }}>
                      <div class="pt-8 pl-10">
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Multiple Solutions for Enterprises
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Dedicated IP Addresses
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Blockchain Services
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Server & Application Security
                        </li>
                        <li class="mb-3 flex items-center ">
                          <i className="fas fa-check-circle" style={{ color: 'green' }}></i>
                          &nbsp;Priority Support
                        </li>
                        <div class="block flex items-center p-8  uppercase">
                          <button
                            class="mt-3 text-lg font-semibold 
                                            bg-blue-600 w-full text-white rounded-lg 
                                            px-6 py-3 block shadow-xl hover:bg-gray-700"
                            style={{ backgroundColor: '#24A0ED' }}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer bg-gray-600 pb-60">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold text-5xl">What it does?</h1>
                            <h6 className="subtitle pb-10">
                                Lazarus Network leverages AI and Blockchain Technologies For Cyber Defense to protect
                                individuals and companies from cyber-attacks like ransomware, email spoofing, phishing etc.
                                We help them by securing the network layer within their home/office so that all applications
                                can only access authorized services and malicious services are blocked.
                            </h6>
                            <div className="relative" style={{ paddingTop: '56.25%' }}>
                                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/QwGWq9Jvp0U" frameBorder="0"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="pb-16 bg-gray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
              Let's keep in touch!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Subscribe and get updates via email
              </p>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center w-full max-w-md shadow-xl border-t border-b border-gray-200">
                  <input className="border-l-4 border-red-700 bg-white focus:outline-none px-4 w-full m-0" placeholder="Email"
                    type="text" />
                  <button
                    className="inline-flex text-black py-2 px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
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
