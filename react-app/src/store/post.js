const GET_POST = 'post/get-all-posts'
const GET_USER_POST = 'post/get-users-posts'
const GET_POST_ID = 'post/get-post-by-id'

const CREATE_POST = 'post/create-post'
const UPDATE_POST = 'post/update-post'
const DELETE_POST = 'post/delete-post'

const getPostAction = payload => {
    return {
        type: GET_POST,
        payload
    }
}

const getUserPostAction = payload => {
    return {
        type: GET_USER_POST,
        payload
    }
}

const getPostIdAction = payload => {
    return {
        type: GET_POST_ID, 
        payload
    }
}

const createPostAction = payload => {
    return {
        type: CREATE_POST, 
        payload
    }
}

const updatePostAction = payload => {
    return {
        type: UPDATE_POST, 
        payload
    }
}

const deletePostAction = payload => {
    return {
        type: DELETE_POST,
        payload
    }
}

export const getPostThunk = () => async dispatch => {
    const res = await fetch('/api/posts')
    const data = await res.json()

    if(res.ok){
        await dispatch(getPostAction(data))
    }

    return data
}

export const getUsersPostThunk = () => async dispatch => {
    const res = await fetch('/api/posts/current')
    const data = await res.json()

    if (res.ok){
        await dispatch(getUserPostAction(data))
    }

    return data
}

export const getPostIdThunk = (postId) => async dispatch => {
    const res = await fetch(`/api/posts/${postId}`)
    const data = await res.json()

    if(res.ok){
        await dispatch(getPostIdAction(data))
    }

    return data
}

export const createPostThunk = (payload) => async dispatch => {
    const res = await fetch('/api/posts',
        {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(payload)
        }
    )

    const data = await res.json()

    if (res.ok){
        await dispatch(createPostAction(data))
    }
    return data
}

export const updatePostThunk = (payload) => async dispatch => {
    const res = await fetch(`/api/posts/${payload.postId}`,
        {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(payload.post)
        }
    )

    const data = await res.json()

    if(res.ok){
        await dispatch(updatePostAction(data))
    }

    return data
}

export const deletePostThunk = (postId) => async dispatch => {
    const res = await fetch(`/api/posts/${postId}`, 
        {
            method: 'DELETE',  
        }
    )

    const data = await res.json()

    if(res.ok){
        await dispatch(deletePostAction(postId))
    }

    return data
}

const initialState = {}

const postsReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type){
        case(GET_POST): {
            action.payload.posts.forEach(post => {
                newState[post.id] = {...newState[post.id], ...post}
            })
            return newState
        }
        case(GET_USER_POST): {
            action.payload.posts.forEach(post => {
                newState[post.id] = {...newState[post.id], ...post}
            })
            return newState
        }
        case(GET_POST_ID): {
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case(CREATE_POST): {
            newState[action.payload.id] = action.payload
            return newState
        }
        case(UPDATE_POST): {
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case(DELETE_POST): {
            delete newState[action.payload]
            return newState
        }
        default: {
            return state
        }
    }
}

export default postsReducer