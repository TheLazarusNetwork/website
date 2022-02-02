import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img5 from "../assets/images/features/feature30/feature-img.jpg";

const services = () => {
  return (
    <div>
      <div className="bg-gray-100 pt-10">
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Lazarus Network Services</h1>
          <p className="text-lg mt-3 font-semibold">Enterprise Grade Cybersecurity Solutions for Individuals and Businesses. At Lazarus we leverage AI And Blockchain technologies For cyber defense to protect you and your enterprise from online viruses while you Work From Home.</p>
        </div>
        <div className="mt-10 text-center">
          <h4 className="text-2xl font-bold text-gray-800">Virtual Private Networks</h4>
          <hr className="mt-10" />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 md:pl-20 md:pr-20 pl-4 pr-4 pt-20">
        <div className="col">
          <div className="card rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div className="px-8 py-10 flex justify-between items-center">
              <h4 className="text-xl font-bold text-gray-800">ANONYMOUS VPN</h4>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="px-4 text-center text-sm ">Anonymous VPN uses P2P VPN Solution for bypassing IP Fingerprinting. Get 100% anonymous internet browsing around the world including restricted regions.
              <br /><br />Lazarus VPN gives you encrypted internet surfing and prevents hackers and malware from accessing your data between your device and the internet.</p>
            <ul className="text-center py-3">
              <li><a href="#" className="font-semibold">Secure online browsing</a></li>
              <li><a href="#" className="font-semibold">Access to Restricted Content</a></li>
              <li><a href="#" className="font-semibold">Network-wide protection</a></li>
              <li><a href="#" className="font-semibold">Block in-app advertisements</a></li>
              <li><a href="#" className="font-semibold">Improve network performance</a></li>
              <li><a href="#" className="font-semibold">Monitor statistics</a></li>
            </ul>
            <div className="text-center bg-pink-600 ">
              <button className="inline-block my-6 font-bold text-white">Get started today</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <div className="px-8 py-9 flex justify-between items-center">
              <h4 className="text-xl font-bold text-gray-800">DEDICATED VPN</h4>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="px-4 text-center text-sm ">Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access along with network layer customizable firewall. Get higher bandwidth and optimized performance for enterprise software usages requiring good latency.
              <br /><br />Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
            <ul className="text-center py-4">
              <li><a href="#" className="font-semibold">All the features of ANONYMOUS VPN</a></li>
              <li><a href="#" className="font-semibold">
                Dedicated Network - Secure Tunnel</a></li>
              <li><a href="#" className="font-semibold">Network Layer Customizable Firewall</a></li>
              <li><a href="#" className="font-semibold">Dedicated Bandwidth and Performance - Not Shared</a></li>
            </ul>
            <div className="text-center bg-pink-600 ">
              <button className="inline-block my-6 font-bold text-white">Get started today</button>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center bg-gray-100">
            <Col md="7" className="text-center pt-10 pb-10">
              <h2 className="title">Do you want to be sure your IT infrastructure is completely secure?</h2>
              <h6 className="subtitle">
              Get detailed insight into the actual cybersecurity of your IT infrastructure and essential apps with Lazarus’s security testing as a service, along with a set of advice on how to make them as hacker-proof as possible.
              </h6>
              <h2 className="title">Cybersecurity Consulting</h2>
              <h6 className="subtitle">
              Cybersecurity consultancy assists businesses in proactively identifying security risks and holes in their IT infrastructures. We will be providing full-service information security consulting services to clients.
              </h6>
              <h2 className="title">Improve your information security by leveraging our capabilities to:</h2>
              <h6 className="subtitle">
              Examine how well your cyber-environment is secured and strong against APTs, ransomware, and other threats.
              </h6>
              <h6 className="subtitle">
              To avoid possible attacks, identify current weaknesses in your network.
              </h6>
              <h6 className="subtitle">
              Improve the performance of your data security solutions.
              </h6>
              <h6 className="subtitle">
              Detects cyberattacks on your network in real time.
              </h6>
              <h6 className="subtitle">
              Maintain the security of your important data.
              </h6>
              <br/>
              <h6 className="subtitle">
              Don't jeopardize your security or productivity. Allow access when it is required and deny it when it is not.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40 pl-30 pt-30 pr-30">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Storage</h5>
                  <h5 className="font-medium">Lazarus Drive</h5>
                  <p className="m-t-20 mb-4">
                    Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS - A peer-to-peer hypermedia protocol to publish files on the private Internet without worrying if they will be tampered with, and share them with others within the network.
                  </p>
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
                  <h5 className="font-medium">Nodes</h5>
                  <h5 className="font-medium">GATEWAY</h5>
                  <p className="m-t-20 mb-4">
                    Smart Hardware Device offering secure WiFi and all the above mentioned services. Best suited for Smart Home and Office Users who wish to have the network and data hosted locally.
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="m-t-0 pl-30 pr-30 pt-30">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">Communication</h5>
                  <p className="m-t-10 mb-4">
                    Changing the way you communicate. Stake control of your data privacy with end-to-end encryption.
                  </p>

                  <div className="round-social light">
                    <a className="link">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="link">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="link">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>

                  <h3 className="my-2">Lazarus Stream</h3>
                  <h5>Change the way you Stream</h5>
                  <p className="mt-2 mb-4">
                    Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. It provides a secure and private video streaming service using the private decentralized IPFS network. Your communication is protected from outside attacks, so with our end-to-end encryption your conversations will always be private.
                  </p>

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
                  <h5 className="font-medium">Application Security</h5>

                  <div className="round-social light my-2">
                    <a className="link">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </div>

                  <h3>Lazarus NetGuard</h3>
                  <p className="mt-2 mb-2">
                    NetGuard enables customers to preemptively protect their online activities from advanced threats in a collaborative way, with a decentralized and tamper-proof process using blockchain technology. Most current solutions rely on complex AI technology, which may sometimes return false positives and using our decentralized solution this process can be reinforced and weed out the false positives
                  </p>
                  <h3>Always on Guard</h3>
                  <p className="mt-2 mb-4">
                  Physical and network boundaries have vanished, but this should not be an impediment to your business.
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="" style={{marginTop:-80}}>
        <Container className="feature30">
          <Row>
            <Col className="text-center">
              <Card className="card-shadow bg-gray-100">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">
                      Blockchain
                    </h3>
                    <img
                      src="https://cdn.pixabay.com/photo/2017/12/31/11/57/block-chain-3052119_960_720.png"
                      className="rounded img-responsive"
                      alt="wrappixel"
                      style={{ width: 200 }}
                    />
                    <h3 className="subtitle">
                      ETHEREUM
                    </h3>
                    <p>
                      Blockchain Network is based on Ethereum private blockchain network using PoA as a Consensus Algorithm. The Smart Contracts used are for Token creation, domain/network registration, VPN management and Firewall rule management. Based on the enterprise needs a separate blockchain network can be deployed on their dedicated network to integrate the business requirements.
                      <br /><br />
                      The public network currently in use is Görli Testnet - The first proof-of-authority cross-client testnet, synching Parity Ethereum, Geth, Nethermind, Hyperledger Besu (formerly Pantheon), and EthereumJS. This testnet is a community-based project, completely open-source, naturally.
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
  )
}

export default services;
