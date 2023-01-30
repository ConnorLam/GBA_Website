import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import { createPostThunk } from "../../../store/post";
import { Modal } from "../../../context/Modal";
import './CreateUpdate.css'

const CreateUpdate = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)

    const [description, setDescription] = useState('')

    const [showModal, setShowModal] = useState(false)
    // console.log(showModal)

    const [validationErrors, setValidationErrors] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const errors = []

        if(description.length < 5 || description.length > 2000) errors.push('Description must be between 5 and 2000 characters')

        setValidationErrors(errors)
    }, [description])


    const onSubmit = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const data = await dispatch(createPostThunk({description}))

        history.push('/updates')

    }

    const onSubmitEnter = async e => {
        // e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const data = await dispatch(createPostThunk({description}))

        history.push('/updates')

    }

    // const onSubmitEnterButton = e => {
    //     if(e.keyCode === 13 && e.shiftKey === false){
    //         onSubmitEnter()
    //     }
    // }

    // const onEnterPress = (e) => {
    //   if (e.keyCode === 13 && e.shiftKey === false) {
    //     e.preventDefault();
    //     setShowModal(true)
    //   }
    // };

    // const handleClick = (e) => {
    //   e.preventDefault();
    //   setShowModal(false);
    // };


    return (
      <div className="white create-update-page">
        {/* {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="delete-modal-content white">
                <h2 className="modal-header">
                Are you sure you would like to submit this post?
                </h2>
                <div className="delete-buttons-div">
                <button className="delete-button" onClick={handleClick}>
                    Cancel
                </button>
                <button onKeyDown={onSubmitEnterButton} className="delete-button" onClick={onSubmit}>
                    Submit
                </button>
                </div>
            </div>
          </Modal>
        )} */}
        <h3 className="header">Post your updates here</h3>
        <div>
          {isSubmitted &&
            validationErrors.map((error, i) => (
              <div className="error" key={i}>
                <li>{error}</li>
              </div>
            ))}
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <textarea
              className="create-update-text-area"
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your post here"
            //   onKeyDown={onEnterPress}
            />
            <div className="counter">{description.length}/2000</div>
            {/* <input type="submit" hidden /> */}
            <div className="submit-update-div">
              <button className="submit-update" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default CreateUpdate