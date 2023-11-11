import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TableComponent = () => {
    
    const users=[
        {email: "user2@gmail.com",name: "Paola",lastName: "Argento",contractedPlan: "full"},
        {email: "user1@gmail.com",name: "Mirtha",lastName: "Legrand",contractedPlan: "full",classes: "Pilates"},
        {email: "user3@gmail.com",name: "Candela",lastName: "Ylamoto",contractedPlan: "full",classes: "Aerobox"},
        {email: "user4@gmail.com",name: "Tia",lastName: "Paola",contractedPlan: "full",classes: "Zumba"},
        {email: "user5@gmail.com",name: "Tarro",lastName: "Bicicleta",contractedPlan: "full",classes:"Zumba"}
    ]
    const [usersList,setUsersList] = useState (users);

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
                {usersList.map((user) => {
                    return(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.contractedPlan}</td>
                        <td>{user.classes}</td>
                        <td>
                            <button className='btn btn-primary'><i class="bi bi-pencil-square"></i></button>
                            <button className='btn btn-danger'><i class="bi bi-trash3"></i></button>

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