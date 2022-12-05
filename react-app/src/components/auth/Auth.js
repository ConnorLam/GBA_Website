import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import './Auth.css'

const Auth = () => {
    
    return (
        <div className="whole-ls-form">
            <div className="login">
                <LoginForm />
            </div>
            <div className="signup">
                <SignUpForm />
            </div>
        </div>

    )
}

export default Auth