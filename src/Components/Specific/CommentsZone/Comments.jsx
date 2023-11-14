import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('UsuarioEjemplo'); // Simulación de usuario actual (puedes ajustarlo)

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, user: currentUser }]);
    setNewComment('');
  };

  const handleDeleteComment = (index) => {
    const commentToDelete = comments[index];
    if (commentToDelete.user === currentUser) {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    } else {
      alert("No puedes eliminar un comentario que no creaste.");
    }
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="4"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Escribe un comentario..."
        />
      </div>
      <button className="btn btn-outline-light mt-3 mb-5" onClick={handleAddComment}>
        Agregar Comentario
      </button>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="alert alert-info">
            {comment.text}
            {comment.user === currentUser && (
              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => handleDeleteComment(index)}
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;