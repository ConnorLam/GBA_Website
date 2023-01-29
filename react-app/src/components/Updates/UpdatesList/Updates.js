import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getPostThunk } from "../../../store/post";
import UpdateCard from "./UpdateCard";
import './Updates.css'


const Updates = () => {

    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const posts = useSelector(state => state.posts)
    const postsArr = Object.values(posts).reverse()

    const sessionUser = useSelector(state => state.session.user)
    // console.log(postsArr)

    useEffect(() => {
        dispatch(getPostThunk())
        .then(() => setIsLoaded(true))
    }, [dispatch])

    // console.log(postsArr)

    return isLoaded && (
        <div className="main-page">
            <div className="white">
                <div className="all-updates">
                    {postsArr.map(post => (
                        <UpdateCard key={post.id} post={post} sessionUser={sessionUser}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Updates