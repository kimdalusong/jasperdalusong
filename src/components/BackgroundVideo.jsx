import React from 'react';
import Typist from 'react-typist';

const BackgroundVideo = () => {
    
    const videoSource = "./videos/video.mp4"

    return (
<>
        <div className="videoContainer">
            <video autoPlay="autoplay" loop="loop" muted="muted" className="BgVideo">
                <source src={videoSource} type="video/mp4" />
            </video>
        </div>


        <div className="Content">
                <div className="myCover jumbotron">

                <div className="displaTitle">
                    <h1 className="webDev">
                        <Typist delay={100}>
                            <Typist.Delay ms={2000}/>
                            {"Hello! "}
                            <Typist.Delay ms={1000}/>
                            {"I'm Jasper "}
                        </Typist>
                    </h1>
                </div>
                <p className="caption">
                    <Typist>
                        <Typist.Delay ms={5000}/>
                        {"a Web Developer with a passion for learning "}
                    </Typist>

                </p>

            </div>
        </div>
</>
    );
}

export default BackgroundVideo;