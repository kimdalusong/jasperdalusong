import React from 'react';

export default function About() {


    return (

        <section id="About" >
            <div className="container">
                <div className="row">
                    <h1 className="col-lg-12 aboutMe">About <span className="me-blue">Me</span></h1>
                    
                    <div className="iconDiv col-lg-3 col-sm-12">
                        <img className="icon" src="/images/dalusong.jpg" />
                    </div>

                    <div className="col-lg-9 col-sm-12">
                        <div className="about-content"> 
                            <p className="aboutjasper">I have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology. </p>
                            <p>On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.</p>
                            <p>In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting.</p>
                            <p>Below is a list of my current technical skills:</p>
                        </div>
                        <ul className="skills list-inline"> 
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer"> <img src="/icons/html.png" alt="HTML" title="HTML"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer"> <img src="/icons/css.png" alt="CSS" title="CSS"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"> <img src="/icons/javascript.png" alt="#" title="JAVASCRIPT"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank" rel="noopener noreferrer"> <img src="/icons/bootstrap.png" alt="BOOTSTRAP" title="BOOTSTRAP"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/PHP" target="_blank" rel="noopener noreferrer"> <img src="/icons/php.png" alt="#" title="PHP"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer"> <img src="/icons/node.png" alt="NODE.JS" title="NODE.JS"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank" rel="noopener noreferrer"> <img src="/icons/mongodb.png" alt="MongoDB" title="MongoDB"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Npm_(software)" target="_blank" rel="noopener noreferrer"> <img src="/icons/npm.png" alt="npm" title="NPM"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Heroku" target="_blank" rel="noopener noreferrer"> <img src="/icons/heroku.png" alt="heroku" title="HEROKU"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noopener noreferrer"> <img src="/icons/git.png" alt="Git" title="Git"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/GitHub" target="_blank" rel="noopener noreferrer"> <img src="/icons/github.png" alt="Github" title="Github"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/JQuery" target="_blank" rel="noopener noreferrer"> <img src="/icons/jquery.webp" alt="JQuery" title="JQuery"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/Adobe_Photoshop" target="_blank" rel="noopener noreferrer"> <img src="/icons/adobe.png" alt="Adobe Photoshop" title="Adobe Photoshop"/> </a></li>
                            <li className="skillsPadding"> <a href="https://en.wikipedia.org/wiki/MySQL" target="_blank" rel="noopener noreferrer"> <img src="/icons/sql.png" alt="MySQL" title="MySQL"/> </a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}