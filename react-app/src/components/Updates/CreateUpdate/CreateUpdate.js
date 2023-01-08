import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import { createPostThunk } from "../../../store/post";

const CreateUpdate = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state.session.user)

    const [description, setDescription] = useState('')

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

    return (
        <div>
            <div>
                {isSubmitted && validationErrors.map((error, i) => (
                    <div key={i}>{error}</div>
                ))}
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <textarea 
                        required
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Write your post here'
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateUpdate