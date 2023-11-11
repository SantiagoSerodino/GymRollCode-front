import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './AdminPage.module.css'

const AdminPage = () => {
  return (
    <> 
        <section className={styles.ImgSection}>
          <div>
            <h2 className={styles.titulo}>Administrar Usuarios</h2>
            <NavLink to="users"><img src="https://img.freepik.com/fotos-premium/foto-hombre-mujer-jovenes-entrenando-culturismo-gimnasio_763111-29981.jpg" alt="Usuarios" className={`${styles.CardImg}`} /></NavLink>
          </div>
          <div>
            <h2 className={styles.titulo}>Administrar Clases</h2>
            <NavLink to="clases"><img src="https://static.independentespanol.com/2022/06/24/14/iStock-637772706%20%281%29.jpg?width=1200" alt="Clases" width={626} height={446} className={`${styles.CardImg}`}/></NavLink>
          </div>
        </section>
    </>
  )
}

export default AdminPage