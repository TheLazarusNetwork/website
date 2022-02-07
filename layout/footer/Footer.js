import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="footer4 spacer pb-4 pt-4 bg-gray-200">
      <Container>
        <Row style={{paddingLeft:80, paddingRight:80}}>
          <Col lg="3" md="6" className="m-b-0">
            <img src="https://lazarus.network/assets/images/logo.png" alt="wrapkit" style={{ width: 200, paddingBottom: 10 }} />
            <h5 className="m-t-10 mb-2 font-bold">About Lazarus Network</h5>
            <h6>
              Safe Internet & CyberSecurity For All - Providing Cyber Defense solution to Individuals & Enterprise.</h6>
          </Col>
          
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :
              <Link href="#">
                <a className="link">connect@lazarus.network</a>
              </Link>
              <br />
              Site :
              <Link href="https://lazarus.network/">
                <a className="link">lazarus.network</a>
              </Link>
            </p>
            <h5 className="m-t-20 m-b-10">Phone</h5>
            <p>
              Office : +91 895 1415 895
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Useful Links</h5>
            <Link href="/about"><p className="cursor-pointer">About</p></Link>
            <Link href="/contact"><p className="cursor-pointer">Contact</p></Link>
            <Link href="/services"><p className="cursor-pointer">Services</p></Link>
            <Link href="/pricing"><p className="cursor-pointer">Pricing</p></Link>
            <Link href="https://app.lazarus.network/#/auth"><p className="cursor-pointer">Dashboard</p></Link>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Address</h5>
            <p>Sector 8, Dwarka, New Delhi, India 110077</p>
            <br />
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://www.facebook.com/Lazarus.Network">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="https://twitter.com/lazarusnetwork">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="https://discord.com/invite/S6g4ctv">
                <a className="link">
                  <i className="fa fa-discord"><FaDiscord /></i>
                </a>
              </Link>
              <Link href="https://github.com/TheLazarusNetwork">
                <a className="link">
                  <i className="fa fa-github"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/lazarusnetwork/">
                <a className="link">
                  <i className="fa fa-linkedin"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/lazarusnetwork/">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
              <Link href="https://web.telegram.org/k/">
                <a className="link">
                  <i className="fa fa-telegram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar text-center">
          <Row>
            <Col md="12">
              <div className="font-14 b-t">
                <div className="m-t-10 m-b-10 copyright">
                  {/* All Rights Reserved by{" "} */}
                  <Link href="https://www.wrappixel.com">
                    <a className="link">© Copyright {year} Lazarus Network</a>
                  </Link>
                </div>
                {/* <div className="links ml-auto m-t-10 m-b-10 pr-4">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
