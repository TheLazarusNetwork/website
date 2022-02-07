import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
// import Carousel from "./sections/carousel/carousel.js";
// import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";

// import PortfolioComponent from "./sections/portfoliocomponent";
// import PricingComponent from "./sections/pricingcomponent";
// import TeamComponent from "./sections/teamcomponent";
// import TestimonialComponent from "./sections/testimonialcomponent";
// import BlogComponent from "./sections/blogcomponent";
// import C2aComponent from "./sections/c2acomponent";
// import ContactComponent from "./sections/contactcomponent";
// import CallToAction from "../../components/call-to-action/CallToAction";
import Image from "next/image";

const CustomComponents = () => {
  return (
    <div>
      {/* <Banner2 /> */}

      <BannerComponent />
      {/* <Carousel /> */}

      <div className="container mx-auto b-b b-t pb-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4 lg:pt-40">
                  <Image
                    alt="..."
                    className="shadow-lg rounded-lg"
                    src="/vpn-solid.png"
                    width="500" height="500"
                    />
                  <Image
                    alt="..."
                    className="shadow-md rounded-lg my-4"
                    src="/drive-solid.png"
                    width="500" height="500"
                  />
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <Image
                    alt="..."
                    className="shadow-md rounded-lg"
                    src="/stream-solid.png"
                    width="500" height="500"
                  />
                  <Image
                    alt="..."
                    className="shadow-md rounded-lg my-4"
                    src="/tunnel-solid.png"
                    width="500" height="500"
                  />
                  <Image
                    alt="..."
                    className="shadow-md rounded-lg mt-4"
                    src="/firewall-solid.png"
                    width="500" height="500"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 lg:mt-40">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4 lg:mt-14">
                  <div className="relative flex flex-col mt-4">
                    <div className="lg:px-4 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold" style={{ color: 'green' }}>
                        Lazarus VPN
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.
                      </p>
                      <div lg="6" md="6" className="m-b-30">
                        <h6><i className="fa fa-check-circle-o"></i> Secure online browsing</h6>
                        <h6><i className="fa fa-check-circle-o"></i> IP Address Protection</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Restricted Content</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Multiple Devices</h6>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="lg:px-4 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold" style={{ color: 'blue' }}>
                        Lazarus Drive
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS
                      </p>
                      <div lg="6" md="6" className="m-b-30">
                        <h6><i className="fa fa-check-circle-o"></i> Decentralized Cloud Storage</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Backups</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-1 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold" style={{ color: 'purple' }}>Lazarus Stream</h6>
                      <p className="mb-4 text-blueGray-500">
                        Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN.
                      </p>
                      <div lg="6" md="6" className="m-b-30">
                        <h6><i className="fa fa-check-circle-o"></i> Change the way you communicate</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Audio and Video Calls</h6>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto">
                      <h6 className="text-xl mb-1 font-semibold" style={{ color: 'orange' }}>
                        Lazarus Tunnel
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-1 py-1 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold" style={{ color: 'red' }}>
                        Lazarus Firewall
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.
                      </p>
                      <div lg="6" md="6" className="m-b-30">
                        <h6><i className="fa fa-check-circle-o"></i> Network-wide protection</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Block in-app advertisements</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Improve network performance</h6>
                        <h6><i className="fa fa-check-circle-o"></i> Monitor statistics</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <FeatureComponent />
      {/* <FormBannerComponent /> */}
      {/* <PortfolioComponent /> */}
      {/* <PricingComponent /> */}
      {/* <TeamComponent /> */}
      {/* <TestimonialComponent /> */}
      {/* <BlogComponent /> */}
      {/* <C2aComponent /> */}
      {/* <ContactComponent /> */}
      {/* <CallToAction /> */}
    </div>
  );
};

export default CustomComponents;
