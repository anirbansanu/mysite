import React, { useEffect, useState } from 'react';
import { ProjectCardItem } from './ProjectCardItem';

import getAllData from '../../services/ProjectData';


const WebTab = (props) => {
    const [webProjects, setWebProjects] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const projects = await getAllData();
          const webProjectsFiltered = projects.filter(project =>
            project.type.includes('web')
          );
          setWebProjects(webProjectsFiltered);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="row justify-content-center">
        {webProjects.map((project, index) => (
          <div className="col-md-6 col-lg-4 p-3" key={index}>
            <ProjectCardItem
              imgUrl={project.imgPath}
              tittle={project.tittle}
              badges={project.badges}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
    );
  };
  
export default WebTab;