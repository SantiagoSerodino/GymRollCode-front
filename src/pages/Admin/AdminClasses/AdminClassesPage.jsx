import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminClassesPage = () => {
    //Direccion url de la Api
    const Url="https://gym-roll.onrender.com/classes/";
    //Seccion donde declaramos nuestros estados
    const [classesList,setClassesList] = useState ([]);
    const [addClassModal,setAddClassModal] = useState (false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [ClassForm,setClassForm]= useState({
        name:'',
        date:'',
        hour:'',
    })
    const [modalType,setModalType] = useState('');
    const [modalDelete,setModalDelete] = useState(false);

    //SECCION DE PETICIONES HTML

    //Función para hacer petición GET,mostrar los usuarios y mostrarlos en tiempo real
    useEffect(()=>{
        const petitionGet = async ()=> {
            try {
                //realiza la peticion GET a la base de datos
                const response = await axios.get(Url);
                const data = response.data;
                //Guarda la informacion de la api en nuestro estado
                setClassesList(data);
                
            } catch (error) {
                //Linea para manejar errores
                console.log("No se pudo obtener la informacion de la API",error.message);
            }
        }
        
        petitionGet();
    },[updateFlag]);
    
    //Funcion para hacer petición POST y crear una clase
    const petitionPost = async () => {
        try {
            
            await axios.post(`${Url}/register`,ClassForm)
            .then(response =>{
                //Si la peticion se hace correctamente ejecuta la función para cerrar el modal y cargar nuevamente la lista con las clases
                toggleModal();
                // Actualiza el flag para que el useEffect se ejecute
                setUpdateFlag((prev) => !prev); 
            })
            
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo crear la clase",error.message);
        }
    }

    //Función para hacer petición PATCH y editar una clase
    const petitionPatch = async () => {
        try{
            await axios.patch(`${Url}edit`,ClassForm)
            .then((response) =>{
                toggleModal();
                setUpdateFlag((prev) => !prev);
            })
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo editar la clase",error.message);
        }
    }

    //Funcion para hacer peticion DELETE y eliminar una clase
    const petitionDelete = async () => {
        try{
            await axios.delete(Url,{ data: { name: ClassForm.name } })
            .then((response) => {
                setModalDelete(false);
                setUpdateFlag((prev) => !prev);
            })
        }catch(error){
            console.log("No se pudo eliminar la clase",error.message);
        }

    }


    //FUNCIONES AUXILIARES

    //Función para abrir y cerrar el modal
    const toggleModal = () => {
       setAddClassModal(!addClassModal)
    }
    //Función para cargar el formulario con datos ingresados
    const handleChange=(e)=>{
        e.persist();
        setClassForm ({
            ...ClassForm,
            [e.target.name]: e.target.value
        })
    }
    
    //Función para seleccionar una clase y editarla y guarda los datos actuales en cada input
    const selectClass = (Class)=> {
        setModalType('actualizar')
        setClassForm({
            name : Class.name,
            date: Class.date,
            hour: Class.hour
        })
    }
    
  

  return (
    <>
    
        {/* Boton para agregar clases */}
        <br/>
        <button className="btn btn-success" onClick={()=>{setClassForm(null),setModalType('crear'),toggleModal()}}>Agregar Clase</button>
        <br/><br/>
        {/* Tabla de clases */}
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
                {classesList.map((Class) => {
                    return(
                    <tr key={Class._id}>
                        <td>{Class.name}</td>
                        <td>{Class.date}</td>
                        <td>{Class.hour}</td>
                        <td>{`${Class.teacher?Class.teacher.name:[]} ${Class.teacher?Class.teacher.lastName:[]}`}</td>
                        <td>{Class.users.map((users)=>{return(`${users.name} ${users.lastName},`)})}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>{selectClass(Class),toggleModal()}}><i className="bi bi-pencil-square"></i></button>
                            <button className='btn btn-danger'onClick={()=>{selectClass(Class),setModalDelete(true)}}><i className="bi bi-trash3"></i></button>

                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        
        {/* Modal para crear y editar una clase */}
        <Modal isOpen={addClassModal} size='lg' centered >
            <ModalHeader style={{display:'block'}}>
                <span onClick={toggleModal} style={{float: 'right',cursor: "pointer"}}>x</span>
            </ModalHeader>

            <ModalBody>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input className='form-control' type='text' name='name' id='name' readOnly={modalType=='actualizar'} onChange={handleChange} value={ClassForm?ClassForm.name : '' }/>
                    <br/>
                    <label htmlFor="date">Fecha:</label>
                    <select className='form-control' name='date' id='date' onChange={handleChange} value={ClassForm? ClassForm.date : ''}>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                    <br/>
                    <label htmlFor="hour">Hora:</label>
                    <input className='form-control' type='text' name='hour' id='hour' onChange={handleChange}value={ClassForm? ClassForm.hour: ''}/>
                </div>
            </ModalBody>

            <ModalFooter>
                {modalType=='crear'?
                <button className="btn btn-success" onClick={petitionPost}>Insertar</button> :
                <button className="btn btn-primary" onClick={()=>{petitionPatch(ClassForm)}}>Editar</button>
                }
                <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>

        {/* Modal para confirmacion de eliminar clase */}
        <Modal isOpen={modalDelete} size='lg' centered>
            <ModalBody>
                ¿Estas seguro que deseas eliminar esta clase? {ClassForm && ClassForm.name.toUpperCase()}
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={petitionDelete}>Sí</button>
                <button className="btn btn-secondary" onClick={()=>{setModalDelete(false)}}>No</button>
            </ModalFooter>
        </Modal>
    </>
  )
}

export default AdminClassesPage;