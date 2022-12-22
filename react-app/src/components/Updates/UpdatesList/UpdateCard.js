

const UpdateCard = ({post}) => {
    console.log(post)
    return (
        <div>
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