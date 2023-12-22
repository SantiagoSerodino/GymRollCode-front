import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './AdminPage.module.css'

const AdminPage = () => {
  return (
    <div className={styles.body}>
      <section className={styles.ImgSection}>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-4'>
            <h2 className={styles.Titulo}>Administrar Usuarios</h2>
            <NavLink to="users"><img src="https://img.freepik.com/fotos-premium/foto-hombre-mujer-jovenes-entrenando-culturismo-gimnasio_763111-29981.jpg" alt="Usuarios" className={`${styles.CardImg}`} /></NavLink>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <h2 className={styles.Titulo}>Administrar Clases</h2>
            <NavLink to="clases"><img src="https://static.independentespanol.com/2022/06/24/14/iStock-637772706%20%281%29.jpg?width=1200" alt="Clases" height={10} className={`${styles.CardImg}`} /></NavLink>
          </div>
          <div className='col-12 col-md-12 col-lg-4'>
            <h2 className={styles.Titulo}>Administrar Profesores</h2>
            <NavLink to="teachers"><img src="https://media.istockphoto.com/id/675179390/es/foto/entrenador-muscular-en-portapapeles.jpg?s=612x612&w=0&k=20&c=eFDuNzHQJfNzOpZGxCPi8pM8bC18EeIm6lgVlmjPuhw=" alt="Clases" className={`${styles.CardImg}`} /></NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminPage