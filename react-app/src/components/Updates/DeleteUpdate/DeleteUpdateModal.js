import DeleteUpdate from "./DeleteUpdate";
import { useState } from "react";
import { Modal } from "../../../context/Modal";

const DeleteUpdateModal = ({update, setIsLoaded}) => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <div>
          <i onClick={() => setShowModal(true)} className="fa-solid fa-trash edit-delete-button"></i>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <DeleteUpdate
              update={update}
              setShowModal={setShowModal}
              setIsLoaded={setIsLoaded}
            />
          </Modal>
        )}
      </>
    );
}

export default DeleteUpdateModal