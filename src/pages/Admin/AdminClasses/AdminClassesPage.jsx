import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ColumnComponent from '../../../Components/generals/Table/ColumnComponent';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminClassesPage = () => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    const [classesList, setClassesList] = useState([]);
    const [addClassModal, setAddClassModal] = useState(false);
    const [updateFlag, setUpdateFlag] = useState(false);
    const [ClassForm, setClassForm] = useState({
        name: '',
        date: 'Lunes',
        hour: '',
        image: '',
        _id: ''
    });
    const [modalType, setModalType] = useState('');
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {
        const petitionGet = async () => {
            try {
                const response = await axios.get(`${apiUrl}/classes`);
                const data = response.data;
                setClassesList(data);
            } catch (error) {
                console.log("No se pudo obtener la información de la API", error.message);
            }
        }

        petitionGet();
    }, [updateFlag, apiUrl]);

    const petitionPost = async () => {
        try {
            const formattedDate = { date: ClassForm.date };
            const requestData = { ...ClassForm, ...formattedDate };

            await axios.post(`${apiUrl}/classes/register`, requestData)
                .then(() => {
                    toggleModal();
                    setUpdateFlag((prev) => !prev);
                });

        } catch (error) {
            console.log("No se pudo crear la clase", error.message);
        }
    }

    const petitionPatch = async () => {
        try {
            await axios.patch(`${apiUrl}/classes/edit/${ClassForm._id}`, ClassForm)
                .then(() => {
                    setUpdateFlag((prev) => !prev);
                    toggleModal();
                })
        } catch (error) {
            console.log("No se pudo editar la clase", error.message);
        }
    }

    const petitionDelete = async () => {
        try {
            await axios.delete(`${apiUrl}/classes/${ClassForm._id}`)
                .then(() => {
                    setModalDelete(false);
                    setUpdateFlag((prev) => !prev);
                })
        } catch (error) {
            console.log("No se pudo eliminar la clase", error.message);
        }
    }

    const toggleModal = () => {
        setAddClassModal(!addClassModal);
    }

    const handleChange = (e) => {
        e.persist();
        setClassForm({
            ...ClassForm,
            [e.target.name]: e.target.value
        })
    }

    const selectClass = (Class) => {
        setModalType('actualizar')
        setClassForm({
            name: Class.name,
            date: Class.date,
            hour: Class.hour,
            image: Class.image,
            _id: Class._id
        })
    }

    return (
        <>
            <br />
            <button className="btn btn-success" onClick={() => { setClassForm({ name: '', date: 'Lunes', hour: '', image: '', _id: '' }), setModalType('crear'), toggleModal() }}>Agregar Clase</button>
            <br /><br />

            <table className='table'>
                <thead>
                    <tr>
                        <ColumnComponent item={"Nombre"} />
                        <ColumnComponent item={"Fecha"} />
                        <ColumnComponent item={"Hora"} />
                        <ColumnComponent item={"Imagen"} />
                        <ColumnComponent item={"Instructor"} />
                        <ColumnComponent item={"Acciones"} />
                    </tr>
                </thead>
                <tbody>
                    {classesList.map((Class) => {
                        return (
                            <tr key={Class._id}>
                                <td>{Class.name}</td>
                                <td>{Class.date}</td>
                                <td>{Class.hour}</td>
                                <td>
                                    {Class.image && <img src={Class.image} alt="Imagen de la clase" style={{ maxWidth: '50px', maxHeight: '50px' }} />}
                                </td>
                                <td>{`${Class.teacher ? Class.teacher.name : []} ${Class.teacher ? Class.teacher.lastName : []}`}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => { selectClass(Class), toggleModal() }}><i className="bi bi-pencil-square"></i></button>
                                    <button className='btn btn-danger' onClick={() => { selectClass(Class), setModalDelete(true) }}><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Modal isOpen={addClassModal} size='lg' centered>
                <ModalHeader style={{ display: 'block' }}>
                    <span onClick={toggleModal} style={{ float: 'right', cursor: "pointer" }}>x</span>
                </ModalHeader>

                <ModalBody>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input className='form-control' type='text' name='name' id='name' readOnly={modalType === 'actualizar'} onChange={handleChange} value={ClassForm ? ClassForm.name : ''} />
                        <br />
                        <label htmlFor="date">Fecha:</label>
                        <select className='form-control' name='date' id='date' onChange={handleChange} value={ClassForm ? ClassForm.date : ''}>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes">Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                        </select>
                        <br />
                        <label htmlFor="hour">Hora:</label>
                        <input className='form-control' type='text' name='hour' id='hour' onChange={handleChange} value={ClassForm ? ClassForm.hour : ''} />
                        <label htmlFor="image">URL de la Imagen:</label>
                        <input className='form-control' type='text' name='image' id='image' onChange={handleChange} value={ClassForm ? ClassForm.image : ''} />
                    </div>
                </ModalBody>

                <ModalFooter>
                    <button className="btn btn-danger" onClick={toggleModal}>Cancelar</button>
                    {modalType === 'crear' ?
                        <button className="btn btn-success" onClick={petitionPost}>Insertar</button> :
                        <button className="btn btn-primary" onClick={() => { petitionPatch(ClassForm) }}>Editar</button>
                    }
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalDelete} size='lg' centered>
                <ModalBody>
                    ¿Estás seguro que deseas eliminar esta clase? {ClassForm && ClassForm.name.toUpperCase()}
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={petitionDelete}>Sí</button>
                    <button className="btn btn-secondary" onClick={() => { setModalDelete(false) }}>No</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default AdminClassesPage;