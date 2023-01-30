import { deletePostThunk } from "../../../store/post"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import './DeleteUpdate.css'


const DeleteUpdate = ({update, setShowModal}) => {


    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async e => {
        e.preventDefault()
        // console.log("delete post", post)

        const data = await dispatch(deletePostThunk(update.id))
        // history.push('/')
    }

    const handleClick = (e) => {
      e.preventDefault();
      setShowModal(false);
    };
    

    return (
        <div className="white edit-delete-modal-content">
            <h3 className="modal-header">
                Are you sure you would like to delete this post?
            </h3>
            <div className="delete-buttons-div">
                <button className="delete-button" onClick={handleClick}>Cancel</button>
                <button className="delete-button" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}


export default DeleteUpdate