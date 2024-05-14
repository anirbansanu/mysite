import React from 'react';
import ContainerOne from '../Components/Body/ContainerOne';
import ContainerTwo from '../Components/Body/ContainerTwo';
import Resume from '../Components/Body/ResumeContainer';
import ContainerThree from '../Components/Body/ContainerThree';


function Home() {
  return (
    <>
      <ContainerOne />
      <ContainerTwo />
      <Resume title="Project" />
      <ContainerThree title="Project" />
    </>
  );
}
export default Home;
