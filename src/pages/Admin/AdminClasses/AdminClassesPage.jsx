import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TableComponent = () => {
    const Url="http://localhost:8000/user/";
    const clases=[
      {name: "CrossFit",date: "Martes y Jueves",hour: "18:00 a 19:00",teacher: {name:"Julio",lastName: "Lagorda"},users: [{name: "Braian",lastName: "Mena"},{name: "Sol",lastName: "Toshiba"}]},
      {name: "Pilates",date: "Lunes y Miercoles","hour": "16:30 a 18:00",teacher: {"name": "Patricio","lastName": "Estrella"},"users": []},
      {name: "Zumba",date: "Lunes y Miercoles",hour: "18:30 a 20:00",teacher: {name:"Juan Martin",lastName: "Chaile"},"users": [{name: "Ismael",lastName: "Pacheco"}]},
      {name: "Entrenamiento Funcional",date: "Viernes",hour: "17:00 a 18:00",users: [],teacher: {name: "Pablito",lastName: "Loquito"}}
    ]
    const [clasesList,setClasesList] = useState (clases);
    const [addClassModal,setAddClassModal] = useState (false);
    
    // useEffect(()=> {
    //     const fetchData = async () => {
    //         try{
    //             const response = await axios.get(Url)
    //             // const data = response.data;
    //             console.log(response);
    //         } catch (error){
    //             console.log("Error al obtener los datos de la API",error);
    //         }
    //     };
    //     fetchData();
    // } ,[]);


    const toggleModal = () => {
       setAddClassModal(!addClassModal)
    }
  

  return (
    <>
        <br/>
        <button className="btn btn-success" onClick={toggleModal}>Agregar Clase</button>
        <br/><br/>
        <table className='table'>
            <thead>
                <tr>
                    <ColumnComponent item={"Nombre"}/>
                    <ColumnComponent item={"Fecha"}/>
                    <ColumnComponent item={"Hora"}/>
                    <ColumnComponent item={"Profesor"}/>
                    <ColumnComponent item={"Usuarios"}/>
                    <ColumnComponent item={"Acciones"}/>
                </tr>
            </thead>
            <tbody>
                {clasesList.map((clases) => {
                    return(
                    <tr>
                        <td>{clases.name}</td>
                        <td>{clases.date}</td>
                        <td>{clases.hour}</td>
                        <td>{`${clases.teacher.name} ${clases.teacher.lastName}`}</td>
                        <td>{clases.users.map((users)=>{return(`${users.name} ${users.lastName},`)})}</td>
                        <td>
                            <button className='btn btn-primary'><i class="bi bi-pencil-square"></i></button>
                            <button className='btn btn-danger'><i class="bi bi-trash3"></i></button>

                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>

        <Modal isOpen={addClassModal} size='lg' >
            <ModalHeader style={{display:'block'}}>
                <span onClick={toggleModal} style={{float: 'right',cursor: "pointer"}}>x</span>
            </ModalHeader>

            <ModalBody>
                <div className="form-grup">
                    <label htmlFor="name">Nombre:</label>
                    <input className='form-control' type='text' name='name' id='name'/>
                    <br/>
                    <label htmlFor="date">Fecha:</label>
                    <input className='form-control' type='text' name='date' id='date'/>
                    <br/>
                    <label htmlFor="hour">Hora:</label>
                    <input className='form-control' type='text' name='hour' id='hour'/>
                </div>
            </ModalBody>

            <ModalFooter>
                <button className="btn btn-success">Insertar</button>
                <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>
    </>
  )
}

export default TableComponent;