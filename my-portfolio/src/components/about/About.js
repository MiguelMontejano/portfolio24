import React from 'react';

import profileImg from "../../imgs/profileImg.jpg"
import "./About.css";

export const About = () => {
    return (
        <div className='about-component-container'>
            <div className='flip-square'>
                <div className='flip-square-inner'>
                    <div className='profile-img'></div>
                    <div className='flip-square-back'>Hola</div>
                </div>
            </div>
            <div className='profile-info'>
                <p>
                    Soy Miguel Montejano, Ingeniero Informático especializado en el diseño de interfaces y su implementación. Mi pasión por la tecnología y el diseño son los motores que me mueven a la hora de imaginar interfaces elegantes y funcionales pero nunca dejando de lado la usabilidad para todos los usuarios.
                </p>
                <p>
                    Me considero una persona dinámica y trabajadora, que no tiene miedo de asumir responsabilidades y con facilidad para aprender cualquier tecnología. Cuento con más de dos años de experiencia trabajando con tecnologías punteras. Domino varios Frameworks de desarrollo Front-End (React, Vue...) así como los principales softwares de diseño UX/UI (con especial dominio de Figma).
                </p>
                <p>
                    Tengo interés en el diseño de frameworks de baja fidelidad hasta el desarrollo de interfaces completas y sus posteriores pruebas en campo con usuarios reales. Cuento con capacidad crítica sobre el diseño y me mantengo al tanto de las últimas tendencias de diseño, tomándome tiempo para estudiarlas y llevar a cabo trabajos en los que las implemento.
                </p>
            </div>
        </div>
    )
}
