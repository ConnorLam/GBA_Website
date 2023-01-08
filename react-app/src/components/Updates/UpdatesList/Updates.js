import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getPostThunk } from "../../../store/post";
import UpdateCard from "./UpdateCard";



const Updates = () => {

    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const posts = useSelector(state => state.posts)
    const postsArr = Object.values(posts)

    const sessionUser = useSelector(state => state.session.user)
    // console.log(postsArr)

    useEffect(() => {
        dispatch(getPostThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div className="main-page">
            <div className="white">
                <div>
                    {postsArr.map(post => (
                        <UpdateCard key={post.id} post={post} sessionUser={sessionUser}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Updates