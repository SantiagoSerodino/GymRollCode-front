import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AdminClassesPage from '../AdminClasses/AdminClassesPage';
import AdminUsersPage from '../AdminUsers/AdminUsersPage';
import AdminPage from '../AdminPage/AdminPage';
import styles from '../AdminPage/AdminPage.module.css';
import AdminTeachersPage from '../AdminTeachers/AdminTeachers';

const AdminRouter = ({user}) => {
  return (
    <>
      <h2 className={styles.Titulo}>Bienvenido Administrador</h2>
      <Routes>
          <Route path='/users' element={<AdminUsersPage user={user}/>}/>
          <Route path='/clases' element={<AdminClassesPage/>}/>
          <Route path='/teachers' element={<AdminTeachersPage/>}/>
          <Route path='/' element={<AdminPage/>}/>
      </Routes>
    </>
  );
};

export default AdminRouter