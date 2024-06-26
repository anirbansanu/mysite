import React from 'react';

//import gif2 from "../../assets/Imgs/1.jpg";

import WebDevPerson from "../../assets/Imgs/banner.svg";
import NamasteSvg from './NamasteSvg';
const ContainerOne = ()=>{
    
    return(
        <div className="container-fluid " id="pjs">
            
            <div className="row border-danger" >
                <div className="col-md-6 border-success p-5 text-start overflow-hidden">
                    <div className="container-fluid p-4 text-white " data-aos="fade-right">
                        <h1 className="display-1 text-warning">
                            <NamasteSvg width={400} height={100} fill="gold" />
                        </h1>
                        <h1 className="display-1"><strong>I'm</strong></h1>
                        <h1 className=" display-4 p-1">
                            <span className="badge border border-success p-2">
                                Anirban <span className="badge bg-success">Mukherjee</span>
                            </span>
                            </h1>
                        <div className="card bg-transparent text-white" >
                            <div className="card-text">
                                <h3>I am a full-stack web <span className="badge bg-t-success border border-success">Developer <span className="badge bg-success">NOUN</span></span></h3>
                                <h3>Able to handle both <span className="badge bg-t-pink border border-danger">front and back-end <span className="badge bg-danger">VERB</span></span></h3>
                                <h3>components of <span className="badge bg-t-warning border border-warning">Web Design <span className="badge bg-warning text-dark">SKILL</span></span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center border-dark p-4 overflow-hidden">
                    <img className="banner1" src={WebDevPerson} alt="Carousel Block" data-aos="fade-left" />
                </div>
                
            </div>
        </div>
    )
}

export default ContainerOne;