import EditUpdate from "./EditUpdate";
import { useState } from "react";
import { Modal } from "../../../context/Modal";
import './EditUpdate.css'

const EditUpdateModal = ({post}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="white">
            <button onClick={() => setShowModal(true)}>Edit Update</button>
            {showModal &&(
                <Modal onClose={() => setShowModal(false)}>
                    <EditUpdate post={post} setShowModal={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}

export default EditUpdateModal