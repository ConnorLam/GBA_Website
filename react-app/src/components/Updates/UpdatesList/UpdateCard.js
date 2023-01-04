

const UpdateCard = ({post}) => {
    // console.log(post)

    const newDate = (post) => {
        // console.log(Date(post.timeCreate))
        let newDateObj = new Date(post.timeCreate)
        // console.log(newDateObj)
        return newDateObj.toLocaleDateString();
    }

    return (
        <div>
            <div>
                {newDate(post)}
            </div>
            <div>
                {post.owner.firstName} {post.owner.lastName}
            </div>
            <div>
                {post.description}
            </div>
        </div>
    )
}

export default UpdateCard