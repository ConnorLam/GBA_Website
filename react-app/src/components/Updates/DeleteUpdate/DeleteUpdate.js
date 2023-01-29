import { deletePostThunk } from "../../../store/post"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import './DeleteUpdate.css'


const DeleteUpdate = ({update}) => {


    const dispatch = useDispatch()
    const history = useHistory()

    const handleDelete = async e => {
        e.preventDefault()
        // console.log("delete post", post)

        const data = await dispatch(deletePostThunk(update.id))
        // history.push('/')
    }
    

    return (
        <div>
            <button className="delete-button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}


export default DeleteUpdate