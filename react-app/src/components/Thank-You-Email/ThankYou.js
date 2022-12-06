import { NavLink } from "react-router-dom"
import './ThankYou.css'


const ThankYou = () => {
    return (
        <div className="main-page">
            <div className="white email-success">
                Your email has been sent! Go back to main page&nbsp;<span><NavLink className='navlink-blue' activeClassName="lol" to={'/'}>here.</NavLink></span>
            </div>
        </div>
    )
}

export default ThankYou