import React from "react";
import Col from "../Col";
import "./style.css";

function ListGroup(props) {
    return (
        <div>
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-readme-list" data-toggle="list" href="#list-readme" role="tab" aria-controls="readme">README.md Generator</a>
    {/* <a class="list-group-item list-group-item-action active" data-toggle="list" href="#list-{project.aria-controls}" role="tab" aria-controls="{project.aria-controls}">{"project.name"}</a> */}
                <a class="list-group-item list-group-item-action" id="list-portfolio-list" data-toggle="list" href="#list-portfolio" role="tab" aria-controls="portfolio">Responsive Portfolio (HTML/CSS)</a>
                <a class="list-group-item list-group-item-action" id="list-yogaPlan-list" data-toggle="list" href="#list-yogaPlan" role="tab" aria-controls="yogaPlan">Workout Tracker</a>
                <a class="list-group-item list-group-item-action" id="list-pw-list" data-toggle="list" href="#list-pw" role="tab" aria-controls="pw">Password Generator</a>
                <a class="list-group-item list-group-item-action" id="list-btProject-list" data-toggle="list" href="#list-btProject" role="tab" aria-controls="btProject">Budget Tracker (Group Project)</a>
                <a class="list-group-item list-group-item-action" id="list-novelfilms-list" data-toggle="list" href="#list-novelfilms" role="tab" aria-controls="novelfilms">NovelFilms Application Project</a>
            </div>

            <Col size="md-8 lg-8">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-readme" role="tabpanel" aria-labelledby="list-readme-list">
                        <img id="img" src="../images/screenshotREADME.gif" alt="GIF of README app use" width="100%" />
                            <p><b>README Generator</b></p>
                            <p>Deployed at: N/A - internal app</p>
                            <p>GitHub repository: <a href="https://github.com/charlinelach/readMeGenerator" target="_blank">https://github.com/charlinelach/readMeGenerator</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-portfolio" role="tabpanel" aria-labelledby="list-portfolio-list">
                        <img id="img" src="../images/portfolioScreenshot.png" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Responsive Portfolio</b></p>
                            <p>Deployed at: <a href="UPDATETHIS" target="_blank">UPDATE THIS</a></p>
                            <p>GitHub repository: <a href="https://github.com/charlinelach/portfolio" target="_blank">https://github.com/charlinelach/portfolio</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-yogaPlan" role="tabpanel" aria-labelledby="list-yogaPlan-list">
                        <img id="img" src="../images/cardio.png" alt="Cardio Screenshot" width="100%" />
                            <p><b>Workout Tracker</b></p>
                            <p>Deployed at: <a href="https://pure-earth-56296.herokuapp.com/" target="_blank">https://pure-earth-56296.herokuapp.com/</a></p>
                            <p>GitHub repository: <a href="https://github.com/charlinelach/yogaPlan" target="_blank">https://github.com/charlinelach/yogaPlan</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-pw" role="tabpanel" aria-labelledby="list-pw-list">
                        <img id="img" src="../images/pw.gif" alt="Contact UI Screenshot" width="100%" />
                            <p><b>Random Password Generator</b></p>
                            <p>Deployed at: <a href="https://charlinelach.github.io/pwGenerator/" target="_blank">https://charlinelach.github.io/pwGenerator/</a></p>
                            <p>GitHub repository: <a href="https://github.com/charlinelach/pwGenerator" target="_blank">https://github.com/charlinelach/pwGenerator</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-btProject" role="tabpanel" aria-labelledby="list-btProject-list">
                        <img id="img" src="../images/budgetGIF.gif" alt="Budget Tracker GIF" width="100%" />
                            <p><b>Budget Tracker Project</b></p>
                            <p>Deployed at: <a href="https://budget-hero.herokuapp.com/" target="_blank">https://budget-hero.herokuapp.com/</a></p>
                            <p>GitHub repository: <a href="https://github.com/ShueMoua/Budget_Tracker" target="_blank">https://github.com/ShueMoua/Budget_Tracker</a></p>
                    </div>
                    <div class="tab-pane fade" id="list-novelfilms" role="tabpanel" aria-labelledby="list-novelfilms-list">
                        <img id="img" src="../images/goosebumpsScreenshot.jpg" alt="NovelFilms Screenshot" width="100%" />
                            <p><b>NovelFilms Application Project</b></p>
                            <p>Deployed at: <a href="https://cete4.github.io/NovelFilms/" target="_blank">https://cete4.github.io/NovelFilms/</a></p>
                            <p>GitHub repository: <a href="https://github.com/Cete4/NovelFilms" target="_blank">https://github.com/Cete4/NovelFilms</a></p>
                    </div>
                </div>
            </Col>

        </div>
    );
}

export default ListGroup;
