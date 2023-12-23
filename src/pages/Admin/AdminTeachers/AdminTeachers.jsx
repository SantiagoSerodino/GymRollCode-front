import  { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminTeachersPage = () => {
    //Direccion url de la Api
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    //Seccion donde declaramos nuestros estados
    const [teachersList,setTeachersList] = useState ([]);
    const [addTeacherModal,setAddTeacherModal] = useState (false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [teachersForm,setTeachersForm]= useState({
        id: '',
        user: '',
        password: '',
        name: '',
        lastName: '',
        idClasses: '',
    })
    const [modalType,setModalType] = useState('');
    const [modalDelete,setModalDelete] = useState(false);

    //SECCION DE PETICIONES HTML

    //Función para hacer petición GET,mostrar los usuarios y mostrarlos en tiempo real
    useEffect(()=>{
        const petitionGet = async ()=> {
            try {
                //realiza la peticion GET a la base de datos
                const response = await axios.get(`${apiUrl}/teachers/`);
                const data = response.data;
                //Guarda la informacion de la api en nuestro estado
                setTeachersList(data);
                
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
            
            await axios.post(`${apiUrl}/teachers/register`,teachersForm)
            .then(() =>{
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
            await axios.patch(`${apiUrl}/teachers/edit/${teachersForm.id}`,teachersForm)
            .then(() =>{
                toggleModal();
                setUpdateFlag((prev) => !prev);
            })
        } catch (error) {
            //Linea para manejar errores
            console.log("No se pudo editar la clase",error.message);
        }
    }

    //Funcion para hacer peticion DELETE y eliminar una clase
    const petitionDelete = async (id) => {
        try{
            await axios.delete(`${apiUrl}/teachers/delete/${id}`)
            .then(() => {
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
       setAddTeacherModal(!addTeacherModal)
    }
    //Función para cargar el formulario con datos ingresados
    const handleChange=(e)=>{
        e.persist();
        setTeachersForm ({
            ...teachersForm,
            [e.target.name]: e.target.value
        })
        console.log(teachersForm);
    }
    
    //Función para seleccionar una clase y editarla y guarda los datos actuales en cada input
    const selectTeacher = (teacher)=> {
        setModalType('actualizar')
        setTeachersForm({
            id:teacher._id,
            user : teacher.user,
            password: teacher.password,
            name: teacher.name,
            lastName: teacher.lastName,
            idClases: teacher.Clases
        })
    }
    
  

  return (
    <>
        {/* Boton para agregar Profesor */}
        <br/>
        <button className="btn btn-success" onClick={()=>{setTeachersForm(null),setModalType('crear'),toggleModal()}}>Agregar Clase</button>
        <br/><br/>
        {/* Tabla de profesores */}
        <table className='table'>
            <thead>
                <tr>
                    <ColumnComponent item={"Usuario"}/>
                    <ColumnComponent item={"Nombre"}/>
                    <ColumnComponent item={"Apellido"}/>
                    <ColumnComponent item={"Clase"}/>
                    <ColumnComponent item={"Acciones"}/>
                </tr>
            </thead>
            <tbody>
                {teachersList.map((teacher) => {
                    return(
                    <tr key={teacher._id}>
                        <td>{teacher.user}</td>
                        <td>{teacher.name}</td>
                        <td>{teacher.lastName}</td>
                        <td>{`${ teacher.classes? teacher.classes.map((classes)=>{return `  ${classes.name}: ${classes.date} (${classes.hour})`}) : [] } `}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=>{selectTeacher(teacher),toggleModal()}}><i className="bi bi-pencil-square"></i></button>
                            <button className='btn btn-danger'onClick={()=>{selectTeacher(teacher),setModalDelete(true)}}><i className="bi bi-trash3"></i></button>

                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        
        {/* Modal para crear y editar un profesor */}
        <Modal isOpen={addTeacherModal} size='lg' centered >
            <ModalHeader style={{display:'block'}}>
                <span onClick={toggleModal} style={{float: 'right',cursor: "pointer"}}>x</span>
            </ModalHeader>

            <ModalBody>
                <div className="form-group">
                    <label htmlFor="name">Usuario:</label>
                    <input className='form-control' type='text' name='user' id='user' onChange={handleChange} value={teachersForm? teachersForm.user : '' }/>
                    <br/>
                    <label htmlFor="name">contraseña:</label>
                    <input className='form-control' type='password' name='password' id='password' onChange={handleChange} value={teachersForm?teachersForm.password : '' }/>
                    <br/>
                    <label htmlFor="date">Nombre:</label>
                    <input className='form-control' type='text' name='name' id='name' onChange={handleChange} value={teachersForm?teachersForm.name : '' }/>
                    <br/>
                    <label htmlFor="hour">Apellido:</label>
                    <input className='form-control' type='text' name='lastName' id='lastName' onChange={handleChange}value={teachersForm? teachersForm.lastName: ''}/>
                    <br/>
                    <label htmlFor="hour">Clase:</label>
                    <input className='form-control' type='text' name='classes' id='classes' onChange={handleChange}value={teachersForm? teachersForm.idClasses: ''}/>
                </div>
            </ModalBody>

            <ModalFooter>
                {modalType=='crear'?
                <button className="btn btn-success" onClick={petitionPost}>Insertar</button> :
                <button className="btn btn-primary" onClick={()=>{petitionPatch(teachersForm)}}>Editar</button>
                }
                <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>

        {/* Modal para confirmacion de eliminar profesor */}
        <Modal isOpen={modalDelete} size='lg' centered>
            <ModalBody>
                ¿Estas seguro que deseas eliminar este profesor?
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-danger" onClick={()=>{petitionDelete(teachersForm.id)}}>Sí</button>
                <button className="btn btn-secondary" onClick={()=>{setModalDelete(false)}}>No</button>
            </ModalFooter>
        </Modal>
    </>
  )
}

export default AdminTeachersPage;