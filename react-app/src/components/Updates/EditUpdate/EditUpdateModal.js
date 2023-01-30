import EditUpdate from "./EditUpdate";
import { useState } from "react";
import { Modal } from "../../../context/Modal";
import './EditUpdate.css'

const EditUpdateModal = ({post}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="white">
            <div>
                <i onClick={() => setShowModal(true)} className="fa-regular fa-pen-to-square edit-delete-button edit-button"></i>
            </div>
            {showModal &&(
                <Modal onClose={() => setShowModal(false)}>
                    <EditUpdate post={post} setShowModal={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}

export default EditUpdateModal