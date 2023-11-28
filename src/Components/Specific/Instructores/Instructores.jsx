import { useState } from 'react';
import '../Instructores/StyleInstructores.css';
import instructor4 from '../../../assets/Instructores/instructor4.jpg';
import instructor5 from '../../../assets/Instructores/instructor5.jpeg';
import instructor1 from '../../../assets/Instructores/instructor1.jpg';
import instructor3 from '../../../assets/Instructores/instructor3.webp';
import instructor2 from '../../../assets/Instructores/instructor2.jpg';

const Instructores = () => {
    const [instructorHoverStates, setInstructorHoverStates] = useState({
        mario: false,
        catherine: false,
        rocky: false,
        ronda: false,
        theRock: false,
    });

    const handleMouseEnter = (instructorName) => {
    setInstructorHoverStates((prevState) => ({
        ...prevState,
        [instructorName]: true,
    }));
    };

    const handleMouseLeave = (instructorName) => {
        setInstructorHoverStates((prevState) => ({
            ...prevState,
            [instructorName]: false,
        }));
    };

    return (
    <>
        <div className="instructoresMG container pb-5">
            <h1 className="py-4">Nuestros Instructores</h1>
            <div className="row">
                <section className="col-12 justify-content-center sectionInstrucMG">
                    <div className="imgMG">
                    <img
                        src={instructor4}
                        className="imagenn"
                        alt="..."
                        onMouseEnter={() => handleMouseEnter('mario')}
                        onMouseLeave={() => handleMouseLeave('mario')}
                    />
                    <h5 className={`card-img-overlay ${instructorHoverStates.mario ? '' : 'd-none'}`}> Mario Baracus </h5>
                    </div>

                    <div className="imgMG">
                    <img
                        src={instructor5}
                        className="imagenn"
                        alt="..."
                        onMouseEnter={() => handleMouseEnter('catherine')}
                        onMouseLeave={() => handleMouseLeave('catherine')}
                    />
                    <h5 className={`card-img-overlay ${instructorHoverStates.catherine ? '' : 'd-none'}`}>Caterine Fulop </h5>
                    </div>

                    <div className="imgMG">
                    <img
                        src={instructor1}
                        className="imagenn"
                        alt="..."
                        onMouseEnter={() => handleMouseEnter('rocky')}
                        onMouseLeave={() => handleMouseLeave('rocky')}
                    />
                    <h5 className={`card-img-overlay ${instructorHoverStates.rocky ? '' : 'd-none'}`}>Rocky Balboa </h5>
                    </div>

                    <div className="imgMG">
                    <img
                        src={instructor3}
                        className="imagenn"
                        alt="..."
                        onMouseEnter={() => handleMouseEnter('ronda')}
                        onMouseLeave={() => handleMouseLeave('ronda')}
                    />
                    <h5 className={`card-img-overlay ${instructorHoverStates.ronda ? '' : 'd-none'}`}>Ronda Rousey </h5>
                    </div>

                    <div className="imgMG">
                    <img
                        src={instructor2}
                        className="imagenn"
                        alt="..."
                        onMouseEnter={() => handleMouseEnter('theRock')}
                        onMouseLeave={() => handleMouseLeave('theRock')}
                    />
                    <h5 className={`card-img-overlay ${instructorHoverStates.theRock ? '' : 'd-none'}`}>The Rock Johnson </h5>
                    </div>
                </section>
            </div>
        </div>
    </>
    );
};

export default Instructores;
