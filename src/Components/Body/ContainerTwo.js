import React from 'react';
import Web from "../../assets/Imgs/webdev.svg";


const ContainerTwo = ()=>{
    return(
        <div className="container-fluid ">
            <div className="row border-primary ">
                <div className="col-12 text-center my-5">
                    <h1 className="text-white">What I Do?</h1>
                    </div>
                <div className="col-md-6 border-success d-flex justify-content-center p-4 overflow-hidden">
                    <img className="web" src={Web} alt="Carousel Block" 
                        data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100"/>
                        
                </div>
                <div className="col-md-6 overflow-hidden">
                    <div className="card d-cl text-white mb-3 bg-transparent" 
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="100">
                        <div className="card-header my-4 text-center text-primary">
                            <h1>Web Development</h1>
                        </div>
                        <div className="card-body">
                            <div className="card-title p-2">
                                
                            </div>
                        </div>
                        <ul className="list-group list-group-flush text-start p-2 my-2">
                            <li className="list-group-item d-cl text-white"><h5>⚡ Building responsive websites using HTML5, CSS3, BootStrap5, Javascript &amp; ReactJS</h5></li>
                            <li className="list-group-item d-cl text-white"><h5>⚡ Creating application backend in PHP, Node</h5></li>
                            <li className="list-group-item d-cl text-white"><h5>⚡ Designing highly attractive user interfaces for mobile and web applications</h5></li>
                            <li className="list-group-item d-cl text-white"><h5>⚡ Creating the flow of application functionalities to optimize user experience</h5></li>

                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default ContainerTwo;