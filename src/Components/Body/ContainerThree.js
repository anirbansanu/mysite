import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AllProjects } from './AllProjects';
import { ProgrammingTab } from './ProgrammingTab';
import WebTab from './WebTab';
import { ScriptingTab } from './ScriptingTab';
import { ProjectSvg } from './StrokeItem';

const ContainerThree = () => {
    return (
        <div className="card bg-transparent text-center overflow-hidden" data-aos="fade-up">
            <div className="card-title">
                <div className="h2">
                    <ProjectSvg />
                </div>
            </div>
            <div className="card-header">
                <nav>
                    <ul className="nav nav-tabs card-header-tabs justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link border-0 nav-warning" to="/my-web">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-0 nav-warning" to="/my-web/programmingtab">Program</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-0 nav-warning" to="/my-web/scripting">Scripting</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-0 nav-warning" to="/my-web/webtab">Web</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="card-body">
                <h5 className="card-title p-3"></h5>
                <Routes>
                    <Route path="/" element={<AllProjects />} />
                    <Route path="/my-web" element={<AllProjects />} />
                    <Route path="/my-web/allprojects" element={<AllProjects />} />
                    <Route path="/my-web/programmingtab" element={<ProgrammingTab />} />
                    <Route path="/my-web/scripting" element={<ScriptingTab />} />
                    <Route path="/my-web/webtab" element={<WebTab />} />
                </Routes>
            </div>
        </div>
    );
}

export default ContainerThree;
