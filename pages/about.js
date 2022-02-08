import React from "react";
import { Row, Col, Container} from "reactstrap";

export default function App() {
    return (
        <div>
            <div className="spacer bg-light pb-80" style={{
              backgroundImage:
                "url('https://www.appxite.com/hubfs/Blog%20Posts/Blog%20covers/ax_blog_1%20%E2%80%93%2010.svg')",
                backgroundRepeat:'no-repeat'
            }}>
                <h3 className="text-4xl font-semibold leading-normal mb-10 text-white mt-2 text-center">
                    Our Mission:
                  </h3>
            </div>
            <section className="relative py-1 bg-blueGray-200">
          <div className="container mx-auto px-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-0 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-16">
                  {/* <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Our Mission:
                  </h3> */}
                </div>
                <div className="mt-10 py-10 border-blueGray-200">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-900">
                      Our mission is to provide effective security and smooth operations.  We provide solutions to SMEs and individuals with the best-in-class security services, professional services, and support. We provide full-service information cyber security consulting services for Premium Membership to clients. 
                        <br /><br />
                        Lazarus is a decentralized blockchain network, with the goal of creating a truly private, secure, and fair Internet.
                        <br /><br />
                        Lazarus offers 24x7 assistance to help maintain your deployment working well. We also provide services to ensure you are protected so you are safe even in an extreme situation.
                        <br /><br />
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
