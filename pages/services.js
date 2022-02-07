import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img5 from "../assets/images/features/feature30/feature-img.jpg";
import Link from "next/link";

const services = () => {
  return (
    <div>

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://www.swg.com/wp-content/uploads/2017/11/Hosting-SaaS-banner.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-4xl">
                  We diagnose your IT Security faults and weaknesses Before Hackers Do
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  Hence we decided to work on a secure firewall which filters the internet based on blacklisted Websites/IP/domains and only allows the users to access safe websites.
                  Our solutions benefit enterprises, startups, smart homes and individuals by giving them complete control over the internet - Its just like setting up parental controls on any app but for the entire network.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          > */}
            {/* <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg> */}
          {/* </div> */}
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fa fa-check-square"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Do you want to be sure your IT infrastructure is completely secure?</h6>
                    <p className="mt-2 text-blueGray-500">
                      Get detailed insight into the actual cybersecurity of your IT infrastructure and essential apps with Lazarus’s security testing as a service, along with a set of advice on how to make them as hacker-proof as possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fa fa-gears"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Improve your information security by leveraging our capabilities to:</h6>
                    <p className="mt-2 text-blueGray-500">
                      Examine how well your cyber-environment is secured and strong against APTs, ransomware, and other threats.</p>
                    <p>To avoid possible attacks, identify current weaknesses in your network.</p>
                    <p>Improve the performance of your data security solutions.</p>
                    <p>Detects cyberattacks on your network in real time.</p>
                    <p>Maintain the security of your important data.</p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fa fa-group"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Cybersecurity Consulting</h6>
                    <p className="mt-2 text-blueGray-500">
                      Cybersecurity consultancy assists businesses in proactively identifying security risks and holes in their IT infrastructures. We will be providing full-service information security consulting services to clients.
                    </p>
                    <p>Dont jeopardize your security or productivity. Allow access when it is required and deny it when it is not.</p>
                  </div>
                </div>
              </div>

              
            </div>

            <div className=" pt-10">
              <div className="mt-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Cybersecurity Solutions</h1>
                {/* <p className="text-lg mt-3 font-semibold">Enterprise Grade Cybersecurity Solutions for Individuals and Businesses. At Lazarus we leverage AI And Blockchain technologies For cyber defense to protect you and your enterprise from online viruses while you Work From Home.</p> */}
              </div>
              {/* <div className="mt-10 text-center">
                <h4 className="text-2xl font-bold text-gray-800">Virtual Private Networks</h4>
              </div> */}
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                EREBRUS [ANONYMOUS VPN]
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Anonymous VPN uses WireGuard® P2P VPN Solution for bypassing IP Fingerprinting to provide secure & private access to geo-restricted content. Users get to choose the VPN Connection from various countries and change IP addresses upon their requirements. This means they get access to their favorite content without sacrificing speed or bandwidth in case the content provider detects a VPN and tries to block the access. Our platform is capable of getting new anonymous VPN IP addresses on the go just by a simple form filled by the user.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg bg-blueGray-700">
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
                      <li><p className="font-semibold hover:text-blue-800">Secure online browsing</p></li>
                      <li><p className="font-semibold hover:text-blue-800">Access to Restricted Content</p></li>
                      <li><p className="font-semibold hover:text-blue-800">Network-wide protection</p></li>
                      <li><p className="font-semibold hover:text-blue-800">Block in-app advertisements</p></li>
                      <li><p className="font-semibold hover:text-blue-800">Improve network performance</p></li>
                      <li><p className="font-semibold hover:text-blue-800">Monitor statistics</p></li>
                    </ul>
                    <div className="text-center bg-pink-600 ">
                    <Link href="/pricing">
                      <button className="inline-block my-6 font-bold text-white">Get started today</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <div className="card rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                  <div className="px-8 py-9 flex justify-between items-center">
                    <h4 className="text-xl font-bold text-gray-800">DEDICATED VPN</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="px-4 text-center text-sm ">Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access along with network layer customizable firewall. Get higher bandwidth and optimized performance for enterprise software usages requiring good latency.
                    <br /><br />Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
                  <ul className="text-center py-4">
                    <li><p className="font-semibold hover:text-blue-800">All the features of ANONYMOUS VPN</p></li>
                    <li><p className="font-semibold hover:text-blue-800">
                      Dedicated Network - Secure Tunnel</p></li>
                    <li><p className="font-semibold hover:text-blue-800">Network Layer Customizable Firewall</p></li>
                    <li><p className="font-semibold hover:text-blue-800">Dedicated Bandwidth and Performance - Not Shared</p></li>
                  </ul>
                  <div className="text-center bg-pink-600 ">
                  <Link href="/pricing">
                    <button className="inline-block my-6 font-bold text-white">Get started today</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">SOTREUS [DEDICATED NETWORK]</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This service offers a dedicated IP based virtual private network to the users for connecting their enterprise or home smart devices so that they can be accessed from anywhere. It is focused on enterprise grade security level configurations and comes integrated with a Firewall in the same region as the VPN. All the configurations are logged and managed through the organization owners and admins. It supports higher bandwidth and optimized performance for enterprise software usages requiring good latency.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Secure Online Browsing
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Restricted Content
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fa fa-check"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Internal Applications
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-10" />

        {/* <section className="pt-20 pb-20">
          <div className="container mx-auto px-4"> */}
            {/* <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div> */}
            {/* <div className="flex flex-wrap pb-20">
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Storage</h5>
                    <div className="round-social light">
                    <a className="link">
                    <img src="https://lazarus.network/assets/images/Media/lazarus-drive-icon.png" className="w-10 pt-2 pl-2"></img>
                    </a>
                    </div>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Lazarus Drive
                    </p>
                    <p className="m-t-20 mb-4">
                    Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS - A peer-to-peer hypermedia protocol to publish files on the private Internet without worrying if they will be tampered with, and share them with others within the network.
                  </p>
                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Nodes</h5>
                    <div className="round-social light">
                    <a className="link">
                      <i className="fa fa-wifi"></i>
                    </a>
                    </div>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    GATEWAY
                    </p>
                    <p className="m-t-20 mb-4">
                    Smart Hardware Device offering secure WiFi and all the above mentioned services. Best suited for Smart Home and Office Users who wish to have the network and data hosted locally.
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Communication</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Changing the way you communicate. Stake control of your data privacy with end-to-end encryption.
                    </p>
                    <span className="round-social light pt-8">
                    <a className="link">
                      <img src="https://lazarus.network/assets/images/Media/stream/stream-icon.png" className="w-10 pt-2 pl-2"></img>
                    </a>
                    </span>
                    <span className="round-social light">
                    <a className="link">
                      <i className="fa fa-comments"></i>
                    </a>
                    <a className="link">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </span>

                  <h3 className="my-2">Lazarus Stream</h3>
                  <h5>Change the way you Stream</h5>
                  <p className="mt-2 mb-4">
                    Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. It provides a secure and private video streaming service using the private decentralized IPFS network. Your communication is protected from outside attacks, so with our end-to-end encryption your conversations will always be private.
                  </p>

                  <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Application Security</h5>
                    <div className="round-social light my-2">
                    <a className="link">
                      <i className="fa fa-wifi"></i>
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
                  </div>
                </div> */}
              {/* </div>
            </div>
          </div>
        </section> */}

        {/* <section className="relative block bg-blueGray-800">

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
        </section> */}

      </main>



{/* 
      <div className=" pt-10">
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Lazarus Network Services</h1>
          <p className="text-lg mt-3 font-semibold">Enterprise Grade Cybersecurity Solutions for Individuals and Businesses. At Lazarus we leverage AI And Blockchain technologies For cyber defense to protect you and your enterprise from online viruses while you Work From Home.</p>
        </div>
        <div className="mt-10 text-center">
          <h4 className="text-2xl font-bold text-gray-800">Virtual Private Networks</h4>
        </div>
      </div> */}

      {/* <div className="row row-cols-1 row-cols-md-2 g-4 md:pl-20 md:pr-20 pl-4 pr-4 pt-20">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
      </div> */}

    </div>
  )
}

export default services;
