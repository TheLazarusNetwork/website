import React from "react";
import { Row, Col, Container} from "reactstrap";

export default function App() {
    return (
        <div>
            <div className="spacer bg-light pb-80">
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
                            <div class="relative" style={{ paddingTop: '56.25%' }}>
                                <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/QwGWq9Jvp0U" frameborder="0"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <section class="relative py-1 bg-blueGray-200">
          <div class="container mx-auto px-0">
            <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-0 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="text-center mt-16">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Our Mission:
                  </h3>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Our mission is to provide effective security and smooth operations.  We provide solutions to SMEs and individuals with the best-in-class security services, professional services, and support. We provide full-service information cyber security consulting services for Premium Membership to clients. 
                        <br /><br />
                        Lazarus is a decentralized blockchain network, with the goal of creating a truly private, secure, and fair Internet.
                        <br /><br />

                        {/* <br /><br /> */}
                        We are dedicated to providing private and secure internet access anywhere in the globe, even in the most remote areas. Our dedicated VPN creates a secure tunnel and encrypts your internet browsing and protects your data from malware.
                        <br /><br />
                        Resonance of blockchain and VPN.
                        <br /><br />
                        Lazarus is a decentralized bandwidth marketplace.
                        <br /><br />
                        Lazarus offers a dedicated IP based VPN to anyone on the web for connecting their enterprise to be accessible from anywhere, making it easy to connect, communicate and control smart devices. For corporate software applications that require low latency, it enables larger bandwidth and enhanced performance. 
                        <br /><br />
                        A blockchain-powered all-in-one solution that enables genuine internet freedom while also improving security and providing a seamless user experience.
                        <br /><br />
                        Lazarus provides network-level and metadata privacy through encryption modules, preventing anyone from intercepting connections.
                        <br/><br/>
                        Our main focus would be on providing Startups and SMEs with Enterprise-level security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
}
