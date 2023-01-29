import DeleteUpdate from "./DeleteUpdate";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteUpdateModal = ({update, setIsLoaded}) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete Update</button>
            {showModal &&(
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteUpdate update={update} setShowModal={setShowModal} setIsLoaded={setIsLoaded}/>
                </Modal>
            )}
        </>
    )
}

export default DeleteUpdateModal