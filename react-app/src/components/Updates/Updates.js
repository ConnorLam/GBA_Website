import { useSelector } from "react-redux"
import { getPostThunk } from "../../store/post"



const Updates = () => {

    const state = useSelector(state => state)
    console.log(state)

    return (
        <div className="main-page">
            <div className="white">
                hi
            </div>
        </div>
    )
}

export default Updates