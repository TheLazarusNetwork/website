import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerimg from "../../../../assets/images/landingpage/server.svg";
import { Row, Col, Container } from "reactstrap";

function carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="flex justify-center mt-10">
        <Slider {...settings} style={{width:'70%'}}>
            <div className="pl-10">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h1 style={{fontWeight:'bold',fontsize:100}}>Lazarus VPN</h1>
                        <p>Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling,
                            secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.</p>
                            <Row style={{paddingTop:15}}>
                            <Col lg="6" md="6" className="m-b-30">
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Secure online browsing</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> IP Address Protection</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Restricted Content</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Multiple Devices</h6>
                            </Col>
                        </Row>
                        <a
                        href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                        className="btn btn-primary m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-0"
                        style={{fontSize:15}}
                        >
                        Read more
                        </a>
                    </div>
                    <div>
                        <img src="https://lazarus.network/assets/images/Media/vpn-solid.png" alt="hero banner" style={{ width: 700 }} />
                    </div>
                </div>
            </div>
            <div className="pl-10">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h1 style={{fontWeight:'bold',fontsize:100}}>Lazarus Drive</h1>
                        <p>Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS.</p>
                            <Row style={{paddingTop:15}}>
                            <Col lg="6" md="6" className="m-b-30">
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Decentralized Cloud Storage</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Backups</h6>
                            </Col>
                        </Row>
                        <a
                        href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                        className="btn btn-primary m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-0"
                        style={{fontSize:15}}
                        >
                        Read more
                        </a>
                    </div>
                    <div>
                        <img src="https://lazarus.network/assets/images/Media/drive-solid.png" alt="hero banner" style={{ width: 350 }} />
                    </div>
                </div>
            </div>

            <div className="pl-10">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h1 style={{fontWeight:'bold',fontsize:100}}>Lazarus Stream</h1>
                        <p>Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN.</p>
                            <Row style={{paddingTop:15}}>
                            <Col lg="6" md="6" className="m-b-30">
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Change the way you communicate</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Audio and Video Calls</h6>
                            </Col>
                        </Row>
                        <a
                        href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                        className="btn btn-primary m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-0"
                        style={{fontSize:15}}
                        >
                        Read more
                        </a>
                    </div>
                    <div>
                        <img src="https://lazarus.network/assets/images/Media/stream-solid.png" alt="hero banner" style={{ width: 550 }} />
                    </div>
                </div>
            </div>

            <div className="pl-10">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h1 style={{fontWeight:'bold',fontsize:100}}>Lazarus Tunnel</h1>
                        <p>Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet.</p>
                        <a
                        href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                        className="btn btn-primary m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-30"
                        style={{fontSize:15}}
                        >
                        Read more
                        </a>
                    </div>
                    <div>
                        <img src="https://lazarus.network/assets/images/Media/tunnel-solid.png" alt="hero banner" style={{ width: 450 }} />
                    </div>
                </div>
            </div>

            <div className="pl-10">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h1 style={{fontWeight:'bold',fontsize:100}}>Lazarus Firewall</h1>
                        <p>Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
                            <Row style={{paddingTop:15}}>
                            <Col lg="6" md="6" className="m-b-30">
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Network-wide protection</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Block in-app advertisements</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Improve network performance</h6>
                                <h6 style={{paddingBottom:10}}><i className="fa fa-check-circle-o" aria-hidden="true" style={{color:'green'}}></i> Monitor statistics</h6>
                            </Col>
                        </Row>
                        <a
                        href="https://wrappixel.com/templates/nextkit-nextjs-free-uikit"
                        className="btn btn-primary m-r-20 pt-2 pl-3 pr-3 pb-2 btn-sm m-t-0"
                        style={{fontSize:15}}
                        >
                        Read more
                        </a>
                    </div>
                    <div>
                        <img src="https://lazarus.network/assets/images/Media/firewall-solid.png" alt="hero banner" style={{ width: 500 }} />
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    );
}

export default carousel;
