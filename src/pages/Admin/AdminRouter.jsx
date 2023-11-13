import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminClassesPage from './AdminClasses/AdminClassesPage';
import AdminUsersPage from './AdminUsers/AdminUsersPage';
import AdminPage from './AdminPage';
import styles from './AdminPage.module.css';

const AdminRouter = () => {
  return (
    <>
        <h2 className={styles.titulo}>Bienvenido Administrador</h2>
        <Routes>
            <Route path='/users' element={<AdminUsersPage/>}/>
            <Route path='/clases' element={<AdminClassesPage/>}/>
            <Route path='/' element={<AdminPage/>}/>
        </Routes>
    </>
  );
};

export default AdminRouter