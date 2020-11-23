import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* whatdo with that link below */}
            <a class="navbar-brand" href="https://charlinelach.github.io/responsivePortfolio/">Charline Lach</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href=".html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="proMaterials.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;