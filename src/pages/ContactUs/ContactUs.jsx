import React from 'react'
import { NavLink } from 'react-router-dom'
import LiComponent from '../../Components/Specific/ContacUs/LiComponent/LiComponent'
import styles from './ContactUs.module.css'

const ContactUs = () => {
    return (
        <>
            <section className={`${styles.section} container-fluid`}>
                <div className={styles.divMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.423666958226!2d-65.207167!3d-26.8365833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1699564455557!5m2!1ses-419!2sar" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.iframe}></iframe>
                </div>
                <div className={`${styles.divInput}`}>
                    <form>
                        <ul className={styles.ul}>
                            <p>Correo Electrónico</p>
                            <LiComponent Type={"email"} Name={"contactEmail"} id={"contactEmail"} NameInput={"Correo Electronico"}/>
                            <p>Número de telefono</p>
                            <LiComponent Type={"number"} Name={"contactPhone"} id={"contactPhone"} NameInput={"Número de Telefono"} />
                            <p>Comentarios</p>
                            <textarea className={styles.coments} name="contactComents" id="contactComents" cols="50" rows="7" placeholder="Ingrese los comentarios"></textarea>
                            <div className="buttonContainer">
                                <NavLink to='/error' className={styles.navLink}>
                                    <button className={styles.submitButton}>Enviar</button>
                                </NavLink>
                            </div>
                        </ul>
                    </form>
                </div>


            </section>


        </>
    )
}

export default ContactUs