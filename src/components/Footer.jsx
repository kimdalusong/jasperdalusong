import React from 'react';

export default function Footer(){
    var year = new Date().getFullYear();
    
    return (
        <section id="Footer">
            <div className="footer">
            <p className="statement">This website is created from scratch using React.js</p>
                <p className="copywrite">
                   © {year} Jasper Dausong
                </p>
            </div>


        </section>
    );
}