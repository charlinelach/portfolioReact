import React from "react";
import Container from "../components/Container";
import Card from "../components/Card/Card.js";
import Row from "../components/Row";
import Col from "../components/Col";
import Header from "../components/Header/Header.js";

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <h1>About Charline Lach</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span class="border border-white"></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src="./Images/headshot.jpg" alt="Charline" class="rounded-circle align-left" width="20%" style="height:auto; float:left; margin: 1%;"/>
                                        <p class="lr-3">In 2015, I graduated with a degree in Management Information Systems and International Business, plus a German (language) minor.</p>
                                        <p>I began my career in the healthcare industry of Minnesota, and I worked on technical projects for server QA and being the solutions architect for a new application. After that, I provided aid with leading parts of projects to handle claims and processing them. I took over as scrum master when needed, I would write stories (as systems analyst), and I worked between the IT team and the business to create/architect the solution.</p>
                                        <p>I am always a fan of learning new parts of technology and how they may improve or create useful applications. <b>My learning zone of the moment: CODING! IN A BOOT CAMP!</b> This has been providing a lot of improvement with my abilities to work beside the business, developers, QA, and more.</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default About;