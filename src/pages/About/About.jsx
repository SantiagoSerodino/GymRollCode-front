import React from 'react';
import '../About/StyleAbout.css';
import imagenlogo from '../../assets/logoPagina4.png'
import imagengrupo from '../../assets/about-img/grupo.png';
import imagen1 from '../../assets/about-img/miembro11.jpg';
import imagen2 from '../../assets/about-img/miembro2.jpeg';
import imagen3 from '../../assets/about-img/miembro3.jpg';
import imagen4 from '../../assets/about-img/miembro5.jpg';
import imagen5 from '../../assets/about-img/miembro4.jpg';


const teamMembers = [
    { id: 1, name: 'Natalia Aguirre', image: imagen1 , linkedin: 'https://www.linkedin.com/', github: 'https://github.com/Naty1324'},
    { id: 2, name: 'Mauro Gutierrez', image: imagen2 , linkedin: 'https://www.linkedin.com/in/mauro-gutierrez-8775282a0/', github: 'https://github.com/MauroGutierrez53' },
    { id: 3, name: 'Franco Margagliotti', image: imagen3 , linkedin: 'https://www.linkedin.com/' ,github: 'https://github.com/FrancoMarga' },
    { id: 4, name: 'Santiago Serodino', image: imagen4 , linkedin: 'https://www.linkedin.com/' ,github: 'https://github.com/santi0dino' },
    { id: 5, name: 'Leandro Cudmani', image: imagen5 , linkedin: 'https://www.linkedin.com/' ,github: 'https://github.com/LeanCud'},
];

const About = () => {

    

    return (
    <>
    <div className=' container-fluid bg-black contenedorAboutMG '>

        {/* <!-- Parte superior con la imagen del grupo y la descripción --> */}
        <div className='container logoContainerMG'>
            {/* logo de empresa */}
            <div className='contenedorLogoMG'>
                <img src={imagenlogo} alt='Imagen del grupo' className='img-fluid logoAboutMG pt-3 pb-5'/>
            </div>
            {/* descripción de quienes somos */}
            <div className='row empresaMG pb-3'>
                <div className='col-md-6'>
                    <img src={imagengrupo} alt='Imagen del grupo' className='img-fluid imgEmpresaMG'/>
                </div>
                <div className='col-md-6 fs-5 py-3 text-white-50 '>
                    <p>En GymRoll, creemos que la actividad física es la clave para una vida saludable y feliz. Por eso, ofrecemos a nuestros clientes una experiencia de entrenamiento única, con tecnología de punta, instructores profesionales y una amplia variedad de clases personalizadas.</p>
                </div>
            </div>
        </div>
        <div className='container misionVisionMG'>
            <div className='row'>
                <div className='col-md-6 text-white-50 '>
                    <h2 className='misionMG'>Misión</h2>
                    <p>Nuestra misión es ayudar a nuestros clientes a alcanzar sus metas de fitness, brindándoles un servicio de excelencia y una experiencia de entrenamiento personalizada.</p>
                </div>
                <div className='col-md-6 text-white-50 '>
                    <h2 className='visionMG'>Visión</h2>
                    <p>Ser el gimnasio líder en la región, ofreciendo a nuestros clientes la mejor experiencia de entrenamiento posible.</p>
                </div>
            </div>
        </div>
        <div className='container equipoContainerMG pb-5'>
            <div className='row justify-content-evenly'>
                {teamMembers.map((member) => (
                <article key={member.id} className='col-md-4 articleMG'>
                    <img src={member.image} alt={member.name} className='p-3 imgPersonaMG' />
                    <div className='imgPersonajeMG px-3 pb-5 w-100 '>
                        <h2 className='textMienbroMG '>{member.name}</h2>
                        <a className='py-1 px-3 text-success' href={member.linkedin}><i className="bi bi-linkedin fs-2"></i></a>
                        <a className='py-1 px-3 text-success' href={member.github}><i className="bi bi-github fs-2"></i></a>
                    </div>
                </article>
            ))}
            </div>
        </div>
    </div>
    </>
    )
}

export default About