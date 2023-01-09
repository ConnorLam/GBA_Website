import { deletePostThunk } from "../../../store/post"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"


const DeleteUpdate = ({post}) => {

    const dispatch = useDispatch()

    const handleDelete = async e => {
        e.preventDefault()

        const data = await dispatch(deletePostThunk(post.id))
    }
    

    return (
        <div>
            <button onClick={handleDelete}>
                hi
            </button>
        </div>
    )
}


export default DeleteUpdate