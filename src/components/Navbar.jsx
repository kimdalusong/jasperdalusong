// eslint-disable-next-line
import React from 'react';


export default function Navbar() {
  

    return (
        <section id="Navbar">

        <nav className="whenShrink navbar fixed-top navbar-expand-lg navbar-dark bg-blue">

            <a className="navbar-brand" href="#">{"<Jasper Dalusong />"}</a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#Cover">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact Me</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </section>

    );
}