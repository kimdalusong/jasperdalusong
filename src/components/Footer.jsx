import React from 'react';

export default function Footer(){
    var year = new Date().getFullYear();
    
    return (
        <section id="Footer">

            <div className="footer">
            <p className="statement">This website is created from scratch using React.js</p>
                <p className="copywrite">
                   © {year} Jasper Dalusong
                </p>
            </div>
            <div class="alert alert-warning" role="alert">
                <p>Hi there, thank you for visiting my website… I’m not still done here, need more time to clean my mess…</p>
            </div>
        </section>
    );
}