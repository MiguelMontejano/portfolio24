import React from 'react';

import githubImg from "../../imgs/github-icon.svg";
import linkedinImg from "../../imgs/linkedin-icon.svg";
import "./home.css";

const GITHUB_URL = "https://github.com/MiguelMontejano";
const LINKEDIN_URL = "https://www.linkedin.com/in/miguel-montejano-marina/";

export const Home = () => {
  return (
    <div className='home-component-container'>
            <div className='home-center-info-title'>
                Soy Miguel Montejano
            </div>
            <div className='home-center-info-subtitle'>
                Soy un <b>Diseñador UX/UI y Desarrollador Frontend</b> ubicado en Madrid con dos años de experiencia en el diseño y desarrollo de sitios webs modernos a la par que usables.
            </div>
            <div className='home-center-separator'></div>
            <div className='home-center-social-network-container'>
                <img onClick={() => redirectFromClick(GITHUB_URL)} src={githubImg} className="github-logo" alt='github-profile-img'/>
                <img onClick={() => redirectFromClick(LINKEDIN_URL)} src={linkedinImg} className="linkedin-logo"  alt='linkedin-profile-img'/>
            </div>
    </div>
  )
}

const redirectFromClick = (url) => {
    window.open(url, "_blank");
}