import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { updatePostThunk } from "../../../store/post";
import './EditUpdate.css'

const EditUpdate = ({post, setShowModal}) => {
    console.log(post.id)
    const dispatch = useDispatch()


    const [description, setDescription] = useState(post?.description || '')
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = []

        if (description.length < 5 || description.length > 2000) errors.push("Description must be between 5 and 2000 characters");

        setValidationErrors(errors)
    }, [description])

    const onSubmit = async e => {
        e.preventDefault()
        
        setHasSubmitted(true)

        if (validationErrors.length > 0) return

        const updatedDescription = {
            description
        }

        const payload = {postId: post.id, post: updatedDescription}

        const data = await dispatch(updatePostThunk(payload))

        setShowModal(false)
    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };

    return (
        <div className="white edit-delete-modal-content">
            <h3 className="modal-header">Edit your post here</h3>
            {hasSubmitted && validationErrors.map((error, i) => (
                <div className="error" key={i}>
                    <li>{error}</li>
                </div>
            ))}
            <form onSubmit={onSubmit}>
                <div>
                    <textarea
                        required
                        type='text'
                        value={description}
                        onChange={(e) =>setDescription(e.target.value)}
                        placeholder='Edit your post here'
                    />
                    <div className="counter">{description.length}/2000</div>
                    <div className="delete-buttons-div">
                        <button className='delete-button' onClick={handleClick}>Cancel</button>
                        <button className='delete-button' type="submit">Edit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditUpdate