import React from "react";
import { Row, Col, Container} from "reactstrap";

export default function App() {
    return (
        <div>
            <div className="spacer bg-light">
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
        </div>
    );
}
