import EditUpdate from "../EditUpdate/EditUpdate";
import DeleteUpdate from "../DeleteUpdate/DeleteUpdate";

const UpdateCard = ({post, sessionUser}) => {
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
            <div>
                {sessionUser.id === post.owner.id ? <EditUpdate post={post}/> : null}
                <div>
                    {sessionUser.id === post.owner.id ? <DeleteUpdate post={post}/> : null}
                </div>
            </div>
        </div>
    )
}

export default UpdateCard