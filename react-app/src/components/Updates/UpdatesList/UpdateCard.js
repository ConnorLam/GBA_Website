import EditUpdate from "../EditUpdate/EditUpdate";
import DeleteUpdate from "../DeleteUpdate/DeleteUpdate";
import DeleteUpdateModal from "../DeleteUpdate/DeleteUpdateModal";
import EditUpdateModal from "../EditUpdate/EditUpdateModal";
import './Updates.css'

const UpdateCard = ({post, sessionUser}) => {
    // console.log(post)

    const newDate = (post) => {
        // console.log(Date(post.timeCreate))
        let newDateObj = new Date(post.timeCreate)
        // console.log(newDateObj)
        return newDateObj.toLocaleDateString();
    }

    return (
        <div className="each-update">
            <div className="first-row-update">
                <div className="name">
                    {post.owner.firstName} {post.owner.lastName}
                </div>
                <div className="date">
                    {newDate(post)}
                </div>
            </div>
            <div className="update-details">
                {post.description}
            </div>
            <div>
                {sessionUser?.id === post.owner.id ? <EditUpdateModal post={post}/> : null}
                <div>
                    {sessionUser?.id === post.owner.id ? <DeleteUpdateModal update={post}/> : null}
                </div>
            </div>
        </div>
    )
}

export default UpdateCard