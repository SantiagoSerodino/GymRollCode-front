import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminUsersPage = ({user}) => {
    //Direccion url de la Api
    const Url="https://gym-roll.onrender.com/user/";
    //Instanciamos nuestro token del localStorage
    const token = user?.logedUser?.token;
    //Seccion donde declaramos los estados
    const [userList,setUserList] = useState ([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [editUserModal,setEditUserModal] = useState(false);
    const [userForm,setUserForm] = useState ({
        name: '',
        lastName: '',
        email:'',
        phoneNumber:'',
        contractedPlan: '',
        classes: '',                
    });
    const [updateFlag, setUpdateFlag] = useState(false);
    const [modalDelete,setModalDelete] = useState(false);

    

    //SECCION DE PETICIONES HTML


    //Función para hacer petición GET,mostrar los usuarios y mostrarlos en tiempo real
    useEffect(()=>{
        const petitionGet = async ()=> {
            try {
                //realiza la peticion GET a la base de datos
                const response = await axios.get(Url,
                    {headers:{
                        Authorization: `Bearer ${token}`
                    }})
                const data = response.data;
                //Guarda la informacion de la api en nuestro estado
                setUserList(data);
                
            } catch (error) {
                //Linea para manejar errores
                console.log("No se pudo obtener la informacion de la API",error.message);
            }
        }
        
        petitionGet();
    },[updateFlag]);

    //Funcion para hacer petición PATCH y crear una clase
    const petitionPatch= async ()=> {
        try {
            await axios.patch(Url,userForm)
            .then((response) => {
                //Si la peticion se hace correctamente ejecuta la función para cerrar el modal y cargar nuevamente la lista con los usuarios actualizada
                toggleModal();
                // Actualiza el flag para que el useEffect se ejecute
                setUpdateFlag((prev) => !prev);
            })
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo editar el Usuario", error.message);
        }
    }

    //Funcion para hacer petición DELETE y eliminar un usuario
    const petitionDelete = async () => {
        try {
            await axios.delete (Url,{ data: { _id: userForm._id } })
            .then((response) => {
                setModalDelete(false);
                setUpdateFlag((prev) => !prev);
            });            
        } catch (error) {
            console.log("No se pudo eliminar el Usuario",error.message);            
        }
    }


    //FUNCIONES AUXILIARES

    //Función para abrir y cerrar el modal
    const toggleModal = () => {
        setEditUserModal(!editUserModal);
    };

    //Función para cargar el formulario con datos ingresados
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setUserForm ({
            ...userForm,
            [event.target.name]: event.target.value
        })
    };
    
    //Función para seleccionar una clase y editarla y guarda los datos actuales en cada input
    const selectUser = (user) => {
        setUserForm({
            _id : user._id,
            name : user.name,
            lastName : user.lastName,
            email : user.email,
            phoneNumber : user.phoneNumber,
            contractedPlan: user.contractedPlan,
            classes: user.classes
        })
    }

  return (
    <>
        <br/><br/>
        <table className='table'>
            <thead>
                <tr>
                    <ColumnComponent item={"Nombre"}/>
                    <ColumnComponent item={"Apellido"}/>
                    <ColumnComponent item={"Email"}/>
                    <ColumnComponent item={"Numero de teléfono"}/>
                    <ColumnComponent item={"Plan Contratado"}/>
                    <ColumnComponent item={"Clase"}/>
                    <ColumnComponent item={"Acciones"}/>
                </tr>
            </thead>
            <tbody>
                {userList.users && userList.users.map((user) => {
                    return(
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.contractedPlan? user.contractedPlan : [] }</td>
                            <td>{`${user.classes?user.classes.name.toUpperCase():[]} ${user.classes?user.classes.date:[]} ${user.classes?user.classes.hour:[]}`}</td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{selectUser(user),toggleModal()}}><i className="bi bi-pencil-square"></i></button>
                                <button className='btn btn-danger'onClick={()=>{selectUser(user),setModalDelete(true)}}><i className="bi bi-trash3"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        <Modal isOpen={editUserModal}>
            <ModalHeader style={{display:'block'}}>
                <span onClick={toggleModal} style={{float: 'right',cursor: "pointer"}}>X</span>
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico</label>
                    <input className='form-control' type='text' name='email' id='email' readOnly value={userForm.email}/>
                    <label htmlFor="name">Nombre</label>
                    <input className='form-control' type='text' name='name' id='name' readOnly onChange={handleChange} value={userForm.name}/>
                    <label htmlFor="lastName">Apellido</label>
                    <input className='form-control' type='text' name='lastName' id='lastName' readOnly onChange={handleChange} value={userForm.lastName}/>
                    <label htmlFor="phoneNumber">Numero de Telefono</label>
                    <input className='form-control' type='number' name='lastName' id='phoneNumber' readOnly onChange={handleChange} value={userForm.phoneNumber}/>
                    <label htmlFor="contractedPlan">Plan Contratado</label>
                    <select className='form-control' name="contractedPlan" id="contractedPlan" value={userForm.contractedPlan?userForm.contractedPlan:''} onChange={handleChange}>
                        <option value="">Selecciona el tipo de plan</option>
                        <option value="MUSCULACION">MUSCULACION</option>
                        <option value="CLASES">CLASES</option>
                        <option value="FULL">FULL</option>
                    </select>
                    <label htmlFor="classes">clases</label>
                    <input className='form-control' type='text' name='classes' id='classes' onChange={handleChange} value={userForm.classes?  `${userForm.classes.name},${userForm.classes.date}:${userForm.classes.hour}`:''}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-primary"onClick={petitionPatch}>Editar</button>
                <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalDelete} size='lg' centered>
            <ModalBody>
                ¿Estas seguro que deseas eliminar este usuario? {userForm && `${userForm.name.toUpperCase()} ${userForm.lastName.toUpperCase()}`}
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={petitionDelete}>Sí</button>
                <button className="btn btn-secondary" onClick={()=>{setModalDelete(false)}}>No</button>
            </ModalFooter>
        </Modal>
        
    </>
  )
}

export default AdminUsersPage;