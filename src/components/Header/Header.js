import React from "react";
import "./style.css";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


function Header(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Contact Me</h1>
                </Col>
                <Col>
                    <h1>Other Methods</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" class="form-control" id="exampleInputName" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputMsg">Message</label>
                            <input type="text" class="form-control" id="exampleInputMsg" placeholder="Message" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Col>
                <Col>
                    <p class="lead">Use these methods to check out my GitHub, LinkedIn, Resume, or send me an email.</p>
                    <div class="list-group">
                        <a href="https://github.com/charlinelach"
                            class="list-group-item list-group-item-action list-group-item-light"
                            target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/charlinelach/"
                            class="list-group-item list-group-item-action list-group-item-primary" target="_blank">LinkedIn</a>
                        <a href="Charline Lach Resume_bootCamp.pdf" class="list-group-item list-group-item-action list-group-item-secondary"
                            target="_blank">Resume</a>
                        <a href="mailto:notmyemail@emailaddress.com"
                            class="list-group-item list-group-item-action list-group-item-success">Email Me</a>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default Header;