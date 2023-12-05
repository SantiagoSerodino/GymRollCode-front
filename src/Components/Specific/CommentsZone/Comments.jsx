import React, { useState, useEffect } from 'react';

function CommentSection() {
    const [comments, setComments] = useState(() => {
        // agrega los comentarios al localstorage
        const storedComments = localStorage.getItem('comments');
        return storedComments ? JSON.parse(storedComments) : [];
    });
    const [newComment, setNewComment] = useState('');
    const [currentUser, setCurrentUser] = useState('UsuarioEjemplo');

    useEffect(() => {
        // Guardar comentarios en localStorage cuando son modificados 
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

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
            <h2 className='fw-bold text-decoration-underline text-success fs-1 pb-4'>Comentarios</h2>
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
