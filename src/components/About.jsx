import React from 'react';

export default function About() {


    return (

        <section id="About" >
            <div className="container">
                <div className="row">
                    <h1 className="col-lg-12 aboutMe">About <span className="me-blue">Me</span></h1>
                    
                    <div className="iconDiv col-lg-3 col-md-4 col-sm-12">
                        <img className="icon" src="/images/dalusong.jpg" />
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="about-content"> 
                            <p>I have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology. </p>
                            <p>On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.</p>
                            <p>In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.</p>
                            <p>Below is a list of my current technical skills:</p>
                        </div>
                        <ul className="skills list-inline"> 
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/css.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/javascript.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/bootstrap.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/html.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/php.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/node.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/mongodb.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/npm.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/heroku.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/git.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/github.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/jquery.webp" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/adobe.png" alt="#" title="#"/> </a></li>
                            <li className="skillsPadding"> <a href="google.com" target="_blank"> <img src="/icons/sql.png" alt="#" title="#"/> </a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}