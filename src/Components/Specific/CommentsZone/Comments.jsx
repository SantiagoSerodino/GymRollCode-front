import React, { useState } from 'react';

function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [comentariosVisibles, setComentariosVisibles] = useState(5);
  const [cargarMasComentarios, setCargarMasComentarios] = useState(true);

  const agregarComentario = () => {
    setComentarios([...comentarios, nuevoComentario]);
    setNuevoComentario('');
  };

  const eliminarComentario = (index) => {
    const nuevosComentarios = [...comentarios];
    nuevosComentarios.splice(index, 1);
    setComentarios(nuevosComentarios);
  };

  const cargarMas = () => {
    setComentariosVisibles(comentariosVisibles + 5);
    if (comentariosVisibles >= comentarios.length) {
      setCargarMasComentarios(false);
    }
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <ul className="list-group">
        {comentarios.slice(0, comentariosVisibles).map((comentario, index) => (
          <li key={index} className="list-group-item">
            {comentario}
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => eliminarComentario(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {cargarMasComentarios && (
        <button className="btn btn-primary mt-3" onClick={cargarMas}>
          Cargar más comentarios
        </button>
      )}

      <div className="form-group mt-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Escribe tu comentario"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />
      </div>

      <button className="btn btn-primary mt-3" onClick={agregarComentario}>
        Agregar Comentario
      </button>
    </div>
  );
}

export default Comentarios;