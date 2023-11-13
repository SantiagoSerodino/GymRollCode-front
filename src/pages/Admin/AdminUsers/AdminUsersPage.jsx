import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TableComponent = () => {
    //Direccion url de la Api
    const Url="https://gym-roll.onrender.com/user/";
    //Seccion donde declaramos los estados
    const [userList,setUserList] = useState ([]);
    
    useEffect(()=>{
        const petitionGet = async ()=> {
            try {
                //realiza la peticion GET a la base de datos
                const response = await axios.get(Url);
                const data = response.data;
                //Guarda la informacion de la api en nuestro estado
                setUserList(data);
                
            } catch (error) {
                //Linea para manejar errores
                console.log("No se pudo obtener la informacion de la API",error.message);
            }
        }
        
        petitionGet();
    },[]);

  return (
    <>
        <br/><br/>
        <table className='table'>
            <thead>
                <tr>
                    <ColumnComponent item={"Nombre"}/>
                    <ColumnComponent item={"Apellido"}/>
                    <ColumnComponent item={"Email"}/>
                    <ColumnComponent item={"Plan Contratado"}/>
                    <ColumnComponent item={"Clase"}/>
                    <ColumnComponent item={"Acciones"}/>
                </tr>
            </thead>
            <tbody>
                {userList.map((user) => {
                    return(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.contractedPlan}</td>
                        <td>{user.classes}</td>
                        <td>
                            <button className='btn btn-danger'><i class="bi bi-trash3"></i></button>
                            <button className='btn btn-danger'><i className="bi bi-trash3"></i></button>

                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>

        
    </>
  )
}

export default TableComponent;